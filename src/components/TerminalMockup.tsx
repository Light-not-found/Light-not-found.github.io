import React, { useEffect, useRef, useState } from 'react';
import {
  Check,
  Copy,
  ExternalLink,
  Mail,
  Terminal,
} from 'lucide-react';

interface TerminalLine {
  text: string;
  type: 'input' | 'output' | 'error' | 'success' | 'muted';
}

const GitHubIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 14,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 6.07c.97 0 1.94.13 2.85.39 2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.39-5.25 5.67.41.36.77 1.06.77 2.14v3.16c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
};

const LinkedInIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 14,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8ZM8 8h3.84v2.05h.05c.53-1 1.84-2.05 3.79-2.05C19.73 8 20.5 10.67 20.5 14.14V23h-4v-7.85c0-1.87-.03-4.28-2.6-4.28-2.61 0-3.01 2.04-3.01 4.15V23H8V8Z" />
    </svg>
  );
};

const TerminalMockup: React.FC = () => {
  const emailAddress = 'devan.smit2007@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/devan-smit-190480385/';
  const githubUrl = 'https://github.com/Light-not-found';

  const [history, setHistory] = useState<TerminalLine[]>([
    { text: 'devansmit.contact initialized', type: 'success' },
    {
      text: 'Available shortcuts: email, linkedin, github, about, clear.',
      type: 'output',
    },
    { text: 'Type "help" or use the quick actions below.', type: 'muted' },
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const terminalBottomRef = useRef<HTMLDivElement>(null);
  const textInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1800);
    } catch {
      setIsCopied(false);
    }
  };

  const openExternal = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const executeCommand = async (commandStr: string) => {
    const trimmed = commandStr.trim().toLowerCase();

    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const newLines: TerminalLine[] = [
      { text: `devansmit:~$ ${commandStr}`, type: 'input' },
    ];

    switch (trimmed) {
      case 'help':
        newLines.push(
          { text: 'Available commands:', type: 'success' },
          { text: '  about       show profile summary', type: 'output' },
          { text: '  email       copy email address', type: 'output' },
          { text: '  linkedin    open LinkedIn profile', type: 'output' },
          { text: '  github      open GitHub profile', type: 'output' },
          { text: '  clear       clear terminal history', type: 'output' },
        );
        break;

      case 'about':
        newLines.push(
          { text: 'Profile:', type: 'success' },
          { text: '  Name: Devan Smit', type: 'output' },
          { text: '  Role: Software Engineering Student', type: 'output' },
          {
            text: '  Focus: web apps, prototypes, data, and clean UX',
            type: 'output',
          },
          {
            text: '  Status: open to projects and collaboration',
            type: 'output',
          },
        );
        break;

      case 'email':
        await copyEmail();
        newLines.push(
          { text: `Email: ${emailAddress}`, type: 'success' },
          { text: 'Copied email address to clipboard.', type: 'output' },
        );
        break;

      case 'linkedin':
        openExternal(linkedinUrl);
        newLines.push(
          { text: 'Opening LinkedIn profile...', type: 'success' },
          { text: 'linkedin.com/in/devan-smit-190480385', type: 'output' },
        );
        break;

      case 'github':
        openExternal(githubUrl);
        newLines.push(
          { text: 'Opening GitHub profile...', type: 'success' },
          { text: 'github.com/Light-not-found', type: 'output' },
        );
        break;

      default:
        newLines.push(
          { text: `command not found: ${commandStr}`, type: 'error' },
          { text: 'Type "help" to see available commands.', type: 'muted' },
        );
    }

    setHistory((prev) => [...prev, ...newLines]);
    setInputVal('');
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    executeCommand(inputVal);
  };

  const handleConsoleClick = () => {
    textInputRef.current?.focus();
  };

  const getLineClassName = (type: TerminalLine['type']) => {
    switch (type) {
      case 'input':
        return 'font-semibold text-white';
      case 'success':
        return 'font-semibold text-blue-400';
      case 'error':
        return 'font-medium text-red-400';
      case 'muted':
        return 'text-zinc-600';
      default:
        return 'text-zinc-400';
    }
  };

  return (
    <div
      className="mx-auto flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 font-mono text-xs shadow-[0_30px_100px_rgba(0,0,0,0.7)] select-text"
      onClick={handleConsoleClick}
    >
      {/* Terminal title bar */}
      <div className="flex h-11 shrink-0 items-center justify-between border-b border-white/10 bg-zinc-900 px-4 select-none">
        <div className="flex items-center gap-1.5">
          <span className="block h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="block h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="block h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/5 bg-black/30 px-3 py-1 text-[10px] font-bold tracking-wider text-zinc-500">
          <Terminal size={12} strokeWidth={2.4} />
          <span>devansmit — contact</span>
        </div>

        <div className="w-[42px]" />
      </div>

      {/* Terminal body */}
      <div className="relative bg-[#050507]">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-[0.06]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] via-transparent to-transparent" />

        <div className="device-screen-scrollbar relative h-[300px] overflow-y-auto p-6 text-left leading-relaxed text-zinc-300">
          <div className="mb-5 rounded-xl border border-blue-500/15 bg-blue-500/[0.06] p-4">
            <p className="mb-1 text-[10px] font-bold tracking-widest text-blue-400 uppercase">
              Contact Console
            </p>

            <p className="text-sm font-semibold text-white">
              Let&apos;s build something clean, useful, and well-executed.
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            {history.map((line, index) => (
              <div
                key={`${line.text}-${index}`}
                className={getLineClassName(line.type)}
              >
                {line.text}
              </div>
            ))}

            <form
              onSubmit={handleFormSubmit}
              className="mt-2 flex w-full items-center"
            >
              <span className="shrink-0 font-bold text-blue-400">
                devansmit
              </span>
              <span className="mx-1 text-zinc-600">:</span>
              <span className="shrink-0 font-bold text-zinc-500">~$</span>

              <input
                ref={textInputRef}
                type="text"
                value={inputVal}
                onChange={(event) => setInputVal(event.target.value)}
                className="ml-2 flex-grow border-none bg-transparent p-0 font-mono text-xs text-white outline-none focus:ring-0 focus:outline-none"
                autoFocus
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                aria-label="Terminal command input"
              />

              {inputVal === '' && <span className="cursor-blink" />}
            </form>

            <div ref={terminalBottomRef} />
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="flex flex-wrap items-center gap-2 border-t border-white/10 bg-zinc-900/80 p-3 select-none">
        <span className="mr-1 pl-1 text-[9px] font-bold tracking-wider text-zinc-500 uppercase">
          Quick actions:
        </span>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            executeCommand('about');
          }}
          className="rounded-lg border border-white/10 bg-zinc-800 px-3 py-1.5 text-[10px] font-bold text-zinc-300 uppercase transition-colors hover:bg-zinc-700 hover:text-white"
        >
          About
        </button>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            executeCommand('email');
          }}
          className="inline-flex items-center gap-1.5 rounded-lg border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-[10px] font-bold text-blue-300 uppercase transition-colors hover:bg-blue-500/20 hover:text-blue-200"
        >
          {isCopied ? <Check size={12} /> : <Copy size={12} />}
          {isCopied ? 'Copied' : 'Email'}
        </button>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            executeCommand('linkedin');
          }}
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-zinc-800 px-3 py-1.5 text-[10px] font-bold text-zinc-300 uppercase transition-colors hover:bg-zinc-700 hover:text-white"
        >
          <LinkedInIcon size={12} />
          LinkedIn
        </button>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            executeCommand('github');
          }}
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-zinc-800 px-3 py-1.5 text-[10px] font-bold text-zinc-300 uppercase transition-colors hover:bg-zinc-700 hover:text-white"
        >
          <GitHubIcon size={12} />
          GitHub
        </button>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            executeCommand('clear');
          }}
          className="rounded-lg border border-white/5 bg-zinc-900 px-3 py-1.5 text-[10px] font-bold text-zinc-500 uppercase transition-colors hover:bg-zinc-800 hover:text-zinc-300"
        >
          Clear
        </button>
      </div>

      {/* Contact links */}
      <div className="grid grid-cols-1 gap-2 border-t border-white/10 bg-zinc-950 p-3 sm:grid-cols-3">
        <a
          href={`mailto:${emailAddress}`}
          onClick={(event) => event.stopPropagation()}
          className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-all hover:border-blue-500/30 hover:bg-blue-500/10"
        >
          <span className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-zinc-300 uppercase">
            <Mail size={14} className="text-blue-400" />
            Email
          </span>

          <ExternalLink
            size={12}
            className="text-zinc-600 transition-colors group-hover:text-blue-400"
          />
        </a>

        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => event.stopPropagation()}
          className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-all hover:border-blue-500/30 hover:bg-blue-500/10"
        >
          <span className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-zinc-300 uppercase">
            <LinkedInIcon size={14} className="text-blue-400" />
            LinkedIn
          </span>

          <ExternalLink
            size={12}
            className="text-zinc-600 transition-colors group-hover:text-blue-400"
          />
        </a>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => event.stopPropagation()}
          className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-all hover:border-blue-500/30 hover:bg-blue-500/10"
        >
          <span className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-zinc-300 uppercase">
            <GitHubIcon size={14} className="text-blue-400" />
            GitHub
          </span>

          <ExternalLink
            size={12}
            className="text-zinc-600 transition-colors group-hover:text-blue-400"
          />
        </a>
      </div>
    </div>
  );
};

export default TerminalMockup;