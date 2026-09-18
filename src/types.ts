export interface UrlAnalysis {
  total: number;
  valid: number;
  invalid: number;
  duplicates: number;
  uniqueDomains: number;
  domainCounts: Record<string, number>;
  validList: string[];
  invalidList: { url: string; reason: string; lineNumber: number }[];
  duplicateCount: number;
}

export type SortOrder = 'none' | 'asc' | 'desc' | 'domain' | 'domain-desc' | 'length';

export interface CleanOptions {
  trimWhitespace: boolean;
  removeBlankLines: boolean;
  fixMalformedSpaces: boolean;
  stripTrailingPunctuation: boolean;
}

export interface NormalizeOptions {
  lowercaseHostname: boolean;
  removeDefaultPorts: boolean;
  removeTrailingSlash: boolean;
  sortQueryParams: boolean;
  forceHttps: boolean; // default false as strictly required by prompt
  decodeUrlSegments: boolean;
}

export interface TrackingParamOptions {
  removeUtm: boolean;
  removeClickIds: boolean; // gclid, fbclid, msclkid, ttclid, etc.
  removeAffiliateTracking: boolean; // mc_cid, _hsenc, etc.
  customParams: string[];
}

export interface DomainExtractOptions {
  stripWww: boolean;
  uniqueOnly: boolean;
  rootDomainOnly: boolean;
  includeProtocol: boolean;
}

export interface HistoryItem {
  urls: string[];
  actionName: string;
  timestamp: number;
}

export interface ToolPageConfig {
  id: string;
  path: string;
  name: string;
  shortTitle: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  howToSteps: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  defaultAction?: 'clean' | 'dedup' | 'utm' | 'normalize' | 'domain' | 'validate' | 'opener';
  relatedToolIds: string[];
}
