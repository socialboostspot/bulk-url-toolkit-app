import React from 'react';
import {
  FileText,
  ShieldCheck,
  Scale,
  AlertTriangle,
  ExternalLink,
  Calendar,
  CheckCircle2,
  ArrowLeft,
  HelpCircle,
  Cpu,
  Info,
} from 'lucide-react';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  const lastUpdated = 'October 6, 2026';

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms of Service',
    url: 'https://bulk-url-toolkit-app.socialboostspot.workers.dev/terms',
    description:
      'Terms of Service for Bulk URL Toolkit. Governing terms for browser-based client-side URL utilities.',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Bulk URL Toolkit',
      url: 'https://bulk-url-toolkit-app.socialboostspot.workers.dev/',
    },
  };

  const handleLinkClick = (path: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
      e.preventDefault();
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
          <Scale className="w-4 h-4 text-blue-600" />
          <span>User Agreement</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Terms of Service
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
          These Terms of Service govern your access to and use of Bulk URL Toolkit. By using this
          website and its tools, you agree to these Terms. Please read them carefully.
        </p>
      </header>

      {/* Terms Detailed Sections */}
      <div className="space-y-10 text-slate-700 text-sm leading-relaxed divide-y divide-slate-100">
        {/* 1. Acceptance of Terms */}
        <section className="space-y-3 pt-6 first:pt-0">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>1. Acceptance of Terms</span>
          </h2>
          <p>
            By accessing or using Bulk URL Toolkit, you agree to be bound by these Terms of Service.
            If you do not agree with any part of these Terms, you should discontinue using the website
            and tools immediately.
          </p>
        </section>

        {/* 2. Description of Service */}
        <section className="space-y-3 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>2. Description of Service</span>
          </h2>
          <p>
            Bulk URL Toolkit provides web browser-based utility tools intended for inspecting,
            organizing, and sanitizing web addresses. The available utilities include:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
            <li>
              <strong className="text-slate-800">Bulk URL Opener:</strong> Controlled opening of
              multiple links in browser tabs.
            </li>
            <li>
              <strong className="text-slate-800">URL Cleaner:</strong> Trimming whitespace, removing
              blank lines, encoding spaces, and fixing malformed duplicate slashes.
            </li>
            <li>
              <strong className="text-slate-800">Duplicate URL Remover:</strong> Deduplicating link
              lists with case-sensitive or insensitive matching.
            </li>
            <li>
              <strong className="text-slate-800">UTM & Tracking Remover:</strong> Stripping marketing
              tokens and click IDs while preserving functional parameters.
            </li>
            <li>
              <strong className="text-slate-800">Domain Extractor:</strong> Extracting unique hostnames
              or root domains from URL lists.
            </li>
            <li>
              <strong className="text-slate-800">URL Normalizer:</strong> Lowercasing hostnames,
              stripping default ports, and formatting URL syntax.
            </li>
            <li>
              <strong className="text-slate-800">Bulk URL Validator:</strong> Checking structural and
              technical syntax compliance of web addresses.
            </li>
          </ul>
        </section>

        {/* 3. Free Service */}
        <section className="space-y-3 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>3. Free Service</span>
          </h2>
          <p>
            Bulk URL Toolkit is currently provided free of charge, with no registration or paid
            subscription required. While access is currently free, we do not guarantee or promise
            that all features or future additions will always remain free or unaltered. We reserve the
            right to modify, suspend, or introduce paid features or limits at any time without prior
            notice.
          </p>
        </section>

        {/* 4. User Responsibilities */}
        <section className="space-y-3 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>4. User Responsibilities</span>
          </h2>
          <p>
            You are solely responsible for the URLs, text, and files you input, process, or open
            using Bulk URL Toolkit. You represent and warrant that you have all necessary rights to
            process the data you enter and that your use of the service complies with all applicable
            local, state, national, and international laws and regulations.
          </p>
        </section>

        {/* 5. Prohibited Use */}
        <section className="space-y-3 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>5. Prohibited Use</span>
          </h2>
          <p>You agree not to use Bulk URL Toolkit to:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
            <li>Engage in any unlawful, fraudulent, deceptive, or abusive activity.</li>
            <li>
              Process or disseminate links to malware, phishing pages, ransomware, or other malicious
              software.
            </li>
            <li>
              Attempt to interfere with, disrupt, overburden, or compromise the integrity or security
              of the website, hosting infrastructure, or connected networks.
            </li>
            <li>
              Circumvent, disable, or tamper with any security-related features or rate limits of the
              hosting network.
            </li>
          </ul>
        </section>

        {/* 6. Client-Side Processing Architecture */}
        <section className="space-y-3 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>6. Client-Side Processing Architecture</span>
          </h2>
          <p>
            URL list parsing, regular expression matching, deduplication, and transformation execute
            locally within your web browser’s JavaScript engine. Entered URL lists are not uploaded to
            our application servers for processing.
          </p>
          <p>
            However, this client-side architecture does not mean no data ever reaches the hosting
            network. Requesting the website assets inherently involves standard HTTP communication
            with our hosting and content delivery provider (Cloudflare), where standard technical
            transmission data (such as IP addresses and request headers) is processed for network
            routing, caching, and security purposes.
          </p>
        </section>

        {/* 7. Bulk URL Opener Disclaimer */}
        <section className="space-y-3 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>7. Bulk URL Opener Disclaimer</span>
          </h2>
          <p>
            The Bulk URL Opener utility launches external links in browser tabs based solely on the
            links you supply. You are entirely responsible for the URLs you choose to open.
          </p>
          <p>
            External websites opened through the tool are independent third-party properties. Opening
            numerous browser tabs simultaneously may consume substantial system memory (RAM) or
            trigger browser popup blockers. Bulk URL Toolkit is not responsible for browser crashes,
            system slowdowns, or the content or security of any external destinations you open.
          </p>
        </section>

        {/* 8. No Professional Advice */}
        <section className="space-y-3 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>8. No Professional Advice</span>
          </h2>
          <p>
            The outputs, metric counters, syntax indicators, and guidance provided by Bulk URL
            Toolkit are technical utility aids only. They do not constitute legal, cybersecurity,
            financial, or other professional advice. You should independently verify all transformed
            links, canonical designations, and validation results before deploying them in production
            databases, marketing campaigns, or site migrations.
          </p>
        </section>

        {/* 9. Accuracy and Availability */}
        <section className="space-y-3 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>9. Accuracy and Availability</span>
          </h2>
          <p>
            While we strive to ensure our regular expressions, syntax parsers, and normalization
            routines follow established web specifications, we do not guarantee that the tool will be
            completely error-free, uninterrupted, or suitable for every specialized edge case. The
            service is provided on an "as available" basis without uptime guarantees.
          </p>
        </section>

        {/* 10. Third-Party Websites and Links */}
        <section className="space-y-3 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>10. Third-Party Websites and Links</span>
          </h2>
          <p>
            Bulk URL Toolkit operates on web addresses pointing to third-party domains. We do not
            endorse, investigate, monitor, or assume responsibility for the accuracy, legality, or
            safety of any third-party websites referenced in your URL lists or linked from our pages.
          </p>
        </section>

        {/* 11. Intellectual Property */}
        <section className="space-y-3 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>11. Intellectual Property</span>
          </h2>
          <p>
            The website design, layout, code, text, graphics, and compilation of Bulk URL Toolkit are
            protected by applicable copyright and intellectual property principles. You may use the
            tools for personal, educational, or commercial URL hygiene purposes. You may not copy,
            mirror, scrape, or redistribute the website's codebase or design without authorization.
          </p>
          <p>
            You retain all rights to the URL lists and content you input into the toolkit. We claim no
            ownership or rights over your link lists.
          </p>
        </section>

        {/* 12. Disclaimer of Warranties */}
        <section className="space-y-3 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>12. Disclaimer of Warranties</span>
          </h2>
          <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 space-y-2">
            <p className="font-semibold uppercase tracking-wider text-slate-900">
              Disclaimer Notice
            </p>
            <p>
              BULK URL TOOLKIT AND ALL INCLUDED TOOLS ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE"
              BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT
              PERMISSIBLE BY APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING
              BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, TITLE, AND NON-INFRINGEMENT.
            </p>
          </div>
        </section>

        {/* 13. Limitation of Liability */}
        <section className="space-y-3 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>13. Limitation of Liability</span>
          </h2>
          <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 space-y-2">
            <p className="font-semibold uppercase tracking-wider text-slate-900">
              Limitation Notice
            </p>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL BULK URL TOOLKIT, ITS CREATORS,
              OR OPERATORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR
              PUNITIVE DAMAGES (INCLUDING LOSS OF DATA, LOSS OF PROFITS, BUSINESS INTERRUPTION, OR
              SYSTEM CRASHES) ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO, USE OF, OR INABILITY
              TO USE THIS SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </div>
        </section>

        {/* 14. Changes to the Service */}
        <section className="space-y-3 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>14. Changes to the Service</span>
          </h2>
          <p>
            We reserve the right at any time to modify, update, enhance, or discontinue any feature,
            tool, or portion of Bulk URL Toolkit, temporarily or permanently, with or without notice.
            We shall not be liable to you or any third party for any modification, suspension, or
            discontinuance of the service.
          </p>
        </section>

        {/* 15. Changes to These Terms */}
        <section className="space-y-3 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>15. Changes to These Terms</span>
          </h2>
          <p>
            We may revise these Terms of Service from time to time. When updates are published, the
            revised Terms will be made accessible on this page with an updated "Last Updated" date. By
            continuing to access or use the service after revisions become effective, you agree to be
            bound by the updated Terms.
          </p>
        </section>

        {/* 16. Contact */}
        <section className="space-y-3 pt-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>16. Contact</span>
          </h2>
          <p>
            If you have questions, feedback, or concerns regarding these Terms of Service or the
            website's data-handling practices, please use any contact method officially published on
            Bulk URL Toolkit. If no contact method is currently displayed, a dedicated contact option
            may be added in a future update.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-700 space-y-1">
            <p className="font-semibold text-slate-900">Bulk URL Toolkit</p>
            <p className="text-slate-600">
              Web Address:{' '}
              <span className="font-mono text-slate-800">
                https://bulk-url-toolkit-app.socialboostspot.workers.dev
              </span>
            </p>
            <p className="text-slate-500 text-xs pt-1">
              For general information on tool features and data practices, refer to our{' '}
              <a
                href="/about"
                onClick={handleLinkClick('/about')}
                className="text-blue-600 hover:underline"
              >
                About
              </a>{' '}
              and{' '}
              <a
                href="/privacy"
                onClick={handleLinkClick('/privacy')}
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </a>{' '}
              pages.
            </p>
          </div>
        </section>
      </div>

      {/* Footer Back Link */}
      <div className="pt-6 border-t border-slate-200 flex justify-between items-center">
        <a
          href="/"
          onClick={handleLinkClick('/')}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Bulk URL Toolkit</span>
        </a>
        <span className="text-xs text-slate-400">Terms of Service • Client-Side Processing</span>
      </div>
    </div>
  );
};
