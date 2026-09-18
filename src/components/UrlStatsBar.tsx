import React from 'react';
import {
  CheckCircle,
  AlertCircle,
  Copy,
  Globe,
  ListOrdered,
  ArrowRight,
  TrendingDown,
} from 'lucide-react';
import { UrlAnalysis } from '../types';

interface UrlStatsBarProps {
  analysis: UrlAnalysis;
  originalCount: number;
  processedCount: number;
  activeFilter?: 'all' | 'valid' | 'invalid' | 'duplicates';
  onFilterChange?: (filter: 'all' | 'valid' | 'invalid' | 'duplicates') => void;
  lastActionName?: string;
}

export const UrlStatsBar: React.FC<UrlStatsBarProps> = ({
  analysis,
  originalCount,
  processedCount,
  activeFilter = 'all',
  onFilterChange,
  lastActionName,
}) => {
  const removedCount = Math.max(0, originalCount - processedCount);

  return (
    <div className="space-y-3">
      {/* Transformation Progress Summary (Original -> Processed -> Removed) */}
      {lastActionName && (
        <div className="bg-blue-50/70 border border-blue-200/80 rounded-xl px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-blue-900">Last Action:</span>
            <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-medium">
              {lastActionName}
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-700">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">Original:</span>
              <span className="font-semibold text-slate-800">{originalCount.toLocaleString()}</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">Processed:</span>
              <span className="font-semibold text-blue-700">{processedCount.toLocaleString()}</span>
            </div>
            {removedCount > 0 && (
              <>
                <span className="text-slate-300">|</span>
                <div className="flex items-center gap-1 text-amber-700 font-medium bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                  <TrendingDown className="w-3.5 h-3.5" />
                  <span>{removedCount.toLocaleString()} removed</span>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {/* Total URLs */}
        <div
          onClick={() => onFilterChange?.('all')}
          className={`bg-white rounded-xl border p-3.5 transition-all cursor-pointer ${
            activeFilter === 'all'
              ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-xs'
              : 'border-slate-200 hover:border-slate-300 shadow-2xs'
          }`}
          id="stat-card-total"
        >
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span className="font-medium">Total URLs</span>
            <ListOrdered className="w-4 h-4 text-slate-400" />
          </div>
          <div className="text-2xl font-bold text-slate-900 tracking-tight">
            {analysis.total.toLocaleString()}
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">Non-empty lines</div>
        </div>

        {/* Valid URLs */}
        <div
          onClick={() => onFilterChange?.('valid')}
          className={`bg-white rounded-xl border p-3.5 transition-all cursor-pointer ${
            activeFilter === 'valid'
              ? 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-xs'
              : 'border-slate-200 hover:border-slate-300 shadow-2xs'
          }`}
          id="stat-card-valid"
        >
          <div className="flex items-center justify-between text-xs text-emerald-700 mb-1">
            <span className="font-medium">Valid URLs</span>
            <CheckCircle className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-bold text-emerald-700 tracking-tight">
            {analysis.valid.toLocaleString()}
          </div>
          <div className="text-[11px] text-emerald-600/80 mt-0.5">
            {analysis.total > 0 ? `${Math.round((analysis.valid / analysis.total) * 100)}% valid` : '0% valid'}
          </div>
        </div>

        {/* Invalid URLs */}
        <div
          onClick={() => onFilterChange?.('invalid')}
          className={`bg-white rounded-xl border p-3.5 transition-all cursor-pointer ${
            activeFilter === 'invalid'
              ? 'border-red-500 ring-2 ring-red-500/20 shadow-xs'
              : 'border-slate-200 hover:border-slate-300 shadow-2xs'
          }`}
          id="stat-card-invalid"
        >
          <div className="flex items-center justify-between text-xs text-red-700 mb-1">
            <span className="font-medium">Invalid URLs</span>
            <AlertCircle className="w-4 h-4 text-red-500" />
          </div>
          <div className={`text-2xl font-bold tracking-tight ${analysis.invalid > 0 ? 'text-red-600' : 'text-slate-900'}`}>
            {analysis.invalid.toLocaleString()}
          </div>
          <div className="text-[11px] text-red-500/80 mt-0.5">
            {analysis.invalid > 0 ? 'Click to inspect errors' : 'Zero format errors'}
          </div>
        </div>

        {/* Duplicate URLs */}
        <div
          onClick={() => onFilterChange?.('duplicates')}
          className={`bg-white rounded-xl border p-3.5 transition-all cursor-pointer ${
            activeFilter === 'duplicates'
              ? 'border-amber-500 ring-2 ring-amber-500/20 shadow-xs'
              : 'border-slate-200 hover:border-slate-300 shadow-2xs'
          }`}
          id="stat-card-duplicates"
        >
          <div className="flex items-center justify-between text-xs text-amber-700 mb-1">
            <span className="font-medium">Duplicate URLs</span>
            <Copy className="w-4 h-4 text-amber-500" />
          </div>
          <div className={`text-2xl font-bold tracking-tight ${analysis.duplicates > 0 ? 'text-amber-600' : 'text-slate-900'}`}>
            {analysis.duplicates.toLocaleString()}
          </div>
          <div className="text-[11px] text-amber-600/80 mt-0.5">
            {analysis.duplicates > 0 ? 'Repeated entries' : 'All unique'}
          </div>
        </div>

        {/* Unique Domains */}
        <div
          className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-2xs p-3.5 col-span-2 sm:col-span-1"
          id="stat-card-domains"
        >
          <div className="flex items-center justify-between text-xs text-blue-700 mb-1">
            <span className="font-medium">Unique Domains</span>
            <Globe className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-700 tracking-tight">
            {analysis.uniqueDomains.toLocaleString()}
          </div>
          <div className="text-[11px] text-blue-600/80 mt-0.5">Distinct hostnames</div>
        </div>
      </div>
    </div>
  );
};
