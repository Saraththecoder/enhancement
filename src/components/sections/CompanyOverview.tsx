import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Globe, ShieldCheck, ThumbsUp, ArrowRight, CheckCircle2 } from 'lucide-react';

const features = [
  { icon: <Calendar size={20} />, title: 'SINCE 2004', sub: 'Manufacturing Experience' },
  { icon: <Globe size={20} />, title: 'INDIA WIDE', sub: 'Trusted by Poultry Farmers' },
  { icon: <ShieldCheck size={20} />, title: 'QUALITY ASSURED', sub: 'Precision Engineered' },
  { icon: <ThumbsUp size={20} />, title: 'CUSTOMER FOCUSED', sub: 'Your Success is Our Mission' },
];

const coreValues = [
  'Engineering Excellence',
  'Transparency & Integrity',
  'Premium Quality',
  'Reliability',
  'Customer Success',
  'Continuous Improvement',
  'Innovation',
];

export default function CompanyOverview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="bg-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left — Company intro */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Company Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-navy mt-1 mb-1 leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              SUN ENGINEERING WORKS
            </h2>
            <p className="text-primary font-bold text-base mb-4">Brand: Sun Incubators</p>

            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Sun Incubators is committed to building reliable, precision-engineered incubation systems that help poultry businesses achieve higher productivity, better hatchability, and long-term success.
            </p>

            {/* Feature icons grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <div className="text-navy font-bold text-xs">{f.title}</div>
                    <div className="text-slate-400 text-[11px]">{f.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all duration-200"
            >
              VIEW MORE ABOUT US <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Center — Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:border-x lg:border-primary/10 lg:px-10"
          >
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary text-sm">👁</span>
                </div>
                <h3 className="text-navy font-black text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>OUR VISION</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                To become India's most trusted and technologically advanced poultry incubation brand by delivering world-class incubation solutions that maximize hatchability, reliability, and profitability.
              </p>
            </div>

            {/* Core Values */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary text-sm">💎</span>
                </div>
                <h3 className="text-navy font-black text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>CORE VALUES</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {coreValues.map((v) => (
                  <div key={v} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={14} className="text-primary shrink-0" />
                    {v}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Mission */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-primary text-sm">🎯</span>
              </div>
              <h3 className="text-navy font-black text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>OUR MISSION</h3>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              To empower poultry farmers and hatcheries with precision-engineered incubators built for consistent performance, energy efficiency, and long-term durability. We combine innovation, craftsmanship, and customer support to help our clients achieve outstanding results.
            </p>

            {/* Visual stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '20+', label: 'Years Experience' },
                { num: '1000+', label: 'Happy Customers' },
                { num: '5000+', label: 'Machines Installed' },
                { num: '28+', label: 'States Served' },
              ].map(s => (
                <div key={s.label} className="bg-light-gray rounded-xl p-4 text-center border border-primary/5">
                  <div className="text-2xl font-black text-primary" style={{ fontFamily: 'Outfit, sans-serif' }}>{s.num}</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
