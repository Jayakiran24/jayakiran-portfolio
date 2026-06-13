import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-gray-100 py-8 px-6 dark:bg-slate-950 dark:border-slate-800">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm font-bold text-purple-600 dark:text-purple-300">
          JK<span className="text-gray-300 dark:text-slate-400">.</span>dev
        </span>
        <p className="text-xs text-gray-400 font-mono dark:text-slate-400">
          © {year} Jaya Kiran Sudanagunta · Built with React & Tailwind CSS
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/jaya-kiran-sudanagunta"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-purple-600 transition-colors dark:text-slate-400 dark:hover:text-purple-300"
            aria-label="LinkedIn"
          >
            <i className="ti ti-brand-linkedin text-lg" />
          </a>
          <a
            href="https://github.com/Jayakiran24"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-purple-600 transition-colors dark:text-slate-400 dark:hover:text-purple-300"
            aria-label="GitHub"
          >
            <i className="ti ti-brand-github text-lg" />
          </a>
          <a
            href="mailto:jayakiranchowdary1@gmail.com"
            className="text-gray-400 hover:text-purple-600 transition-colors dark:text-slate-400 dark:hover:text-purple-300"
            aria-label="Email"
          >
            <i className="ti ti-mail text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}
