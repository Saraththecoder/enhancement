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
    imgSrc: '/images/hero/hero-2.png',
  },
  {
    id: 3,
    tagline: 'MAXIMUM HATCHABILITY.',
    tagline2: 'MINIMUM ENERGY.',
    highlight: 'INDIA-WIDE.',
    sub: 'Our machines are engineered for consistent performance, low operating costs, and long-term reliability.',
    imgSrc: '/images/hero/hero-3.png',
  },
];

export default function Hero() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="relative w-full overflow-hidden" style={{ marginTop: 0 }}>
      {/* Nav arrows */}
      <button
        ref={prevRef}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/30 border border-white/20 backdrop-blur-md items-center justify-center text-white hover:bg-[#1473E6] transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        ref={nextRef}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/30 border border-white/20 backdrop-blur-md items-center justify-center text-white hover:bg-[#1473E6] transition-all duration-200"
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
        className="w-full hero-swiper"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={slide.id}>
            {/* Full-bleed background image */}
            <div className="relative w-full min-h-[420px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[680px] flex items-center pt-[90px] md:pt-[96px]">
              {/* Background image */}
              <img
                src={slide.imgSrc}
                alt={slide.tagline}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* Dark gradient overlays for readability */}
              {/* Left strong dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#02080F]/95 via-[#02080F]/70 to-transparent z-10" />
              {/* Top fade for navbar blend */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#06111F] to-transparent z-10" />
              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#02080F]/80 to-transparent z-10" />

              {/* Text content overlaid on top */}
              <div className="container-custom relative z-20 py-10 md:py-16">
                <div className="max-w-xl lg:max-w-2xl">
                  <motion.div
                    key={`text-${slide.id}-${idx}`}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
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

                    <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-8 text-slate-300 max-w-md font-normal">
                      {slide.sub}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        to="/products"
                        className="flex items-center justify-between gap-3 bg-[#1473E6] hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 text-xs sm:text-sm tracking-wider shadow-[0_4px_20px_rgba(20,115,230,0.45)] hover:-translate-y-0.5"
                      >
                        <span>EXPLORE PRODUCTS</span>
                        <ArrowRight size={16} />
                      </Link>

                      <Link
                        to="/contact"
                        className="flex items-center justify-between gap-3 bg-white/10 backdrop-blur-sm border border-white/25 hover:border-white/50 hover:bg-white/15 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 text-xs sm:text-sm tracking-wider"
                      >
                        <span>CONTACT US</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
