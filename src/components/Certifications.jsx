import React, { useEffect, useRef } from "react";

const certs = [
  {
    title: "Full Stack Development",
    org: "Pyspiders, Bangalore",
    icon: "ti-code",
    color: "purple",
    year: "2023",
  },
  {
    title: "Python 101 for Data Science",
    org: "IBM Cognitive Class",
    icon: "ti-brain",
    color: "teal",
    year: "2022",
  },
];

const colorMap = {
  purple: {
    icon: "bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-300",
    border: "border-purple-100 dark:border-slate-800",
    badge: "bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-300",
  },
  teal: {
    icon: "bg-teal-50 text-teal-600 dark:bg-slate-800 dark:text-teal-300",
    border: "border-teal-100 dark:border-slate-800",
    badge: "bg-teal-50 text-teal-600 dark:bg-slate-800 dark:text-teal-300",
  },
};

export default function Certifications() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 120);
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
    <section ref={sectionRef} className="py-24 bg-white border-t border-gray-100 dark:bg-slate-950 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal" style={{ opacity: 0, transform: "translateY(20px)" }}>
          <p className="font-mono text-xs tracking-widest text-gray-400 uppercase mb-2 dark:text-slate-400">
            — Credentials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 tracking-tight dark:text-white">
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {certs.map((cert) => {
            const c = colorMap[cert.color];
            return (
              <div
                key={cert.title}
                className={`reveal bg-gray-50 rounded-2xl border ${c.border} p-6 flex items-start gap-4 hover:shadow-sm transition-shadow dark:bg-slate-900`}
                style={{ opacity: 0, transform: "translateY(20px)" }}
              >
                <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center flex-shrink-0`}>
                  <i className={`ti ${cert.icon} text-xl`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-gray-900 text-sm leading-snug dark:text-white">
                      {cert.title}
                    </h3>
                    <span className={`text-xs font-mono px-2 py-0.5 rounded-md ${c.badge} flex-shrink-0`}>
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 dark:text-slate-400">{cert.org}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
