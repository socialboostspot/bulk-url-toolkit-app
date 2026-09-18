import React, { useState } from 'react';
import {
  Copy,
  Download,
  Check,
  ExternalLink,
  Search,
  FileSpreadsheet,
  FileText,
  AlertCircle,
  Eye,
  List,
  Layers,
  ChevronRight,
  Info,
} from 'lucide-react';
import { downloadFile, generateCsv, extractHostname, isValidUrl } from '../utils/urlEngine';

interface UrlResultsAreaProps {
  processedUrls: string[];
  invalidUrls: { url: string; reason: string; lineNumber: number }[];
  activeViewTab: 'all' | 'table' | 'invalid';
  onViewTabChange: (tab: 'all' | 'table' | 'invalid') => void;
  onOpenBulkModal: () => void;
}

export const UrlResultsArea: React.FC<UrlResultsAreaProps> = ({
  processedUrls,
  invalidUrls,
  activeViewTab,
  onViewTabChange,
  onOpenBulkModal,
}) => {
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadMenuOpen, setDownloadMenuOpen] = useState(false);

  const nonEmptyProcessed = processedUrls.filter((u) => u.trim().length > 0);

  // Search filtered results
  const filteredUrls = searchQuery.trim()
    ? nonEmptyProcessed.filter((url) => url.toLowerCase().includes(searchQuery.toLowerCase()))
    : nonEmptyProcessed;

  const handleCopy = () => {
    if (nonEmptyProcessed.length === 0) return;
    const textToCopy = nonEmptyProcessed.join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTxt = () => {
    if (nonEmptyProcessed.length === 0) return;
    const text = nonEmptyProcessed.join('\r\n');
    downloadFile(text, `cleaned-urls-${new Date().toISOString().slice(0, 10)}.txt`, 'text/plain');
    setDownloadMenuOpen(false);
  };

  const handleDownloadCsv = () => {
    if (nonEmptyProcessed.length === 0) return;
    const csv = generateCsv(nonEmptyProcessed);
    downloadFile(csv, `processed-urls-${new Date().toISOString().slice(0, 10)}.csv`, 'text/csv');
    setDownloadMenuOpen(false);
  };

  const handleDownloadInvalidTxt = () => {
    if (invalidUrls.length === 0) return;
    const text = invalidUrls.map((i) => `${i.url} [Error: ${i.reason}] (Line ${i.lineNumber})`).join('\r\n');
    downloadFile(text, `invalid-urls-${new Date().toISOString().slice(0, 10)}.txt`, 'text/plain');
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
      {/* Results Header Toolbar */}
      <div className="bg-slate-50/80 px-4 py-2.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1 bg-slate-200/60 p-0.5 rounded-lg">
          <button
            type="button"
            onClick={() => onViewTabChange('all')}
            className={`px-2.5 py-1 rounded-md font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeViewTab === 'all'
                ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span>Raw Text</span>
            <span className="bg-slate-100 text-slate-700 px-1.5 py-0.2 rounded text-[10px] font-mono">
              {nonEmptyProcessed.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => onViewTabChange('table')}
            className={`px-2.5 py-1 rounded-md font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeViewTab === 'table'
                ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Table Preview</span>
          </button>

          <button
            type="button"
            onClick={() => onViewTabChange('invalid')}
            className={`px-2.5 py-1 rounded-md font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeViewTab === 'invalid'
                ? 'bg-white text-red-700 shadow-2xs font-semibold'
                : 'text-slate-600 hover:text-red-700'
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5 text-red-500" />
            <span>Invalid URLs</span>
            {invalidUrls.length > 0 && (
              <span className="bg-red-100 text-red-700 px-1.5 py-0.2 rounded text-[10px] font-mono font-bold">
                {invalidUrls.length}
              </span>
            )}
          </button>
        </div>

        {/* Action Buttons: Copy, Download, Bulk Opener */}
        <div className="flex items-center gap-2">
          {/* Bulk Opener Button */}
          <button
            type="button"
            onClick={onOpenBulkModal}
            disabled={nonEmptyProcessed.length === 0}
            id="results-open-bulk-modal-btn"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-semibold transition-colors cursor-pointer shadow-2xs"
            title="Open URLs in controlled batches"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Bulk Opener</span>
          </button>

          {/* Copy Results Button */}
          <button
            type="button"
            onClick={handleCopy}
            disabled={nonEmptyProcessed.length === 0}
            id="results-copy-all-btn"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-semibold transition-colors cursor-pointer shadow-2xs"
            title="Copy all processed URLs to clipboard"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy Results'}</span>
          </button>

          {/* Download Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setDownloadMenuOpen(!downloadMenuOpen)}
              disabled={nonEmptyProcessed.length === 0}
              id="results-download-dropdown-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 disabled:bg-slate-100 disabled:text-slate-400 text-slate-700 font-medium transition-colors cursor-pointer shadow-2xs"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>Download</span>
            </button>

            {downloadMenuOpen && (
              <div
                className="absolute right-0 mt-1 w-44 bg-white border border-slate-200 rounded-xl shadow-lg py-1.5 z-50"
                onMouseLeave={() => setDownloadMenuOpen(false)}
              >
                <button
                  onClick={handleDownloadTxt}
                  className="w-full px-3 py-2 text-left text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>Text File (.txt)</span>
                </button>
                <button
                  onClick={handleDownloadCsv}
                  className="w-full px-3 py-2 text-left text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer"
                >
                  <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                  <span>Spreadsheet (.csv)</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Search / Filter Bar (if more than 5 results) */}
      {nonEmptyProcessed.length > 5 && (
        <div className="px-4 py-2 bg-slate-50/50 border-b border-slate-100 flex items-center justify-between gap-4 text-xs">
          <div className="relative flex-1 max-w-sm">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search or filter in processed URLs..."
              className="w-full pl-8 pr-3 py-1 bg-white border border-slate-200 rounded-md text-xs placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="text-[11px] text-slate-500">
            Showing {filteredUrls.length} of {nonEmptyProcessed.length} URLs
          </div>
        </div>
      )}

      {/* Main View Area */}
      <div className="relative flex-1 min-h-[300px] overflow-auto flex flex-col">
        {/* Raw Text View */}
        {activeViewTab === 'all' && (
          <div className="h-full flex flex-col">
            {nonEmptyProcessed.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center p-8 text-center text-slate-400">
                <Layers className="w-10 h-10 mb-2 stroke-1 text-slate-300" />
                <p className="text-sm font-medium text-slate-600">No Processed URLs Yet</p>
                <p className="text-xs max-w-xs mt-1 text-slate-400">
                  Paste your link list on the left and select any transformation from the toolbar above.
                </p>
              </div>
            ) : (
              <textarea
                readOnly
                value={filteredUrls.join('\n')}
                rows={16}
                className="w-full h-full p-4 font-mono text-[13px] leading-relaxed text-slate-800 bg-white focus:outline-none resize-none border-none"
                spellCheck={false}
              />
            )}
          </div>
        )}

        {/* Table Preview View */}
        {activeViewTab === 'table' && (
          <div className="h-full overflow-auto">
            {nonEmptyProcessed.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center p-8 text-center text-slate-400">
                <Eye className="w-10 h-10 mb-2 stroke-1 text-slate-300" />
                <p className="text-sm font-medium text-slate-600">Table Preview Empty</p>
                <p className="text-xs max-w-xs mt-1 text-slate-400">
                  Process your URLs to see an interactive structured table preview before downloading.
                </p>
              </div>
            ) : (
              <div className="min-w-full inline-block align-middle">
                <table className="min-w-full divide-y divide-slate-200 text-xs text-left">
                  <thead className="bg-slate-50 sticky top-0 z-10 font-semibold text-slate-600">
                    <tr>
                      <th className="py-2.5 px-3 w-12 text-center">#</th>
                      <th className="py-2.5 px-3">Processed URL</th>
                      <th className="py-2.5 px-3 w-40">Domain / Host</th>
                      <th className="py-2.5 px-3 w-24 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {filteredUrls.slice(0, 500).map((url, idx) => {
                      const host = extractHostname(url) || '—';
                      return (
                        <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-2 px-3 text-slate-400 text-center font-mono text-[11px]">
                            {idx + 1}
                          </td>
                          <td className="py-2 px-3 font-mono text-slate-800 break-all select-all">
                            {url}
                          </td>
                          <td className="py-2 px-3 text-slate-600 truncate max-w-[160px]">{host}</td>
                          <td className="py-2 px-3 text-center">
                            <a
                              href={url.startsWith('http') ? url : `https://${url}`}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="text-blue-600 hover:text-blue-800 p-1 inline-block rounded hover:bg-blue-50"
                              title="Open link in new tab"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {filteredUrls.length > 500 && (
                  <div className="p-3 text-center text-xs text-slate-500 bg-slate-50 border-t border-slate-200">
                    Showing first 500 rows for preview speed. Full {nonEmptyProcessed.length} URLs will be downloaded.
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Invalid URLs Inspection Tab */}
        {activeViewTab === 'invalid' && (
          <div className="h-full overflow-auto p-4">
            {invalidUrls.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                <Check className="w-10 h-10 text-emerald-500 mb-2 p-2 bg-emerald-50 rounded-full" />
                <p className="text-sm font-semibold text-slate-800">All URLs Passed Syntax Validation</p>
                <p className="text-xs text-slate-500 mt-1 max-w-sm">
                  No malformed protocols, unencoded spaces, or broken domain structures were detected.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-red-50 border border-red-200 rounded-lg p-3 text-xs text-red-900">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>
                      Found <strong className="font-bold">{invalidUrls.length} invalid URLs</strong> in your input.
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleDownloadInvalidTxt}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-red-300 text-red-700 font-medium hover:bg-red-50 cursor-pointer shadow-2xs"
                  >
                    <Download className="w-3 h-3" />
                    <span>Download Invalid List</span>
                  </button>
                </div>

                <div className="divide-y divide-slate-100 border border-slate-200 rounded-lg overflow-hidden bg-white text-xs">
                  {invalidUrls.map((item, idx) => (
                    <div key={idx} className="p-3 hover:bg-slate-50 flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="font-mono text-red-600 break-all select-all font-medium">
                          {item.url}
                        </div>
                        <div className="text-slate-500 flex items-center gap-3 text-[11px]">
                          <span>
                            Error: <strong className="text-slate-700">{item.reason}</strong>
                          </span>
                          <span>Line: {item.lineNumber}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="bg-slate-50 px-4 py-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
        <div>
          <span>{nonEmptyProcessed.length.toLocaleString()} Ready URLs</span>
          <span className="mx-2 text-slate-300">|</span>
          <span>Fast Client-Side Download (TXT, CSV)</span>
        </div>
        <div className="text-slate-400 font-mono">UTF-8 Encoded</div>
      </div>
    </div>
  );
};
