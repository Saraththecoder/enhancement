import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Settings } from 'lucide-react';

// Home page shows 5 main product categories (matching reference screenshot)
const homeProducts = [
  {
    id: 'commercial-egg-incubator',
    title: 'COMMERCIAL EGG INCUBATORS',
    desc: 'Fully automatic incubators engineered for superior hatchability, precise temperature control.',
    imgSrc: '/images/products/commercial-egg-incubator.jpg',
  },
  {
    id: 'egg-hatcher',
    title: 'EGG HATCHERS',
    desc: 'High-performance hatchers designed for uniform airflow, ideal humidity, and maximum chick survival.',
    imgSrc: '/images/products/egg-hatcher.jpg',
  },
  {
    id: 'combined-setter-hatcher',
    title: 'COMBINED SETTER & HATCHER SYSTEMS',
    desc: 'Integrated incubation systems offering seamless incubation and hatching in one efficient solution.',
    imgSrc: '/images/products/combined-setter-hatcher.jpg',
  },
  {
    id: 'spare-parts-category',
    title: 'POULTRY INCUBATOR SPARE PARTS',
    desc: 'Premium-quality controllers, heaters, fans, motors, sensors, trays, and all essential accessories.',
    imgSrc: '/images/products/spare-parts.jpg',
  },
  {
    id: 'custom-incubation',
    title: 'CUSTOM INCUBATION SOLUTIONS',
    desc: 'Tailor-made incubators designed according to customer capacity and operational requirements.',
    imgSrc: '/images/products/custom-incubation.jpg',
  },
];

export default function Products() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="section-padding bg-light-gray">
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Settings size={16} className="text-primary" />
            </div>
            <span className="text-navy font-black text-lg md:text-xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
              OUR PRODUCT RANGE
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/products"
              className="flex items-center gap-1 text-primary text-sm font-bold hover:gap-2 transition-all duration-200"
            >
              VIEW ALL <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Products grid — 5 columns matching reference */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {homeProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link
                to="/products"
                className="group block bg-white rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.imgSrc}
                    alt={product.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <div className="p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Settings size={11} className="text-primary shrink-0" />
                    <h3 className="text-navy font-bold text-[10px] md:text-[11px] leading-snug line-clamp-2">
                      {product.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-[9px] leading-snug line-clamp-2 mt-1">{product.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all duration-300 hover:shadow-blue-glow"
          >
            VIEW ALL PRODUCTS <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
