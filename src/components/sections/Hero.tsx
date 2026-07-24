import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    tagline: 'ENGINEERING TRUST. DELIVERING PERFORMANCE.',
    highlight: 'SINCE 2004.',
    sub: 'Designing and manufacturing premium commercial egg incubation systems for poultry farms across India.',
    imgLabel: 'Hero — Commercial Incubator from @sunincubators',
    imgSrc: '/images/hero/hero-1.jpg',
  },
  {
    id: 2,
    tagline: 'PRECISION ENGINEERED. BUILT TO LAST.',
    highlight: '20+ YEARS.',
    sub: 'Trusted by 1000+ poultry farmers across 28 states. Experience the Sun Incubators difference.',
    imgLabel: 'Hero — Hatcher Machine from @sunincubators',
    imgSrc: '/images/hero/hero-2.jpg',
  },
  {
    id: 3,
    tagline: 'MAXIMUM HATCHABILITY. MINIMUM ENERGY.',
    highlight: 'INDIA-WIDE.',
    sub: 'Our machines are engineered for consistent performance, low operating costs, and long-term reliability.',
    imgLabel: 'Hero — Installation from @sunincubators',
    imgSrc: '/images/hero/hero-3.jpg',
  },
];

export default function Hero() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="relative w-full min-h-screen bg-hero-gradient overflow-hidden pt-[110px] md:pt-[90px]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #0B6FF5 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent z-10 pointer-events-none" />

      {/* Nav arrows */}
      <button
        ref={prevRef}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center text-white hover:bg-primary/50 transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        ref={nextRef}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center text-white hover:bg-primary/50 transition-all duration-200"
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
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        className="w-full h-full relative z-20"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={slide.id}>
            <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8 min-h-[calc(100vh-110px)] md:min-h-[calc(100vh-90px)] py-10 md:py-16 relative z-20">
              {/* Text */}
              <div className="flex-1 max-w-xl">
                <motion.div
                  key={`text-${slide.id}-${idx}`}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h1
  className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-snug md:leading-tight mb-4"
  style={{
    fontFamily: 'Outfit, sans-serif',
    color: '#FFFFFF',
    textShadow: '0 0 12px rgba(255,255,255,0.35), 0 6px 30px rgba(0,0,0,0.95)'
  }}
>
                    {slide.tagline}
                    <br />
                    <span style={{ color: '#2EA4FF' }} className="drop-shadow-lg">{slide.highlight}</span>
                  </h1>

            <p
  className="text-base md:text-lg font-medium leading-relaxed mb-6 md:mb-8 max-w-md"
  style={{
    color: '#FFFFFF',
    textShadow: '0 2px 18px rgba(0,0,0,0.95)'
  }}
>
                    {slide.sub}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/products"
                      className="ripple-btn flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-blue-glow text-sm tracking-wide group"
                    >
                      EXPLORE PRODUCTS
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-primary text-white hover:text-primary font-bold px-6 py-3 rounded-xl transition-all duration-300 text-sm tracking-wide"
                    >
                      CONTACT US
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Image */}
              <motion.div
                key={`img-${slide.id}-${idx}`}
                initial={{ opacity: 0, scale: 0.9, x: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="flex-1 max-w-sm md:max-w-xl lg:max-w-2xl w-full animate-float"
              >
                <div className="relative">
                  {/* Glow behind image */}
                  <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl scale-90 pointer-events-none" />
                  <ImagePlaceholder
                    label={slide.imgLabel}
                    src={slide.imgSrc}
                    alt={slide.tagline}
                    aspectRatio="aspect-[4/3]"
                    dark
                    className="rounded-2xl md:rounded-3xl border border-primary/20 relative z-10"
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
