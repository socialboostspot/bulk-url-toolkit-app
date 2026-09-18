import React from 'react';
import { Shield, Lock, Cpu, Link2, ExternalLink } from 'lucide-react';
import { TOOL_PAGES } from '../data/toolPages';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-20">
      {/* Privacy Guarantee Banner */}
      <div className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-blue-500/20 text-blue-400 rounded-xl border border-blue-400/30 shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white tracking-tight flex items-center gap-2">
                <span>Privacy First Architecture</span>
              </h3>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                URL processing happens locally in your browser. Your URL list is not uploaded to our servers for processing. All parsing, cleaning, and transformations execute directly on your device.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-400 shrink-0">
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>No Cookies / Tracking</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span>Client-Side Engine</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Link2 className="w-4 h-4" />
              </div>
              <span>Bulk URL Toolkit</span>
            </div>
            <p className="text-sm text-slate-500 mt-3 leading-relaxed">
              A free, privacy-first browser utility suite for SEO professionals, web developers, data
              analysts, and digital marketers handling high-volume URLs.
            </p>
            <div className="mt-4 text-xs text-slate-400 font-medium">
              Version 1.0 • Client-side processing
            </div>
          </div>

          {/* Tools Grid */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">
              Specialized URL Utilities
            </h4>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {Object.values(TOOL_PAGES).map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => {
                    onNavigate(tool.path);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-left text-sm text-slate-600 hover:text-blue-600 hover:underline flex items-center gap-1.5 group transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-600" />
                  <span>{tool.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Technical Specs & Compliance */}
          <div className="md:col-span-1">
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">
              Processing & Privacy Practices
            </h4>
            <ul className="text-xs text-slate-500 space-y-2.5">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Client-side processing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>URL handling follows common URL normalization practices</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Safe Marketing Query Tokenization</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>No Backend Server Log Storage</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Free to use • No registration required</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Bulk URL Toolkit. All processing runs locally in your web browser.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Strictly No Tracking • Fast & Lightweight</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
