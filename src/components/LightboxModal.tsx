import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem, Language } from '../types';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  language: Language;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
  language,
}) => {
  const isThai = language === 'th';
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fade-in-soft"
      onClick={onClose}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between text-white max-w-6xl mx-auto w-full pt-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center space-x-3">
          <span className="text-xs font-semibold tracking-widest text-[#DFCA9B] uppercase">
            {currentIndex + 1} / {items.length}
          </span>
          <span className="text-xs text-[#9E9AA6] uppercase tracking-wider hidden sm:inline">
            • {currentItem.category}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
          aria-label="Close image preview"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Center Image + Prev/Next controls */}
      <div
        className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full my-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-1 sm:left-4 z-10 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* The active image */}
        <div className="relative max-h-[72vh] max-w-full flex items-center justify-center">
          <img
            src={currentItem.image}
            alt={isThai ? currentItem.thaiTitle : currentItem.title}
            className="max-h-[72vh] max-w-full object-contain rounded-lg shadow-2xl transition-all"
          />
        </div>

        {/* Next button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-1 sm:right-4 z-10 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Caption footer */}
      <div
        className="max-w-3xl mx-auto w-full text-center pb-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FAF8F5]">
          {isThai ? currentItem.thaiTitle : currentItem.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#CDC9D4] mt-1">
          {isThai ? currentItem.thaiCaption : currentItem.caption}
        </p>
      </div>
    </div>
  );
};
