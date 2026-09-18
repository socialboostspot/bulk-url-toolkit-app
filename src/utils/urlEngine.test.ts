import {
  cleanUrls,
  removeDuplicates,
  removeTrackingParams,
  normalizeUrls,
  extractDomains,
  validateUrls,
  sortUrls,
  isValidUrl,
} from './urlEngine';

export interface TestResult {
  name: string;
  category: 'cleaning' | 'duplicates' | 'tracking' | 'normalization' | 'domains' | 'validation' | 'sorting';
  passed: boolean;
  message?: string;
  expected?: unknown;
  actual?: unknown;
}

export function runUrlEngineTests(): TestResult[] {
  const results: TestResult[] = [];

  function assert(
    name: string,
    category: TestResult['category'],
    condition: boolean,
    expected?: unknown,
    actual?: unknown,
    message?: string
  ) {
    results.push({
      name,
      category,
      passed: Boolean(condition),
      expected,
      actual,
      message: condition ? undefined : message || 'Assertion failed',
    });
  }

  // 1. URL Cleaning Tests
  try {
    const dirtyUrls = [
      '   https://example.com/page   ',
      '',
      '   ',
      'https://example.com/with space in path',
      'https://example.com/double//slash//path',
      'https://example.com/trailing-period.,',
    ];
    const { cleaned, removedCount } = cleanUrls(dirtyUrls, {
      trimWhitespace: true,
      removeBlankLines: true,
      fixMalformedSpaces: true,
      stripTrailingPunctuation: true,
    });

    assert(
      'Removes blank lines and whitespace',
      'cleaning',
      cleaned.length === 4 && removedCount === 0,
      '4 cleaned URLs without blanks',
      cleaned.length
    );

    assert(
      'Encodes unescaped spaces',
      'cleaning',
      cleaned[1] === 'https://example.com/with%20space%20in%20path',
      'https://example.com/with%20space%20in%20path',
      cleaned[1]
    );

    assert(
      'Fixes duplicate path slashes safely',
      'cleaning',
      cleaned[2] === 'https://example.com/double/slash/path',
      'https://example.com/double/slash/path',
      cleaned[2]
    );

    assert(
      'Strips accidental trailing punctuation',
      'cleaning',
      cleaned[3] === 'https://example.com/trailing-period',
      'https://example.com/trailing-period',
      cleaned[3]
    );
  } catch (err) {
    assert('URL Cleaning execution', 'cleaning', false, null, null, String(err));
  }

  // 2. Duplicate Removal Tests
  try {
    const listWithDupes = [
      'https://google.com',
      'https://github.com',
      'https://google.com',
      'https://GOOGLE.COM',
      'https://github.com/react',
    ];

    const caseSensitiveResult = removeDuplicates(listWithDupes, true);
    assert(
      'Exact case-sensitive duplicate removal',
      'duplicates',
      caseSensitiveResult.uniqueUrls.length === 4 && caseSensitiveResult.duplicatesRemoved === 1,
      4,
      caseSensitiveResult.uniqueUrls.length
    );

    const caseInsensitiveResult = removeDuplicates(listWithDupes, false);
    assert(
      'Case-insensitive duplicate removal',
      'duplicates',
      caseInsensitiveResult.uniqueUrls.length === 3 && caseInsensitiveResult.duplicatesRemoved === 2,
      3,
      caseInsensitiveResult.uniqueUrls.length
    );
  } catch (err) {
    assert('Duplicate removal execution', 'duplicates', false, null, null, String(err));
  }

  // 3. Tracking Parameter Removal Tests
  try {
    const trackingUrls = [
      'https://store.example.com/item?id=992&utm_source=newsletter&utm_medium=email&utm_campaign=spring_sale',
      'https://example.com/?gclid=ABC123456&fbclid=XYZ789&msclkid=DEF456',
      'https://example.com/search?q=laptops&page=2&sort=price_asc',
      'https://example.com/landing?utm_term=keyword&keep_this_param=essential',
    ];

    const { processed, modifiedCount } = removeTrackingParams(trackingUrls);

    assert(
      'Preserves functional parameters while stripping UTM',
      'tracking',
      processed[0] === 'https://store.example.com/item?id=992',
      'https://store.example.com/item?id=992',
      processed[0]
    );

    assert(
      'Removes all click IDs (gclid, fbclid, msclkid) and trailing question mark',
      'tracking',
      processed[1] === 'https://example.com/',
      'https://example.com/',
      processed[1]
    );

    assert(
      'Does not alter clean URLs with non-tracking params',
      'tracking',
      processed[2] === trackingUrls[2],
      trackingUrls[2],
      processed[2]
    );

    assert(
      'Strips utm_term but strictly preserves keep_this_param',
      'tracking',
      processed[3] === 'https://example.com/landing?keep_this_param=essential',
      'https://example.com/landing?keep_this_param=essential',
      processed[3]
    );

    assert('Accurate modified tracking count', 'tracking', modifiedCount === 3, 3, modifiedCount);

    // Exact user test specification:
    // Example 1: https://example.com/page?utm_source=google&utm_campaign=test&id=123 -> https://example.com/page?id=123
    // Example 2: https://example.com/product?id=456&fbclid=ABC123 -> https://example.com/product?id=456
    // Example 3: https://shop.example.com/product?color=red&utm_medium=cpc -> https://shop.example.com/product?color=red
    const userTestExamples = [
      'https://example.com/page?utm_source=google&utm_campaign=test&id=123',
      'https://example.com/product?id=456&fbclid=ABC123',
      'https://shop.example.com/product?color=red&utm_medium=cpc',
    ];
    const userResult = removeTrackingParams(userTestExamples);

    assert(
      'Example 1: strips utm_source and utm_campaign while preserving id=123',
      'tracking',
      userResult.processed[0] === 'https://example.com/page?id=123',
      'https://example.com/page?id=123',
      userResult.processed[0]
    );

    assert(
      'Example 2: strips fbclid while preserving id=456',
      'tracking',
      userResult.processed[1] === 'https://example.com/product?id=456',
      'https://example.com/product?id=456',
      userResult.processed[1]
    );

    assert(
      'Example 3: strips utm_medium while preserving color=red',
      'tracking',
      userResult.processed[2] === 'https://shop.example.com/product?color=red',
      'https://shop.example.com/product?color=red',
      userResult.processed[2]
    );

    assert(
      'User Examples: accurate modified count for all 3 transformed URLs',
      'tracking',
      userResult.modifiedCount === 3,
      3,
      userResult.modifiedCount
    );
  } catch (err) {
    assert('Tracking parameter removal execution', 'tracking', false, null, null, String(err));
  }

  // 4. URL Normalization Tests
  try {
    const urlsToNormalize = [
      'HTTP://EXAMPLE.COM:80/path/to/page',
      'https://Example.Org:443/docs/',
      'http://insecure-site.com/login',
    ];

    // Default safe normalization (MUST NOT convert HTTP to HTTPS by default!)
    const { normalized } = normalizeUrls(urlsToNormalize, {
      lowercaseHostname: true,
      removeDefaultPorts: true,
      removeTrailingSlash: false,
      sortQueryParams: false,
      forceHttps: false,
      decodeUrlSegments: false,
    });

    assert(
      'Lowercases hostname and removes default port 80 while strictly KEEPING HTTP',
      'normalization',
      normalized[0] === 'http://example.com/path/to/page',
      'http://example.com/path/to/page',
      normalized[0]
    );

    assert(
      'Removes default port 443 for HTTPS',
      'normalization',
      normalized[1] === 'https://example.org/docs/',
      'https://example.org/docs/',
      normalized[1]
    );

    assert(
      'Preserves HTTP protocol by default (no forced upgrade)',
      'normalization',
      normalized[2].startsWith('http://'),
      'http://insecure-site.com/login',
      normalized[2]
    );

    // Explicit force HTTPS test
    const { normalized: forceHttpsResult } = normalizeUrls(urlsToNormalize, {
      lowercaseHostname: true,
      removeDefaultPorts: true,
      removeTrailingSlash: false,
      sortQueryParams: false,
      forceHttps: true,
      decodeUrlSegments: false,
    });

    assert(
      'Converts to HTTPS when explicitly selected',
      'normalization',
      forceHttpsResult[2].startsWith('https://'),
      'https://insecure-site.com/login',
      forceHttpsResult[2]
    );

    // Exact user test specification:
    // INPUT: not-a-valid-url
    // EXPECTED OUTPUT: not-a-valid-url (MUST NOT be modified into not-a-valid-url/)
    // Rule: If an input is not a valid absolute HTTP or HTTPS URL, do not normalize or modify it in any way.
    // Return the original input unchanged and keep it classified as invalid.
    const invalidInput = ['not-a-valid-url'];
    const invalidNormResult = normalizeUrls(invalidInput);

    assert(
      'Invalid input "not-a-valid-url" is returned unchanged without trailing slash',
      'normalization',
      invalidNormResult.normalized[0] === 'not-a-valid-url',
      'not-a-valid-url',
      invalidNormResult.normalized[0]
    );

    assert(
      'Invalid input "not-a-valid-url" does not increment modifiedCount',
      'normalization',
      invalidNormResult.modifiedCount === 0,
      0,
      invalidNormResult.modifiedCount
    );

    assert(
      'Invalid input "not-a-valid-url" remains classified as invalid',
      'normalization',
      isValidUrl(invalidNormResult.normalized[0]) === false,
      false,
      isValidUrl(invalidNormResult.normalized[0])
    );
  } catch (err) {
    assert('URL Normalization execution', 'normalization', false, null, null, String(err));
  }

  // 5. Domain Extraction Tests
  try {
    const mixedUrls = [
      'https://www.apple.com/iphone',
      'https://apple.com/macbook',
      'http://subdomain.blog.example.co.uk/post/1',
      'https://github.com/torvalds/linux',
    ];

    const { domains: uniqueDomains } = extractDomains(mixedUrls, {
      stripWww: true,
      uniqueOnly: true,
      rootDomainOnly: false,
      includeProtocol: false,
    });

    assert(
      'Strips www and deduplicates domains',
      'domains',
      uniqueDomains.includes('apple.com') && !uniqueDomains.includes('www.apple.com'),
      'apple.com present without www duplicate',
      uniqueDomains
    );

    assert(
      'Extracts full hostnames correctly',
      'domains',
      uniqueDomains.includes('subdomain.blog.example.co.uk') && uniqueDomains.includes('github.com'),
      true,
      uniqueDomains.length
    );

    // Exact user test specification:
    // Input: not-a-valid-url
    // Expected: It must be excluded completely from extracted domain results.
    // Extract domains ONLY from valid absolute HTTP or HTTPS URLs.
    const invalidDomainTestInput = [
      'not-a-valid-url',
      'https://www.google.com/search?q=test',
      'https://google.com/maps',
      'not-a-valid-url',
    ];

    const { domains: extractedWithInvalid } = extractDomains(invalidDomainTestInput, {
      stripWww: true,
      uniqueOnly: true,
      rootDomainOnly: false,
      includeProtocol: false,
    });

    assert(
      'Excludes "not-a-valid-url" completely from extracted domain results',
      'domains',
      !extractedWithInvalid.includes('not-a-valid-url') && !extractedWithInvalid.some((d) => d.includes('not-a-valid-url')),
      false,
      extractedWithInvalid.includes('not-a-valid-url')
    );

    assert(
      'Extracts only valid HTTP/HTTPS domain and deduplicates with www stripping',
      'domains',
      extractedWithInvalid.length === 1 && extractedWithInvalid[0] === 'google.com',
      ['google.com'],
      extractedWithInvalid
    );
  } catch (err) {
    assert('Domain extraction execution', 'domains', false, null, null, String(err));
  }

  // 6. Validation Tests
  try {
    // Required specific test cases:
    // - https://example.com = valid
    // - http://example.com = valid
    // - not-a-valid-url = invalid
    // - example.com = invalid
    // - ftp://example.com = invalid

    assert(
      'Validator: https://example.com is valid',
      'validation',
      isValidUrl('https://example.com') === true,
      true,
      isValidUrl('https://example.com')
    );

    assert(
      'Validator: http://example.com is valid',
      'validation',
      isValidUrl('http://example.com') === true,
      true,
      isValidUrl('http://example.com')
    );

    assert(
      'Validator: not-a-valid-url is invalid',
      'validation',
      isValidUrl('not-a-valid-url') === false,
      false,
      isValidUrl('not-a-valid-url')
    );

    assert(
      'Validator: example.com is invalid (missing http/https protocol, not auto-repaired)',
      'validation',
      isValidUrl('example.com') === false,
      false,
      isValidUrl('example.com')
    );

    assert(
      'Validator: ftp://example.com is invalid (unsupported protocol, only HTTP/HTTPS valid)',
      'validation',
      isValidUrl('ftp://example.com') === false,
      false,
      isValidUrl('ftp://example.com')
    );

    const testValidationUrls = [
      'https://example.com',
      'http://example.com',
      'not-a-valid-url',
      'example.com',
      'ftp://example.com',
    ];

    const { valid, invalid } = validateUrls(testValidationUrls);

    assert(
      'validateUrls: Identifies exactly valid HTTP and HTTPS URLs',
      'validation',
      valid.length === 2 && valid[0] === 'https://example.com' && valid[1] === 'http://example.com',
      ['https://example.com', 'http://example.com'],
      valid
    );

    assert(
      'validateUrls: Catches invalid inputs with explanatory reason without auto-repair',
      'validation',
      invalid.length === 3 &&
        invalid.some((item) => item.url === 'not-a-valid-url' && item.reason.includes('Invalid absolute HTTP/HTTPS URL')) &&
        invalid.some((item) => item.url === 'example.com') &&
        invalid.some((item) => item.url === 'ftp://example.com'),
      3,
      invalid.length
    );

    // Test specific test data:
    // Input contains valid URLs and not-a-valid-url => exactly 1 invalid URL: not-a-valid-url
    const testSingleInvalid = [
      'https://example.com',
      'http://example.com',
      'not-a-valid-url',
    ];
    const singleResult = validateUrls(testSingleInvalid);

    assert(
      'validateUrls: Exactly 1 invalid URL for test data with not-a-valid-url',
      'validation',
      singleResult.invalid.length === 1 &&
        singleResult.invalid[0].url === 'not-a-valid-url' &&
        singleResult.invalid[0].reason === 'Invalid absolute HTTP/HTTPS URL' &&
        singleResult.valid.length === 2,
      1,
      singleResult.invalid.length
    );

    // Test input with only not-a-valid-url:
    const onlyInvalidResult = validateUrls(['not-a-valid-url']);
    assert(
      'validateUrls: Input containing only not-a-valid-url yields exactly 1 invalid and 0 valid',
      'validation',
      onlyInvalidResult.valid.length === 0 &&
        onlyInvalidResult.invalid.length === 1 &&
        onlyInvalidResult.invalid[0].url === 'not-a-valid-url' &&
        onlyInvalidResult.invalid[0].reason === 'Invalid absolute HTTP/HTTPS URL',
      1,
      onlyInvalidResult.invalid.length
    );
  } catch (err) {
    assert('Validation execution', 'validation', false, null, null, String(err));
  }

  // 7. Sorting Tests
  try {
    const unsorted = [
      'https://zebra.com',
      'https://apple.com/b',
      'https://apple.com/a',
      'https://beta.com',
    ];

    const sortedAsc = sortUrls(unsorted, 'asc');
    assert('Alphabetical A-Z sort', 'sorting', sortedAsc[0] === 'https://apple.com/a' && sortedAsc[3] === 'https://zebra.com', true, sortedAsc);

    const sortedDomain = sortUrls(unsorted, 'domain');
    assert('Domain-based sort', 'sorting', sortedDomain[0].includes('apple.com') && sortedDomain[1].includes('apple.com'), true, sortedDomain);
  } catch (err) {
    assert('Sorting execution', 'sorting', false, null, null, String(err));
  }

  return results;
}
