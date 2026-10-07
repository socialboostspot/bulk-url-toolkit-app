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
    h1: 'UTM & Tracking Parameter Remover – Remove Marketing & Click IDs',
    metaTitle: 'UTM & Tracking Parameter Remover – Remove Marketing & Click IDs',
    metaDescription:
      'Remove UTM parameters, gclid, fbclid, msclkid, and marketing tracking tokens in bulk while retaining non-targeted query parameters and fragments.',
    summary:
      'Remove supported UTM parameters, advertising click IDs, and marketing tracking tokens from URL lists while retaining non-targeted query parameters and fragments.',
    defaultAction: 'utm',
    aboutDetails: [
      'Tracking and marketing parameters commonly accumulate on web links shared across advertising campaigns, newsletters, social platforms, and marketing automation workflows. While valuable for attribution analytics, these lengthy query strings produce cluttered links, distort manual review, and interfere with spreadsheet operations.',
      'UTM & Tracking Parameter Remover sanitizes URL lists by stripping supported marketing parameters—including all keys beginning with utm_ as well as common advertising click identifiers like gclid, fbclid, and msclkid—while strictly retaining non-targeted query parameters and URL fragments. Parameter-name matching is case-insensitive, and trailing question marks are automatically removed when no query parameters remain.',
      'All tracking removal executes entirely client-side in your web browser using JavaScript in memory. Your URL list is processed directly on your device and is not uploaded to our servers, keeping your link data private.',
    ],
    examples: [
      {
        explanation: 'Removes standard UTM campaign tags while cleaning the trailing question mark',
        input: 'https://example.com/page?utm_source=google&utm_medium=cpc',
        output: 'https://example.com/page',
      },
      {
        explanation: 'Preserves non-targeted query parameters and maintains their original relative order',
        input: 'https://example.com/product?id=123&utm_source=email&page=2',
        output: 'https://example.com/product?id=123&page=2',
      },
      {
        explanation: 'Strips advertising click identifiers like Google Ads gclid and Meta fbclid',
        input: 'https://example.com/page?gclid=123&fbclid=456',
        output: 'https://example.com/page',
      },
      {
        explanation: 'Removes tracking parameters while strictly preserving URL fragments',
        input: 'https://example.com/page?utm_source=test#pricing',
        output: 'https://example.com/page#pricing',
      },
    ],
    boundaries: [
      {
        title: 'Does Not Deduplicate Results',
        description:
          'If two different tracked URLs become identical after parameter removal, both output lines remain in your list. Use Duplicate URL Remover afterward if you want to eliminate repeated destinations.',
      },
      {
        title: 'Does Not Remove Unknown Parameters Automatically',
        description:
          'All query parameter keys beginning with utm_ are recognized automatically. Other keys are removed only when covered by the tool’s supported tracking rules (such as common ad click IDs and email tokens). Unknown or custom parameters, such as ref= or aff_id=, are not assumed to be tracking parameters and remain untouched.',
      },
      {
        title: 'Does Not Normalize URL Structure',
        description:
          'The tool does not convert HTTP to HTTPS, add or remove trailing slashes, lowercase hostnames or paths, or collapse duplicate path slashes. Use Bulk URL Normalizer or Bulk URL Cleaner for structural normalization.',
      },
      {
        title: 'Preserves Non-Targeted Query Data',
        description:
          'Retained query pairs keep their original values, casing, empty values, duplicate keys, and original relative order without re-encoding or reordering.',
      },
      {
        title: 'Preserves Fragments',
        description:
          'Anchor fragment identifiers (#section) remain attached after query parameter cleanup, even when all query parameters are removed.',
      },
      {
        title: 'Does Not Validate or Check Reachability',
        description:
          'The tool performs client-side string sanitization without URL syntax validation, DNS checks, HTTP requests, redirect resolution, canonical-tag inspection, or server reachability checks.',
      },
    ],
    prepWorkflows: [
      {
        title: 'Remove Duplicate URLs',
        description:
          'Eliminate repeated links that become identical once tracking parameters are removed.',
        linkPath: '/duplicate-url-remover',
      },
      {
        title: 'Clean Whitespace & Line Breaks',
        description:
          'Trim padding spaces, eliminate empty rows, encode unescaped spaces, and collapse duplicate path slashes.',
        linkPath: '/url-cleaner',
      },
      {
        title: 'Normalize URL Structure',
        description:
          'Standardize schemes, lowercase hostnames, and align trailing slashes across your link collection.',
        linkPath: '/url-normalizer',
      },
      {
        title: 'Validate URL Syntax',
        description:
          'Check URL syntax and separate entries the toolkit identifies as valid or invalid.',
        linkPath: '/bulk-url-validator',
      },
      {
        title: 'Open Cleaned Links in Batches',
        description:
          'Launch your cleaned links in controlled browser tab batches for efficient visual inspection.',
        linkPath: '/bulk-url-opener',
      },
      {
        title: 'Extract Unique Domains',
        description:
          'Summarize your cleaned URLs into distinct root hostnames or web domains.',
        linkPath: '/domain-extractor',
      },
    ],
    howToSteps: [
      {
        step: 1,
        title: 'Paste or import URLs',
        description:
          'Paste URLs containing campaign tags or tracking parameters into the editor (one URL per line) or import a text file.',
      },
      {
        step: 2,
        title: 'Select tracking categories',
        description:
          'Use the options tray to choose supported parameter groups: UTM parameters, ad click IDs, or email and CRM tracking tokens.',
      },
      {
        step: 3,
        title: 'Remove tracking parameters',
        description:
          'Click "Remove Tracking (UTMs)" to strip matching parameters client-side; an empty trailing ? is removed when no query parameters remain.',
      },
      {
        step: 4,
        title: 'Review results and export',
        description:
          'Review the modified lines badge, inspect the cleaned preview, and copy or download your sanitized URL list.',
      },
    ],
    faqs: [
      {
        question: 'Which tracking parameters can the tool remove?',
        answer:
          'When UTM removal is enabled, the tool strips all query parameters beginning with utm_ (case-insensitively). Depending on selected tracking categories, it also removes supported ad click identifiers (such as gclid, gbraid, wbraid, dclid, fbclid, fbc, fbp, msclkid, twclid, ttclid, yclid) and email or marketing platform tokens (such as mc_cid, mc_eid, _hsenc, _hsmi, hsctatracking, igshid, vero_id, vero_conv, pk_campaign, pk_kwd, pk_source, pk_medium, pk_content). Unknown or custom parameters outside these supported sets remain untouched.',
      },
      {
        question: 'Are non-tracking query parameters preserved?',
        answer:
          'Yes. Query parameters that do not match the selected tracking rules remain intact. Their parameter values, casing, empty values (such as ?id=), duplicate keys, and original relative order are preserved.',
      },
      {
        question: 'Does the tool remove custom tracking parameters?',
        answer:
          'The current interface does not provide an input field for arbitrary custom parameter names. Any parameter starting with utm_ is recognized automatically, but unknown non-UTM tracking keys outside the tool’s supported categories remain untouched to prevent accidentally stripping functional parameters.',
      },
      {
        question: 'What happens when all query parameters are removed?',
        answer:
          'When every query parameter on a URL is stripped, the tool removes the trailing question mark (?), leaving a clean path.',
      },
      {
        question: 'Are URL fragments preserved?',
        answer:
          'Yes. URL fragment identifiers (such as #pricing or #section2) are separated before query processing and reattached afterward, even when all query parameters are removed.',
      },
      {
        question: 'Does tracking removal automatically remove duplicate URLs?',
        answer:
          'No. The tool processes lines individually without deduplication. If two different input URLs become identical once tracking parameters are removed, both lines will remain in your output. You can use Duplicate URL Remover afterward to eliminate repeated links.',
      },
      {
        question: 'Does the tool validate URLs or check whether they work?',
        answer:
          'No. The tool performs client-side text sanitization without validating URL syntax or making network, DNS, or server reachability checks. Use Bulk URL Validator to check URL syntax and separate entries the toolkit identifies as valid or invalid.',
      },
      {
        question: 'How many entries can I process, and is the URL list uploaded?',
        answer:
          'The interface supports lists of up to 5,000 entries, and tracking-parameter removal runs locally in your browser. Your URL list is not uploaded to our servers for processing.',
      },
    ],
    relatedToolIds: ['cleaner', 'dedup', 'normalizer', 'validator', 'opener'],
  },
  extractor: {
    id: 'extractor',
    path: '/domain-extractor',
    name: 'Domain & Hostname Extractor',
    shortTitle: 'Domain Extractor',
    h1: 'Domain & Hostname Extractor – Extract Unique Hosts from URLs',
    metaTitle: 'Domain & Hostname Extractor – Extract Hosts in Bulk',
    metaDescription:
      'Extract hostnames or optional root domains from absolute HTTP and HTTPS URLs in bulk. Strip www prefixes, preserve subdomains, and deduplicate lists client-side.',
    summary:
      'Extract hostnames or optional root domains from absolute HTTP and HTTPS URLs. Strip www prefixes, preserve or condense subdomains, and deduplicate extracted results directly in your browser.',
    defaultAction: 'domain',
    aboutDetails: [
      'When conducting manual SEO reviews, backlink audits, crawl data inspections, or web analytics cleanups, raw URL lists often span thousands of deep internal links. Domain & Hostname Extractor converts lengthy URL paths into clean, distinct host inventories, allowing you to isolate and review unique web properties without manually editing spreadsheets.',
      'By default, the tool extracts full hostnames from valid absolute HTTP and HTTPS URLs, automatically converts hostnames to lowercase, strips the www. prefix, removes duplicate hostnames, and discards ports, paths, query strings, and fragments. Subdomains (such as blog.example.com) remain separate and distinct by default. You can adjust these rules in the extraction options tray to retain the www. prefix, extract root domains, or keep repeated entries.',
      'All domain extraction runs entirely client-side in your web browser using JavaScript in memory. The tool does not perform DNS lookups, WHOIS queries, or HTTP network requests, and your URL list is not uploaded to our servers for processing.',
    ],
    examples: [
      {
        explanation: 'Extracts the hostname while discarding the path, query string, and fragment identifier',
        input: 'https://example.com/path?query=1#section',
        output: 'example.com',
      },
      {
        explanation: 'Strips the leading www. prefix by default to align with the base domain',
        input: 'https://www.example.com/page',
        output: 'example.com',
      },
      {
        explanation: 'Preserves distinct subdomains by default unless Root Domain Only mode is enabled',
        input: 'https://blog.example.com/article',
        output: 'blog.example.com',
      },
      {
        explanation: 'Extracts the hostname while discarding the port number and path',
        input: 'http://example.com:8080/path',
        output: 'example.com',
      },
    ],
    boundaries: [
      {
        title: 'Requires Absolute HTTP or HTTPS URLs',
        description:
          'The extractor requires absolute web addresses starting with http:// or https://. Scheme-less entries (such as example.com/page), relative paths (/about), and non-HTTP schemes (such as ftp://) are invalid and omitted from output.',
      },
      {
        title: 'Preserves Subdomains by Default',
        description:
          'Subdomains remain distinct entries by default (e.g., blog.example.com and shop.example.com remain separate). You must explicitly enable Root Domain Only in options to condense supported subdomains.',
      },
      {
        title: 'Root Domain Mode Uses a Limited Heuristic',
        description:
          'When Root Domain Only is enabled, the tool does not use a complete Public Suffix List. It recognizes a limited set of common multi-part suffixes (co.uk, gov.uk, com.au, net.au, co.jp, com.br, and co.nz), condensing other multi-segment hostnames by taking the last two segments.',
      },
      {
        title: 'Discards Non-Hostname URL Components',
        description:
          'Port numbers (:8080), URL paths (/folder/page), query parameters (?key=val), and fragment anchors (#section) are not included in extracted output.',
      },
      {
        title: 'Does Not Perform DNS or WHOIS Checks',
        description:
          'The tool operates strictly on text parsing. It does not perform DNS resolution, WHOIS registration queries, ownership lookups, or website availability checks.',
      },
      {
        title: 'Does Not Check Web Destinations',
        description:
          'No HTTP network requests, server status checks, redirect tracking, or canonical-tag inspections are performed.',
      },
    ],
    prepWorkflows: [
      {
        title: 'Normalize URL Structure',
        description:
          'Standardize hostname casing, strip default ports, and align trailing slashes across valid web addresses before extracting hostnames.',
        linkPath: '/url-normalizer',
      },
      {
        title: 'Validate URL Syntax',
        description:
          'Check URL syntax and separate entries the toolkit identifies as valid or invalid.',
        linkPath: '/bulk-url-validator',
      },
      {
        title: 'Clean Whitespace & Line Breaks',
        description:
          'Trim leading/trailing whitespace, remove blank lines, and fix path formatting artifacts before extracting hostnames.',
        linkPath: '/url-cleaner',
      },
      {
        title: 'Remove Duplicate URLs',
        description:
          'Deduplicate complete URL lines before processing if you want to inspect a unique URL list first.',
        linkPath: '/duplicate-url-remover',
      },
      {
        title: 'Open Web Addresses in Batches',
        description:
          'Launch batches of complete URLs in controlled browser tabs for manual verification.',
        linkPath: '/bulk-url-opener',
      },
      {
        title: 'Strip Marketing & UTM Tags',
        description:
          'Remove tracking tokens from URLs before other workflows; extraction itself discards query strings automatically.',
        linkPath: '/utm-remover',
      },
    ],
    howToSteps: [
      {
        step: 1,
        title: 'Paste or import absolute URLs',
        description:
          'Paste web addresses starting with http:// or https:// into the editor (one URL per line) or import a text file. Scheme-less entries are omitted.',
      },
      {
        step: 2,
        title: 'Configure extraction options',
        description:
          'Open the options tray to choose whether to Strip "www." prefix, extract Root domain only, or Deduplicate extracted domain list.',
      },
      {
        step: 3,
        title: 'Click Extract Domains',
        description:
          'Click "Extract Domains" to generate a list of extracted hostnames or root domains from accepted absolute URLs.',
      },
      {
        step: 4,
        title: 'Review and export',
        description:
          'Review the extracted list count in the preview panel, then copy the results to your clipboard or download them as a TXT or CSV file.',
      },
    ],
    faqs: [
      {
        question: 'What does Domain & Hostname Extractor extract by default?',
        answer:
          'By default, the tool extracts the full lowercase hostname from each valid absolute HTTP or HTTPS URL. The www. prefix is stripped by default to merge www and root variations, while distinct subdomains (such as blog.example.com) are preserved.',
      },
      {
        question: 'What is the difference between a hostname and Root Domain Only mode?',
        answer:
          'A hostname includes subdomains (for example, blog.example.com remains blog.example.com). When you enable Root Domain Only, the tool attempts to condense subdomains into the base domain (such as example.com) using a heuristic for common suffixes like .co.uk and .com.au.',
      },
      {
        question: 'Why are URLs without http:// or https:// missing from the results?',
        answer:
          'The extractor requires absolute URLs with an explicit http:// or https:// scheme to safely parse hostnames. Scheme-less lines (like example.com/page), relative paths, FTP links, and invalid text entries are skipped.',
      },
      {
        question: 'How is the "www." prefix handled?',
        answer:
          'The "www." prefix is stripped by default so that www.example.com and example.com map to the same host. You can uncheck "Strip www. prefix" in the extraction options tray if you prefer to retain it.',
      },
      {
        question: 'Are extracted hostnames automatically deduplicated?',
        answer:
          'Yes. By default, duplicate hostnames are removed so that each unique host appears only once, preserving the order of its first occurrence. You can disable deduplication in the options tray if you want every line preserved.',
      },
      {
        question: 'What happens to port numbers, paths, query parameters, and fragments?',
        answer:
          'All non-hostname components—including port numbers (such as :8080), URL paths, query strings, and fragment anchors (#)—are completely excluded from extracted output.',
      },
      {
        question: 'Does the tool check DNS, WHOIS, registration, or whether a website is online?',
        answer:
          'No. The tool performs client-side string extraction in your browser without network activity. It does not verify domain registration, query WHOIS records, resolve DNS, or check server status.',
      },
      {
        question: 'How many URLs can I process, and is my URL list uploaded?',
        answer:
          'The interface supports lists of up to 5,000 URLs, and extraction runs locally in your browser. Your URL list is not uploaded to our servers for processing.',
      },
    ],
    relatedToolIds: ['validator', 'normalizer', 'cleaner', 'dedup', 'opener'],
  },
  normalizer: {
    id: 'normalizer',
    path: '/url-normalizer',
    name: 'Bulk URL Normalizer',
    shortTitle: 'URL Normalizer',
    h1: 'Bulk URL Normalizer – Standardize URL Formatting in Bulk',
    metaTitle: 'Bulk URL Normalizer – Standardize URL Formatting',
    metaDescription:
      'Normalize HTTP and HTTPS URLs in bulk. Lowercase hostnames, remove matching default ports, and optionally adjust trailing slashes, query order, or HTTPS.',
    summary:
      'Normalize absolute HTTP and HTTPS URLs by lowercasing hostnames and removing matching default ports. Optionally remove non-root trailing slashes, sort query parameters, or convert HTTP to HTTPS.',
    defaultAction: 'normalize',
    aboutDetails: [
      'Preparing URL lists for data analysis, crawl-data reviews, backlink audits, spreadsheet cleanups, and comparison or deduplication workflows frequently requires consistent URL formatting. Variations in domain letter case, redundant default port numbers, inconsistent trailing slashes, or differing query parameter orders can cause identical web resources to appear as distinct entries.',
      'Bulk URL Normalizer standardizes absolute HTTP and HTTPS web addresses directly in your browser. By default, the tool lowercases hostnames, removes matching default ports (:80 for HTTP and :443 for HTTPS), preserves original HTTP schemes, preserves path casing, preserves existing trailing slashes, maintains original query parameter order, and keeps fragment anchors intact. Through the normalization options tray, you can also enable optional settings to "Convert HTTP to HTTPS (Explicit Opt-In)", "Strip trailing slash on path endpoints", or "Sort query parameters alphabetically".',
      'All normalization runs entirely client-side using JavaScript in your web browser memory. The tool does not perform DNS lookups, send HTTP network requests, follow redirects, inspect canonical tags, or verify server availability. Your URL list is processed directly on your device and is not uploaded to our servers for processing.',
    ],
    examples: [
      {
        explanation: 'Default behavior lowercases the hostname and removes default port :80 for HTTP while strictly preserving path casing',
        input: 'http://EXAMPLE.COM:80/Path',
        output: 'http://example.com/Path',
      },
      {
        explanation: 'Default behavior preserves HTTP schemes without modification; HTTP is not converted to HTTPS unless explicitly enabled',
        input: 'http://example.com/page',
        output: 'http://example.com/page',
      },
      {
        explanation: 'Optional "Strip trailing slash on path endpoints" setting removes trailing slashes from subpaths, while root "/" is not removed',
        input: 'https://example.com/docs/',
        output: 'https://example.com/docs',
      },
      {
        explanation: 'Optional "Sort query parameters alphabetically" setting sorts parameters by key; sorting is off by default and preserves original parameter order',
        input: 'https://example.com/path?z=1&a=2',
        output: 'https://example.com/path?a=2&z=1',
      },
    ],
    boundaries: [
      {
        title: 'Requires Absolute HTTP or HTTPS URLs for Normalization',
        description:
          'The normalizer processes only absolute web addresses starting with http:// or https://. Scheme-less entries (such as example.com/page), relative paths (/about), non-HTTP protocols (such as ftp://), and malformed lines are not normalized. They are preserved unchanged in your output list and are not counted as modified.',
      },
      {
        title: 'Does Not Lowercase URL Paths',
        description:
          'While hostnames are converted to lowercase under standard URL conventions, URL path segments retain their original casing because web servers can treat path casing as case-sensitive.',
      },
      {
        title: 'Does Not Force HTTPS by Default',
        description:
          'HTTP URLs remain HTTP unless the "Convert HTTP to HTTPS (Explicit Opt-In)" option is explicitly enabled. Converting schemes is an optional user choice and is not assumed to be appropriate for all destinations.',
      },
      {
        title: 'Preserves Non-Default Ports',
        description:
          'The default port removal rule removes matching standard ports (:80 for HTTP and :443 for HTTPS). Non-default port numbers such as :8080, :3000, and :8443 are preserved.',
      },
      {
        title: 'Does Not Remove Query Parameters',
        description:
          'Query parameters remain attached to URLs. Optional sorting reorders parameters alphabetically by key, but parameters are not stripped. Use UTM & Tracking Parameter Remover if you want to remove marketing or campaign tokens.',
      },
      {
        title: 'Does Not Check Destinations',
        description:
          'The normalizer performs client-side string transformations only. It does not perform DNS lookups, HTTP network requests, server status checks, redirect resolution, canonical-tag inspection, or website availability checks.',
      },
    ],
    prepWorkflows: [
      {
        title: 'Clean Whitespace & Formatting',
        description:
          'Trim leading/trailing whitespace, remove blank lines, encode unescaped spaces, and collapse duplicate path slashes.',
        linkPath: '/url-cleaner',
      },
      {
        title: 'Remove Tracking Parameters',
        description:
          'Strip supported marketing and campaign parameters; Normalizer itself does not remove query parameters.',
        linkPath: '/utm-remover',
      },
      {
        title: 'Remove Duplicate URLs',
        description:
          'Deduplicate identical links; normalization standardizes formatting but does not automatically deduplicate output.',
        linkPath: '/duplicate-url-remover',
      },
      {
        title: 'Extract Domains & Hostnames',
        description:
          'Isolate distinct hostnames or root domains from your normalized web links.',
        linkPath: '/domain-extractor',
      },
      {
        title: 'Validate URL Syntax',
        description:
          'Check URL syntax and separate entries the toolkit identifies as valid or invalid.',
        linkPath: '/bulk-url-validator',
      },
      {
        title: 'Open URLs in Batches',
        description:
          'Launch your formatted links in controlled browser tab batches for manual review without live verification during normalization.',
        linkPath: '/bulk-url-opener',
      },
    ],
    howToSteps: [
      {
        step: 1,
        title: 'Paste or import URLs',
        description:
          'Paste web addresses into the editor (one per line) or import a text file. Absolute HTTP/HTTPS URLs are normalized, while unsupported or invalid lines remain unchanged.',
      },
      {
        step: 2,
        title: 'Choose normalization options',
        description:
          'Open the options tray to review settings. Default rules lowercase hostnames and remove default ports (:80/:443). Optional toggles let you sort query parameters alphabetically, strip trailing slashes on path endpoints, or convert HTTP to HTTPS.',
      },
      {
        step: 3,
        title: 'Click Normalize URLs',
        description:
          'Click "Normalize URLs" to lowercase domain names and strip matching default ports, retaining path casing, query parameter order, and trailing slashes by default (or applying optional sorting and slash rules when enabled).',
      },
      {
        step: 4,
        title: 'Review and export',
        description:
          'Review the modified lines count, inspect formatted links in the preview pane, and copy the results to your clipboard or download them as a text file.',
      },
    ],
    faqs: [
      {
        question: 'Why does the normalizer lowercase hostnames but not paths?',
        answer:
          'Domain names (hostnames) are case-insensitive under internet standards, but URL path segments can be case-sensitive depending on the destination web server operating system. Lowercasing paths could cause 404 errors, so path casing is strictly preserved.',
      },
      {
        question: 'Does the normalizer automatically convert HTTP to HTTPS?',
        answer:
          'No. HTTP links remain HTTP by default. Converting HTTP to HTTPS is an optional setting that changes the protocol scheme, and should only be enabled when you know the destination server supports HTTPS.',
      },
      {
        question: 'Which port numbers are removed?',
        answer:
          'When standard default port stripping is enabled, the normalizer removes port :80 from HTTP URLs and port :443 from HTTPS URLs. Non-default ports (such as :8080, :3000, or :8443) are preserved because they specify explicit destination ports.',
      },
      {
        question: 'How are trailing slashes handled?',
        answer:
          'By default, existing trailing slashes are preserved. When the optional "Strip trailing slash on path endpoints" setting is enabled, trailing slashes are removed from subpaths (such as /docs/ to /docs), while the root slash (/) is retained. Additionally, WHATWG URL parsing may serialize a bare domain such as https://example.com with a trailing slash as https://example.com/.',
      },
      {
        question: 'Are query parameters sorted or removed?',
        answer:
          'Query parameters are not removed by the normalizer. Their original order is preserved by default. You can optionally enable alphabetical sorting by key if you want consistent parameter ordering. To strip marketing or campaign parameters, use UTM & Tracking Parameter Remover.',
      },
      {
        question: 'What happens to invalid, scheme-less, relative, or FTP URLs?',
        answer:
          'Inputs that are not valid absolute HTTP or HTTPS URLs—such as scheme-less addresses (example.com/page), relative paths (/about), non-HTTP protocols (ftp://), or invalid text—are preserved unchanged in your output list and are not counted as modified.',
      },
      {
        question: 'Does the normalizer check whether URLs are online or determine their canonical URL?',
        answer:
          'No. The tool performs client-side string formatting only. It does not perform DNS lookups, make HTTP network requests, follow redirects, inspect canonical tags, or verify server availability.',
      },
      {
        question: 'How many URLs can I process, and is my URL list uploaded?',
        answer:
          'The interface supports lists of up to 5,000 URLs, and normalization runs locally in your browser. Your URL list is not uploaded to our servers for processing.',
      },
    ],
    relatedToolIds: ['cleaner', 'utm', 'dedup', 'extractor', 'validator', 'opener'],
  },
  validator: {
    id: 'validator',
    path: '/bulk-url-validator',
    name: 'Bulk URL Validator',
    shortTitle: 'URL Validator',
    h1: 'Bulk URL Validator – Check URL Syntax in Bulk',
    metaTitle: 'Bulk URL Validator – Check HTTP & HTTPS URL Syntax',
    metaDescription:
      'Validate HTTP and HTTPS URL syntax for up to 5,000 entries in your browser. Separate accepted and invalid URLs and review validation reasons.',
    summary:
      'Check bulk URL lists for absolute HTTP and HTTPS syntax. Separate accepted web addresses from malformed or unsupported entries and review validation reasons directly in your browser.',
    defaultAction: 'validate',
    aboutDetails: [
      'Imported link collections, spreadsheet exports, marketing data files, and sitemaps frequently accumulate formatting flaws that disrupt downstream processing. Bulk URL Validator checks lists of web addresses against standard URL syntax rules, allowing you to isolate entries that match the toolkit’s accepted absolute HTTP and HTTPS format from malformed strings before loading them into databases, crawlers, or outreach tools.',
      'Under the validator’s rules, a web address is accepted if it specifies an explicit HTTP or HTTPS scheme (matched case-insensitively), contains a parseable hostname, avoids unencoded whitespace, and conforms to WHATWG URL parsing specifications. Localhost, single-label intranet names, IPv4 and IPv6 addresses, and custom port numbers can be accepted when syntactically parseable. The validator does not require or verify a public top-level domain (TLD), and acceptance by the tool indicates syntactic compliance rather than confirming that a destination exists or is currently online.',
      'All validation runs entirely client-side using JavaScript in your web browser memory. The tool does not perform DNS lookups, make HTTP network requests, verify HTTP status codes, follow redirects, inspect SSL/TLS certificates, query domain registries, or run malware scans. Your URL list is processed directly on your device and is not uploaded to our servers for processing.',
    ],
    examples: [
      {
        explanation: 'Accepted because it has an explicit HTTPS scheme, parseable hostname, and supported URL structure. Query parameters and fragments are allowed.',
        input: 'https://example.com/path?x=1#section',
        output: 'Valid',
      },
      {
        explanation: 'Scheme-less input is rejected because the validator requires explicit http:// or https://.',
        input: 'example.com/page',
        output: 'Invalid — Invalid absolute HTTP/HTTPS URL',
      },
      {
        explanation: 'Raw whitespace is rejected; this validator does not auto-encode or repair it.',
        input: 'https://example.com/a b',
        output: 'Invalid — Invalid absolute HTTP/HTTPS URL (contains unencoded whitespace)',
      },
      {
        explanation: 'FTP may be parseable as a URL generally, but this validator accepts only HTTP and HTTPS.',
        input: 'ftp://example.com/file',
        output: 'Invalid — Invalid absolute HTTP/HTTPS URL',
      },
    ],
    boundaries: [
      {
        title: 'Requires Absolute HTTP or HTTPS URLs',
        description:
          'The validator processes only absolute addresses beginning with http:// or https://. Scheme-less entries (such as example.com), relative paths (/about), and non-HTTP protocols (such as ftp://, mailto:, or file:) are flagged as invalid.',
      },
      {
        title: 'Does Not Check Whether a Page Is Online',
        description:
          'No HTTP requests or server status checks occur. A syntactically accepted URL may still return a 404 Not Found error, a 500 server error, fail to load, or point to an inactive domain.',
      },
      {
        title: 'Does Not Verify DNS, Registration, or Public TLD Validity',
        description:
          'The tool does not resolve DNS records, query WHOIS data, or check a public TLD registry. Addresses with localhost, single-label hostnames, IP addresses, or unverified extensions may be accepted if they parse under standard URL syntax rules.',
      },
      {
        title: 'Does Not Auto-Repair Invalid URLs',
        description:
          'The validator inspects entries without auto-prefixing missing schemes, encoding unescaped spaces, correcting typos, or repairing corrupted strings. Invalid entries are preserved verbatim for inspection.',
      },
      {
        title: 'Does Not Deduplicate or Remove Tracking Parameters',
        description:
          'Repeated lines remain duplicated in both valid and invalid sets unless you use Duplicate URL Remover. Query strings and tracking tokens remain intact unless you use UTM & Tracking Parameter Remover.',
      },
      {
        title: 'Does Not Assess Security or Final Destinations',
        description:
          'The tool does not perform malware or phishing reputation scanning, inspect SSL/TLS certificates, follow redirect chains, or inspect canonical tags.',
      },
    ],
    prepWorkflows: [
      {
        title: 'Clean Whitespace & Formatting',
        description:
          'Trim leading/trailing whitespace, eliminate empty rows, encode unescaped spaces, and fix certain formatting errors before re-validating.',
        linkPath: '/url-cleaner',
      },
      {
        title: 'Remove Duplicate URLs',
        description:
          'Eliminate repeated links; Bulk URL Validator evaluates syntax line by line without removing duplicate entries.',
        linkPath: '/duplicate-url-remover',
      },
      {
        title: 'Remove Tracking Parameters',
        description:
          'Strip marketing and campaign tokens; validation checks structure but does not remove query parameters.',
        linkPath: '/utm-remover',
      },
      {
        title: 'Standardize URL Formatting',
        description:
          'Lowercase hostnames and strip default ports across accepted links; Normalizer does not repair arbitrary scheme-less or invalid entries.',
        linkPath: '/url-normalizer',
      },
      {
        title: 'Extract Domains & Hostnames',
        description:
          'Isolate distinct hostnames or root domains from accepted HTTP and HTTPS addresses.',
        linkPath: '/domain-extractor',
      },
      {
        title: 'Open Accepted URLs in Batches',
        description:
          'Launch accepted web links in controlled browser tab batches for manual review; Validator does not verify live reachability.',
        linkPath: '/bulk-url-opener',
      },
    ],
    howToSteps: [
      {
        step: 1,
        title: 'Paste or import URLs',
        description:
          'Paste your web addresses into the editor (one entry per line) or import a text file. The interface supports lists of up to 5,000 URLs.',
      },
      {
        step: 2,
        title: 'Click Find Invalid',
        description:
          'Click "Find Invalid" in the action toolbar to evaluate your entries against the validator’s absolute HTTP and HTTPS syntax rules.',
      },
      {
        step: 3,
        title: 'Review accepted and invalid entries',
        description:
          'Inspect accepted links in the Raw Text and Table Preview tabs, or switch to the Invalid URLs tab to review line numbers, failure reasons, and raw invalid text.',
      },
      {
        step: 4,
        title: 'Copy or download results',
        description:
          'Copy accepted entries to your clipboard, download them as a TXT or CSV file, or click "Download Invalid List" in the Invalid URLs tab to export errors.',
      },
    ],
    faqs: [
      {
        question: 'Does the validator check whether a URL is live or online?',
        answer:
          'No. The validator performs client-side syntax checks only. It does not send HTTP network requests, verify server responses (such as HTTP 200 or 404), follow redirects, or verify whether a website is currently accessible.',
      },
      {
        question: 'Which URL protocols does the validator accept?',
        answer:
          'The validator strictly accepts absolute HTTP and HTTPS web addresses. Protocol matching is case-insensitive (http:// and https://). Other schemes—including FTP, mailto, tel, javascript, data, and file—are classified as invalid.',
      },
      {
        question: 'Why are URLs without http:// or https:// marked invalid?',
        answer:
          'The validator requires an explicit protocol scheme to determine valid web address syntax. Scheme-less entries (such as example.com or www.example.com) and relative paths (/about) are flagged as invalid because the tool does not guess or auto-prefix protocols.',
      },
      {
        question: 'What kinds of syntax problems can be flagged?',
        answer:
          'The validator flags missing or unsupported protocols, unencoded whitespace, invalid port numbers (such as out-of-range values like :99999), and malformed structures rejected by WHATWG URL parsing. Failures are grouped into three user-visible categories, with many issues receiving the generic "Invalid absolute HTTP/HTTPS URL" message.',
      },
      {
        question: 'Are localhost, IP addresses, and custom ports supported?',
        answer:
          'Yes. Syntactically parseable local and intranet addresses—such as http://localhost, single-label hostnames, IPv4 addresses (http://127.0.0.1), bracketed IPv6 addresses, and valid custom ports (such as :3000 or :8080)—are accepted. Out-of-range port numbers are rejected as invalid.',
      },
      {
        question: 'Does the validator fix invalid URLs automatically?',
        answer:
          'No. The tool is an inspector, not a repair utility. It does not add missing protocols, encode spaces, normalize paths, or remove malformed characters. You can copy or download your invalid list to fix entries or use companion tools like Bulk URL Cleaner.',
      },
      {
        question: 'Does the validator verify domain registration or TLD validity?',
        answer:
          'No. The validator operates without DNS lookups, WHOIS queries, or ICANN registry verification. Acceptance by the validator indicates syntactic compliance under standard URL parsing, not that a public domain name is registered or active.',
      },
      {
        question: 'How many URLs can I validate, and is my URL list uploaded?',
        answer:
          'The interface supports lists of up to 5,000 URLs, and validation runs locally in your browser. Your URL list is not uploaded to our servers for processing.',
      },
    ],
    relatedToolIds: ['cleaner', 'dedup', 'utm', 'normalizer', 'extractor', 'opener'],
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
