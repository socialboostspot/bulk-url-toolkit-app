import React from 'react';
import {
  Link2,
  ShieldCheck,
  Cpu,
  Zap,
  Users,
  Search,
  Code2,
  BarChart3,
  Megaphone,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Scissors,
  CheckCheck,
  Trash2,
  Globe,
  SlidersHorizontal,
  FileCheck2,
  ExternalLink,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Bulk URL Toolkit',
    url: 'https://bulk-url-toolkit-app.socialboostspot.workers.dev/about',
    description:
      'Learn about Bulk URL Toolkit, a free client-side suite of URL utilities for SEO professionals, developers, and marketers. Privacy-first link processing in your browser.',
    mainEntity: {
      '@type': 'WebApplication',
      name: 'Bulk URL Toolkit',
      url: 'https://bulk-url-toolkit-app.socialboostspot.workers.dev/',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
  };

  const audiences = [
    {
      title: 'SEO Professionals & Auditors',
      icon: Search,
      color: 'blue',
      description:
        'Audit large crawl lists, clean exported sitemaps, verify canonical URL structures, standardize protocol formatting, and deduplicate link inventories before site migrations.',
    },
    {
      title: 'Web Developers & Engineers',
      icon: Code2,
      color: 'indigo',
      description:
        'Validate URL syntax against web standards, eliminate invalid port specifications, test redirects, and sanitize user-submitted link datasets prior to database insertion.',
    },
    {
      title: 'Digital & Growth Marketers',
      icon: Megaphone,
      color: 'emerald',
      description:
        'Strip ad tracking tokens (such as gclid, fbclid, msclkid) and campaign UTM tags to restore pristine, shareable links while preserving core functional query parameters.',
    },
    {
      title: 'Data Analysts & Researchers',
      icon: BarChart3,
      color: 'purple',
      description:
        'Condense tens of thousands of complex web links into clean inventories of root domains or unique hostnames for competitive backlink research and market analysis.',
    },
  ];

  const tools = [
    {
      name: 'Bulk URL Opener',
      path: '/bulk-url-opener',
      icon: ExternalLink,
      desc: 'Open multiple web links in controlled batches (10, 25, or 50 tabs) to prevent browser freezes and handle popup permissions safely.',
    },
    {
      name: 'Bulk URL Cleaner',
      path: '/url-cleaner',
      icon: Scissors,
      desc: 'Sanitize messy link lists by eliminating leading/trailing whitespace, blank lines, unescaped spaces, and accidental double slashes.',
    },
    {
      name: 'Duplicate URL Remover',
      path: '/duplicate-url-remover',
      icon: CheckCheck,
      desc: 'Identify and remove duplicate web addresses while strictly preserving the initial order of appearance, with case-sensitivity toggles.',
    },
    {
      name: 'UTM & Tracking Remover',
      path: '/utm-remover',
      icon: Trash2,
      desc: 'Strip advertising click IDs and marketing tokens while safely preserving functional search parameters and product IDs.',
    },
    {
      name: 'Domain & Hostname Extractor',
      path: '/domain-extractor',
      icon: Globe,
      desc: 'Transform raw link collections into unique lists of root domains or subdomains with automatic deduplication.',
    },
    {
      name: 'Bulk URL Normalizer',
      path: '/url-normalizer',
      icon: SlidersHorizontal,
      desc: 'Standardize URL formatting, lowercase domain hostnames, strip default ports (:80/:443), and safely normalize protocols.',
    },
    {
      name: 'Bulk URL Validator',
      path: '/bulk-url-validator',
      icon: FileCheck2,
      desc: 'Verify syntax compliance across thousands of web addresses, separating valid links from broken or malformed entries.',
    },
  ];

  const handleLinkClick = (path: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
      e.preventDefault();
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-12 max-w-4xl mx-auto py-2">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Breadcrumb / Back Link */}
      <div>
        <a
          href="/"
          onClick={handleLinkClick('/')}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All URL Utilities</span>
        </a>
      </div>

      {/* Header Banner */}
      <header className="border-b border-slate-200 pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
          <Link2 className="w-4 h-4 text-blue-600" />
          <span>About the Toolkit</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          About Bulk URL Toolkit
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
          Bulk URL Toolkit is a free, privacy-first web utility suite engineered to handle high-volume
          URL processing directly inside your browser. No server uploads, no accounts, and no
          artificial usage limits.
        </p>
      </header>

      {/* Section: What is Bulk URL Toolkit */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          What is Bulk URL Toolkit?
        </h2>
        <div className="text-slate-600 space-y-3 leading-relaxed text-sm sm:text-base">
          <p>
            Working with thousands of URLs is a daily requirement for SEO specialists, data analysts,
            growth marketers, and web engineers. However, link data copied from spreadsheets, web
            crawlers, databases, or text documents is often cluttered with duplicate entries, stray
            whitespace, tracking parameters, inconsistent protocols, and syntax errors.
          </p>
          <p>
            Bulk URL Toolkit solves this by providing a unified, client-side workstation designed to
            inspect, sanitize, transform, and manage lists of up to 5,000 URLs with instant feedback.
          </p>
        </div>
      </section>

      {/* Section: Why the Toolkit Was Created */}
      <section className="bg-slate-100/70 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
          <Zap className="w-5 h-5 text-blue-600" />
          <span>Why the Toolkit Was Created</span>
        </h2>
        <div className="text-slate-600 space-y-3 text-sm leading-relaxed">
          <p>
            Existing online URL tools often suffer from two major drawbacks:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-2">
              <strong className="text-slate-900 font-semibold block text-sm flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Privacy Concerns</span>
              </strong>
              <p className="text-xs text-slate-600 leading-relaxed">
                Many online utility sites transmit your link lists to their backend servers for
                processing. When working with client sitemaps, unreleased staging environments, or
                internal marketing campaigns, uploading sensitive lists to external databases introduces
                unacceptable data exposure risks.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-2">
              <strong className="text-slate-900 font-semibold block text-sm flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-blue-600" />
                <span>Performance & Reliability</span>
              </strong>
              <p className="text-xs text-slate-600 leading-relaxed">
                Server-dependent tools frequently lag, timeout, or impose restrictive daily batch
                limits when handling thousands of rows. Other simple tools lack essential features like
                undo history, real-time validation counters, or safe batch-opening controls.
              </p>
            </div>
          </div>
          <p className="pt-2">
            Bulk URL Toolkit was built to resolve these limitations by performing 100% of calculations
            directly on your machine using your browser’s JavaScript engine.
          </p>
        </div>
      </section>

      {/* Section: Privacy-First Client-Side Processing */}
      <section className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-lg sm:text-xl">
          <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>Client-Side Processing Guarantee</span>
        </div>
        <div className="text-emerald-950 text-sm leading-relaxed space-y-3">
          <p>
            Your URL lists and uploaded files are never transmitted to our servers for processing.
            Whether you paste 10 URLs or 5,000 URLs:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-emerald-900">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>No Server Storage:</strong> Parsing, deduplication, regular expressions, and
                filtering execute entirely within your browser’s memory.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Local File Reading:</strong> Files loaded via upload are read via the HTML5
                FileReader API locally on your device without network transmission.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Zero Tracking:</strong> No tracking cookies, advertising pixels, or telemetry
                scripts monitor your lists.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section: Who It Is Designed For */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            <span>Who It Is Designed For</span>
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Built for specialists and teams managing high-volume web links.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {audiences.map((aud) => (
            <div
              key={aud.title}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-2.5"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
                  <aud.icon className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">{aud.title}</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{aud.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Available Tools Directory */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Available URL Utilities
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Access individual tools tailored for specific URL hygiene workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.path}
              onClick={handleLinkClick(tool.path)}
              className="group bg-white hover:bg-blue-50/40 border border-slate-200 hover:border-blue-300 rounded-xl p-4 shadow-2xs transition-all flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                    <tool.icon className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    <span>{tool.name}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">{tool.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Section: Free to Use */}
      <section className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-slate-900 text-base">Free to Use • No Registration Required</h3>
          <p className="text-xs text-slate-500 mt-1">
            All tools are available freely in your web browser with no subscriptions or mandatory accounts.
          </p>
        </div>
        <a
          href="/"
          onClick={handleLinkClick('/')}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm px-4 py-2 rounded-lg transition-colors shadow-2xs cursor-pointer shrink-0"
        >
          <span>Open Toolkit</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </section>
    </div>
  );
};
