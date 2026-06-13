import React, { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "Frontend",
    icon: "ti-layout",
    color: "purple",
    items: ["React.js", "Next.js", "JavaScript ES6+", "HTML5", "CSS3"],
  },
  {
    category: "Styling",
    icon: "ti-palette",
    color: "teal",
    items: ["Tailwind CSS", "Bootstrap", "Responsive Design"],
  },
  {
    category: "State Management",
    icon: "ti-database",
    color: "purple",
    items: ["Zustand", "Redux Toolkit (RTK)", "Context API"],
  },
  {
    category: "Tools & DevOps",
    icon: "ti-tools",
    color: "teal",
    items: ["Git", "GitHub", "GitLab", "VS Code"],
  },
  {
    category: "Auth & Payments",
    icon: "ti-shield-lock",
    color: "purple",
    items: ["JWT", "Razorpay"],
  },
  {
    category: "Database",
    icon: "ti-server",
    color: "teal",
    items: ["SQL", "MySQL"],
  },
];

const colorMap = {
  purple: {
    icon: "bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-300",
    tag: "bg-purple-50 text-purple-700 border-purple-100 dark:bg-slate-800 dark:text-purple-300 dark:border-slate-700",
    border: "border-purple-100 hover:border-purple-300 dark:border-slate-800 dark:hover:border-slate-700",
  },
  teal: {
    icon: "bg-teal-50 text-teal-600 dark:bg-slate-800 dark:text-teal-300",
    tag: "bg-teal-50 text-teal-700 border-teal-100 dark:bg-slate-800 dark:text-teal-300 dark:border-slate-700",
    border: "border-teal-100 hover:border-teal-300 dark:border-slate-800 dark:hover:border-slate-700",
  },
};

export default function Skills() {
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
              }, i * 80);
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
    <section id="skills" ref={sectionRef} className="py-24 bg-white border-y border-gray-100 dark:bg-slate-950 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal" style={{ opacity: 0, transform: "translateY(20px)" }}>
          <p className="font-mono text-xs tracking-widest text-gray-400 uppercase mb-2 dark:text-slate-400">
            — Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight dark:text-white">
            Skills & tools
          </h2>
          <p className="text-gray-500 mb-12 max-w-lg dark:text-slate-400">
            Technologies I use to build fast, responsive, and maintainable web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => {
            const c = colorMap[group.color];
            return (
              <div
                key={group.category}
                className={`reveal bg-gray-50 rounded-2xl border ${c.border} p-6 transition-colors dark:bg-slate-900`}
                style={{ opacity: 0, transform: "translateY(20px)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-xl ${c.icon} flex items-center justify-center`}>
                    <i className={`ti ${group.icon} text-lg`} />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm dark:text-white">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`px-2.5 py-1 text-xs font-mono rounded-lg border ${c.tag}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Strengths strip */}
        <div
          className="reveal mt-10 bg-gray-900 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 dark:bg-slate-900"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          {[
            { icon: "ti-puzzle", title: "Problem solver", desc: "Strong debugging instincts and systematic thinking." },
            { icon: "ti-bolt", title: "Quick learner", desc: "Adapts fast to new tech stacks and frameworks." },
            { icon: "ti-components", title: "Component-driven", desc: "Deep understanding of scalable UI architecture." },
          ].map((s) => (
            <div key={s.title} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i className={`ti ${s.icon} text-purple-400 text-base`} />
              </div>
              <div>
                <p className="font-semibold text-white text-sm mb-0.5">{s.title}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
