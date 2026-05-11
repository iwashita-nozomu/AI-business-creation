import { TrendingUp, Lock, Cpu, ArrowRight, CheckCircle } from 'lucide-react';

const problems = [
  {
    icon: TrendingUp,
    title: 'オンラインLLMの価格高騰',
    desc: 'API課金が増えるほど、個人・企業の利用コストが重くなる。',
  },
  {
    icon: Lock,
    title: 'セキュリティ・機密情報の懸念',
    desc: '外部クラウドに送れない情報が多く、オンデバイス需要が高まる。',
  },
  {
    icon: Cpu,
    title: 'ローカルLLMの性能向上',
    desc: '軽量モデル・量子化・1bit系の進歩で、ユーザー端末でも実用性が上がる。',
  },
];

const solutions = [
  '記憶をモデル本体から分離して保持',
  '各デバイスに暗号化して保存する',
  '通信できる端末間だけで差分同期する',
  'クラウドにユーザー記憶を保存しない',
];

const values = [
  'どの端末でも同じ自分専用AIを使える',
  'セキュリティとオンデバイス性を両立',
  'オンラインLLMのコスト依存を低減',
];

export default function ProblemSolution() {
  return (
    <section id="problem" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full mb-4 uppercase tracking-wide">
            課題と解決策
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            オンデバイスAI時代の<br />
            <span className="text-blue-600">新たな問題</span>を解決する
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            AIがデバイスに移るほど、記憶はバラバラになる。MemLinkはその課題を根本から解決します。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problems */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">!</span>
              技術トリガーと問題
            </h3>
            <div className="space-y-4">
              {problems.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 mb-1">{title}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-2xl">
              <p className="text-sm font-semibold text-amber-800 leading-relaxed">
                本質課題は「モデル性能」ではなく、<br />
                「デバイス間で記憶をどう共有するか」
              </p>
            </div>
          </div>

          {/* Arrow + Solution */}
          <div className="flex flex-col gap-6">
            <div className="hidden lg:flex items-center justify-center mb-2">
              <ArrowRight className="w-8 h-8 text-blue-400" />
            </div>

            <div className="p-6 bg-white rounded-2xl border border-blue-100 shadow-md">
              <h3 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  ✓
                </span>
                MemLinkの仕組み
              </h3>
              <ul className="space-y-3 mb-6">
                {solutions.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>

              <div className="border-t border-slate-100 pt-5">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">価値</p>
                <ul className="space-y-2">
                  {values.map((v) => (
                    <li key={v} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-5 rounded-2xl text-white text-center font-bold text-lg leading-snug"
              style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)' }}>
              オンデバイスAI時代の<br />
              「個人記憶インフラ」をつくる。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
