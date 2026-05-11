import { Shield, RefreshCw, Layers } from 'lucide-react';

const features = [
  {
    icon: Shield,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    tag: '01',
    title: 'ゼロクラウド記憶保護',
    subtitle: 'プライバシーファーストの設計',
    desc: 'AIの記憶・文脈データはすべてデバイス上に暗号化保存。外部クラウドには一切送信しません。機密情報を扱うビジネスや、プライバシーを重視するユーザーでも安心して使えます。',
    points: ['AES-256暗号化ローカル保存', 'クラウドへのデータ送信ゼロ', '端末紛失時の自動ロック機能'],
  },
  {
    icon: RefreshCw,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
    tag: '02',
    title: 'ローカル差分同期',
    subtitle: 'シームレスなデバイス間体験',
    desc: '同一ネットワーク内の端末間で、変更差分のみを効率的に同期。PCで続きをスマホで、スマホで始めたAIとの会話をタブレットで継続できます。',
    points: ['Wi-Fi/Bluetooth経由の差分同期', 'リアルタイム更新（低遅延）', 'PC・スマホ・タブレット・ウェアラブル対応'],
  },
  {
    icon: Layers,
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
    tag: '03',
    title: 'モデル非依存メモリ層',
    subtitle: '既存AIにアドオン可能',
    desc: '記憶層をLLM本体から完全分離した設計。ChatGPT、Claude、ローカルLLMなど、どのAIモデルとも組み合わせ可能。モデルを変えても記憶が引き継がれます。',
    points: ['主要LLM対応プラグイン', 'オープンAPIで拡張自在', 'モデル変更後も記憶継続'],
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full mb-4 uppercase tracking-wide">
            主な機能
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            3つのコア機能
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            MemLinkが提供する革新的な技術基盤で、あなたのAI体験を根本から変えます。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.tag}
              className={`group relative flex flex-col p-8 rounded-3xl border ${f.border} bg-gradient-to-b from-white to-slate-50/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="absolute top-6 right-6 text-5xl font-black text-slate-100 select-none">
                {f.tag}
              </div>

              <div className={`w-14 h-14 rounded-2xl ${f.bg} flex items-center justify-center mb-6`}>
                <f.icon className={`w-7 h-7 ${f.color}`} />
              </div>

              <p className={`text-xs font-bold uppercase tracking-widest ${f.color} mb-2`}>
                {f.subtitle}
              </p>
              <h3 className="text-xl font-extrabold text-slate-900 mb-4">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">{f.desc}</p>

              <ul className="space-y-2">
                {f.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-xs text-slate-600">
                    <span className={`w-1.5 h-1.5 rounded-full ${f.bg.replace('bg-', 'bg-').replace('-50', '-500')}`} style={{ backgroundColor: 'currentColor' }} />
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${f.color.replace('text-', 'bg-')}`} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
