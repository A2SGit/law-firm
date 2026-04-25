"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function CountUp({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 20, suffix: "+", label: "Years of Practice", sub: "Est. in Hyderabad" },
  { value: 500, suffix: "+", label: "Matters Resolved", sub: "Across Telangana courts" },
  { value: 5, suffix: "", label: "Practice Areas", sub: "Full-service firm" },
  { value: 7, suffix: "", label: "Advocates", sub: "Including 2 Senior Counsel" },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-neutral-200 py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-neutral-200 divide-y lg:divide-y-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="py-8 px-6 text-center"
            >
              <p className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-1">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm font-semibold text-neutral-800 mb-0.5">{stat.label}</p>
              <p className="text-xs text-neutral-400">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
