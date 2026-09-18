import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { UrlInputArea } from './components/UrlInputArea';
import { UrlStatsBar } from './components/UrlStatsBar';
import { ActionToolbar } from './components/ActionToolbar';
import { UrlResultsArea } from './components/UrlResultsArea';
import { BulkOpenerModal } from './components/BulkOpenerModal';
import { ToolContentSection } from './components/ToolContentSection';
import { TOOL_PAGES } from './data/toolPages';
import { SAMPLE_URLS_TEXT } from './data/sampleUrls';
import {
  analyzeUrls,
  cleanUrls,
  extractDomains,
  normalizeUrls,
  parseRawUrls,
  removeDuplicates,
  removeTrackingParams,
  sortUrls,
  validateUrls,
} from './utils/urlEngine';
import {
  CleanOptions,
  DomainExtractOptions,
  HistoryItem,
  NormalizeOptions,
  SortOrder,
  TrackingParamOptions,
} from './types';
import { ShieldCheck, ArrowRightLeft, Sparkles, ExternalLink, Zap } from 'lucide-react';

export default function App() {
  // Navigation / Routing
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  // Editor states
  const [inputText, setInputText] = useState<string>('');
  const [processedUrls, setProcessedUrls] = useState<string[]>([]);
  const [hasProcessed, setHasProcessed] = useState<boolean>(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [lastActionName, setLastActionName] = useState<string>('');
  const [activeViewTab, setActiveViewTab] = useState<'all' | 'table' | 'invalid'>('all');
  const [activeFilter, setActiveFilter] = useState<'all' | 'valid' | 'invalid' | 'duplicates'>('all');

  // Modals
  const [isBulkOpenerOpen, setIsBulkOpenerOpen] = useState(false);

  // Active page config
  const activePageConfig = useMemo(() => {
    const found = Object.values(TOOL_PAGES).find((p) => p.path === currentPath);
    return found || TOOL_PAGES.home;
  }, [currentPath]);

  // Handle browser URL synchronization & SEO title/description updates
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // Update document title and meta description dynamically
    document.title = activePageConfig.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', activePageConfig.metaDescription);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', activePageConfig.metaTitle);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', activePageConfig.metaDescription);
    }
  }, [activePageConfig]);

  const navigateTo = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Parse raw lines
  const rawInputLines = useMemo(() => {
    return parseRawUrls(inputText);
  }, [inputText]);

  // Validation of the active input lines
  const validation = useMemo(() => {
    return validateUrls(rawInputLines);
  }, [rawInputLines]);

  // Overall analysis of URLs based on input lines and validation
  const analysis = useMemo(() => {
    const baseAnalysis = analyzeUrls(rawInputLines);
    return {
      ...baseAnalysis,
      total: rawInputLines.filter((l) => l.trim().length > 0).length,
      valid: validation.valid.length,
      invalid: validation.invalid.length,
      invalidList: validation.invalid,
      validUrls: validation.valid,
    };
  }, [rawInputLines, validation]);

  const originalNonEmptyCount = useMemo(() => {
    return rawInputLines.filter((l) => l.trim().length > 0).length;
  }, [rawInputLines]);

  const processedUrlsToDisplay = hasProcessed ? processedUrls : rawInputLines;

  const processedNonEmptyCount = useMemo(() => {
    return processedUrlsToDisplay.filter((l) => l.trim().length > 0).length;
  }, [processedUrlsToDisplay]);

  // Helper to commit a transformation to state with Undo support
  const applyTransformation = (newUrls: string[], actionName: string) => {
    const currentWorkingSet = hasProcessed ? processedUrls : rawInputLines;
    setHistory((prev) => [
      ...prev.slice(-15), // keep last 15 states for memory safety
      { urls: currentWorkingSet, actionName, timestamp: Date.now() },
    ]);
    setProcessedUrls(newUrls);
    setHasProcessed(true);
    setLastActionName(actionName);
    setActiveViewTab('all');
  };

  // Undo last action
  const handleUndo = () => {
    if (history.length === 0) return;
    const lastItem = history[history.length - 1];
    setProcessedUrls(lastItem.urls);
    setHasProcessed(true);
    setLastActionName(`Undid "${lastActionName}"`);
    setHistory((prev) => prev.slice(0, -1));
  };

  // Reset to original input
  const handleReset = () => {
    setProcessedUrls([]);
    setHasProcessed(false);
    setHistory([]);
    setLastActionName('');
    setActiveViewTab('all');
    setActiveFilter('all');
  };

  // Clear all
  const handleClearAll = () => {
    setInputText('');
    setProcessedUrls([]);
    setHasProcessed(false);
    setHistory([]);
    setLastActionName('');
    setActiveViewTab('all');
    setActiveFilter('all');
  };

  // Load sample dataset
  const handleLoadSample = () => {
    setInputText(SAMPLE_URLS_TEXT);
    setProcessedUrls([]);
    setHasProcessed(false);
    setHistory([]);
    setLastActionName('');
    setActiveViewTab('all');
    setActiveFilter('all');
  };

  // Current working URLs source
  const currentWorkingUrls = hasProcessed ? processedUrls : rawInputLines;

  // 1. Clean URLs
  const handleClean = (options: CleanOptions) => {
    const { cleaned } = cleanUrls(currentWorkingUrls, options);
    applyTransformation(cleaned, 'Cleaned URLs');
  };

  // 2. Remove Duplicates
  const handleRemoveDuplicates = (caseSensitive: boolean) => {
    const { uniqueUrls, duplicatesRemoved } = removeDuplicates(currentWorkingUrls, caseSensitive);
    applyTransformation(uniqueUrls, `Removed ${duplicatesRemoved} Duplicates`);
  };

  // 3. Remove Tracking Parameters
  const handleRemoveTracking = (options: TrackingParamOptions) => {
    const { processed, modifiedCount } = removeTrackingParams(currentWorkingUrls, options);
    applyTransformation(processed, `Removed Tracking (${modifiedCount} modified)`);
  };

  // 4. Normalize URLs
  const handleNormalize = (options: NormalizeOptions) => {
    const { normalized, modifiedCount } = normalizeUrls(currentWorkingUrls, options);
    applyTransformation(normalized, `Normalized URLs (${modifiedCount} modified)`);
  };

  // 5. Extract Domains
  const handleExtractDomains = (options: DomainExtractOptions) => {
    const { domains } = extractDomains(currentWorkingUrls, options);
    applyTransformation(domains, `Extracted ${domains.length} Domains`);
  };

  // 6. Find Invalid URLs
  const handleFindInvalid = () => {
    const { valid, invalid } = validateUrls(rawInputLines);
    const currentWorkingSet = hasProcessed ? processedUrls : rawInputLines;
    setHistory((prev) => [
      ...prev.slice(-15),
      { urls: currentWorkingSet, actionName: `Validated (${invalid.length} invalid)`, timestamp: Date.now() },
    ]);
    setProcessedUrls(valid);
    setHasProcessed(true);
    setLastActionName(`Validated (${invalid.length} invalid found)`);
    setActiveViewTab('invalid');
  };

  // 7. Sort URLs
  const handleSort = (order: SortOrder) => {
    if (order === 'none') return;
    const sorted = sortUrls(currentWorkingUrls, order);
    applyTransformation(sorted, `Sorted URLs (${order.toUpperCase()})`);
  };

  // Push processed results back to input if user desires
  const handleApplyToInput = () => {
    if (!hasProcessed) return;
    setInputText(processedUrls.join('\n'));
    setProcessedUrls([]);
    setHasProcessed(false);
    setHistory([]);
    setLastActionName('Applied to Input');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Top Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigateTo}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Page Hero Header with strict user intent H1 and Privacy Statement */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {activePageConfig.h1}
            </h1>

            {/* Privacy Statement */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs px-3 py-1.5 rounded-full font-medium shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>URL processing happens locally in your browser. Your URL list is not uploaded to our servers for processing.</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-4xl leading-relaxed">
            {activePageConfig.summary}
          </p>
        </div>

        {/* Real-time Statistics Bar */}
        <UrlStatsBar
          analysis={analysis}
          originalCount={originalNonEmptyCount}
          processedCount={processedUrls.length > 0 ? processedNonEmptyCount : originalNonEmptyCount}
          activeFilter={activeFilter}
          onFilterChange={(filter) => {
            setActiveFilter(filter);
            if (filter === 'invalid') {
              setActiveViewTab('invalid');
            } else if (filter === 'all') {
              setActiveViewTab('all');
            }
          }}
          lastActionName={lastActionName}
        />

        {/* Action Toolbar */}
        <ActionToolbar
          onClean={handleClean}
          onRemoveDuplicates={handleRemoveDuplicates}
          onRemoveTracking={handleRemoveTracking}
          onNormalize={handleNormalize}
          onExtractDomains={handleExtractDomains}
          onFindInvalid={handleFindInvalid}
          onSort={handleSort}
          onUndo={handleUndo}
          onReset={handleReset}
          canUndo={history.length > 0}
          urlsCount={originalNonEmptyCount}
          invalidCount={analysis.invalid}
          duplicateCount={analysis.duplicates}
        />

        {/* Two-Column Editor Workspace: Original Input on Left, Results Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left Column: Original Input Textarea */}
          <div className="flex flex-col h-full space-y-2">
            <UrlInputArea
              value={inputText}
              onChange={(val) => {
                setInputText(val);
                if (hasProcessed) {
                  // If user edits original input, reset processed preview to keep state honest
                  setProcessedUrls([]);
                  setHasProcessed(false);
                  setLastActionName('');
                }
              }}
              onClear={handleClearAll}
              onLoadSample={handleLoadSample}
            />
          </div>

          {/* Right Column: Processed Results Preview */}
          <div className="flex flex-col h-full space-y-2">
            <UrlResultsArea
              processedUrls={processedUrlsToDisplay}
              invalidUrls={validation.invalid}
              activeViewTab={activeViewTab}
              onViewTabChange={setActiveViewTab}
              onOpenBulkModal={() => setIsBulkOpenerOpen(true)}
            />

            {/* Quick helper banner when output differs from input */}
            {hasProcessed && (
              <div className="flex items-center justify-between text-xs px-3 py-2 bg-blue-50/80 border border-blue-200 rounded-lg text-blue-900">
                <span>
                  Showing processed output ({processedNonEmptyCount} URLs). Original input remains untouched.
                </span>
                <button
                  type="button"
                  onClick={handleApplyToInput}
                  className="font-semibold text-blue-700 hover:text-blue-900 hover:underline flex items-center gap-1 cursor-pointer shrink-0"
                  title="Replace original input with this processed result"
                >
                  <ArrowRightLeft className="w-3 h-3" />
                  <span>Set as Original Input</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Focused Tool Guide / How-To / FAQ / Structured Data section */}
        <ToolContentSection config={activePageConfig} onNavigate={navigateTo} />
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Bulk Opener Modal */}
      <BulkOpenerModal
        isOpen={isBulkOpenerOpen}
        onClose={() => setIsBulkOpenerOpen(false)}
        urls={processedUrls.length > 0 ? processedUrls : rawInputLines}
      />
    </div>
  );
}
