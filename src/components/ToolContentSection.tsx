import React from 'react';
import {
  HelpCircle,
  BookOpen,
  ArrowRight,
  ChevronRight,
  Shield,
  Zap,
  Layers,
  Sliders,
  AlertTriangle,
  Workflow,
} from 'lucide-react';
import { ToolPageConfig } from '../types';
import { TOOL_PAGES } from '../data/toolPages';

interface ToolContentSectionProps {
  config: ToolPageConfig;
  onNavigate: (path: string) => void;
}

export const ToolContentSection: React.FC<ToolContentSectionProps> = ({ config, onNavigate }) => {
  const relatedTools = (config.relatedToolIds || [])
    .map((id) => TOOL_PAGES[id])
    .filter(Boolean);

  // Structured Data (JSON-LD) for SEO
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: config.name,
        url: `https://bulk-url-toolkit-app.socialboostspot.workers.dev${config.path === '/' ? '' : config.path}`,
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'All',
        browserRequirements: 'Requires JavaScript. Works on all modern web browsers.',
        description: config.metaDescription,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: config.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <article className="mt-14 space-y-12">
      {/* Schema.org Structured Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Primary Explanatory & Features Section */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            About {config.name}
          </h2>
          {config.aboutDetails && config.aboutDetails.length > 0 ? (
            <div className="space-y-3.5">
              {config.aboutDetails.map((paragraph, idx) => (
                <p key={idx} className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {config.summary}
            </p>
          )}

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
            <div className="flex items-start gap-2.5">
              <div className="p-1 rounded bg-emerald-100 text-emerald-800 mt-0.5">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <div>
                <strong className="text-slate-900 block font-semibold">Client-Side Processing</strong>
                <span>URL processing happens locally in your browser. Your URL list is not uploaded to our servers for processing.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="p-1 rounded bg-blue-100 text-blue-800 mt-0.5">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <div>
                <strong className="text-slate-900 block font-semibold">Fast Processing</strong>
                <span>Fast client-side processing.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When the Tool Is Useful */}
      {config.useCases && config.useCases.length > 0 && (
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 mb-6">
            <Layers className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              When a Bulk URL Opener Is Useful
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {config.useCases.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50/60 rounded-xl border border-slate-200/80 p-4 space-y-1.5"
              >
                <h3 className="font-semibold text-slate-900 text-sm">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Choosing a Batch Size */}
      {config.batchGuidance && config.batchGuidance.length > 0 && (
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 mb-6">
            <Sliders className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Choosing a Batch Size
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {config.batchGuidance.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50/60 rounded-xl border border-slate-200/80 p-5 space-y-2"
              >
                <h3 className="font-semibold text-slate-900 text-sm">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Popup Blocker Troubleshooting */}
      {config.troubleshooting && config.troubleshooting.length > 0 && (
        <section className="bg-amber-50/40 rounded-2xl border border-amber-200/80 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Popup Blocker Troubleshooting
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {config.troubleshooting.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-amber-200/60 p-4 space-y-1.5 shadow-2xs"
              >
                <h3 className="font-semibold text-slate-900 text-sm">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Preparing Your URL List Before Opening */}
      {config.prepWorkflows && config.prepWorkflows.length > 0 && (
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <Workflow className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Preparing Your URL List Before Opening
            </h2>
          </div>
          <p className="text-xs text-slate-500 mb-6">
            Bulk URL Opener launches your links for manual review. If your raw list contains duplicates, formatting errors, or unwanted tracking parameters, you can refine your data first with our companion utilities:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {config.prepWorkflows.map((item, idx) => {
              const cardInner = (
                <>
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    {item.linkPath && (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-1.5" />
                    )}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                    {item.description}
                  </p>
                </>
              );

              return item.linkPath ? (
                <a
                  key={idx}
                  href={item.linkPath}
                  onClick={(e) => {
                    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                      e.preventDefault();
                      onNavigate(item.linkPath!);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="group bg-slate-50/60 hover:bg-blue-50/40 border border-slate-200/80 hover:border-blue-300 rounded-xl p-4 transition-all block cursor-pointer"
                >
                  {cardInner}
                </a>
              ) : (
                <div
                  key={idx}
                  className="bg-slate-50/60 border border-slate-200/80 rounded-xl p-4"
                >
                  {cardInner}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Step-by-Step How to Use Section */}
      {config.howToSteps && config.howToSteps.length > 0 && (
        <section className="bg-slate-100/60 rounded-2xl border border-slate-200/80 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              How to Use {config.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {config.howToSteps.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-xl border border-slate-200/80 p-4 shadow-2xs space-y-2"
              >
                <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center border border-blue-200">
                  {item.step}
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Relevant FAQ Section */}
      {config.faqs && config.faqs.length > 0 && (
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {config.faqs.map((faq, index) => (
              <details
                key={index}
                className="group border border-slate-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between p-4 cursor-pointer bg-slate-50/50 hover:bg-slate-50 text-slate-900 font-semibold text-sm select-none transition-colors">
                  <span>{faq.question}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform duration-200 shrink-0 ml-2" />
                </summary>
                <div className="p-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Related Tools Links */}
      {relatedTools.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-slate-900">Related URL Utilities</h2>
            <span className="text-xs text-slate-500">Client-side processing</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {relatedTools.map((tool) => (
              <a
                key={tool.id}
                href={tool.path}
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                    e.preventDefault();
                    onNavigate(tool.path);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="text-left bg-white hover:bg-blue-50/40 border border-slate-200 hover:border-blue-300 rounded-xl p-4 shadow-2xs group transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-semibold text-sm text-slate-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>{tool.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {tool.metaDescription}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};
