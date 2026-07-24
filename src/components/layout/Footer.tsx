import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import logoImg from '../../assets/logo.jpg';
import { useState } from 'react';

// Social icon SVGs
const FbIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const IgIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>;
const YtIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>;
const LiIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>;

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Services', path: '/services' },
  { label: 'Why Choose Us', path: '/why-choose-us' },
  { label: 'Contact Us', path: '/contact' },
];

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: '', phone: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <footer className="bg-navy border-t border-primary/10">
      {/* Main footer — 4 columns matching reference */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Contact Us */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-primary inline-block" />
              Contact Us
            </h3>
            <div className="flex flex-col gap-3 mb-5">
              <a href="tel:+919440551559" className="flex items-start gap-2 text-sm text-white/60 hover:text-primary transition-colors">
                <Phone size={14} className="text-primary shrink-0 mt-0.5" />
                9440551559
              </a>
              <a href="tel:+919440551669" className="flex items-start gap-2 text-sm text-white/60 hover:text-primary transition-colors">
                <Phone size={14} className="text-primary shrink-0 mt-0.5" />
                9440551669
              </a>
              <a href="mailto:sunincubators@gmail.com" className="flex items-start gap-2 text-sm text-white/60 hover:text-primary transition-colors">
                <Mail size={14} className="text-primary shrink-0 mt-0.5" />
                sunincubators@gmail.com
              </a>
              <div className="flex items-start gap-2 text-sm text-white/60">
                <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
                <span>SYNO 159, near Surya Sai Nagar, Turkayamjal X road, Abdullapurmet Mandal Ranga Reddy Dist, Hyderabad – 501510 Telangana.</span>
              </div>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-primary inline-block" />
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map(l => (
                <li key={l.label}>
                  <Link
                    to={l.path}
                    className="text-sm text-white/55 hover:text-primary transition-colors duration-200 hover:pl-1"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Send Us a Message */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-primary inline-block" />
              Send Us a Message
            </h3>
            {sent ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-green-400 text-sm font-medium">
                ✅ Message sent! We'll reply within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                />
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={3}
                  className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-all duration-200 hover:shadow-[0_0_15px_rgba(11,111,245,0.4)]"
                >
                  <Send size={12} /> SEND MESSAGE
                </button>
              </form>
            )}
          </div>

          {/* Col 4 — Follow Us + Logo */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-primary inline-block" />
              Follow Us
            </h3>
            <div className="flex gap-3 mb-6">
              {[
                { icon: <FbIcon />, href: '#', label: 'Facebook' },
                { icon: <IgIcon />, href: 'https://www.instagram.com/sunincubators', label: 'Instagram' },
                { icon: <YtIcon />, href: '#', label: 'YouTube' },
                { icon: <LiIcon />, href: '#', label: 'LinkedIn' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Brand box */}
            <div className="border border-primary/20 rounded-xl p-4 bg-primary/5">
              <div className="flex items-center gap-2 mb-2">
                <img src={logoImg} alt="Sun Incubators" className="h-10 w-auto object-contain mix-blend-screen" />
                <div>
                  <p className="font-black text-white text-xs" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    SUN INCUBATORS<sup className="text-[8px]">®</sup>
                  </p>
                  <p className="text-[9px] text-blue-300/70 tracking-wider">Sun Engineering Works</p>
                </div>
              </div>
              <p className="text-white/50 text-[10px] leading-relaxed italic">
                Engineering Trust.<br />Delivering Performance.<br />
                <span className="text-primary font-semibold not-italic">Since 2004.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-4">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© 2025 Sun Engineering Works. All Rights Reserved.</span>
          <span>Brand: Sun Incubators®</span>
        </div>
      </div>
    </footer>
  );
}
