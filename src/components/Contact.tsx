import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

interface ContactProps {
  isInViewport?: boolean;
}

const Contact: React.FC<ContactProps> = ({ isInViewport = false }) => {
  const email = "devan.smit2007@gmail.com";
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  if (isInViewport) {
    return (
      <div className="w-full text-center">
        <h3 className="text-xl font-bold tracking-tight text-white mb-2 font-heading">
          Get In Touch
        </h3>
        <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-6">
          Connect & Collaborate
        </p>

        <div className="bg-zinc-900/40 p-6 rounded-2xl border border-white/5 flex flex-col items-center shadow-md">
          <h4 className="text-md font-bold text-white mb-3 font-heading leading-tight">
            Ready to start something <span className="text-blue-400">new</span>?
          </h4>
          <p className="text-zinc-400 text-[11px] leading-relaxed mb-6 max-w-sm mx-auto">
            Whether you have a specific project in mind or just want to explore how we could work together, I'd love to hear from you.
          </p>

          <div 
            className="flex flex-col gap-2.5 p-3.5 bg-white/5 border border-white/10 rounded-2xl cursor-pointer transition-all duration-300 hover:border-white/20 hover:bg-white/10 w-full mb-6"
            onClick={copyEmail}
          >
            <div className="flex flex-col items-center">
              <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-wider mb-0.5">Email me at</span>
              <span className="font-semibold text-xs text-white truncate max-w-full">{email}</span>
            </div>
            <button 
              className={`flex items-center justify-center gap-1.5 py-2 rounded-xl font-bold text-xs transition-colors duration-300 ${
                isCopied ? 'bg-blue-500 text-white' : 'bg-white text-zinc-950'
              }`}
            >
              {!isCopied ? (
                <>
                  <span>Copy Address</span>
                  <Copy size={12} strokeWidth={2.5} />
                </>
              ) : (
                <>
                  <span>Copied!</span>
                  <Check size={12} strokeWidth={2.5} />
                </>
              )}
            </button>
          </div>

          <div className="flex justify-center gap-6 pt-4 border-t border-white/5 w-full">
            <a 
              href="https://www.linkedin.com/in/devan-smit-190480385/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-400 font-semibold text-xs relative pb-0.5 transition-colors hover:text-white group"
            >
              LinkedIn
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
            <a 
              href="https://github.com/Light-not-found" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-400 font-semibold text-xs relative pb-0.5 transition-colors hover:text-white group"
            >
              GitHub
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-zinc-900/10">
      {/* Seamless Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern mask-fade-y pointer-events-none opacity-30" />
      
      <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-3 mb-16 relative"
        >
          <span className="text-xs text-blue-500 bg-blue-500/10 px-4 py-2 border border-blue-500/20 rounded-full tracking-widest uppercase font-bold">
            Connect
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,3.5rem)] m-0 leading-tight text-gradient font-heading">
            Get In Touch
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-12 md:p-20 rounded-3xl flex flex-col items-center max-w-4xl mx-auto"
        >
          <h3 className="text-[clamp(2rem,4vw,3rem)] tracking-tight mb-6 font-heading">
            Ready to start something <span className="text-blue-500">new</span>?
          </h3>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-12">
            Whether you have a specific project in mind or just want to explore 
            how we could work together, I'd love to hear from you.
          </p>

          <div className="flex justify-center mb-12 w-full">
            <div 
              className="flex flex-col md:flex-row items-center gap-4 md:gap-6 p-4 md:py-2 md:pl-8 md:pr-2 bg-white/5 border border-white/10 rounded-3xl md:rounded-full cursor-pointer transition-all duration-300 hover:border-white/30 hover:-translate-y-1 hover:bg-white/10 w-full md:w-auto"
              onClick={copyEmail}
            >
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-[0.7rem] font-bold text-zinc-500 uppercase tracking-[0.1em]">
                  Email me at
                </span>
                <span className="font-semibold text-lg">
                  {email}
                </span>
              </div>
              <button 
                className={`flex items-center justify-center gap-2 px-6 py-3 md:py-4 rounded-full font-bold text-sm w-full md:w-auto transition-colors duration-300 ${
                  isCopied ? 'bg-blue-500 text-white' : 'bg-white text-zinc-950'
                }`}
              >
                {!isCopied ? (
                  <>
                    <span>Copy</span>
                    <Copy size={16} strokeWidth={2.5} />
                  </>
                ) : (
                  <>
                    <span>Copied!</span>
                    <Check size={16} strokeWidth={2.5} />
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-10">
            <a 
              href="https://www.linkedin.com/in/devan-smit-190480385/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-400 font-semibold text-lg relative pb-1 transition-colors hover:text-white group"
            >
              LinkedIn
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
            <a 
              href="https://github.com/Light-not-found" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-400 font-semibold text-lg relative pb-1 transition-colors hover:text-white group"
            >
              GitHub
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
