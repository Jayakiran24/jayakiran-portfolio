import React, { useEffect, useRef } from "react";

const experience = [
  {
    role: "Fresher",
    company: "Entry-level frontend developer",
    period: "2024",
    description:
      "Completed hands-on training in React, Next.js, Tailwind CSS, and responsive UI development. Ready to contribute to frontend projects with a strong foundation in modern web technologies.",
  },
];

const highlights = [
  "React.js & Next.js application architecture",
  "Component-driven UI with Tailwind CSS",
  "State management with Zustand and Context API",
  "Responsive design, accessibility, and performance tuning",
];

export default function Resume() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="py-24 bg-white dark:bg-slate-950"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div
          className="reveal"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          <p className="font-mono text-xs tracking-widest text-gray-400 uppercase mb-2 dark:text-slate-400">
            — Resume
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight dark:text-white">
            Professional summary
          </h2>
          <p className="text-gray-500 max-w-2xl leading-relaxed dark:text-slate-400">
            I build intuitive frontend experiences with React, Next.js, and
            Tailwind CSS. My focus is on crafting maintainable interfaces,
            shipping polished production features, and delivering responsive
            applications that feel fast.
          </p>
        </div>

        <div
          className="reveal mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          <div className="space-y-7">
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-7 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Resume highlights
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 dark:text-slate-400">
                    Key strengths shown across my frontend work and engineering
                    experience.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="/resume/Jayakiran_Sudanagunta_Frontend_Developer.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 hover:bg-purple-100 transition-colors dark:border-purple-800 dark:bg-purple-950 dark:text-purple-300"
                  >
                    View resume
                  </a>
                  <a
                    href="/resume/Jayakiran_Sudanagunta_Frontend_Developer.pdf"
                    download
                    className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-purple-300 hover:text-purple-600 transition-colors dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-purple-600"
                  >
                    Download resume
                  </a>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-gray-600 dark:text-slate-300">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-600 dark:bg-purple-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-7 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Training & projects
              </h3>
              <div className="space-y-5">
                {experience.map((item) => (
                  <div key={item.role} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {item.role}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-slate-400">
                          {item.company}
                        </p>
                      </div>
                      <span className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-slate-500">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-7">
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-7 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick facts
              </h3>
              <div className="grid grid-cols-1 gap-4 text-sm text-gray-600 dark:text-slate-300">
                <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-950">
                  <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-slate-500">
                    Location
                  </p>
                  <p className="mt-2 font-medium text-gray-900 dark:text-white">
                    Bengaluru, India
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-950">
                  <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-slate-500">
                    Experience
                  </p>
                  <p className="mt-2 font-medium text-gray-900 dark:text-white">
                    Fresher with modern frontend training
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-950">
                  <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-slate-500">
                    Tools
                  </p>
                  <p className="mt-2 font-medium text-gray-900 dark:text-white">
                    React, Next, Tailwind, Git
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-7 text-center dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm text-gray-500 dark:text-slate-400">
                Prefer a printable version?
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-800 transition-colors"
                >
                  View full resume
                </a>
                <a
                  href="/resume/Jayakiran_Sudanagunta_Frontend_Developer.pdf"
                  download
                  className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:border-purple-300 hover:text-purple-600 transition-colors dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
                >
                  Download resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
