import React from 'react';
import {
  HelpCircle,
  BookOpen,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Shield,
  Zap,
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
        <div className="max-w-3xl">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            About {config.name}
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
            {config.summary}
          </p>

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

      {/* Step-by-Step How to Use Section */}
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
              <button
                key={tool.id}
                type="button"
                onClick={() => {
                  onNavigate(tool.path);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
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
              </button>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};
