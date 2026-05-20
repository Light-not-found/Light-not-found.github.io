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
      className="fixed inset-0 z-[2000] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 lg:top-10 lg:right-10 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-colors z-[2010]" 
        onClick={onClose} 
        aria-label="Close gallery"
      >
        <X size={24} strokeWidth={2} />
      </button>

      <div className="max-w-[90vw] max-h-[90vh] flex flex-col gap-6" onClick={(e) => e.stopPropagation()}>
        <div className="relative flex items-center justify-center h-[70vh]">
          <motion.img 
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={images[currentIndex].url} 
            alt={images[currentIndex].desc} 
            className="max-h-full max-w-full object-contain rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          />
          
          {images.length > 1 && (
            <>
              <button 
                className="absolute left-[-25px] top-1/2 -translate-y-1/2 bg-black/50 hover:bg-white/10 border border-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all" 
                onClick={prevImage} 
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                className="absolute right-[-25px] top-1/2 -translate-y-1/2 bg-black/50 hover:bg-white/10 border border-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all" 
                onClick={nextImage} 
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        <div className="text-center text-zinc-400">
          <p className="text-lg mb-2 text-white font-medium">{images[currentIndex].desc}</p>
          {images.length > 1 && (
            <div className="text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex gap-4 justify-center overflow-x-auto pb-4 pt-2">
            {images.map((img, index) => (
              <button 
                key={index}
                className={`w-20 h-16 border-2 rounded-lg overflow-hidden cursor-pointer transition-all p-0 bg-transparent shrink-0 ${
                  index === currentIndex ? 'border-blue-500 opacity-100' : 'border-transparent opacity-50 hover:opacity-100 hover:border-white/30'
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <img src={img.url} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ImageModal;
