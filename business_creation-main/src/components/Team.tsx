import { Linkedin, Github } from 'lucide-react';

const members = [
  {
    name: '田中 誠司',
    role: 'CEO / Co-Founder',
    bio: '元Google AIエンジニア。分散システムと機械学習の交差点で10年以上の研究・開発経験を持つ。',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    tags: ['AI/ML', '分散システム'],
  },
  {
    name: '鈴木 あかり',
    role: 'CTO / Co-Founder',
    bio: '暗号技術とセキュリティプロトコルの専門家。オンデバイス推論の最適化研究に従事。',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    tags: ['暗号化', 'セキュリティ'],
  },
  {
    name: '山本 健太',
    role: 'Lead Engineer',
    bio: 'Rustエキスパート。低遅延P2P通信プロトコルの設計・実装を専門とする。',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    tags: ['Rust', 'P2P通信'],
  },
  {
    name: '中村 美咲',
    role: 'Product Designer',
    bio: 'UXデザイナーとして国内外のプロダクトを20以上リリース。複雑な技術を直感的なUIに変換する。',
    avatar: 'https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    tags: ['UX/UI', 'プロダクト'],
  },
  {
    name: '佐藤 拓也',
    role: 'AI Research Lead',
    bio: '東大大学院出身。オンデバイスLLMの量子化・最適化研究で複数の査読付き論文を執筆。',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    tags: ['LLM研究', '量子化'],
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full mb-4 uppercase tracking-wide">
            チーム
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            私たちについて
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            AI・セキュリティ・分散システムの専門家が集結。オンデバイスAI時代の記憶インフラを作り上げます。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((m, i) => (
            <div
              key={m.name}
              className={`group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                i === 4 ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''
              }`}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={m.avatar}
                  alt={m.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {m.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{m.name}</h3>
                    <p className="text-blue-600 text-sm font-semibold">{m.role}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-100 flex items-center justify-center transition-colors">
                      <Linkedin className="w-3.5 h-3.5 text-slate-500 hover:text-blue-600" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-100 flex items-center justify-center transition-colors">
                      <Github className="w-3.5 h-3.5 text-slate-500 hover:text-blue-600" />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
