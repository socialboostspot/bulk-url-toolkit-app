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
    metaTitle: 'Bulk URL Opener – Open Multiple Links in Controlled Batches',
    metaDescription:
      'Open multiple URLs in new browser tabs in selectable batches of 10, 25, or 50 links. Client-side multi-tab opening with popup permission guidance.',
    summary:
      'Open lists of web addresses in selectable batches of 10, 25, or 50 links. Manage multi-tab opening directly in your browser with popup guidance and batch progress tracking.',
    defaultAction: 'opener',
    aboutDetails: [
      'A bulk URL opener launches multiple web addresses into separate browser tabs from a single list, removing the need to copy, paste, and open each link one at a time.',
      'Attempting to launch dozens or hundreds of links simultaneously can quickly clutter your browser window, make individual tab titles difficult to distinguish, and disrupt your review workflow.',
      'Bulk URL Toolkit helps you manage multi-tab opening by organizing your links into selectable batches of 10, 25, or 50 URLs. This allows you to inspect web pages in manageable groups at your own pace while tracking batch progress.',
    ],
    useCases: [
      {
        title: 'SEO Audits & Redirect Verification',
        description:
          'Open groups of URLs exported from crawl reports for manual review of redirect destinations, landing pages, or other pages that need visual inspection.',
      },
      {
        title: 'Pre-Campaign Landing Page Reviews',
        description:
          'Verify promotional URLs, ad destinations, and marketing links before going live to confirm each page loads the expected destination.',
      },
      {
        title: 'Spreadsheet & Analytics Export Checks',
        description:
          'Open groups of links extracted from spreadsheets, CSV files, or analytics dashboards for rapid visual spot-checks.',
      },
      {
        title: 'QA & Multi-Page Template Testing',
        description:
          'Review staging links, updated page layouts, or new website templates across multiple URLs in structured batches.',
      },
      {
        title: 'Research & Reference Lists',
        description:
          'Open batches of research citations, source articles, or competitor web pages during documentation and competitive reviews.',
      },
    ],
    batchGuidance: [
      {
        title: '10 URLs per Batch (Focused Review)',
        description:
          'Best for detailed page inspection. Opening 10 tabs keeps tab titles readable in your browser tab bar and makes one-by-one verification easy to track.',
      },
      {
        title: '25 URLs per Batch (Balanced Workflow)',
        description:
          'A practical middle ground for reviewing moderate-sized link lists efficiently while keeping the number of open browser tabs manageable.',
      },
      {
        title: '50 URLs per Batch (High-Volume Skimming)',
        description:
          'Suited for faster scanning across large link collections. Opening 50 tabs produces a crowded tab bar and may take longer to load depending on your device and internet connection.',
      },
    ],
    troubleshooting: [
      {
        title: 'Why Web Browsers Block Multi-Tab Opening',
        description:
          'Modern web browsers include built-in popup blocking protections to prevent unauthorized websites from spamming users with unwanted windows. When a web application attempts to launch multiple tabs from a single click action, the browser often allows only the first tab and blocks subsequent tabs by default.',
      },
      {
        title: 'Granting Pop-up Permission for This Website',
        description:
          'To permit Bulk URL Opener to open your links, you need to allow pop-ups for this site. Check your browser address bar for a blocked pop-up icon or notification prompt, and select the option to always allow pop-ups and redirects from Bulk URL Toolkit.',
      },
      {
        title: 'Retrying the Batch After Updating Permissions',
        description:
          'After updating the permission, retry the batch. If the browser accepts the site permission, the remaining links can open in new tabs.',
      },
    ],
    prepWorkflows: [
      {
        title: 'Remove Duplicate Links First',
        description:
          'Eliminate repeated web addresses before opening your batch so you never launch identical pages multiple times.',
        linkPath: '/duplicate-url-remover',
      },
      {
        title: 'Validate Syntax & Formats',
        description:
          'Check URL syntax and separate entries that the toolkit identifies as valid or invalid before opening your list.',
        linkPath: '/bulk-url-validator',
      },
      {
        title: 'Strip Marketing & UTM Tags',
        description:
          'Remove supported marketing and tracking parameters, such as UTM tags and common advertising click IDs, before reviewing cleaner destination URLs.',
        linkPath: '/utm-remover',
      },
      {
        title: 'Clean Whitespace & Line Breaks',
        description:
          'Trim leading or trailing whitespace, remove blank lines, encode unescaped spaces, and repair accidental duplicate slashes.',
        linkPath: '/url-cleaner',
      },
      {
        title: 'Normalize URL Formatting',
        description:
          'Standardize supported URL formatting, including hostname casing and default port handling, for a more consistent URL list.',
        linkPath: '/url-normalizer',
      },
      {
        title: 'Extract Distinct Hostnames',
        description:
          'Convert a broad URL list into unique root domains or hostnames before deciding which web properties to open.',
        linkPath: '/domain-extractor',
      },
    ],
    howToSteps: [
      {
        step: 1,
        title: 'Input links to open',
        description:
          'Paste your URL list into the textarea (one URL per line) or import a text file.',
      },
      {
        step: 2,
        title: 'Choose batch size',
        description:
          'Select 10, 25, or 50 URLs per batch according to your preferred workflow and tab management preferences.',
      },
      {
        step: 3,
        title: 'Allow browser pop-ups',
        description:
          'When prompted by your browser, grant pop-up permission for this website to allow opening multiple tabs.',
      },
      {
        step: 4,
        title: 'Launch tabs in batches',
        description:
          'Click "Open Batch" to launch the selected group of links, then advance through subsequent batches with progress tracking.',
      },
    ],
    faqs: [
      {
        question: 'Why did only one tab open instead of all of them?',
        answer:
          'Modern web browsers include built-in popup blockers designed to prevent websites from opening unexpected windows. When you click "Open Batch", your browser may permit only the first tab and block the remaining links. Look for a blocked pop-up icon or notification prompt in your browser address bar, choose to allow pop-ups from this website, and then click "Open Batch" again.',
      },
      {
        question: 'What batch size should I choose?',
        answer:
          'The Bulk URL Opener supports batch sizes of 10, 25, or 50 URLs. We recommend starting with 10 or 25 URLs per batch. Smaller batches keep tab titles readable in your browser window and make page-by-page review easier to manage, whereas 50 URLs per batch is suited for rapid skimming across larger link lists.',
      },
      {
        question: 'Do I need a browser extension to open multiple URLs?',
        answer:
          'No. Bulk URL Opener runs directly in your web browser without requiring browser extensions, third-party add-ons, or desktop software installations. Once you allow pop-ups for this site, your browser will open tabs natively.',
      },
      {
        question: 'Does Bulk URL Toolkit store the URLs I open?',
        answer:
          'No. All URL parsing, batch slicing, and tab-opening actions happen locally in your web browser. Your URL list is not uploaded to our servers or stored in any database. Standard web hosting requests for site assets are routed through Cloudflare infrastructure, but your entered link data remains client-side.',
      },
      {
        question: 'Can I clean or remove duplicate URLs before opening them?',
        answer:
          'Yes. You can use the toolkit’s other utilities—such as Duplicate URL Remover, URL Cleaner, and UTM Remover—to refine your link list first. Once deduplicated and formatted, you can open the cleaned list in batches directly.',
      },
      {
        question: 'What happens to invalid URLs or links missing a protocol?',
        answer:
          'If a URL does not start with an explicit http:// or https:// protocol prefix, the opener automatically prepends https:// to ensure your browser can navigate to it. However, malformed strings or broken text entries may fail to load in the browser; we recommend running Bulk URL Validator first to verify your links.',
      },
      {
        question: 'Can I open thousands of URLs at once?',
        answer:
          'While you can paste large lists of URLs into the editor, the tool organizes links into controlled batches of up to 50 URLs per batch. Attempting to open thousands of tabs simultaneously would crowd your browser workspace and place heavy demands on your device, so batching allows you to review links incrementally.',
      },
      {
        question: 'Can I select specific URLs to open?',
        answer:
          'Bulk URL Opener works from the URL list currently prepared in the editor. Remove any links you do not want to open before launching the Bulk Opener, or use the toolkit’s available processing tools to prepare the list first.',
      },
    ],
    relatedToolIds: ['cleaner', 'dedup', 'validator', 'home'],
  },
  cleaner: {
    id: 'cleaner',
    path: '/url-cleaner',
    name: 'Bulk URL Cleaner',
    shortTitle: 'URL Cleaner',
    h1: 'Bulk URL Cleaner – Fix Whitespace, Blank Lines & URL Formatting',
    metaTitle: 'Bulk URL Cleaner – Fix Whitespace, Blank Lines & Formatting',
    metaDescription:
      'Clean messy lists of URLs client-side. Trim leading and trailing whitespace, remove blank lines, encode unescaped spaces, and repair duplicate path slashes.',
    summary:
      'Clean messy link lists in your browser. Trim leading and trailing whitespace, remove blank lines, encode unescaped spaces into %20, repair duplicate path slashes, and strip accidental trailing punctuation.',
    defaultAction: 'clean',
    aboutDetails: [
      'When collecting web addresses from spreadsheets, CSV exports, rich text documents, emails, or scrape logs, link lists frequently pick up formatting artifacts that cause navigation errors or spreadsheet formula failures.',
      'Bulk URL Cleaner quickly standardizes raw URL lists by stripping accidental whitespace, removing empty rows, encoding literal spaces into valid %20 tokens, collapsing duplicate slashes in URL paths, and removing stray copied punctuation like trailing commas and periods.',
      'All cleaning operations execute entirely client-side within your browser using JavaScript. Your URL lists are processed directly in volatile memory and are not uploaded to our servers, keeping your data private.',
    ],
    cleaningRules: [
      {
        title: 'Leading & Trailing Whitespace',
        description:
          'Strips standard spaces, tabs, and hidden zero-width Unicode characters (such as zero-width spaces and byte order marks) from the beginning and end of each URL.',
      },
      {
        title: 'Empty & Blank Lines',
        description:
          'Eliminates empty rows and lines containing only whitespace, leaving the remaining non-empty entries together in the cleaned list.',
      },
      {
        title: 'Unescaped Spaces Encoded as %20',
        description:
          'Detects literal spaces within URL paths or query strings and converts them into standard percent-encoded %20 notation without altering the overall URL structure.',
      },
      {
        title: 'Duplicate Path Slashes',
        description:
          'Repairs consecutive slashes in URL paths (such as //products///item) by collapsing them into single slashes, while strictly preserving the :// protocol separator.',
      },
      {
        title: 'Accidental Trailing Punctuation',
        description:
          'Strips trailing commas, semicolons, and sentence-ending periods commonly introduced when copying links from body text, while protecting valid domain extensions.',
      },
    ],
    examples: [
      {
        explanation: 'Trims leading and trailing spaces and zero-width characters',
        input: '   https://example.com/about   ',
        output: 'https://example.com/about',
      },
      {
        explanation: 'Encodes literal spaces into standard %20 format',
        input: 'https://example.com/my product page',
        output: 'https://example.com/my%20product%20page',
      },
      {
        explanation: 'Collapses multiple consecutive path slashes while preserving ://',
        input: 'https://example.com//products///item',
        output: 'https://example.com/products/item',
      },
      {
        explanation: 'Strips copied trailing punctuation without altering valid domain extensions',
        input: 'https://example.com/article.,',
        output: 'https://example.com/article',
      },
    ],
    boundaries: [
      {
        title: 'Does Not Alter Protocols (HTTP to HTTPS)',
        description:
          'The cleaner preserves existing protocols without changing http:// to https:// or prepending missing schemes.',
      },
      {
        title: 'Does Not Modify Query Parameters or Fragments',
        description:
          'All query parameters (?key=value) and fragment identifiers (#hash) remain intact, encoding only literal spaces if present.',
      },
      {
        title: 'Does Not Add or Remove Trailing Slashes',
        description:
          'The cleaner leaves path trailing slashes as provided (for example, /page/ stays /page/). Trailing slash formatting is managed by the Normalizer.',
      },
      {
        title: 'Does Not Lowercase Hostnames or Paths',
        description:
          'Letter casing is preserved untouched across all schemes, domain names, query keys, and path segments.',
      },
      {
        title: 'Does Not Deduplicate URLs',
        description:
          'Duplicate lines are kept in their original positions. Use the Duplicate URL Remover utility to eliminate repeated links.',
      },
      {
        title: 'Does Not Strip UTM or Tracking Tags',
        description:
          'Marketing tokens such as utm_source, gclid, and fbclid are left in place. Use the UTM & Tracking Parameter Remover to strip tracking tokens.',
      },
      {
        title: 'Does Not Check DNS or Server Reachability',
        description:
          'The cleaner does not ping web servers or verify domain registration. Use Bulk URL Validator to verify syntax validity.',
      },
    ],
    prepWorkflows: [
      {
        title: 'Remove Duplicate URLs',
        description:
          'Eliminate repeated web addresses from large collections to ensure each destination appears only once.',
        linkPath: '/duplicate-url-remover',
      },
      {
        title: 'Strip Marketing & UTM Tags',
        description:
          'Remove analytics parameters and advertising click identifiers to obtain clean destination links.',
        linkPath: '/utm-remover',
      },
      {
        title: 'Normalize URL Structure',
        description:
          'Standardize hostname casing, remove default port numbers, and manage trailing slash consistency.',
        linkPath: '/url-normalizer',
      },
      {
        title: 'Validate URL Syntax',
        description:
          'Verify URL syntax compliance and separate valid web links from malformed or incomplete entries.',
        linkPath: '/bulk-url-validator',
      },
    ],
    howToSteps: [
      {
        step: 1,
        title: 'Paste or import URLs',
        description:
          'Paste your raw links into the editor (one URL per line) or import a text file.',
      },
      {
        step: 2,
        title: 'Configure and clean',
        description:
          'Click "Clean URLs" to trim whitespace, remove blank rows, encode unescaped spaces, and fix duplicate path slashes.',
      },
      {
        step: 3,
        title: 'Review cleaned results',
        description:
          'Inspect the updated preview on the right, displaying non-empty line counts and real-time list statistics.',
      },
      {
        step: 4,
        title: 'Copy or export clean list',
        description:
          'Copy the cleaned URL list directly to your clipboard or download it as a sanitized text file.',
      },
    ],
    faqs: [
      {
        question: 'What formatting issues does the URL cleaner fix?',
        answer:
          'The URL cleaner removes leading and trailing spaces, strips zero-width Unicode characters, eliminates empty lines, encodes unescaped spaces into %20, collapses duplicate path slashes (while preserving ://), and removes accidental trailing punctuation like commas, semicolons, and sentence periods.',
      },
      {
        question: 'Are spaces inside URLs deleted or encoded?',
        answer:
          'Spaces are encoded into valid percent-encoded %20 format rather than deleted or replaced with hyphens. This ensures the resulting link conforms to URL syntax without altering intended path or query word boundaries.',
      },
      {
        question: 'Will cleaning alter the query parameters of my links?',
        answer:
          'No. The cleaner maintains full parameter integrity. It does not delete, reorder, or filter query parameters, encoding only literal whitespace characters if present inside a query string.',
      },
      {
        question: 'Does the URL Cleaner remove duplicate URLs?',
        answer:
          'No. The cleaner focuses purely on formatting and syntax hygiene, keeping all lines in their original order. To eliminate identical URLs, use the Duplicate URL Remover utility.',
      },
      {
        question: 'Does the cleaner strip UTM and tracking parameters?',
        answer:
          'No. The cleaner leaves marketing tokens like utm_source, utm_campaign, and gclid intact. If you want to clean tracking tokens from your URLs, use our dedicated UTM & Tracking Parameter Remover.',
      },
      {
        question: 'Does the cleaner check whether URLs are valid or reachable online?',
        answer:
          'No. The cleaner repairs formatting artifacts client-side but does not perform network pings or validate domain registration. Use Bulk URL Validator to check syntax validity across your list.',
      },
      {
        question: 'Does the cleaner change HTTP to HTTPS?',
        answer:
          'No. The cleaner preserves your existing protocols without changing http:// to https:// or adding missing schemes. If you want protocol standardization, use the Bulk URL Normalizer.',
      },
      {
        question: 'Can I clean large lists of URLs at once?',
        answer:
          'Yes. The interface supports lists of up to 5,000 URLs, and cleaning runs locally in your browser. Your URL list is not uploaded to our servers for processing.',
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
    metaTitle: 'Duplicate URL Remover – Remove Duplicate Links in Bulk',
    metaDescription:
      'Remove duplicate URLs client-side in your browser. Eliminate repeated links, choose case sensitivity, preserve original order, and export unique lists.',
    summary:
      'Deduplicate URL lists in bulk while preserving original sequence of first appearance and original casing. Compare web links case-insensitively or with exact case sensitivity entirely in your browser.',
    defaultAction: 'dedup',
    aboutDetails: [
      'Link collections compiled from web crawlers, XML sitemaps, analytics platforms, spreadsheet merges, and backlink audit exports frequently contain repeated URLs. Managing or distributing redundant links wastes review time, skews reporting metrics, and creates duplicate work.',
      'Duplicate URL Remover streamlines your URL lists by eliminating repeated entries while strictly preserving the first occurrence of each web address and its original sequence of appearance. By default, URLs are compared case-insensitively (treating uppercase and lowercase variations as matching duplicates), with a toggle for exact case-sensitive matching when path capitalization is meaningful.',
      'All deduplication runs entirely client-side in your web browser using JavaScript in memory. Your URL lists are processed directly on your device without being uploaded to our servers, keeping your data private.',
    ],
    examples: [
      {
        explanation:
          'Identifies case-insensitive duplicates by default, preserving the first occurrence and its original casing',
        input: 'https://example.com/products\nhttps://EXAMPLE.COM/products',
        output: 'https://example.com/products',
      },
      {
        explanation: 'Removes duplicate links while strictly preserving first-occurrence order',
        input: 'https://example.com/blog\nhttps://example.com/contact\nhttps://example.com/blog',
        output: 'https://example.com/blog\nhttps://example.com/contact',
      },
      {
        explanation: 'Trims leading and trailing whitespace before comparison',
        input: 'https://example.com/pricing\n   https://example.com/pricing   ',
        output: 'https://example.com/pricing',
      },
      {
        explanation: 'Treats distinct query parameters as separate unique URLs',
        input: 'https://example.com/search?q=seo\nhttps://example.com/search?q=audit',
        output: 'https://example.com/search?q=seo\nhttps://example.com/search?q=audit',
      },
    ],
    boundaries: [
      {
        title: 'Does Not Normalize Protocols, Slashes, or Hostnames',
        description:
          'Protocol differences (http:// vs https://), path trailing slash variations (/page vs /page/), www vs non-www hostnames, URL fragments (#section1 vs #section2), and percent-encoded vs decoded representations remain different entries unless their complete comparison strings match under the selected case-sensitivity mode. Standardize variations with Bulk URL Normalizer first if needed.',
      },
      {
        title: 'Does Not Strip Tracking Parameters (UTMs)',
        description:
          'URLs containing different query strings or tracking parameters are treated as distinct entries. Remove supported tracking parameters before deduplicating if you want differences caused only by those supported tracking parameters to no longer affect comparison.',
      },
      {
        title: 'Does Not Reorder or Sort Your List',
        description:
          'Deduplication preserves the original sequence of first appearance for unique entries. The tool does not alphabetize, sort, or reorder links.',
      },
      {
        title: 'Does Not Strip Zero-Width Characters',
        description:
          'The Deduplicator trims standard leading and trailing whitespace, but it does not strip zero-width characters. Use Bulk URL Cleaner first if those formatting artifacts need to be removed.',
      },
      {
        title: 'Does Not Perform Syntax or Network Validation',
        description:
          'Any non-empty line—including arbitrary non-URL text—is deduplicated purely by string matching. The tool does not send network requests to check whether different URLs redirect to the same page or share the same canonical tag. Use Bulk URL Validator to check URL syntax and separate entries the toolkit identifies as valid or invalid.',
      },
      {
        title: 'Retains First Occurrence After Trimming',
        description:
          'Standard leading and trailing whitespace is trimmed from the retained first occurrence; otherwise, it keeps its original casing and string content.',
      },
    ],
    prepWorkflows: [
      {
        title: 'Clean Whitespace & Line Breaks',
        description:
          'Trim padding spaces, eliminate empty rows, encode unescaped spaces, and collapse duplicate path slashes.',
        linkPath: '/url-cleaner',
      },
      {
        title: 'Strip Marketing & UTM Tags',
        description:
          'Remove supported tracking parameters before deduplicating if you want differences caused only by those supported tracking parameters to no longer affect comparison.',
        linkPath: '/utm-remover',
      },
      {
        title: 'Normalize URL Structure',
        description:
          'Standardize schemes, lowercase hostnames, and align trailing slashes for consistent duplicate detection.',
        linkPath: '/url-normalizer',
      },
      {
        title: 'Validate URL Syntax',
        description:
          'Check URL syntax and separate entries the toolkit identifies as valid or invalid.',
        linkPath: '/bulk-url-validator',
      },
      {
        title: 'Open Unique Links in Batches',
        description:
          'Launch your deduplicated URL collection in controlled browser tab batches for efficient visual review.',
        linkPath: '/bulk-url-opener',
      },
      {
        title: 'Extract Unique Domains',
        description:
          'Summarize your deduplicated URL list into distinct root hostnames or web domains.',
        linkPath: '/domain-extractor',
      },
    ],
    howToSteps: [
      {
        step: 1,
        title: 'Paste or import your URL list',
        description:
          'Paste raw URLs into the editor (one URL per line) or import a text file.',
      },
      {
        step: 2,
        title: 'Choose matching sensitivity',
        description:
          'Keep case-insensitive matching enabled for standard web links, or toggle case-sensitive matching if path casing matters.',
      },
      {
        step: 3,
        title: 'Execute deduplication',
        description:
          'Click "Remove Duplicates" to eliminate repeated lines client-side while preserving the first occurrence of each unique entry.',
      },
      {
        step: 4,
        title: 'Review counts and export',
        description:
          'Check the badge showing exact duplicate counts removed, then copy your unique list to the clipboard or download it as a text file.',
      },
    ],
    faqs: [
      {
        question: 'Does removing duplicates change the order of my URLs?',
        answer:
          'No. The first occurrence of each URL is retained, subsequent matching occurrences are removed, and the original sequence of first appearance is preserved. The first occurrence also retains its original casing.',
      },
      {
        question: 'How does case-sensitive and case-insensitive matching work?',
        answer:
          'By default, URLs are compared case-insensitively, meaning https://example.com/page and https://EXAMPLE.COM/page are recognized as duplicates. When case-insensitive mode matches duplicate entries, it does not lowercase the retained output; the original casing of the first occurrence is kept. You can also enable optional case-sensitive matching, where comparison applies to the entire trimmed string and different casing is treated as distinct.',
      },
      {
        question: 'Does the tool ignore spaces around URLs when detecting duplicates?',
        answer:
          'Yes. Standard leading and trailing whitespace is trimmed from each line before comparison and output, and blank or whitespace-only lines are skipped automatically. However, zero-width characters (such as zero-width spaces or byte order marks) are not stripped by the Deduplicator; use Bulk URL Cleaner first if those formatting artifacts need to be removed.',
      },
      {
        question: 'Are URLs with and without trailing slashes considered duplicates?',
        answer:
          'No. Because deduplication performs exact string comparison, https://example.com/page and https://example.com/page/ are treated as different entries. To align trailing slash formatting before deduplicating, use the Bulk URL Normalizer utility.',
      },
      {
        question: 'Are HTTP and HTTPS versions of the same URL merged?',
        answer:
          'No. Because protocol schemes form part of the complete URL string, http://example.com and https://example.com remain different strings and will both be retained. Standardize protocol schemes with Bulk URL Normalizer before deduplicating if you want them to match.',
      },
      {
        question: 'Are URLs with different query or tracking parameters considered duplicates?',
        answer:
          'No. Query string differences remain distinct. URLs with different query parameters, as well as URLs with different UTM marketing values (such as ?utm_source=google vs ?utm_source=newsletter), remain distinct entries because tracking parameters are not removed automatically. Remove supported tracking parameters with the UTM & Tracking Parameter Remover first if you want differences caused only by those tags to no longer affect comparison.',
      },
      {
        question: 'Does Duplicate URL Remover validate URLs or check whether links work?',
        answer:
          'No. Deduplication operates strictly through client-side string matching. Any non-empty text lines can also be deduplicated without requiring valid web link syntax, and the tool performs no network calls, DNS lookups, or server reachability checks. Use Bulk URL Validator to check URL syntax and separate entries the toolkit identifies as valid or invalid.',
      },
      {
        question: 'How many entries can I deduplicate at one time?',
        answer:
          'The interface supports lists of up to 5,000 entries, and deduplication runs locally in your browser. Your URL list is not uploaded to our servers for processing.',
      },
    ],
    relatedToolIds: ['cleaner', 'utm', 'normalizer', 'validator', 'opener'],
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
  privacy: {
    id: 'privacy',
    path: '/privacy',
    name: 'Privacy Policy',
    shortTitle: 'Privacy',
    h1: 'Privacy Policy – Bulk URL Toolkit',
    metaTitle: 'Privacy Policy – Bulk URL Toolkit',
    metaDescription:
      'Learn how Bulk URL Toolkit handles your data. URL lists and uploaded files are processed locally in your browser with no server uploads, cookies, or tracking.',
    summary:
      'Our commitment to data privacy, client-side execution, and technical transparency regarding how Bulk URL Toolkit operates.',
    howToSteps: [],
    faqs: [],
    relatedToolIds: [],
  },
  about: {
    id: 'about',
    path: '/about',
    name: 'About',
    shortTitle: 'About',
    h1: 'About Bulk URL Toolkit',
    metaTitle: 'About Bulk URL Toolkit – Free Client-Side Browser URL Processor',
    metaDescription:
      'Learn about Bulk URL Toolkit, a free client-side suite of URL utilities for SEO professionals, developers, and marketers. Privacy-first link processing in your browser.',
    summary:
      'Discover the purpose, utilities, and privacy-first client-side architecture powering Bulk URL Toolkit.',
    howToSteps: [],
    faqs: [],
    relatedToolIds: [],
  },
  contact: {
    id: 'contact',
    path: '/contact',
    name: 'Contact',
    shortTitle: 'Contact',
    h1: 'Contact & Feedback',
    metaTitle: 'Contact & Feedback – Bulk URL Toolkit',
    metaDescription:
      'Contact and feedback details for Bulk URL Toolkit. Learn about project communications, bug reporting, and feature suggestion channels.',
    summary:
      'Information regarding inquiries, feedback channels, and support resources for Bulk URL Toolkit.',
    howToSteps: [],
    faqs: [],
    relatedToolIds: [],
  },
  terms: {
    id: 'terms',
    path: '/terms',
    name: 'Terms of Service',
    shortTitle: 'Terms',
    h1: 'Terms of Service',
    metaTitle: 'Terms of Service – Bulk URL Toolkit',
    metaDescription:
      'Review the Terms of Service for Bulk URL Toolkit. Governing terms for free, client-side browser-based URL utilities and services.',
    summary:
      'The terms and conditions governing your access to and use of Bulk URL Toolkit and its browser-based link utilities.',
    howToSteps: [],
    faqs: [],
    relatedToolIds: [],
  },
};

export const ALL_TOOL_PATHS = Object.values(TOOL_PAGES).map((p) => p.path);
