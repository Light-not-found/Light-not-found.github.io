import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react';

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

  const imageCount = images.length;
  const currentImage = images[currentIndex];

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % imageCount);
  }, [imageCount]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + imageCount) % imageCount);
  }, [imageCount]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  useEffect(() => {
    if (!images || imageCount === 0) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') nextImage();
      if (event.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [images, imageCount, nextImage, prevImage, onClose]);

  if (!images || imageCount === 0 || !currentImage) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/92 p-3 backdrop-blur-xl sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
        className="relative grid h-[92svh] w-full max-w-7xl overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950 shadow-[0_30px_100px_rgba(0,0,0,0.85)] lg:grid-cols-[minmax(0,1fr)_380px]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-4 right-4 z-[2010] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-white/10"
          onClick={onClose}
          aria-label="Close gallery"
        >
          <X size={18} strokeWidth={2.5} />
        </button>

        {/* Image Area */}
        <div className="flex min-h-0 flex-col bg-black">
          <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden p-4 sm:p-6 lg:p-8">
            <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-10" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />

            <motion.img
              key={currentImage.url}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              src={currentImage.url}
              alt={currentImage.desc}
              className="relative z-10 max-h-full max-w-full rounded-2xl object-contain shadow-2xl"
            />

            {imageCount > 1 && (
              <>
                <button
                  type="button"
                  className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/65 text-white backdrop-blur-md transition-all hover:bg-white/10"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} strokeWidth={2.5} />
                </button>

                <button
                  type="button"
                  className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/65 text-white backdrop-blur-md transition-all hover:bg-white/10"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <ChevronRight size={20} strokeWidth={2.5} />
                </button>

                <span className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/10 bg-black/70 px-3.5 py-1.5 font-mono text-[10px] font-semibold tracking-widest text-zinc-300 backdrop-blur-md">
                  {currentIndex + 1} / {imageCount}
                </span>
              </>
            )}
          </div>

          {/* Thumbnail Strip */}
          {imageCount > 1 && (
            <div className="device-screen-scrollbar flex h-24 shrink-0 gap-2 overflow-x-auto border-t border-white/10 bg-zinc-950/95 p-3">
              {images.map((image, index) => (
                <button
                  key={`${image.url}-${index}`}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`aspect-video h-full shrink-0 cursor-pointer overflow-hidden rounded-xl border-2 bg-zinc-900 transition-all ${
                    index === currentIndex
                      ? 'border-blue-500 opacity-100'
                      : 'border-transparent opacity-45 hover:border-white/20 hover:opacity-100'
                  }`}
                  aria-label={`Open image ${index + 1}`}
                >
                  <img
                    src={image.url}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="device-screen-scrollbar flex min-h-0 flex-col overflow-y-auto border-t border-white/10 bg-zinc-900/70 p-6 lg:border-t-0 lg:border-l">
          <div className="mb-6 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
              <Images size={16} />
            </span>

            <div>
              <p className="text-[9px] font-bold tracking-[0.22em] text-blue-400 uppercase">
                Gallery
              </p>

              <p className="text-xs font-semibold text-zinc-500">
                Image {currentIndex + 1} of {imageCount}
              </p>
            </div>
          </div>

          <div className="mb-6 border-b border-white/10 pb-6">
            <h4 className="mb-3 text-lg font-bold leading-tight text-white">
              Screen Description
            </h4>

            <p className="text-sm leading-relaxed text-zinc-400">
              {currentImage.desc}
            </p>
          </div>

          {imageCount > 1 && (
            <div className="mt-auto">
              <p className="mb-3 text-[9px] font-bold tracking-widest text-zinc-500 uppercase">
                Quick Jump
              </p>

              <div className="grid grid-cols-5 gap-2">
                {images.map((image, index) => (
                  <button
                    key={`jump-${image.url}-${index}`}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`aspect-square rounded-lg border text-[10px] font-bold transition-all ${
                      index === currentIndex
                        ? 'border-blue-500 bg-blue-500/15 text-blue-400'
                        : 'border-white/10 bg-white/[0.03] text-zinc-500 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          )}
        </aside>
      </motion.div>
    </motion.div>
  );
};

export default ImageModal;