import { ToolPageConfig } from '../types';

export const TOOL_PAGES: Record<string, ToolPageConfig> = {
  home: {
    id: 'home',
    path: '/',
    name: 'Bulk URL Toolkit',
    shortTitle: 'All-in-One Toolkit',
    h1: 'Bulk URL Toolkit – Client-Side URL Processor',
    metaTitle: 'Bulk URL Toolkit – Client-Side Browser URL Processor',
    metaDescription:
      'Process up to 5,000 URLs directly in your browser. Clean, deduplicate, strip UTM parameters, normalize formatting, extract domains, and bulk open links. URL processing happens locally in your browser.',
    summary:
      'Process large lists of URLs with fast client-side processing. URL processing happens locally in your browser. Your URL list is not uploaded to our servers for processing.',
    howToSteps: [
      {
        step: 1,
        title: 'Paste or upload your URLs',
        description: 'Paste up to 5,000 links (one URL per line) into the editor or upload a .txt / .csv file.',
      },
      {
        step: 2,
        title: 'Review real-time metrics',
        description: 'Instantly view real-time counts for valid links, invalid formats, duplicates, and unique hostnames.',
      },
      {
        step: 3,
        title: 'Select your transformations',
        description: 'Clean formatting, remove duplicates, strip tracking/UTMs, normalize protocols, or extract domains with one click.',
      },
      {
        step: 4,
        title: 'Copy or export results',
        description: 'Preview the clean output table, copy directly to your clipboard, or download as TXT or CSV.',
      },
    ],
    faqs: [
      {
        question: 'Is my URL data uploaded to any server or database?',
        answer:
          'No. URL processing happens locally in your browser. Your URL list is not uploaded to our servers for processing. All parsing, cleaning, and filtering happens locally on your device.',
      },
      {
        question: 'How many URLs can I process at once?',
        answer:
          'The toolkit provides fast client-side processing for lists of up to 5,000 URLs. Larger lists can also be processed depending on your device memory and browser capabilities.',
      },
      {
        question: 'Will removing tracking parameters break query strings?',
        answer:
          'No. Our engine strictly targets known tracking tokens (such as utm_source, gclid, fbclid, msclkid) while preserving all essential functional query parameters such as product IDs, search queries, pagination, and session parameters.',
      },
      {
        question: 'Does the normalizer change HTTP to HTTPS automatically?',
        answer:
          'No. By default, HTTP URLs are kept as HTTP to avoid breaking websites that do not have active SSL certificates. You can explicitly enable the HTTPS conversion option if desired.',
      },
      {
        question: 'Is this tool free to use?',
        answer:
          'Free to use • No registration required. There are no subscriptions, account sign-ups, or artificial daily limits.',
      },
    ],
    relatedToolIds: [
      'opener',
      'cleaner',
      'dedup',
      'utm',
      'extractor',
      'normalizer',
      'validator',
    ],
  },
  opener: {
    id: 'opener',
    path: '/bulk-url-opener',
    name: 'Bulk URL Opener',
    shortTitle: 'URL Opener',
    h1: 'Bulk URL Opener – Open Multiple Links in Controlled Batches',
    metaTitle: 'Bulk URL Opener – Open Multiple Links in Batches Safely',
    metaDescription:
      'Open multiple URLs in new browser tabs with controlled batches of 10, 25, or 50 links. Prevent browser crashes and popup blocking with safe batching.',
    summary:
      'Open large lists of links in controlled batches to avoid overwhelming your browser or memory. Features customizable batch sizes and popup permission guidance.',
    defaultAction: 'opener',
    howToSteps: [
      {
        step: 1,
        title: 'Input links to open',
        description: 'Paste your URL list into the textarea (one URL per line).',
      },
      {
        step: 2,
        title: 'Select batch size',
        description: 'Choose 10, 25, or 50 URLs per batch according to your browser memory and workflow.',
      },
      {
        step: 3,
        title: 'Grant browser popup permission',
        description: 'When prompted by your browser, choose "Always allow pop-ups and redirects" for this domain.',
      },
      {
        step: 4,
        title: 'Launch tabs sequentially',
        description: 'Click "Open Batch" to open the selected slice of tabs. Progress is tracked automatically.',
      },
    ],
    faqs: [
      {
        question: 'Why did my browser only open one tab instead of all of them?',
        answer:
          'Modern web browsers block automated multi-tab opening to protect users from malicious spam. Check your browser address bar for a small blocked popup icon, click it, and select "Always allow pop-ups from this site".',
      },
      {
        question: 'What batch size is recommended?',
        answer:
          'We recommend batches of 10 or 25 URLs. Opening more than 50 tabs simultaneously can cause high RAM utilization and browser lag on most consumer devices.',
      },
      {
        question: 'Can I select specific URLs to open?',
        answer:
          'Yes, you can filter by validity or search terms and open only the selected links.',
      },
    ],
    relatedToolIds: ['cleaner', 'dedup', 'validator', 'home'],
  },
  cleaner: {
    id: 'cleaner',
    path: '/url-cleaner',
    name: 'Bulk URL Cleaner',
    shortTitle: 'URL Cleaner',
    h1: 'Bulk URL Cleaner – Clean Formatting, Whitespace & Corrupted Paths',
    metaTitle: 'Bulk URL Cleaner – Fix Spacing, Blank Lines & Formatting Errors',
    metaDescription:
      'Clean messy lists of URLs. Remove blank lines, trim leading/trailing whitespace, fix unescaped spaces, and repair accidental duplicate slashes client-side.',
    summary:
      'Standardize messy link lists by eliminating stray whitespace, removing empty rows, encoding unescaped spaces, and stripping accidental trailing punctuation.',
    defaultAction: 'clean',
    howToSteps: [
      {
        step: 1,
        title: 'Paste raw URLs',
        description: 'Paste your unformatted links copied from documents, spreadsheets, or text files.',
      },
      {
        step: 2,
        title: 'Apply cleaning rules',
        description: 'Click "Clean URLs" to automatically strip zero-width characters, trim whitespace, and fix unescaped characters.',
      },
      {
        step: 3,
        title: 'Inspect cleaned output',
        description: 'See the exact count of removed empty rows and corrected syntax.',
      },
      {
        step: 4,
        title: 'Export ready URLs',
        description: 'Copy the sanitized list directly or download it as a clean text file.',
      },
    ],
    faqs: [
      {
        question: 'What formatting issues does the URL cleaner fix?',
        answer:
          'It removes leading and trailing spaces, eliminates blank rows, encodes unescaped spaces into %20, fixes accidental double slashes in paths (without touching the protocol), and removes trailing punctuation like commas or periods from copied text.',
      },
      {
        question: 'Will cleaning alter the query parameters of my links?',
        answer:
          'No. The cleaner maintains parameter integrity while encoding only illegal unescaped whitespace characters.',
      },
    ],
    relatedToolIds: ['dedup', 'normalizer', 'validator', 'home'],
  },
  dedup: {
    id: 'dedup',
    path: '/duplicate-url-remover',
    name: 'Duplicate URL Remover',
    shortTitle: 'Duplicate Remover',
    h1: 'Duplicate URL Remover – Remove Duplicate Links in Bulk',
    metaTitle: 'Duplicate URL Remover – Remove Duplicate Links Instantly',
    metaDescription:
      'Quickly find and eliminate duplicate URLs from lists of up to 5,000 links. Supports case-sensitive or insensitive matching with exact removal counts.',
    summary:
      'Deduplicate massive lists of URLs while preserving original appearance order. View exact counts of duplicates removed and export clean unique lists.',
    defaultAction: 'dedup',
    howToSteps: [
      {
        step: 1,
        title: 'Paste your URL list',
        description: 'Paste duplicate-heavy links from sitemaps, crawlers, or outreach lists.',
      },
      {
        step: 2,
        title: 'Choose matching sensitivity',
        description: 'Choose between case-sensitive matching or case-insensitive matching.',
      },
      {
        step: 3,
        title: 'Execute deduplication',
        description: 'Click "Remove Duplicates". The tool removes repeated entries while keeping the first occurrence.',
      },
      {
        step: 4,
        title: 'Verify removed count',
        description: 'Review the removed count badge and download your unique list.',
      },
    ],
    faqs: [
      {
        question: 'Does removing duplicates change the order of my URLs?',
        answer:
          'No. Our deduplication algorithm preserves the exact order of appearance for the first occurrence of each unique URL.',
      },
      {
        question: 'How are case differences handled?',
        answer:
          'By default, URLs are compared case-insensitively so that example.com/page and EXAMPLE.COM/page are recognized as duplicates. You can switch to case-sensitive matching with one toggle.',
      },
    ],
    relatedToolIds: ['cleaner', 'utm', 'normalizer', 'home'],
  },
  utm: {
    id: 'utm',
    path: '/utm-remover',
    name: 'UTM & Tracking Parameter Remover',
    shortTitle: 'UTM Remover',
    h1: 'UTM & Tracking Parameter Remover – Clean URLs Without Breaking Links',
    metaTitle: 'UTM & Tracking Parameter Remover – Strip Marketing & Click IDs',
    metaDescription:
      'Strip utm_source, utm_campaign, gclid, fbclid, msclkid and other marketing tags from URLs in bulk. Safely keeps all real functional query parameters.',
    summary:
      'Sanitize marketing URLs by stripping UTM tags, Google Click IDs (gclid), Meta tags (fbclid), and ad tracking codes while safely preserving functional query parameters.',
    defaultAction: 'utm',
    howToSteps: [
      {
        step: 1,
        title: 'Paste marketing URLs',
        description: 'Paste URLs containing campaign tags, newsletter parameters, or social tracking tokens.',
      },
      {
        step: 2,
        title: 'Select tracking filters',
        description: 'Target standard UTM tags, ad click IDs (gclid, fbclid, msclkid), or custom marketing tokens.',
      },
      {
        step: 3,
        title: 'Remove parameters',
        description: 'Click "Remove Tracking Parameters". The engine cleanly strips tags and removes trailing question marks if empty.',
      },
      {
        step: 4,
        title: 'Copy pristine URLs',
        description: 'Export or copy canonical, tracking-free links ready for sharing or indexing.',
      },
    ],
    faqs: [
      {
        question: 'Which tracking parameters are removed?',
        answer:
          'The default rules strip utm_source, utm_medium, utm_campaign, utm_term, utm_content, utm_id, gclid, gbraid, wbraid, fbclid, msclkid, ttclid, twclid, yclid, mc_cid, mc_eid, and hsCtaTracking.',
      },
      {
        question: 'Will this remove normal query parameters like product ID or search terms?',
        answer:
          'No! Functional query parameters (such as ?id=123, ?search=shoes, ?page=2) are completely preserved. Only known tracking and click identifier keys are stripped.',
      },
    ],
    relatedToolIds: ['normalizer', 'cleaner', 'dedup', 'home'],
  },
  extractor: {
    id: 'extractor',
    path: '/domain-extractor',
    name: 'Domain & Hostname Extractor',
    shortTitle: 'Domain Extractor',
    h1: 'Domain & Hostname Extractor – Extract Unique Domains from URLs',
    metaTitle: 'Domain & Hostname Extractor – Extract Unique Hosts in Bulk',
    metaDescription:
      'Convert a list of URLs into clean, unique hostnames or root domains. Strip www prefixes, group subdomains, and export unique domain lists in seconds.',
    summary:
      'Convert extensive lists of web addresses into a clean, deduplicated inventory of domains and hostnames. Ideal for SEO audits, backlink analysis, and security reviews.',
    defaultAction: 'domain',
    howToSteps: [
      {
        step: 1,
        title: 'Paste URL list',
        description: 'Paste your list of URLs or crawl results into the input box.',
      },
      {
        step: 2,
        title: 'Configure domain extraction',
        description: 'Choose whether to strip "www.", extract root domains only, or keep full subdomains.',
      },
      {
        step: 3,
        title: 'Generate domain list',
        description: 'Click "Extract Domains" to compute unique hostnames across your entire dataset.',
      },
      {
        step: 4,
        title: 'Download domain inventory',
        description: 'Download the deduplicated domain list as TXT or CSV with frequency counts.',
      },
    ],
    faqs: [
      {
        question: 'Can I extract root domains instead of full subdomains?',
        answer:
          'Yes. Enabling the "Root Domain Only" toggle will condense subdomains like blog.example.com into example.com, with smart recognition for multi-part TLDs like .co.uk and .com.au.',
      },
      {
        question: 'Are extracted domains automatically deduplicated?',
        answer:
          'Yes, by default only unique domains are exported so each distinct website appears exactly once.',
      },
    ],
    relatedToolIds: ['validator', 'cleaner', 'normalizer', 'home'],
  },
  normalizer: {
    id: 'normalizer',
    path: '/url-normalizer',
    name: 'Bulk URL Normalizer',
    shortTitle: 'URL Normalizer',
    h1: 'Bulk URL Normalizer – Standardize Hostnames, Ports & Trailing Slashes',
    metaTitle: 'Bulk URL Normalizer – Standardize URL Syntax & Safe Protocols',
    metaDescription:
      'Normalize bulk URLs without changing destination endpoints. Lowercase hostnames, remove default ports (:80/:443), and safely standardize protocols.',
    summary:
      'Standardize URL formatting for deduplication and sitemap hygiene without breaking endpoints. Handles protocols, lowercase hostnames, and default port numbers safely.',
    defaultAction: 'normalize',
    howToSteps: [
      {
        step: 1,
        title: 'Paste URLs for normalization',
        description: 'Input links that have inconsistent case, mixed default ports, or trailing slash variations.',
      },
      {
        step: 2,
        title: 'Verify protocol settings',
        description: 'By default, HTTP is preserved. Toggle "Convert HTTP to HTTPS" only if you specifically require it.',
      },
      {
        step: 3,
        title: 'Normalize formatting',
        description: 'Click "Normalize URLs" to lowercase domain names, strip redundant ports :80 and :443, and sort query parameters.',
      },
      {
        step: 4,
        title: 'Export standardized list',
        description: 'Copy or download canonicalized URLs ready for SEO crawlers and databases.',
      },
    ],
    faqs: [
      {
        question: 'Why does the normalizer lowercase hostnames but not paths?',
        answer:
          'Domain names (hostnames) are case-insensitive in standard URL handling, but URL path segments can be case-sensitive depending on the hosting server operating system (e.g. Linux). Lowercasing paths could cause 404 errors.',
      },
      {
        question: 'Does the normalizer force HTTPS on HTTP links?',
        answer:
          'No. To prevent breaking older or specialized servers, HTTP links remain HTTP unless you explicitly check the "Convert HTTP to HTTPS" option.',
      },
    ],
    relatedToolIds: ['cleaner', 'utm', 'dedup', 'home'],
  },
  validator: {
    id: 'validator',
    path: '/bulk-url-validator',
    name: 'Bulk URL Validator',
    shortTitle: 'URL Validator',
    h1: 'Bulk URL Validator – Identify Malformed & Invalid Links',
    metaTitle: 'Bulk URL Validator – Check URL Syntax in Bulk',
    metaDescription:
      'Validate syntax and structure for up to 5,000 URLs locally in your browser. Separate valid and invalid links with specific error explanations.',
    summary:
      'Verify the technical syntax and structural validity of thousands of URLs. Instantly separate well-formed web addresses from broken or corrupted strings.',
    defaultAction: 'validate',
    howToSteps: [
      {
        step: 1,
        title: 'Enter URLs to validate',
        description: 'Paste your bulk link list into the validator textarea.',
      },
      {
        step: 2,
        title: 'Run syntax checks',
        description: 'Click "Find Invalid URLs" to validate protocol, hostname syntax, port specifications, and character encoding.',
      },
      {
        step: 3,
        title: 'Filter valid vs. invalid',
        description: 'Switch tabs to inspect valid links or drill down into invalid links with line numbers and specific failure reasons.',
      },
      {
        step: 4,
        title: 'Export clean or error lists',
        description: 'Download the valid URLs for deployment or download the invalid entries for correction.',
      },
    ],
    faqs: [
      {
        question: 'Does the validator check if the web page is actually online (HTTP 200)?',
        answer:
          'No. Because URL processing happens locally in your browser for privacy and efficiency, it validates structural and syntactic URL compliance. Checking live HTTP status codes would require external network requests and could expose your URLs.',
      },
      {
        question: 'What types of errors are detected?',
        answer:
          'The validator catches missing protocols, invalid domain TLDs, illegal characters, unencoded spaces, invalid port numbers, and malformed query strings.',
      },
    ],
    relatedToolIds: ['cleaner', 'extractor', 'opener', 'home'],
  },
};

export const ALL_TOOL_PATHS = Object.values(TOOL_PAGES).map((p) => p.path);
