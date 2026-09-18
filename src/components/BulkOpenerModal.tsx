import React, { useState } from 'react';
import {
  ExternalLink,
  X,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  ShieldAlert,
  Play,
  Settings,
} from 'lucide-react';

interface BulkOpenerModalProps {
  isOpen: boolean;
  onClose: () => void;
  urls: string[];
}

export const BulkOpenerModal: React.FC<BulkOpenerModalProps> = ({ isOpen, onClose, urls }) => {
  const [batchSize, setBatchSize] = useState<number>(10);
  const [currentBatchIndex, setCurrentBatchIndex] = useState<number>(0);
  const [lastOpenedCount, setLastOpenedCount] = useState<number>(0);
  const [hasTriggeredFirstBatch, setHasTriggeredFirstBatch] = useState(false);

  if (!isOpen) return null;

  const validUrls = urls.filter((u) => u.trim().length > 0);
  const totalBatches = Math.max(1, Math.ceil(validUrls.length / batchSize));

  const currentBatchStartIndex = currentBatchIndex * batchSize;
  const currentBatchEndIndex = Math.min(validUrls.length, currentBatchStartIndex + batchSize);
  const currentBatchSlice = validUrls.slice(currentBatchStartIndex, currentBatchEndIndex);

  const handleOpenCurrentBatch = () => {
    setHasTriggeredFirstBatch(true);
    let opened = 0;

    currentBatchSlice.forEach((url, i) => {
      const formatted = url.startsWith('http') ? url : `https://${url}`;
      // Stagger slightly or open directly
      setTimeout(() => {
        try {
          window.open(formatted, '_blank', 'noopener,noreferrer');
        } catch (err) {
          console.error('Popup blocked or error:', err);
        }
      }, i * 100);
      opened++;
    });

    setLastOpenedCount(opened);
  };

  const handleNextBatch = () => {
    if (currentBatchIndex < totalBatches - 1) {
      setCurrentBatchIndex((prev) => prev + 1);
      setLastOpenedCount(0);
    }
  };

  const handlePrevBatch = () => {
    if (currentBatchIndex > 0) {
      setCurrentBatchIndex((prev) => prev - 1);
      setLastOpenedCount(0);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-lg w-full overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
              <ExternalLink className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base leading-tight">Bulk URL Opener</h3>
              <p className="text-xs text-slate-500">Open links in controlled safe batches</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Browser Popup Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 flex items-start gap-3 text-xs text-amber-900">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold">Browser Popup Permission Notice</span>
              <p className="text-amber-800 leading-relaxed">
                Modern browsers restrict multiple simultaneous popups to prevent spam. If only one tab opens,
                look for the <strong>blocked pop-up icon</strong> in your browser address bar and select{' '}
                <strong>"Always allow pop-ups and redirects from this site"</strong>.
              </p>
            </div>
          </div>

          {/* Batch Size Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Select Batch Size
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[10, 25, 50].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => {
                    setBatchSize(size);
                    setCurrentBatchIndex(0);
                    setLastOpenedCount(0);
                  }}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer text-center ${
                    batchSize === size
                      ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {size} URLs / batch
                </button>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 mt-1.5">
              10 or 25 URLs per batch is safest for browser memory and stability.
            </p>
          </div>

          {/* Batch Progress Bar */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700">
                Batch {currentBatchIndex + 1} of {totalBatches}
              </span>
              <span className="text-slate-500 font-mono">
                URLs {currentBatchStartIndex + 1} - {currentBatchEndIndex} of {validUrls.length}
              </span>
            </div>

            {/* Progress line */}
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-emerald-500 h-full transition-all duration-300"
                style={{ width: `${((currentBatchIndex + 1) / totalBatches) * 100}%` }}
              />
            </div>

            {/* Preview of current batch URLs */}
            <div className="mt-2 text-[11px] text-slate-600 font-mono bg-white border border-slate-200 rounded p-2 max-h-24 overflow-y-auto space-y-1">
              {currentBatchSlice.map((u, idx) => (
                <div key={idx} className="truncate">
                  {currentBatchStartIndex + idx + 1}. {u}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrevBatch}
                disabled={currentBatchIndex === 0}
                className="px-3 py-2 text-xs font-medium rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer"
              >
                Previous Batch
              </button>
              <button
                type="button"
                onClick={handleNextBatch}
                disabled={currentBatchIndex >= totalBatches - 1}
                className="px-3 py-2 text-xs font-medium rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer"
              >
                Next Batch
              </button>
            </div>

            <button
              type="button"
              onClick={handleOpenCurrentBatch}
              id="bulk-opener-launch-btn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>
                Open Batch {currentBatchIndex + 1} ({currentBatchSlice.length} Tabs)
              </span>
            </button>
          </div>

          {hasTriggeredFirstBatch && (
            <p className="text-[11px] text-center text-slate-500">
              Opened tabs requested. Check if your browser blocked any popups in the address bar.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
