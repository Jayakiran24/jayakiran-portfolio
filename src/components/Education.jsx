import React, { useEffect, useRef } from "react";

export default function Education() {
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
              }, i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" ref={sectionRef} className="py-24 bg-gray-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal" style={{ opacity: 0, transform: "translateY(20px)" }}>
          <p className="font-mono text-xs tracking-widest text-gray-400 uppercase mb-2 dark:text-slate-400">
            — Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 tracking-tight dark:text-white">
            Education
          </h2>
        </div>

        <div
          className="reveal bg-white rounded-2xl border border-gray-100 p-7 flex flex-col sm:flex-row gap-6 items-start hover:shadow-md transition-shadow dark:bg-slate-900 dark:border-slate-800"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center flex-shrink-0 dark:bg-purple-950">
            <i className="ti ti-school text-purple-600 text-2xl" />
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  B.Tech – Information Technology
                </h3>
                <p className="text-sm text-gray-500 mt-0.5 dark:text-slate-400">
                  Prakasam Engineering College
                </p>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-1">
                <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-mono rounded-full border border-purple-100 dark:bg-purple-950 dark:text-purple-300 dark:border-slate-700">
                  2019 – 2023
                </span>
                <span className="text-xs text-gray-400 font-mono dark:text-slate-400">CGPA: 6.47</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-50 grid grid-cols-2 sm:grid-cols-3 gap-4 dark:border-slate-700">
              {[
                { label: "Degree", value: "B.Tech" },
                { label: "Field", value: "Information Technology" },
                { label: "Duration", value: "4 years" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-gray-400 font-mono uppercase tracking-wider mb-0.5 dark:text-slate-400">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-gray-700 dark:text-slate-100">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
