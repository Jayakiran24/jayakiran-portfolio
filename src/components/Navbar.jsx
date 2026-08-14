import React, { useState, useEffect } from "react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm dark:bg-slate-950/90 dark:border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm font-bold text-purple-600 tracking-tight hover:text-purple-800 transition-colors dark:text-purple-300"
        >
          JK<span className="text-gray-400 dark:text-slate-400">.</span>dev
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-2 p-2 rounded-full text-gray-600 hover:text-purple-600 transition-colors dark:text-slate-200 dark:hover:text-purple-300"
          >
            <i className={`ti ${theme === "dark" ? "ti-sun" : "ti-moon"} text-lg`} />
          </button>
          <a
            href="mailto:jayakiranchowdary1@gmail.com"
            className="ml-2 px-4 py-1.5 text-sm font-medium bg-purple-600 text-white rounded-full hover:bg-purple-800 transition-colors"
          >
            Hire me
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-purple-600 dark:text-slate-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`ti ${menuOpen ? "ti-x" : "ti-menu-2"} text-xl`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800 px-6 py-4 flex flex-col gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm text-gray-700 hover:text-purple-600 transition-colors dark:text-slate-200"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex-1 p-2 rounded-full text-gray-600 hover:text-purple-600 transition-colors dark:text-slate-200"
            >
              <i className={`ti ${theme === "dark" ? "ti-sun" : "ti-moon"} text-lg`} />
            </button>
            <a
              href="mailto:jayakiranchowdary1@gmail.com"
              className="flex-1 px-4 py-2 text-sm font-medium bg-purple-600 text-white rounded-full text-center hover:bg-purple-800 transition-colors"
            >
              Hire me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
