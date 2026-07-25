import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Star, Flame, Headset } from 'lucide-react';

const features = [
  {
    icon: <Shield size={22} className="stroke-[1.5]" />,
    title: 'SINCE 2004',
    sub: 'Manufacturing Excellence',
  },
  {
    icon: <Star size={22} className="stroke-[1.5]" />,
    title: 'PREMIUM QUALITY',
    sub: 'Built to Last',
  },
  {
    icon: <Flame size={22} className="stroke-[1.5]" />,
    title: 'ENERGY EFFICIENT',
    sub: 'Save More, Perform More',
  },
  {
    icon: <Headset size={22} className="stroke-[1.5]" />,
    title: 'AFTER SALES SUPPORT',
    sub: 'Always With You',
  },
];

export default function FeatureStrip() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="bg-navy-mid border-y border-primary/10">
      <div className="container-custom py-6 md:py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-0 md:divide-x divide-primary/20">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center px-1 md:px-6 py-4 group hover:bg-primary/5 transition-colors duration-200 cursor-default"
            >
              <div className="text-primary mb-2 group-hover:scale-110 transition-transform duration-300 w-8 h-8 rounded-full border border-primary/40 flex items-center justify-center">
                {f.icon}
              </div>
              <div className="text-white font-bold text-[10px] md:text-sm leading-tight uppercase" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {f.title}
              </div>
              <div className="text-white/60 text-[9px] md:text-xs mt-0.5 leading-tight">{f.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
