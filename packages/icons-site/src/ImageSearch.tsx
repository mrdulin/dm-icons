import { useCallback, useEffect, useRef, useState } from 'react';
import { dedupeByShape, searchByImage, type ImageMatch } from './icon-search';

interface ImageSearchProps {
  open: boolean;
  onMatches: (matches: ImageMatch[] | undefined) => void;
}

export function ImageSearch({ open, onMatches }: ImageSearchProps) {
  const [previewUrl, setPreviewUrl] = useState<string>();
  const [error, setError] = useState<string>();
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewUrlRef = useRef<string>();
  const requestSeq = useRef(0);

  const setPreview = useCallback((url?: string) => {
    if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
    previewUrlRef.current = url;
    setPreviewUrl(url);
  }, []);

  // Closing the panel resets everything: revoke the preview URL and clear matches.
  useEffect(() => {
    if (open) return;
    setPreview(undefined);
    setError(undefined);
    onMatches(undefined);
  }, [open, setPreview, onMatches]);

  const handleBlob = useCallback(
    async (blob: Blob) => {
      if (!blob.type.startsWith('image/')) {
        setError('请粘贴或选择图片文件');
        return;
      }
      setError(undefined);
      const seq = ++requestSeq.current;
      try {
        const result = await searchByImage(blob);
        if (seq !== requestSeq.current) return; // a newer query superseded this one
        setPreview(result.previewUrl);
        onMatches(dedupeByShape(result.matches, 12));
      } catch (e) {
        if (seq !== requestSeq.current) return;
        setError(e instanceof Error ? e.message : '图片处理失败');
      }
    },
    [onMatches, setPreview],
  );

  // Global paste: re-pasting always replaces the current query image.
  useEffect(() => {
    if (!open) return;
    const onPaste = (e: ClipboardEvent) => {
      const item = Array.from(e.clipboardData?.items ?? []).find((i) => i.type.startsWith('image/'));
      const file = item?.getAsFile();
      if (file) {
        e.preventDefault();
        void handleBlob(file);
        return;
      }
      // Non-image paste: only complain when the paste was aimed at the page
      // (not at a text input such as the keyword search box).
      const target = e.target;
      const isEditable = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement;
      if (!isEditable) {
        setError('剪贴板中没有图片，请粘贴图标截图');
      }
    };
    document.addEventListener('paste', onPaste);
    return () => document.removeEventListener('paste', onPaste);
  }, [open, handleBlob]);

  const clear = () => {
    setPreview(undefined);
    setError(undefined);
    onMatches(undefined);
  };

  if (!open) return null;

  return (
    <div>
      {!previewUrl ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            const file = e.dataTransfer.files?.[0];
            if (file) void handleBlob(file);
          }}
          style={{
            border: `2px dashed ${dragOver ? '#1890ff' : '#d9d9d9'}`,
            borderRadius: 8,
            padding: 24,
            textAlign: 'center',
            cursor: 'pointer',
            color: '#666',
            background: dragOver ? '#f0f8ff' : undefined,
          }}
        >
          以图找图：Ctrl+V 粘贴图标截图，或拖拽图片到此处，或点击选择文件
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 4 }}>
          <img src={previewUrl} alt="查询图片" style={{ maxHeight: 64, maxWidth: 128, border: '1px solid #eee' }} />
          <span style={{ color: '#666' }}>匹配结果如下，重新粘贴可更换图片</span>
          <button onClick={clear}>清除</button>
        </div>
      )}
      {error && <div style={{ color: '#d93838', marginTop: 4 }}>{error}</div>}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) void handleBlob(file);
          e.target.value = '';
        }}
      />
    </div>
  );
}
