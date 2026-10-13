import React, { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll(".animate-on-load");
    elements?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, i * 120);
    });
  }, []);

  return (
    <section
      id="top"
      ref={heroRef}
      className="min-h-screen flex items-center bg-white border-b border-gray-100 pt-14 dark:bg-slate-950 dark:border-slate-800"
    >
      <div className="max-w-5xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="animate-on-load flex items-center gap-3 mb-6">
              <span className="font-mono text-xs tracking-widest text-gray-400 uppercase dark:text-slate-400">
                Frontend Developer
              </span>
              <span className="px-2.5 py-0.5 text-xs font-medium bg-teal-50 text-teal-600 rounded-full border border-teal-100 dark:bg-slate-900 dark:text-teal-300 dark:border-teal-800">
                Open to work
              </span>
            </div>

            <h1 className="animate-on-load text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight text-gray-900 mb-6 dark:text-white">
              Jaya Kiran
              <br />
              <span className="text-purple-600 dark:text-purple-300">
                Sudanagunta
              </span>
            </h1>

            <p className="animate-on-load text-base text-gray-500 leading-relaxed mb-8 max-w-md dark:text-slate-300">
              Building production-grade React & Next.js apps with
              component-driven architecture, clean state management, and
              responsive UIs. Based in{" "}
              <span className="text-gray-700 font-medium dark:text-slate-100">
                Bengaluru, India
              </span>
              .
            </p>

            <div className="animate-on-load flex flex-wrap gap-3 mb-10">
              <a
                href="#projects"
                className="px-5 py-2.5 bg-purple-600 text-white text-sm font-medium rounded-full hover:bg-purple-800 transition-colors flex items-center gap-2"
              >
                View projects
                <i className="ti ti-arrow-down text-sm" />
              </a>
              {/* <a
                href="/resume/Jaya_Kiran_Sudanagunta_Frontend_Developer_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 border border-purple-100 text-purple-700 text-sm font-medium rounded-full hover:bg-purple-50 transition-colors flex items-center gap-2 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-950"
              >
                View resume
                <i className="ti ti-file-text text-sm" />
              </a> */}
              <a
                href="/resume/Jaya_Kiran_Sudanagunta_Frontend_Developer_Resume.pdf"
                download
                className="px-5 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-full hover:border-purple-300 hover:text-purple-600 transition-colors flex items-center gap-2 dark:border-slate-700 dark:text-slate-200 dark:hover:border-purple-500"
              >
                <i className="ti ti-download text-sm" />
                Download resume
              </a>
              <a
                href="https://www.linkedin.com/in/jaya-kiran-sudanagunta"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-full hover:border-purple-300 hover:text-purple-600 transition-colors flex items-center gap-2 dark:border-slate-700 dark:text-slate-200 dark:hover:border-purple-500"
              >
                <i className="ti ti-brand-linkedin text-sm" />
                LinkedIn
              </a>
              <a
                href="https://github.com/Jayakiran24"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-full hover:border-purple-300 hover:text-purple-600 transition-colors flex items-center gap-2 dark:border-slate-700 dark:text-slate-200 dark:hover:border-purple-500"
              >
                <i className="ti ti-brand-github text-sm" />
                GitHub
              </a>
            </div>

            {/* Quick stat row */}
            <div className="animate-on-load flex gap-6">
              {[
                { val: "2+", label: "Projects shipped" },
                { val: "5+", label: "Technologies" },
                { val: "4 yrs", label: "B.Tech IT" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {s.val}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5 dark:text-slate-400">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Avatar card */}
          <div className="animate-on-load flex justify-center md:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-3xl bg-purple-50 border border-purple-100 rotate-3 scale-105 dark:bg-slate-900 dark:border-slate-700" />
              <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                {/* Avatar */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-600 to-teal-400 flex items-center justify-center mx-auto mb-6">
                  <span className="font-mono font-bold text-3xl text-white">
                    JK
                  </span>
                </div>

                <h2 className="text-center font-semibold text-gray-900 text-lg mb-1 dark:text-white">
                  Jaya Kiran Sudanagunta
                </h2>
                <p className="text-center text-sm text-purple-600 font-medium mb-4 dark:text-purple-300">
                  Frontend Developer
                </p>

                <div className="space-y-2.5">
                  {[
                    { icon: "ti-map-pin", text: "Bengaluru, India" },
                    { icon: "ti-mail", text: "jayakiranchowdary1@gmail.com" },
                    { icon: "ti-phone", text: "+91 9573205902" },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-2.5 text-sm text-gray-500 dark:text-slate-400"
                    >
                      <i
                        className={`ti ${item.icon} text-purple-400 text-base`}
                      />
                      <span className="truncate">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-5 border-t border-gray-100 flex gap-2">
                  {["React.js", "Next.js", "Tailwind"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs bg-purple-50 text-purple-600 rounded-md font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
