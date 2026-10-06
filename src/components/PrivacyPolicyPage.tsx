import React from 'react';
import {
  ShieldCheck,
  Lock,
  Cpu,
  Server,
  EyeOff,
  Cookie,
  ExternalLink,
  Calendar,
  AlertCircle,
  FileCheck,
  CheckCircle2,
  ArrowLeft,
  Mail,
} from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  const lastUpdated = 'October 6, 2026';

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy',
    url: 'https://bulk-url-toolkit-app.socialboostspot.workers.dev/privacy',
    description:
      'Bulk URL Toolkit Privacy Policy explaining client-side browser URL processing, hosting logs, and cookie policies.',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Bulk URL Toolkit',
      url: 'https://bulk-url-toolkit-app.socialboostspot.workers.dev/',
    },
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto py-2">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Breadcrumb / Back Link */}
      <div>
        <a
          href="/"
          onClick={(e) => {
            if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
              e.preventDefault();
              onNavigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All URL Utilities</span>
        </a>
      </div>

      {/* Header Banner */}
      <header className="border-b border-slate-200 pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Privacy-First Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Privacy Policy
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span>Last Updated: {lastUpdated}</span>
          </div>
          <span>•</span>
          <span>Effective Immediately</span>
        </div>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-base pt-2">
          Bulk URL Toolkit is designed with a strict privacy-first principle: URL transformations,
          cleaning, deduplication, and syntax validations run locally inside your web browser. This
          Privacy Policy outlines how our tools function, what technical data is processed when you
          access our website, and how we protect your information.
        </p>
      </header>

      {/* Quick Summary Highlights */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <Cpu className="w-4 h-4" />
          </div>
          <h2 className="font-bold text-slate-900 text-sm">Local Browser Processing</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Your link lists are processed in your browser’s temporary memory. We do not upload your
            URLs to any application server.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-2">
          <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
            <Cookie className="w-4 h-4" />
          </div>
          <h2 className="font-bold text-slate-900 text-sm">No Cookies or Trackers</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            We do not use tracking cookies, advertising pixels, analytics software, or persistent local
            storage.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
            <Server className="w-4 h-4" />
          </div>
          <h2 className="font-bold text-slate-900 text-sm">Cloudflare Edge Hosting</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Static web assets are securely delivered via Cloudflare Workers with standard HTTPS
            encryption and network security.
          </p>
        </div>
      </section>

      {/* Policy Detailed Sections */}
      <div className="space-y-10 text-slate-700 text-sm leading-relaxed divide-y divide-slate-100">
        {/* 1. Information We Process */}
        <section className="space-y-4 pt-6 first:pt-0">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>1. Information We Process</span>
          </h2>
          <p>
            Depending on how you interact with Bulk URL Toolkit, we distinguish between two
            categories of information:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>
              <strong className="text-slate-800">User Input Data (URLs and Files):</strong> The web
              addresses, links, query strings, and text files you input or paste into our tools.
            </li>
            <li>
              <strong className="text-slate-800">Technical Connection Data:</strong> Standard network
              and HTTP request parameters transmitted automatically by your browser when requesting
              web pages over the internet (such as IP addresses and browser user-agent strings).
            </li>
          </ul>
        </section>

        {/* 2. URL and File Processing */}
        <section className="space-y-4 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>2. URL and File Processing</span>
          </h2>
          <p>
            When you paste links into the text editor or click any action button (such as Clean URLs,
            Remove Duplicates, Remove Tracking, Extract Domains, or Validate URLs):
          </p>
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 text-emerald-950 text-xs sm:text-sm space-y-2">
            <div className="flex items-center gap-2 font-semibold text-emerald-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>URL lists are NOT uploaded to our servers for processing</span>
            </div>
            <p className="text-emerald-800 leading-relaxed">
              All URL parsing, regular expression matching, parameter stripping, and domain
              extractions execute entirely on your own device using client-side JavaScript. Your URL
              lists are never sent to, collected by, or stored in any database or backend server
              operated by Bulk URL Toolkit.
            </p>
          </div>
          <p>
            <strong>File Uploads:</strong> If you use the file upload feature to load URLs from a{' '}
            <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded text-slate-800">.txt</code> or{' '}
            <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded text-slate-800">.csv</code> file,
            your file is read directly in your browser using the HTML5{' '}
            <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded text-slate-800">FileReader</code>{' '}
            API. The contents of the file are parsed into local browser memory without being
            transmitted across the network.
          </p>
        </section>

        {/* 3. Local Browser Processing */}
        <section className="space-y-4 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>3. Local Browser Processing</span>
          </h2>
          <p>
            Our utility suite is engineered as a single-page application (SPA). When you open Bulk URL
            Toolkit, the application code loads into your browser. Once loaded, all computations take
            place within your device’s JavaScript runtime engine.
          </p>
          <p>
            When you close the browser tab, refresh the page, or click the "Clear" button in the input editor, your input data and processed results are discarded from the browser’s volatile memory. We do
            not write your URL lists to <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded text-slate-800">localStorage</code>,{' '}
            <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded text-slate-800">sessionStorage</code>, or IndexedDB.
          </p>
        </section>

        {/* 4. Server and Technical Logs */}
        <section className="space-y-4 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>4. Server and Technical Logs</span>
          </h2>
          <p>
            While your URL list data is not uploaded, accessing any website over the internet
            necessarily involves standard technical communication between your device and the
            hosting infrastructure.
          </p>
          <p>
            Bulk URL Toolkit is hosted on <strong>Cloudflare Workers</strong> and served via
            Cloudflare’s global edge network (Static Assets). When your browser requests static files
            (such as HTML pages, stylesheets, icons, or JavaScript scripts), Cloudflare servers
            automatically receive and process standard HTTP transmission headers, including:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
            <li>Your Internet Protocol (IP) address</li>
            <li>Browser type, version, and language (User-Agent)</li>
            <li>Operating system and device platform</li>
            <li>Date and time of the asset request</li>
            <li>HTTP status codes and data transfer volume</li>
            <li>Referring webpage URL (Referer header)</li>
          </ul>
          <p>
            This technical data is processed by Cloudflare for network routing, edge caching,
            mitigating distributed denial-of-service (DDoS) attacks, detecting abusive bots, and
            ensuring infrastructure security. Bulk URL Toolkit does not maintain an independent
            application database containing user logs.
          </p>
        </section>

        {/* 5. Cookies and Analytics */}
        <section className="space-y-4 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>5. Cookies and Analytics</span>
          </h2>
          <p>
            <strong>Current Status:</strong> Bulk URL Toolkit currently does <strong>NOT</strong> set,
            read, or use any cookies. Specifically:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
            <li>No session cookies or persistent first-party cookies are used.</li>
            <li>No third-party tracking cookies or social media pixels are installed.</li>
            <li>No web analytics tools (such as Google Analytics) are loaded.</li>
            <li>No advertising cookies currently exist on this website.</li>
          </ul>
          <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 space-y-1.5">
            <strong className="block text-slate-900 font-semibold">Future Services Disclosure:</strong>
            <p>
              If web analytics, performance measurement services, or advertising networks (such as
              Google AdSense) are introduced in the future to help maintain and operate this free
              tool, this Privacy Policy will be updated prior to implementation with detailed
              disclosures regarding the specific cookies, data collection methods, and user consent or
              opt-out options.
            </p>
          </div>
        </section>

        {/* 6. Third-Party Services */}
        <section className="space-y-4 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>6. Third-Party Services</span>
          </h2>
          <p>
            The following third-party infrastructure is utilized to provide this website:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>
              <strong className="text-slate-800">Cloudflare:</strong> Provides DNS, edge caching,
              static asset delivery, and DDoS mitigation. For information about how Cloudflare handles
              infrastructure data, please refer to the{' '}
              <a
                href="https://www.cloudflare.com/privacypolicy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline inline-flex items-center gap-0.5"
              >
                Cloudflare Privacy Policy
                <ExternalLink className="w-3 h-3" />
              </a>
              .
            </li>
          </ul>
          <p>
            <strong>External Links & Bulk Opener:</strong> When you use our Bulk URL Opener tool or
            click external links, links open third-party websites in your browser. We have no
            control over the content, security practices, or privacy policies of any third-party
            websites you choose to open or visit.
          </p>
        </section>

        {/* 7. Data Retention */}
        <section className="space-y-4 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>7. Data Retention</span>
          </h2>
          <p>
            Because we do not collect or store the URL lists or files you process, there is no user
            URL data retained on our servers. Technical connection logs handled by our hosting and
            security provider (Cloudflare) are retained only in accordance with Cloudflare’s standard
            retention and security practices.
          </p>
        </section>

        {/* 8. Data Security */}
        <section className="space-y-4 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>8. Data Security</span>
          </h2>
          <p>
            We take appropriate technical measures to protect the integrity of the website:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
            <li>
              All communication with Bulk URL Toolkit is encrypted in transit using industry-standard
              Transport Layer Security (HTTPS/TLS).
            </li>
            <li>
              By executing all URL processing locally in your browser, the risk of data leakage during
              transit to a backend server is eliminated.
            </li>
          </ul>
        </section>

        {/* 9. Children's Privacy */}
        <section className="space-y-4 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>9. Children's Privacy</span>
          </h2>
          <p>
            Bulk URL Toolkit provides web and developer utility tools intended for a general audience.
            We do not knowingly collect, request, or maintain personal information from children
            under the age of 13 (or under 16 where applicable by law).
          </p>
        </section>

        {/* 10. Changes to This Privacy Policy */}
        <section className="space-y-4 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>10. Changes to This Privacy Policy</span>
          </h2>
          <p>
            We may occasionally update this Privacy Policy to reflect technical modifications to our
            tools, infrastructure changes, or the introduction of new features. Any revisions will be
            published on this page with an updated "Last Updated" date. We encourage you to review
            this policy periodically.
          </p>
        </section>

        {/* 11. Contact */}
        <section className="space-y-4 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>11. Contact Us</span>
          </h2>
          <p>
            If you have questions, feedback, or concerns regarding this Privacy Policy or the website's data-handling practices, please use any contact method officially published on Bulk URL Toolkit. If no contact method is currently displayed, a dedicated contact option may be added in a future update.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-700 space-y-1">
            <p className="font-semibold text-slate-900">Bulk URL Toolkit Project</p>
            <p className="text-slate-600">
              Hosted at:{' '}
              <span className="font-mono text-slate-800">
                https://bulk-url-toolkit-app.socialboostspot.workers.dev
              </span>
            </p>
            <p className="text-slate-500 text-xs pt-1">
              For general inquiries, review our documentation and tool pages directly on the site.
            </p>
          </div>
        </section>
      </div>

      {/* Footer Back Button */}
      <div className="pt-6 border-t border-slate-200 flex justify-between items-center">
        <a
          href="/"
          onClick={(e) => {
            if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
              e.preventDefault();
              onNavigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Bulk URL Toolkit</span>
        </a>
        <span className="text-xs text-slate-400">Privacy First • Client-Side Processing</span>
      </div>
    </div>
  );
};
