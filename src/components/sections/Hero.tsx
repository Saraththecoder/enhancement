import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
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
    imgSrc: '/images/hero/hero-1.png',
  },
  {
    id: 3,
    tagline: 'MAXIMUM HATCHABILITY.',
    tagline2: 'MINIMUM ENERGY.',
    highlight: 'INDIA-WIDE.',
    sub: 'Our machines are engineered for consistent performance, low operating costs, and long-term reliability.',
    imgSrc: '/images/hero/hero-1.png',
  },
];

export default function Hero() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: '#000000',
        paddingTop: 0,
      }}
    >
      {/* Tech dot pattern background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle, #4A9EFF 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Top blue glow */}
      <div
        className="absolute top-0 left-0 right-0 h-1 z-10"
        style={{ background: '#1473E6' }}
      />

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
        className="w-full hero-swiper relative z-20"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full flex items-center"
              style={{ paddingTop: '96px', minHeight: '520px' }}
            >
              <div className="container-custom w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 py-8 md:py-12">

                  {/* ── LEFT: Text ── */}
                  <motion.div
                    key={`text-${slide.id}-${idx}`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 max-w-lg text-left z-10"
                  >
                    <h1
                      className="font-black leading-[1.1] text-white mb-4"
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: 'clamp(1.75rem, 5vw, 3.25rem)',
                      }}
                    >
                      {slide.tagline}
                      <br />
                      {slide.tagline2}
                      <br />
                      <span style={{ color: '#1473E6' }}>{slide.highlight}</span>
                    </h1>

                    <p
                      className="mb-8 leading-relaxed"
                      style={{
                        color: 'rgba(255,255,255,0.80)',
                        fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                        maxWidth: '420px',
                      }}
                    >
                      {slide.sub}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        to="/products"
                        className="flex items-center justify-between gap-3 font-bold tracking-wider rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                        style={{
                          background: '#1473E6',
                          color: '#fff',
                          padding: '13px 24px',
                          fontSize: '0.75rem',
                          boxShadow: '0 4px 20px rgba(20,115,230,0.45)',
                        }}
                      >
                        <span>EXPLORE PRODUCTS</span>
                        <ArrowRight size={15} />
                      </Link>

                      <Link
                        to="/contact"
                        className="flex items-center justify-between gap-3 font-bold tracking-wider rounded-lg transition-all duration-300 hover:bg-white/10"
                        style={{
                          background: 'transparent',
                          color: '#fff',
                          border: '1.5px solid rgba(255,255,255,0.30)',
                          padding: '13px 24px',
                          fontSize: '0.75rem',
                        }}
                      >
                        <span>CONTACT US</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </motion.div>

                  {/* ── RIGHT: Image ── */}
                  <motion.div
                    key={`img-${slide.id}-${idx}`}
                    initial={{ opacity: 0, x: 40, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="flex-1 flex items-center justify-center md:justify-end z-10 w-full"
                    style={{ maxWidth: '520px' }}
                  >
                    {/* Radial glow behind image */}
                    <div className="relative w-full">
                      <div
                        className="absolute inset-0 rounded-3xl pointer-events-none"
                        style={{
                          background: 'radial-gradient(ellipse at center, rgba(20,115,230,0.18) 0%, transparent 70%)',
                          transform: 'scale(1.15)',
                        }}
                      />
                      <img
                        src={slide.imgSrc}
                        alt={slide.tagline}
                        className="relative w-full h-auto object-contain"
                        style={{
                          maxHeight: '420px',
                          mixBlendMode: 'lighten',
                          filter: 'brightness(1.05) contrast(1.05)',
                        }}
                      />
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
