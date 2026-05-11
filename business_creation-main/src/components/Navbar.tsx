import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: '課題と解決策', href: '#problem' },
  { label: '機能', href: '#features' },
  { label: 'チーム', href: '#team' },
  { label: 'お申込み', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => handleLink('#hero')}
          className="flex items-center gap-2 font-bold text-xl text-blue-700"
        >
          <Zap className="w-6 h-6 text-blue-500" />
          MemLink
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleLink(l.href)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  scrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleLink('#contact')}
          className="hidden md:block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition-all hover:shadow-md active:scale-95"
        >
          早期アクセス申込
        </button>

        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white/98 backdrop-blur-sm border-t border-slate-100 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => handleLink(l.href)}
              className="text-left text-slate-700 font-medium py-2 border-b border-slate-50 last:border-0"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleLink('#contact')}
            className="mt-2 w-full px-5 py-3 bg-blue-600 text-white font-semibold rounded-xl"
          >
            早期アクセス申込
          </button>
        </div>
      )}
    </header>
  );
}
