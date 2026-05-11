import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white font-bold text-lg">
          <Zap className="w-5 h-5 text-blue-400" />
          MemLink
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MemLink, Inc. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
          <a href="#" className="hover:text-white transition-colors">利用規約</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">お問い合わせ</a>
        </div>
      </div>
    </footer>
  );
}
