import React, { useState } from 'react';
import {
  Link2,
  ShieldCheck,
  ChevronDown,
  FileCheck2,
  Trash2,
  SlidersHorizontal,
  ExternalLink,
  Globe,
  Scissors,
  CheckCheck,
} from 'lucide-react';
import { TOOL_PAGES } from '../data/toolPages';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  const navTools = [
    { name: 'All Tools', path: '/', icon: SlidersHorizontal },
    { name: 'Bulk Opener', path: '/bulk-url-opener', icon: ExternalLink },
    { name: 'Cleaner', path: '/url-cleaner', icon: Scissors },
    { name: 'Deduplicator', path: '/duplicate-url-remover', icon: CheckCheck },
    { name: 'UTM Remover', path: '/utm-remover', icon: Trash2 },
    { name: 'Domain Extractor', path: '/domain-extractor', icon: Globe },
    { name: 'Normalizer', path: '/url-normalizer', icon: SlidersHorizontal },
    { name: 'Validator', path: '/bulk-url-validator', icon: FileCheck2 },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('/')}
              className="flex items-center gap-2.5 text-left group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
              id="brand-logo-btn"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:bg-blue-700 transition-colors">
                <Link2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-lg text-slate-900 tracking-tight block leading-tight">
                  Bulk URL Toolkit
                </span>
                <span className="text-[11px] font-medium text-slate-500 block">
                  Free Browser URL Processor
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navTools.slice(0, 5).map((tool) => {
                const isActive = currentPath === tool.path;
                return (
                  <button
                    key={tool.path}
                    onClick={() => onNavigate(tool.path)}
                    id={`nav-link-${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {tool.name}
                  </button>
                );
              })}

              {/* Tools Dropdown for remaining */}
              <div className="relative">
                <button
                  onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                  onBlur={() => setTimeout(() => setToolsDropdownOpen(false), 200)}
                  className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-1"
                  id="nav-more-tools-dropdown"
                >
                  <span>More Tools</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {toolsDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-56 bg-white border border-slate-200 rounded-xl shadow-lg py-1.5 z-50">
                    {navTools.map((t) => (
                      <button
                        key={t.path}
                        onClick={() => {
                          onNavigate(t.path);
                          setToolsDropdownOpen(false);
                        }}
                        className={`w-full px-3.5 py-2 text-left text-sm flex items-center gap-2.5 hover:bg-slate-50 ${
                          currentPath === t.path ? 'text-blue-600 font-semibold bg-blue-50/50' : 'text-slate-700'
                        }`}
                      >
                        <t.icon className="w-4 h-4 text-slate-400" />
                        <span>{t.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Right badge */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full text-[11px] font-medium text-emerald-800"
              title="URL processing happens locally in your browser. Your URL list is not uploaded to our servers for processing."
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Client-Side Processing</span>
            </div>
          </div>
        </div>

        {/* Mobile quick scroll navigation */}
        <div className="flex lg:hidden overflow-x-auto py-2 -mx-4 px-4 border-t border-slate-100 gap-1.5 scrollbar-none">
          {navTools.map((tool) => {
            const isActive = currentPath === tool.path;
            return (
              <button
                key={tool.path}
                onClick={() => onNavigate(tool.path)}
                className={`whitespace-nowrap px-2.5 py-1 rounded-full text-xs font-medium shrink-0 transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tool.name}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
