import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useMotionValue, useMotionTemplate, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';
import CustomCursor from './components/CustomCursor';

interface ProjectImage {
  url: string;
  desc: string;
}

const App: React.FC = () => {
  const [modalImages, setModalImages] = useState<ProjectImage[]>([]);
  const [showModal, setShowModal] = useState(false);
  
  // Use Framer Motion values to avoid triggering React re-renders on every frame
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  // Scroll Progress Bar tracking
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001
  });

  const openGallery = (images: ProjectImage[]) => {
    setModalImages(images);
    setShowModal(true);
  };

  const closeGallery = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 100);
      mouseY.set((e.clientY / window.innerHeight) * 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Create a highly-performant animated gradient string
  const background = useMotionTemplate`radial-gradient(circle 450px at ${mouseX}% ${mouseY}%, rgba(59, 130, 246, 0.12), transparent 80%)`;

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-body overflow-x-hidden">
      <CustomCursor />
      
      {/* Top Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-blue-500 origin-[0%] z-[9999] pointer-events-none"
        style={{ scaleX }}
      />
      
      {/* Dynamic Background Glow - uses Framer Motion div to avoid re-renders */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background }}
      />
      
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects onOpenGallery={openGallery} />
          <Contact />
        </main>

        <Footer />
      </div>

      <AnimatePresence>
        {showModal && (
          <ImageModal 
            images={modalImages} 
            onClose={closeGallery} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
