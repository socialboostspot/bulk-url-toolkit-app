import React from 'react';
import {
  Mail,
  MessageSquare,
  Bug,
  Lightbulb,
  ShieldAlert,
  ArrowLeft,
  Info,
  Clock,
  HelpCircle,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact & Feedback',
    url: 'https://bulk-url-toolkit-app.socialboostspot.workers.dev/contact',
    description:
      'Contact and feedback information for Bulk URL Toolkit. Details on support channels, bug reports, and future contact updates.',
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

  const inquiryTypes = [
    {
      title: 'Bug Reports & Syntax Edge Cases',
      icon: Bug,
      desc: 'Reports regarding unexpected URL parsing behavior, browser compatibility quirks, or specific URL formatting edge cases.',
    },
    {
      title: 'Feature & Tool Suggestions',
      icon: Lightbulb,
      desc: 'Recommendations for new URL transformation options, additional tracking token presets, or export format enhancements.',
    },
    {
      title: 'Privacy & Architectural Inquiries',
      icon: ShieldAlert,
      desc: 'Questions regarding our client-side processing architecture, local browser memory handling, or edge hosting infrastructure.',
    },
    {
      title: 'General Feedback',
      icon: MessageSquare,
      desc: 'User experience feedback, suggestions for documentation clarity, or accessibility improvements.',
    },
  ];

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
          <MessageSquare className="w-4 h-4 text-blue-600" />
          <span>Inquiries & Feedback</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Contact & Feedback
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
          Information regarding project communications, inquiry types, and feedback channels for Bulk
          URL Toolkit.
        </p>
      </header>

      {/* Honest Status Notice Banner */}
      <section className="bg-slate-100/80 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xs">
        <div className="flex items-start gap-3.5">
          <div className="p-2 bg-blue-100 text-blue-700 rounded-xl shrink-0 mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Current Contact Channel Status
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              A direct support or ticketing channel is <strong>not currently active</strong> on this
              website. Bulk URL Toolkit is provided as a standalone, free client-side web utility.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              To ensure transparency and avoid misdirecting messages, we do not provide non-functional
              forms or unmonitored mailboxes. A dedicated communication channel may be added in a future
              update as the project grows.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Inquiries Planned for Future Support */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Inquiries Planned for Future Channels
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            When a dedicated communication method is published, the following types of inquiries will
            be supported:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {inquiryTypes.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-2"
            >
              <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm">
                <item.icon className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Common Inquiries & Self-Service Help */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xs">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-blue-600" />
          <span>Self-Service Documentation & FAQs</span>
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Because Bulk URL Toolkit runs entirely in your web browser with no user accounts, billing,
          or database persistence, most common questions are addressed directly in our documentation:
        </p>

        <div className="space-y-3 pt-1">
          <div className="border border-slate-200/80 rounded-xl p-4 bg-slate-50/50 space-y-1">
            <strong className="text-slate-900 text-sm font-semibold block">
              Do I need an account or subscription?
            </strong>
            <p className="text-xs text-slate-600 leading-relaxed">
              No. All URL utilities are free to use without registration, subscriptions, or daily limits.
              There are no accounts to recover and no billing information collected.
            </p>
          </div>

          <div className="border border-slate-200/80 rounded-xl p-4 bg-slate-50/50 space-y-1">
            <strong className="text-slate-900 text-sm font-semibold block">
              Where can I read about data handling and privacy?
            </strong>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our complete data architecture, browser memory handling, and edge network disclosures
              are detailed on our{' '}
              <a
                href="/privacy"
                onClick={handleLinkClick('/privacy')}
                className="text-blue-600 hover:underline font-medium inline-flex items-center gap-0.5"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <div className="border border-slate-200/80 rounded-xl p-4 bg-slate-50/50 space-y-1">
            <strong className="text-slate-900 text-sm font-semibold block">
              How do the individual URL tools operate?
            </strong>
            <p className="text-xs text-slate-600 leading-relaxed">
              Each tool page includes dedicated step-by-step guides, feature explanations, and FAQs.
              Learn more on our{' '}
              <a
                href="/about"
                onClick={handleLinkClick('/about')}
                className="text-blue-600 hover:underline font-medium inline-flex items-center gap-0.5"
              >
                About page
              </a>
              .
            </p>
          </div>
        </div>
      </section>

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
        <span className="text-xs text-slate-400">Client-Side Processing • Free & Open</span>
      </div>
    </div>
  );
};
