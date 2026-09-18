export const SAMPLE_URLS = [
  'https://www.google.com/search?q=bulk+url+tools&utm_source=google&utm_medium=cpc&utm_campaign=summer_sale&gclid=Cj0KCQjwgJv4BRCrARIsAG4Az',
  'https://github.com/facebook/react?utm_source=dev_newsletter&fbclid=IwAR2a87X9',
  'http://EXAMPLE.COM:80/docs/getting-started//guide/',
  'https://www.apple.com/iphone/compare/?ref=affiliate_123&utm_term=buy_iphone',
  'https://www.apple.com/iphone/compare/?ref=affiliate_123&utm_term=buy_iphone', // intentional duplicate
  '   https://en.wikipedia.org/wiki/Uniform_Resource_Locator   ', // whitespace
  '', // intentional blank line
  'https://developer.mozilla.org/en-US/docs/Web/API/URL_API',
  'http://subdomain.blog.example.co.uk/articles/2026/09/post-slug?category=tech&page=1&id=9482&utm_content=footer_link',
  'not-a-valid-url-without-domain', // intentional invalid
  'https://news.ycombinator.com/',
  'https://stackoverflow.com/questions/tagged/javascript?tab=Votes&msclkid=789abc456',
  'https://example.org/with unescaped space in path/view', // formatting issue
  'http://insecure-site.org/portal/login', // http should remain http unless force https checked
  'https://EXAMPLE.COM:443/docs/getting-started/guide/', // normalization candidate
  'https://stripe.com/docs/api?action=create&mode=test',
  'https://github.com/facebook/react',
];

export const SAMPLE_URLS_TEXT = SAMPLE_URLS.join('\n');
