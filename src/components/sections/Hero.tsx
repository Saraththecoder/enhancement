import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    tagline: 'ENGINEERING TRUST.',
    tagline2: 'DELIVERING PERFORMANCE.',
    highlight: 'SINCE 2004.',
    sub: 'Designing and manufacturing premium commercial egg incubation systems for poultry farms across India.',
    imgSrc: '/images/hero/hero-1.png',
  },
  {
    id: 2,
    tagline: 'PRECISION ENGINEERED.',
    tagline2: 'BUILT TO LAST.',
    highlight: '20+ YEARS.',
    sub: 'Trusted by 1000+ poultry farmers across 28 states. Experience the Sun Incubators difference.',
    imgSrc: '/images/products/commercial-egg-incubator.png',
  },
  {
    id: 3,
    tagline: 'MAXIMUM HATCHABILITY.',
    tagline2: 'MINIMUM ENERGY.',
    highlight: 'INDIA-WIDE.',
    sub: 'Our machines are engineered for consistent performance, low operating costs, and long-term reliability.',
    imgSrc: '/images/products/combined-setter-hatcher.png',
  },
];

export default function Hero() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="relative w-full bg-[#06111F] overflow-hidden pt-[100px] md:pt-[100px] pb-8 md:pb-12 border-b border-primary/10">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 30%, #1473E6 0%, transparent 70%)`,
        }}
      />
      {/* Subtle industrial grid pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #1473E6 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Nav arrows for desktop */}
      <button
        ref={prevRef}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/10 border border-white/20 backdrop-blur-md items-center justify-center text-white hover:bg-[#1473E6] transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        ref={nextRef}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/10 border border-white/20 backdrop-blur-md items-center justify-center text-white hover:bg-[#1473E6] transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        className="w-full relative z-20 hero-swiper"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={slide.id}>
            <div className="container-custom flex flex-col lg:flex-row items-center justify-between gap-8 py-6 md:py-12 relative z-20">
              {/* Text column */}
              <div className="flex-1 max-w-xl text-left">
                <motion.div
                  key={`text-${slide.id}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-4 text-white tracking-tight"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {slide.tagline}
                    <br />
                    {slide.tagline2}
                    <br />
                    <span className="text-[#1473E6]">{slide.highlight}</span>
                  </h1>

                  <p className="text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-8 text-slate-300 max-w-md">
                    {slide.sub}
                  </p>

                  {/* Buttons matching screenshot */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Link
                      to="/products"
                      className="flex items-center justify-between gap-3 bg-[#1473E6] hover:bg-blue-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 text-xs sm:text-sm tracking-wider shadow-[0_4px_20px_rgba(20,115,230,0.4)] hover:shadow-xl hover:-translate-y-0.5"
                    >
                      <span>EXPLORE PRODUCTS</span>
                      <ArrowRight size={16} />
                    </Link>

                    <Link
                      to="/contact"
                      className="flex items-center justify-between gap-3 bg-transparent border border-white/20 hover:border-[#1473E6] hover:bg-white/5 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 text-xs sm:text-sm tracking-wider"
                    >
                      <span>CONTACT US</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Image column */}
              <motion.div
                key={`img-${slide.id}-${idx}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="flex-1 max-w-md lg:max-w-xl w-full flex items-center justify-center"
              >
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-b from-blue-900/20 to-navy-dark/80 border border-primary/20 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <img
                    src={slide.imgSrc}
                    alt={slide.tagline}
                    className="w-full h-full object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
