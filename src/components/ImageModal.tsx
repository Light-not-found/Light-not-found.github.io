import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectImage {
  url: string;
  desc: string;
}

interface ImageModalProps {
  images: ProjectImage[];
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent scrolling behind modal
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [images.length, onClose]);

  if (!images || images.length === 0) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[2000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 lg:p-8"
      onClick={onClose}
    >
      {/* Main Glass Panel */}
      <div 
        className="w-full max-w-5xl h-[90vh] lg:h-[80vh] glass rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] relative shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button (Absolute on the top right) */}
        <button 
          className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors z-[2010] border border-white/10" 
          onClick={onClose} 
          aria-label="Close gallery"
        >
          <X size={18} strokeWidth={2.5} />
        </button>

        {/* LEFT COLUMN: Main Image Viewport (Highly prioritized with 1.8fr split) */}
        <div className="relative bg-zinc-950/50 flex items-center justify-center p-6 border-b lg:border-b-0 lg:border-r border-white/5 h-[50vh] lg:h-full overflow-hidden">
          <motion.img 
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            src={images[currentIndex].url} 
            alt={images[currentIndex].desc} 
            className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl z-10"
          />
          
          {images.length > 1 && (
            <>
              {/* Navigation arrows positioned over the viewport */}
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-white/10 border border-white/10 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all z-20" 
                onClick={prevImage} 
                aria-label="Previous image"
              >
                <ChevronLeft size={18} strokeWidth={2.5} />
              </button>
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-white/10 border border-white/10 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all z-20" 
                onClick={nextImage} 
                aria-label="Next image"
              >
                <ChevronRight size={18} strokeWidth={2.5} />
              </button>

              {/* Centered Image Counter at the bottom of the viewport */}
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/65 px-3.5 py-1 border border-white/10 rounded-full text-[10px] font-semibold text-zinc-400 font-mono tracking-widest backdrop-blur-md z-20">
                {currentIndex + 1} / {images.length}
              </span>
            </>
          )}
        </div>

        {/* RIGHT COLUMN: Sidebar (Clean, compact, and padded) */}
        <div className="p-8 flex flex-col justify-between h-[40vh] lg:h-full overflow-y-auto pr-16">
          <div className="flex-grow">
            {/* Header label */}
            <div className="mb-5">
              <span className="text-[9px] font-bold tracking-[0.2em] text-blue-500 bg-blue-500/10 px-3 py-1 border border-blue-500/20 rounded-full uppercase font-mono">
                Description
              </span>
            </div>

            {/* Clean, high-contrast Description text */}
            <h4 className="text-white text-[15px] sm:text-base font-normal leading-relaxed mb-4">
              {images[currentIndex].desc}
            </h4>
          </div>

          {/* Clean image overview grid */}
          {images.length > 1 && (
            <div className="mt-auto pt-6 border-t border-white/5">
              <p className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase mb-3 font-mono">
                Image Overview
              </p>
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, index) => (
                  <button 
                    key={index}
                    className={`aspect-[4/3] rounded-lg overflow-hidden cursor-pointer transition-all p-0 bg-zinc-900 border-2 shrink-0 ${
                      index === currentIndex 
                        ? 'border-blue-500 scale-95 opacity-100' 
                        : 'border-transparent opacity-40 hover:opacity-100 hover:border-white/10'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <img src={img.url} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ImageModal;
