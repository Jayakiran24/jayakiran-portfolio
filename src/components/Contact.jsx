import React, { useEffect, useRef, useState } from "react";

const contactLinks = [
  {
    icon: "ti-mail",
    label: "Email",
    value: "jayakiranchowdary1@gmail.com",
    href: "mailto:jayakiranchowdary1@gmail.com",
    color: "purple",
  },
  {
    icon: "ti-phone",
    label: "Phone",
    value: "+91 9573205902",
    href: "tel:+919573205902",
    color: "teal",
  },
  {
    icon: "ti-brand-linkedin",
    label: "LinkedIn",
    value: "jaya-kiran-sudanagunta",
    href: "https://www.linkedin.com/in/jaya-kiran-sudanagunta",
    color: "purple",
  },
  {
    icon: "ti-brand-github",
    label: "GitHub",
    value: "Jayakiran24",
    href: "https://github.com/Jayakiran24",
    color: "teal",
  },
];

const colorMap = {
  purple: "bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-300",
  teal: "bg-teal-50 text-teal-600 dark:bg-slate-800 dark:text-teal-300",
};

export default function Contact() {
  const sectionRef = useRef(null);
  const [copied, setCopied] = useState(false);

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
              }, i * 100);
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

  const copyEmail = () => {
    navigator.clipboard.writeText("jayakiranchowdary1@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-gray-50 border-t border-gray-100 dark:bg-slate-950 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal" style={{ opacity: 0, transform: "translateY(20px)" }}>
          <p className="font-mono text-xs tracking-widest text-gray-400 uppercase mb-2 dark:text-slate-400">
            — Get in touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight dark:text-white">
            Let's work together
          </h2>
          <p className="text-gray-500 mb-12 max-w-lg dark:text-slate-400">
            Currently open to frontend developer roles. Reach out and I'll get back to you promptly.
          </p>
        </div>

        {/* CTA banner */}
        <div
          className="reveal bg-gray-900 rounded-2xl p-8 mb-8 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          <div>
            <h3 className="text-white font-bold text-lg mb-1">Open to opportunities</h3>
            <p className="text-gray-400 text-sm">
              React.js · Next.js · Tailwind CSS · Bengaluru or Remote
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="mailto:jayakiranchowdary1@gmail.com"
              className="px-5 py-2.5 bg-purple-600 text-white text-sm font-medium rounded-full hover:bg-purple-800 transition-colors whitespace-nowrap"
            >
              Send email
            </a>
            <button
              onClick={copyEmail}
              className="px-5 py-2.5 border border-white/20 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <i className={`ti ${copied ? "ti-check" : "ti-copy"} text-sm`} />
              {copied ? "Copied!" : "Copy email"}
            </button>
          </div>
        </div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="reveal bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4 hover:border-gray-200 hover:shadow-sm transition-all group dark:bg-slate-900 dark:border-slate-800"
              style={{ opacity: 0, transform: "translateY(20px)" }}
            >
              <div className={`w-10 h-10 rounded-xl ${colorMap[link.color]} flex items-center justify-center flex-shrink-0`}>
                <i className={`ti ${link.icon} text-lg`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-400 font-mono uppercase tracking-wider mb-0.5 dark:text-slate-400">
                  {link.label}
                </p>
                <p className="text-sm font-medium text-gray-800 truncate dark:text-slate-100">{link.value}</p>
              </div>
              <i className="ti ti-arrow-right text-gray-300 group-hover:text-purple-400 group-hover:translate-x-1 transition-all text-sm" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
