import React, { useRef, useState } from 'react';
import { Upload, FileText, Sparkles, XCircle, Copy, Check } from 'lucide-react';
import { SAMPLE_URLS_TEXT } from '../data/sampleUrls';

interface UrlInputAreaProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  onLoadSample: () => void;
  disabled?: boolean;
}

export const UrlInputArea: React.FC<UrlInputAreaProps> = ({
  value,
  onChange,
  onClear,
  onLoadSample,
  disabled = false,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [copied, setCopied] = useState(false);

  const lines = value ? value.split(/\r?\n/) : [];
  const nonEmptyCount = lines.filter((l) => l.trim().length > 0).length;

  const handleFileUpload = (file: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      if (text) {
        onChange(text);
      }
    };
    reader.readAsText(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleCopyInput = () => {
    if (!value) return;
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`bg-white rounded-xl border transition-all ${
        isDragging
          ? 'border-blue-500 ring-2 ring-blue-500/20 bg-blue-50/20'
          : 'border-slate-200 hover:border-slate-300'
      } shadow-sm overflow-hidden flex flex-col h-full`}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      {/* Header bar */}
      <div className="bg-slate-50/80 px-4 py-2.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <label htmlFor="url-input-textarea" className="font-semibold text-slate-700 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            <span>Original URL List</span>
          </label>
          <span className="text-slate-400">•</span>
          <span className="text-slate-500">
            {nonEmptyCount.toLocaleString()} {nonEmptyCount === 1 ? 'URL' : 'URLs'}
            {lines.length > nonEmptyCount ? ` (${lines.length} lines)` : ''}
          </span>
          {nonEmptyCount > 5000 && (
            <span className="bg-amber-100 text-amber-800 text-[10px] px-1.5 py-0.5 rounded font-medium">
              Over 5,000 URLs (High Load)
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={onLoadSample}
            disabled={disabled}
            id="load-sample-urls-btn"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs font-medium transition-colors cursor-pointer"
            title="Load sample URLs to test tools"
          >
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>Sample Data</span>
          </button>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={disabled}
            id="upload-file-btn"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs font-medium transition-colors cursor-pointer"
            title="Upload TXT or CSV file"
          >
            <Upload className="w-3 h-3 text-slate-500" />
            <span>Upload File</span>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={(e) => {
              if (e.target.files?.[0]) {
                handleFileUpload(e.target.files[0]);
              }
            }}
            accept=".txt,.csv,.log,.text"
            className="hidden"
          />

          {value && (
            <>
              <button
                type="button"
                onClick={handleCopyInput}
                className="inline-flex items-center gap-1 px-2 py-1 rounded hover:bg-slate-200/70 text-slate-600 transition-colors"
                title="Copy original input"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>

              <button
                type="button"
                onClick={onClear}
                disabled={disabled}
                id="clear-input-btn"
                className="inline-flex items-center gap-1 px-2 py-1 rounded hover:bg-red-50 text-slate-500 hover:text-red-600 transition-colors"
                title="Clear input text"
              >
                <XCircle className="w-3 h-3" />
                <span>Clear</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Main Textarea */}
      <div className="relative flex-1 min-h-[300px] flex flex-col">
        <textarea
          id="url-input-textarea"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder="Paste up to 5,000 URLs here (one per line)...

Example:
https://example.com/page?utm_source=twitter&gclid=123
https://example.com/page?utm_source=twitter&gclid=123
http://example.org:80/docs//guide
https://store.example.com/product?id=492&utm_medium=email

Or drag & drop a .txt or .csv file here"
          rows={16}
          className="w-full h-full p-4 font-mono text-[13px] leading-relaxed text-slate-800 placeholder:text-slate-400 bg-white focus:outline-none resize-y border-none"
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />

        {isDragging && (
          <div className="absolute inset-0 bg-blue-50/90 flex flex-col items-center justify-center pointer-events-none border-2 border-dashed border-blue-400 rounded-lg m-2">
            <Upload className="w-10 h-10 text-blue-600 mb-2 animate-bounce" />
            <p className="font-semibold text-blue-900 text-sm">Drop your URL list file here</p>
            <p className="text-xs text-blue-600">Supports .txt and .csv</p>
          </div>
        )}
      </div>

      {/* Input Status Footer */}
      <div className="bg-slate-50 px-4 py-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
        <div>
          <span>Max recommended: 5,000 URLs</span>
          <span className="mx-2 text-slate-300">|</span>
          <span>{value.length.toLocaleString()} characters</span>
        </div>
        <div className="text-emerald-700 flex items-center gap-1 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
          <span>Local Browser Buffer</span>
        </div>
      </div>
    </div>
  );
};
