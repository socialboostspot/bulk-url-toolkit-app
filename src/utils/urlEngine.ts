import {
  CleanOptions,
  DomainExtractOptions,
  NormalizeOptions,
  SortOrder,
  TrackingParamOptions,
  UrlAnalysis,
} from '../types';

/**
 * Standard list of tracking query parameters to safely strip
 */
export const DEFAULT_TRACKING_PARAMS = new Set([
  // Google Analytics / Urchin
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_id',
  'utm_source_platform',
  'utm_creative_format',
  'utm_marketing_tactic',
  // Google Ads / Click IDs
  'gclid',
  'gbraid',
  'wbraid',
  'dclid',
  // Meta / Facebook
  'fbclid',
  'fbc',
  'fbp',
  // Microsoft Bing Ads
  'msclkid',
  // Twitter / X
  'twclid',
  // TikTok
  'ttclid',
  // Yandex
  'yclid',
  // Mailchimp
  'mc_cid',
  'mc_eid',
  // HubSpot
  '_hsenc',
  '_hsmi',
  'hsctatracking',
  // Instagram
  'igshid',
  // Vero
  'vero_id',
  'vero_conv',
  // Matomo
  'pk_campaign',
  'pk_kwd',
  'pk_source',
  'pk_medium',
  'pk_content',
]);

/**
 * Parses raw text input into an array of string URLs.
 * Caps at maximum safe limit (e.g. 10,000, recommended 5,000).
 */
export function parseRawUrls(text: string, maxLimit = 10000): string[] {
  if (!text) return [];
  const lines = text.split(/\r?\n/);
  const result: string[] = [];
  for (const line of lines) {
    if (result.length >= maxLimit) break;
    result.push(line);
  }
  return result;
}

/**
 * Checks if a string has a valid URL syntax according to standard URL specification.
 * Strictly requires a valid absolute HTTP or HTTPS URL.
 */
export function isValidUrl(urlStr: string): boolean {
  if (!urlStr || typeof urlStr !== 'string') return false;
  const trimmed = urlStr.trim();
  if (!trimmed) return false;

  // Must start with http:// or https:// (case-insensitive)
  if (!/^https?:\/\//i.test(trimmed)) {
    return false;
  }

  // Must not contain unencoded whitespace
  if (/\s/.test(trimmed)) {
    return false;
  }

  try {
    const url = new URL(trimmed);
    return (
      (url.protocol === 'http:' || url.protocol === 'https:') &&
      Boolean(url.hostname)
    );
  } catch {
    return false;
  }
}

/**
 * Checks if a string is a valid absolute HTTP or HTTPS URL.
 */
export function isValidAbsoluteHttpUrl(urlStr: string): boolean {
  return isValidUrl(urlStr);
}

/**
 * Extracts hostname safely from a URL string
 */
export function extractHostname(urlStr: string): string | null {
  const trimmed = urlStr.trim();
  if (!trimmed) return null;
  try {
    if (!/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(trimmed)) {
      const u = new URL(`http://${trimmed}`);
      return u.hostname.toLowerCase();
    }
    const u = new URL(trimmed);
    return u.hostname.toLowerCase();
  } catch {
    return null;
  }
}

/**
 * Analyzes an array of URL strings and computes comprehensive real statistics
 */
export function analyzeUrls(rawUrls: string[]): UrlAnalysis {
  let valid = 0;
  let invalid = 0;
  const seenUrls = new Set<string>();
  let duplicateCount = 0;
  const domainCounts: Record<string, number> = {};
  const validList: string[] = [];
  const invalidList: { url: string; reason: string; lineNumber: number }[] = [];

  rawUrls.forEach((raw, idx) => {
    const trimmed = raw.trim();
    if (!trimmed) return; // skip empty lines for valid/invalid count

    if (seenUrls.has(trimmed)) {
      duplicateCount++;
    } else {
      seenUrls.add(trimmed);
    }

    if (isValidUrl(trimmed)) {
      valid++;
      validList.push(trimmed);
      const host = extractHostname(trimmed);
      if (host) {
        domainCounts[host] = (domainCounts[host] || 0) + 1;
      }
    } else {
      invalid++;
      let reason = 'Invalid absolute HTTP/HTTPS URL';
      if (!/^https?:\/\//i.test(trimmed)) {
        reason = 'Invalid absolute HTTP/HTTPS URL';
      } else if (trimmed.includes(' ')) {
        reason = 'Invalid absolute HTTP/HTTPS URL (contains unencoded whitespace)';
      } else if (!trimmed.includes('.')) {
        reason = 'Invalid absolute HTTP/HTTPS URL (missing domain or TLD)';
      }
      invalidList.push({
        url: raw,
        reason,
        lineNumber: idx + 1,
      });
    }
  });

  return {
    total: rawUrls.filter((u) => u.trim().length > 0).length,
    valid,
    invalid,
    duplicates: duplicateCount,
    uniqueDomains: Object.keys(domainCounts).length,
    domainCounts,
    validList,
    invalidList,
    duplicateCount,
  };
}

/**
 * 1. Clean URLs
 * Cleans leading/trailing whitespace, blank lines, and obvious formatting anomalies.
 */
export function cleanUrls(
  urls: string[],
  options: CleanOptions = {
    trimWhitespace: true,
    removeBlankLines: true,
    fixMalformedSpaces: true,
    stripTrailingPunctuation: true,
  }
): { cleaned: string[]; removedCount: number } {
  const result: string[] = [];
  let originalNonEmptyCount = 0;

  for (const raw of urls) {
    if (raw.trim().length > 0) {
      originalNonEmptyCount++;
    }
    let line = raw;
    if (options.trimWhitespace) {
      // Remove zero-width spaces, BOM, and standard whitespace
      line = line.replace(/[\u200B-\u200D\uFEFF]/g, '').trim();
    }

    if (options.removeBlankLines && !line) {
      continue;
    }

    if (line) {
      if (options.stripTrailingPunctuation) {
        // Strip trailing accidental punctuation from copy-pasting (e.g. 'https://example.com.,' -> 'https://example.com')
        line = line.replace(/[,;]+$/, '');
        // Only strip trailing period if not part of a domain
        if (line.endsWith('.') && !/\.[a-zA-Z]{2,}\.$/.test(line)) {
          line = line.slice(0, -1);
        }
      }

      if (options.fixMalformedSpaces && line.includes(' ')) {
        // Encode unescaped spaces in paths or queries
        const protocolMatch = line.match(/^([a-zA-Z][a-zA-Z0-9+.-]*:\/\/)(.*)$/);
        if (protocolMatch) {
          const scheme = protocolMatch[1];
          const rest = protocolMatch[2];
          line = scheme + rest.replace(/\s+/g, '%20');
        } else {
          line = line.replace(/\s+/g, '%20');
        }
      }

      // Fix duplicate slashes in path (e.g., https://example.com//page -> https://example.com/page)
      line = line.replace(/([^:]\/)\/+/g, '$1');
    }

    result.push(line);
  }

  const finalNonEmpty = result.filter((u) => u.trim().length > 0).length;
  const removedCount = Math.max(0, originalNonEmptyCount - finalNonEmpty);

  return { cleaned: result, removedCount };
}

/**
 * 2. Remove Duplicates
 * Removes exact duplicate URLs preserving the original order.
 */
export function removeDuplicates(
  urls: string[],
  caseSensitive = false
): { uniqueUrls: string[]; duplicatesRemoved: number } {
  const seen = new Set<string>();
  const uniqueUrls: string[] = [];
  let duplicatesRemoved = 0;

  for (const raw of urls) {
    const trimmed = raw.trim();
    if (!trimmed) {
      continue; // Skip blank lines in dedup output
    }
    const key = caseSensitive ? trimmed : trimmed.toLowerCase();
    if (seen.has(key)) {
      duplicatesRemoved++;
    } else {
      seen.add(key);
      uniqueUrls.push(trimmed);
    }
  }

  return { uniqueUrls, duplicatesRemoved };
}

/**
 * 3. Remove Tracking Parameters
 * Removes:
 * - Every query parameter beginning with "utm_" (case-insensitive)
 * - Common tracking parameters including: gclid, fbclid, msclkid (and other click/affiliate IDs)
 * - Custom specified parameters
 * Strictly preserves all functional query parameters (id, page, color, search, etc.) and original URL structure.
 */
export function removeTrackingParams(
  urls: string[],
  options: Partial<TrackingParamOptions> = {}
): { processed: string[]; modifiedCount: number } {
  const customParams = new Set((options.customParams || []).map((p) => p.trim().toLowerCase()));
  const removeUtm = options.removeUtm ?? true;
  const removeClickIds = options.removeClickIds ?? true;
  const processed: string[] = [];
  let modifiedCount = 0;

  for (const raw of urls) {
    const trimmed = raw.trim();
    if (!trimmed) {
      processed.push('');
      continue;
    }

    // Separate fragment (#) if present
    let baseAndQuery = trimmed;
    let fragment = '';
    const hashIdx = trimmed.indexOf('#');
    if (hashIdx !== -1) {
      baseAndQuery = trimmed.slice(0, hashIdx);
      fragment = trimmed.slice(hashIdx);
    }

    // Check if URL has a query string
    const qIdx = baseAndQuery.indexOf('?');
    if (qIdx === -1) {
      // No query parameters
      processed.push(trimmed);
      continue;
    }

    const base = baseAndQuery.slice(0, qIdx);
    const queryString = baseAndQuery.slice(qIdx + 1);

    if (!queryString) {
      // Bare trailing question mark e.g. "https://example.com/page?"
      const cleaned = base + fragment;
      if (cleaned !== trimmed) {
        modifiedCount++;
      }
      processed.push(cleaned);
      continue;
    }

    // Split query string into individual key-value pairs (handling & and &amp;)
    const rawPairs = queryString.split(/&(?:amp;)?/i);
    const keptPairs: string[] = [];
    let wasModified = false;

    for (const pair of rawPairs) {
      if (!pair) continue; // skip empty parts e.g. consecutive &&

      const eqIdx = pair.indexOf('=');
      const rawKey = eqIdx === -1 ? pair : pair.slice(0, eqIdx);
      let key = rawKey.trim();
      try {
        key = decodeURIComponent(key);
      } catch {
        // Fallback to raw key if decoding fails
      }
      const lowerKey = key.toLowerCase();

      const isUtm = removeUtm && lowerKey.startsWith('utm_');
      const isDefaultTracking = removeClickIds && DEFAULT_TRACKING_PARAMS.has(lowerKey);
      const isCustom = customParams.has(lowerKey);

      if (isUtm || isDefaultTracking || isCustom) {
        wasModified = true;
      } else {
        keptPairs.push(pair);
      }
    }

    let cleaned = base;
    if (keptPairs.length > 0) {
      cleaned += '?' + keptPairs.join('&');
    }
    cleaned += fragment;

    const actuallyChanged = cleaned !== trimmed;
    if (actuallyChanged || wasModified) {
      modifiedCount++;
    }
    processed.push(cleaned);
  }

  return { processed, modifiedCount };
}

/**
 * 4. Normalize URLs
 * Safe normalization:
 * - Lowercase hostname
 * - Remove default ports (:80, :443)
 * - Safe path resolution
 * - Strictly retains HTTP protocol unless user explicitly enables forceHttps!
 */
export function normalizeUrls(
  urls: string[],
  options: NormalizeOptions = {
    lowercaseHostname: true,
    removeDefaultPorts: true,
    removeTrailingSlash: false,
    sortQueryParams: false,
    forceHttps: false, // Default is strictly FALSE as mandated
    decodeUrlSegments: false,
  }
): { normalized: string[]; modifiedCount: number } {
  const normalized: string[] = [];
  let modifiedCount = 0;

  for (const raw of urls) {
    const trimmed = raw.trim();
    if (!trimmed) {
      normalized.push('');
      continue;
    }

    // Rule: If an input is not a valid absolute HTTP or HTTPS URL, do not normalize or modify it in any way.
    // Return the original input unchanged and keep it classified as invalid.
    if (!isValidAbsoluteHttpUrl(trimmed)) {
      normalized.push(raw);
      continue;
    }

    try {
      const parsed = new URL(trimmed);

      let currentProtocol = parsed.protocol;
      if (options.forceHttps && currentProtocol === 'http:') {
        currentProtocol = 'https:';
        parsed.protocol = 'https:';
      }

      if (options.lowercaseHostname) {
        parsed.hostname = parsed.hostname.toLowerCase();
      }

      if (options.removeDefaultPorts) {
        if (
          (parsed.protocol === 'http:' && parsed.port === '80') ||
          (parsed.protocol === 'https:' && parsed.port === '443')
        ) {
          parsed.port = '';
        }
      }

      if (options.sortQueryParams && parsed.search) {
        parsed.searchParams.sort();
      }

      let res = parsed.toString();

      // Trailing slash management on path if requested
      if (options.removeTrailingSlash && parsed.pathname !== '/' && res.endsWith('/')) {
        res = res.slice(0, -1);
      }

      if (res !== trimmed) {
        modifiedCount++;
      }
      normalized.push(res);
    } catch {
      // If parsing fails, preserve original input unchanged
      normalized.push(raw);
    }
  }

  return { normalized, modifiedCount };
}

/**
 * 5. Extract Domains
 * Extracts hostnames / domains from a list of URLs.
 * Rules:
 * - Extract domains ONLY from valid absolute HTTP or HTTPS URLs.
 * - Invalid inputs must never appear in domain extraction results.
 * - Deduplicates domains and strips www when configured.
 */
export function extractDomains(
  urls: string[],
  options: Partial<DomainExtractOptions> = {}
): { domains: string[]; count: number } {
  const stripWww = options.stripWww ?? true;
  const uniqueOnly = options.uniqueOnly ?? true;
  const rootDomainOnly = options.rootDomainOnly ?? false;
  const includeProtocol = options.includeProtocol ?? false;

  const results: string[] = [];
  const seen = new Set<string>();

  for (const raw of urls) {
    const trimmed = raw.trim();
    if (!trimmed) continue;

    // Extract domains ONLY from valid absolute HTTP or HTTPS URLs
    if (!isValidAbsoluteHttpUrl(trimmed)) {
      continue;
    }

    const host = extractHostname(trimmed);
    if (!host) continue;

    let domain = host;
    if (stripWww && domain.startsWith('www.')) {
      domain = domain.slice(4);
    }

    if (rootDomainOnly) {
      // Extract root domain (e.g., sub.example.co.uk or sub.example.com -> example.com)
      const parts = domain.split('.');
      if (parts.length > 2) {
        // Simple heuristic for common second-level TLDs like .co.uk, .com.au
        const secondLevelTlds = new Set(['co.uk', 'gov.uk', 'com.au', 'net.au', 'co.jp', 'com.br', 'co.nz']);
        const lastTwo = parts.slice(-2).join('.');
        if (secondLevelTlds.has(lastTwo) && parts.length >= 3) {
          domain = parts.slice(-3).join('.');
        } else {
          domain = parts.slice(-2).join('.');
        }
      }
    }

    if (includeProtocol) {
      const isHttps = /^https:\/\//i.test(trimmed);
      domain = `${isHttps ? 'https://' : 'http://'}${domain}`;
    }

    if (uniqueOnly) {
      if (!seen.has(domain)) {
        seen.add(domain);
        results.push(domain);
      }
    } else {
      results.push(domain);
    }
  }

  return { domains: results, count: results.length };
}

/**
 * 6. Find & Separate Invalid URLs
 */
export function validateUrls(urls: string[]): {
  valid: string[];
  invalid: { url: string; reason: string; index: number; lineNumber: number }[];
} {
  const valid: string[] = [];
  const invalid: { url: string; reason: string; index: number; lineNumber: number }[] = [];

  urls.forEach((raw, index) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    if (isValidUrl(trimmed)) {
      valid.push(trimmed);
    } else {
      let reason = 'Invalid absolute HTTP/HTTPS URL';
      if (!/^https?:\/\//i.test(trimmed)) {
        reason = 'Invalid absolute HTTP/HTTPS URL';
      } else if (trimmed.includes(' ')) {
        reason = 'Invalid absolute HTTP/HTTPS URL (contains unencoded whitespace)';
      } else if (!trimmed.includes('.')) {
        reason = 'Invalid absolute HTTP/HTTPS URL (missing domain or TLD)';
      } else {
        try {
          new URL(trimmed);
        } catch {
          reason = 'Invalid absolute HTTP/HTTPS URL';
        }
      }
      invalid.push({ url: raw, reason, index, lineNumber: index + 1 });
    }
  });

  return { valid, invalid };
}

/**
 * 7. Sort URLs
 */
export function sortUrls(urls: string[], order: SortOrder): string[] {
  const list = [...urls];
  if (order === 'none') return list;

  return list.sort((a, b) => {
    if (order === 'asc') {
      return a.localeCompare(b, undefined, { sensitivity: 'base' });
    }
    if (order === 'desc') {
      return b.localeCompare(a, undefined, { sensitivity: 'base' });
    }
    if (order === 'length') {
      return a.length - b.length || a.localeCompare(b);
    }
    if (order === 'domain' || order === 'domain-desc') {
      const hostA = extractHostname(a) || a;
      const hostB = extractHostname(b) || b;
      const cmp = hostA.localeCompare(hostB, undefined, { sensitivity: 'base' });
      if (cmp !== 0) return order === 'domain' ? cmp : -cmp;
      return order === 'domain' ? a.localeCompare(b) : b.localeCompare(a);
    }
    return 0;
  });
}

/**
 * Generate CSV formatted string
 */
export function generateCsv(urls: string[]): string {
  const rows: string[] = ['"URL","Domain","Status"'];
  for (const raw of urls) {
    const trimmed = raw.trim();
    if (!trimmed) continue;
    const domain = extractHostname(trimmed) || '';
    const status = isValidUrl(trimmed) ? 'Valid' : 'Invalid';
    const escapedUrl = trimmed.replace(/"/g, '""');
    rows.push(`"${escapedUrl}","${domain}","${status}"`);
  }
  return rows.join('\r\n');
}

/**
 * Safe browser file download
 */
export function downloadFile(content: string, filename: string, mimeType: string): void {
  const blob = new Blob([content], { type: `${mimeType};charset=utf-8;` });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
