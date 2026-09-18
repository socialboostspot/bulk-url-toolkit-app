import React, { useState } from 'react';
import {
  Scissors,
  CopyCheck,
  Trash2,
  Sliders,
  Globe,
  AlertTriangle,
  ArrowUpDown,
  Undo2,
  RotateCcw,
  Settings2,
  ChevronDown,
  Info,
  ShieldAlert,
} from 'lucide-react';
import {
  CleanOptions,
  DomainExtractOptions,
  NormalizeOptions,
  SortOrder,
  TrackingParamOptions,
} from '../types';

interface ActionToolbarProps {
  onClean: (options: CleanOptions) => void;
  onRemoveDuplicates: (caseSensitive: boolean) => void;
  onRemoveTracking: (options: TrackingParamOptions) => void;
  onNormalize: (options: NormalizeOptions) => void;
  onExtractDomains: (options: DomainExtractOptions) => void;
  onFindInvalid: () => void;
  onSort: (order: SortOrder) => void;
  onUndo: () => void;
  onReset: () => void;
  canUndo: boolean;
  urlsCount: number;
  invalidCount: number;
  duplicateCount: number;
}

export const ActionToolbar: React.FC<ActionToolbarProps> = ({
  onClean,
  onRemoveDuplicates,
  onRemoveTracking,
  onNormalize,
  onExtractDomains,
  onFindInvalid,
  onSort,
  onUndo,
  onReset,
  canUndo,
  urlsCount,
  invalidCount,
  duplicateCount,
}) => {
  const [activeSettingsTab, setActiveSettingsTab] = useState<string | null>(null);

  // Settings states
  const [cleanOptions, setCleanOptions] = useState<CleanOptions>({
    trimWhitespace: true,
    removeBlankLines: true,
    fixMalformedSpaces: true,
    stripTrailingPunctuation: true,
  });

  const [caseSensitiveDedup, setCaseSensitiveDedup] = useState(false);

  const [trackingOptions, setTrackingOptions] = useState<TrackingParamOptions>({
    removeUtm: true,
    removeClickIds: true,
    removeAffiliateTracking: true,
    customParams: [],
  });

  const [normalizeOptions, setNormalizeOptions] = useState<NormalizeOptions>({
    lowercaseHostname: true,
    removeDefaultPorts: true,
    removeTrailingSlash: false,
    sortQueryParams: false,
    forceHttps: false, // Default is strictly false as required
    decodeUrlSegments: false,
  });

  const [domainOptions, setDomainOptions] = useState<DomainExtractOptions>({
    stripWww: true,
    uniqueOnly: true,
    rootDomainOnly: false,
    includeProtocol: false,
  });

  const [selectedSort, setSelectedSort] = useState<SortOrder>('none');

  const isDisabled = urlsCount === 0;

  const toggleSettings = (tab: string) => {
    setActiveSettingsTab(activeSettingsTab === tab ? null : tab);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 space-y-3">
      {/* Primary Actions Grid */}
      <div className="flex flex-wrap items-center gap-2">
        {/* 1. Clean URLs */}
        <div className="relative inline-flex items-stretch rounded-lg shadow-2xs">
          <button
            type="button"
            onClick={() => onClean(cleanOptions)}
            disabled={isDisabled}
            id="action-clean-urls-btn"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-l-lg bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 text-white text-xs font-semibold transition-colors cursor-pointer"
            title="Clean whitespace, blank lines, and formatting issues"
          >
            <Scissors className="w-3.5 h-3.5" />
            <span>Clean URLs</span>
          </button>
          <button
            type="button"
            onClick={() => toggleSettings('clean')}
            disabled={isDisabled}
            className="px-1.5 py-2 bg-blue-700 hover:bg-blue-800 disabled:bg-slate-300 disabled:text-slate-400 text-white rounded-r-lg border-l border-blue-500 cursor-pointer"
            title="Cleaning options"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 2. Remove Duplicates */}
        <div className="relative inline-flex items-stretch rounded-lg shadow-2xs">
          <button
            type="button"
            onClick={() => onRemoveDuplicates(caseSensitiveDedup)}
            disabled={isDisabled}
            id="action-remove-duplicates-btn"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-l-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 disabled:bg-slate-100 disabled:text-slate-400 text-xs font-semibold transition-colors cursor-pointer"
            title="Remove exact duplicates"
          >
            <CopyCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>Remove Duplicates</span>
            {duplicateCount > 0 && (
              <span className="bg-amber-100 text-amber-800 text-[10px] px-1.5 py-0.2 rounded font-mono">
                {duplicateCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => toggleSettings('dedup')}
            disabled={isDisabled}
            className="px-1.5 py-2 bg-white hover:bg-slate-50 text-slate-500 rounded-r-lg border-y border-r border-slate-300 border-l border-slate-200 cursor-pointer"
            title="Deduplication options"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3. Remove Tracking Parameters */}
        <div className="relative inline-flex items-stretch rounded-lg shadow-2xs">
          <button
            type="button"
            onClick={() => onRemoveTracking(trackingOptions)}
            disabled={isDisabled}
            id="action-remove-tracking-btn"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-l-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 disabled:bg-slate-100 disabled:text-slate-400 text-xs font-semibold transition-colors cursor-pointer"
            title="Remove UTM, gclid, fbclid, msclkid while strictly preserving functional parameters"
          >
            <Trash2 className="w-3.5 h-3.5 text-red-500" />
            <span>Remove Tracking (UTMs)</span>
          </button>
          <button
            type="button"
            onClick={() => toggleSettings('tracking')}
            disabled={isDisabled}
            className="px-1.5 py-2 bg-white hover:bg-slate-50 text-slate-500 rounded-r-lg border-y border-r border-slate-300 border-l border-slate-200 cursor-pointer"
            title="Tracking parameter options"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4. Normalize URLs */}
        <div className="relative inline-flex items-stretch rounded-lg shadow-2xs">
          <button
            type="button"
            onClick={() => onNormalize(normalizeOptions)}
            disabled={isDisabled}
            id="action-normalize-urls-btn"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-l-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 disabled:bg-slate-100 disabled:text-slate-400 text-xs font-semibold transition-colors cursor-pointer"
            title="Normalize hostnames, ports, and safe formatting"
          >
            <Sliders className="w-3.5 h-3.5 text-blue-600" />
            <span>Normalize URLs</span>
          </button>
          <button
            type="button"
            onClick={() => toggleSettings('normalize')}
            disabled={isDisabled}
            className="px-1.5 py-2 bg-white hover:bg-slate-50 text-slate-500 rounded-r-lg border-y border-r border-slate-300 border-l border-slate-200 cursor-pointer"
            title="Normalization options"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 5. Extract Domains */}
        <div className="relative inline-flex items-stretch rounded-lg shadow-2xs">
          <button
            type="button"
            onClick={() => onExtractDomains(domainOptions)}
            disabled={isDisabled}
            id="action-extract-domains-btn"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-l-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 disabled:bg-slate-100 disabled:text-slate-400 text-xs font-semibold transition-colors cursor-pointer"
            title="Convert URLs to unique domain/hostname list"
          >
            <Globe className="w-3.5 h-3.5 text-emerald-600" />
            <span>Extract Domains</span>
          </button>
          <button
            type="button"
            onClick={() => toggleSettings('domain')}
            disabled={isDisabled}
            className="px-1.5 py-2 bg-white hover:bg-slate-50 text-slate-500 rounded-r-lg border-y border-r border-slate-300 border-l border-slate-200 cursor-pointer"
            title="Domain extraction options"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 6. Find Invalid URLs */}
        <button
          type="button"
          onClick={onFindInvalid}
          disabled={isDisabled}
          id="action-find-invalid-btn"
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 disabled:bg-slate-100 disabled:text-slate-400 text-xs font-semibold transition-colors shadow-2xs cursor-pointer"
          title="Filter and inspect malformed or invalid URLs"
        >
          <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
          <span>Find Invalid</span>
          {invalidCount > 0 && (
            <span className="bg-red-100 text-red-700 text-[10px] px-1.5 py-0.2 rounded font-mono font-bold">
              {invalidCount}
            </span>
          )}
        </button>

        {/* 7. Sort URLs */}
        <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
          <ArrowUpDown className="w-3.5 h-3.5 text-slate-500 ml-1.5" />
          <select
            value={selectedSort}
            onChange={(e) => {
              const val = e.target.value as SortOrder;
              setSelectedSort(val);
              onSort(val);
            }}
            disabled={isDisabled}
            id="sort-urls-select"
            className="bg-transparent text-xs font-medium text-slate-700 py-1.5 pr-2 pl-1 rounded focus:outline-none cursor-pointer"
          >
            <option value="none">Sort: Default</option>
            <option value="asc">Sort: A-Z (Alphabetical)</option>
            <option value="desc">Sort: Z-A (Reverse)</option>
            <option value="domain">Sort: By Domain</option>
            <option value="length">Sort: Shortest First</option>
          </select>
        </div>

        <div className="grow" />

        {/* History / Safety Controls: Undo & Reset */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onUndo}
            disabled={!canUndo}
            id="action-undo-btn"
            className="inline-flex items-center gap-1 px-2.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:hover:bg-slate-100 text-slate-700 text-xs font-medium transition-colors cursor-pointer"
            title="Undo last transformation"
          >
            <Undo2 className="w-3.5 h-3.5" />
            <span>Undo</span>
          </button>

          <button
            type="button"
            onClick={onReset}
            disabled={isDisabled}
            id="action-reset-btn"
            className="inline-flex items-center gap-1 px-2.5 py-2 rounded-lg hover:bg-red-50 text-slate-600 hover:text-red-600 border border-transparent hover:border-red-200 text-xs font-medium transition-colors cursor-pointer"
            title="Reset to original input"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Expandable Options Trays for Transformations */}
      {activeSettingsTab === 'clean' && (
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs space-y-2">
          <div className="font-semibold text-slate-800 flex items-center justify-between">
            <span>URL Cleaning Configuration</span>
            <span className="text-[11px] text-slate-500 font-normal">Changes apply when you click "Clean URLs"</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={cleanOptions.trimWhitespace}
                onChange={(e) => setCleanOptions({ ...cleanOptions, trimWhitespace: e.target.checked })}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>Trim leading/trailing spaces</span>
            </label>
            <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={cleanOptions.removeBlankLines}
                onChange={(e) => setCleanOptions({ ...cleanOptions, removeBlankLines: e.target.checked })}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>Remove empty/blank lines</span>
            </label>
            <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={cleanOptions.fixMalformedSpaces}
                onChange={(e) => setCleanOptions({ ...cleanOptions, fixMalformedSpaces: e.target.checked })}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>Encode spaces in paths to %20</span>
            </label>
            <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={cleanOptions.stripTrailingPunctuation}
                onChange={(e) =>
                  setCleanOptions({ ...cleanOptions, stripTrailingPunctuation: e.target.checked })
                }
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>Strip copied trailing dots & commas</span>
            </label>
          </div>
        </div>
      )}

      {activeSettingsTab === 'dedup' && (
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs space-y-2">
          <div className="font-semibold text-slate-800">Duplicate Matching Sensitivity</div>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
              <input
                type="radio"
                name="dedupSensitivity"
                checked={!caseSensitiveDedup}
                onChange={() => setCaseSensitiveDedup(false)}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span>Case-Insensitive (recommended: example.com/A == example.com/a)</span>
            </label>
            <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
              <input
                type="radio"
                name="dedupSensitivity"
                checked={caseSensitiveDedup}
                onChange={() => setCaseSensitiveDedup(true)}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span>Case-Sensitive (exact character match)</span>
            </label>
          </div>
        </div>
      )}

      {activeSettingsTab === 'tracking' && (
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs space-y-2">
          <div className="font-semibold text-slate-800 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-blue-600" />
            <span>Tracking Parameters Filter</span>
            <span className="text-[11px] text-emerald-700 font-normal ml-2">
              ✓ Functional query parameters (id, page, search, etc.) are strictly kept!
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={trackingOptions.removeUtm}
                onChange={(e) => setTrackingOptions({ ...trackingOptions, removeUtm: e.target.checked })}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>UTM Tags (utm_source, utm_medium, utm_campaign, utm_term, utm_content)</span>
            </label>
            <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={trackingOptions.removeClickIds}
                onChange={(e) => setTrackingOptions({ ...trackingOptions, removeClickIds: e.target.checked })}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>Ad Click IDs (gclid, fbclid, msclkid, ttclid, twclid)</span>
            </label>
            <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={trackingOptions.removeAffiliateTracking}
                onChange={(e) =>
                  setTrackingOptions({ ...trackingOptions, removeAffiliateTracking: e.target.checked })
                }
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>Email & CRM tracking (mc_cid, mc_eid, _hsenc, hsCtaTracking)</span>
            </label>
          </div>
        </div>
      )}

      {activeSettingsTab === 'normalize' && (
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs space-y-2">
          <div className="font-semibold text-slate-800 flex items-center justify-between">
            <span>URL Normalization Configuration</span>
            <span className="text-[11px] text-slate-500 font-normal">URL handling follows common URL normalization practices</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={normalizeOptions.lowercaseHostname}
                onChange={(e) =>
                  setNormalizeOptions({ ...normalizeOptions, lowercaseHostname: e.target.checked })
                }
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>Lowercase domain/hostname (standard practice)</span>
            </label>
            <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={normalizeOptions.removeDefaultPorts}
                onChange={(e) =>
                  setNormalizeOptions({ ...normalizeOptions, removeDefaultPorts: e.target.checked })
                }
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>Strip standard default ports (:80, :443)</span>
            </label>
            <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={normalizeOptions.sortQueryParams}
                onChange={(e) =>
                  setNormalizeOptions({ ...normalizeOptions, sortQueryParams: e.target.checked })
                }
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>Sort query parameters alphabetically</span>
            </label>
            <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={normalizeOptions.removeTrailingSlash}
                onChange={(e) =>
                  setNormalizeOptions({ ...normalizeOptions, removeTrailingSlash: e.target.checked })
                }
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>Strip trailing slash on path endpoints</span>
            </label>
            {/* MANDATORY REQUIREMENT: Do not automatically convert HTTP to HTTPS unless the user explicitly selects that option */}
            <label className="flex items-center gap-2 text-amber-900 bg-amber-50 px-2 py-1 rounded border border-amber-200 cursor-pointer">
              <input
                type="checkbox"
                id="force-https-checkbox"
                checked={normalizeOptions.forceHttps}
                onChange={(e) =>
                  setNormalizeOptions({ ...normalizeOptions, forceHttps: e.target.checked })
                }
                className="rounded text-amber-600 focus:ring-amber-500"
              />
              <span className="font-medium">Convert HTTP to HTTPS (Explicit Opt-In)</span>
            </label>
          </div>
        </div>
      )}

      {activeSettingsTab === 'domain' && (
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs space-y-2">
          <div className="font-semibold text-slate-800">Domain Extraction Rules</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={domainOptions.stripWww}
                onChange={(e) => setDomainOptions({ ...domainOptions, stripWww: e.target.checked })}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>Strip "www." prefix (e.g. www.site.com -&gt; site.com)</span>
            </label>
            <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={domainOptions.rootDomainOnly}
                onChange={(e) =>
                  setDomainOptions({ ...domainOptions, rootDomainOnly: e.target.checked })
                }
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>Root domain only (e.g. blog.site.com -&gt; site.com)</span>
            </label>
            <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={domainOptions.uniqueOnly}
                onChange={(e) => setDomainOptions({ ...domainOptions, uniqueOnly: e.target.checked })}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>Deduplicate extracted domain list</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};
