import React, { useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "RecipeHub",
    subtitle: "Food Delivery & Chef Booking Platform",
    description:
      "Dual-feature platform where users can browse restaurants, add dishes to a localStorage-persisted cart, and complete checkout — or book a personal chef with cuisine and time-slot selection. Features multi-page architecture with tabbed menus, floating cart bars, sticky booking sidebars, and Swiper.js carousels.",
    liveUrl: "https://recipe-hub-five-red.vercel.app/",
    githubUrl: "https://github.com/Jayakiran24",
    tags: ["React.js", "Zustand", "Tailwind CSS", "React Router", "Swiper.js", "ES6+"],
    accent: "purple",
    highlights: [
      "Zustand global cart with real-time totals",
      "Cross-page state persistence",
      "Fully responsive across all screen sizes",
    ],
    icon: "ti-chef-hat",
  },
  {
    id: 2,
    title: "Vadamalayan Hospitals",
    subtitle: "Appointment Booking Platform",
    description:
      "Responsive hospital booking UI with doctor browsing, consultation booking, and a Razorpay payment gateway. Booking confirmation only triggers on successful payment. REST APIs integrated via Axios for doctor listings; Formik + Yup handles patient form validation.",
    liveUrl: "https://vadamalayan-hospitals.vercel.app/",
    githubUrl: "https://github.com/Jayakiran24",
    tags: ["React.js", "Tailwind CSS", "Axios", "Formik + Yup", "Razorpay", "React Router"],
    accent: "teal",
    highlights: [
      "Razorpay payment gateway integration",
      "Formik + Yup form validation",
      "REST API doctor listing & booking",
    ],
    icon: "ti-stethoscope",
  },
];

const accentMap = {
  purple: {
    border: "border-l-purple-600",
    badge: "bg-purple-50 text-purple-600 border-purple-100",
    icon: "bg-purple-50 text-purple-600",
    link: "text-purple-600 hover:text-purple-800",
    dot: "bg-purple-600",
    tag: "bg-purple-50 text-purple-700",
  },
  teal: {
    border: "border-l-teal-400",
    badge: "bg-teal-50 text-teal-600 border-teal-100",
    icon: "bg-teal-50 text-teal-600",
    link: "text-teal-600 hover:text-teal-800",
    dot: "bg-teal-400",
    tag: "bg-teal-50 text-teal-700",
  },
};

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="py-24 bg-gray-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal" style={{ opacity: 0, transform: "translateY(20px)" }}>
          <p className="font-mono text-xs tracking-widest text-gray-400 uppercase mb-2 dark:text-slate-400">
            — Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight dark:text-white">
            Featured projects
          </h2>
          <p className="text-gray-500 mb-12 max-w-lg dark:text-slate-400">
            Production-ready applications built with modern React architecture and real-world integrations.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => {
            const c = accentMap[project.accent];
            return (
              <div
                key={project.id}
                className={`reveal bg-white rounded-2xl border-l-4 ${c.border} border border-gray-100 p-7 hover:shadow-md transition-shadow dark:bg-slate-900 dark:border-slate-800`}
                style={{ opacity: 0, transform: "translateY(20px)" }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center flex-shrink-0`}>
                    <i className={`ti ${project.icon} text-2xl`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-slate-400 mt-0.5">{project.subtitle}</p>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        {project.liveUrl !== "#" && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={`flex items-center gap-1.5 text-sm font-medium px-4 py-1.5 rounded-full border ${c.badge} transition-opacity hover:opacity-80`}
                          >
                            <i className="ti ti-external-link text-sm" />
                            Live demo
                          </a>
                        )}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium px-4 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-gray-300 transition-colors dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-600"
                        >
                          <i className="ti ti-brand-github text-sm" />
                          Code
                        </a>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-5 dark:text-slate-300">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-5">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-gray-500 dark:text-slate-400">
                          <span className={`w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-0.5 text-xs font-mono rounded-md ${c.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
