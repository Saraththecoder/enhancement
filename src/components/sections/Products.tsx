import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Package } from 'lucide-react';

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
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-[#1473E6]/20 bg-white shadow-sm">
              <Package size={16} className="text-[#1473E6] stroke-[1.5]" />
            </div>
            <span className="text-[#1473E6] font-bold text-xs md:text-sm tracking-wide uppercase" style={{ fontFamily: 'Outfit, sans-serif' }}>
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
              className="flex items-center gap-1 text-[#1473E6] text-xs font-bold tracking-wider hover:gap-2 transition-all duration-200 uppercase"
            >
              VIEW ALL <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Products grid — responsive scroll on mobile, grid on desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4 pb-4 md:pb-0">
          {homeProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`min-w-[45vw] sm:min-w-[30vw] md:min-w-0 snap-start ${i === 4 ? 'lg:block' : ''}`}
            >
              <Link
                to="/products"
                className="group block bg-white rounded-xl lg:rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 overflow-hidden h-full flex flex-col"
              >
                <div className="relative overflow-hidden aspect-square bg-white flex items-center justify-center p-2 lg:p-3">
                  <img
                    src={product.imgSrc}
                    alt={product.title}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <div className="p-4 text-center flex-1 flex flex-col justify-start">
                  <h3 className="text-navy font-bold text-xs md:text-sm leading-tight tracking-wide mb-2">
                    {product.title}
                  </h3>
                  <p className="hidden md:block text-slate-500 text-xs leading-relaxed line-clamp-3">{product.desc}</p>
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
            className="inline-flex items-center gap-2 bg-[#1473E6] hover:bg-blue-600 text-white font-bold px-8 py-3.5 rounded-lg text-sm transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
          >
            VIEW ALL PRODUCTS <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
