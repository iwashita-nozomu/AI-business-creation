import { ArrowRight, Shield, Cpu, RefreshCw } from 'lucide-react';

const badges = [
  { icon: Shield, label: 'クラウド保存なし' },
  { icon: Cpu, label: 'オンデバイスAI' },
  { icon: RefreshCw, label: 'デバイス間同期' },
];

export default function Hero() {
  const scroll = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #1d4ed8 100%)',
      }}
    >
      {/* background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* animated blobs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-32">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          Early Access 受付中
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          あなたのAIの記憶を、<br />
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #60a5fa, #22d3ee)' }}>
            どのデバイスでも。
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          MemLinkは、クラウドに頼らずデバイス間でAIの記憶・文脈を安全に同期する<br className="hidden sm:block" />
          オンデバイスAI時代の「個人記憶インフラ」です。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <button
            onClick={() => scroll('#contact')}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-bold text-base rounded-full transition-all shadow-lg hover:shadow-blue-500/40 active:scale-95"
          >
            早期アクセスを申し込む
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scroll('#problem')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base rounded-full transition-all backdrop-blur-sm"
          >
            詳しく見る
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/15 rounded-full text-slate-200 text-sm backdrop-blur-sm"
            >
              <Icon className="w-4 h-4 text-cyan-400" />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 text-xs animate-bounce">
        <span>スクロール</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent" />
      </div>
    </section>
  );
}
