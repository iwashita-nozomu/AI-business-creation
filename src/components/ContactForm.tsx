import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { submitContact } from '../lib/supabase';

type FormState = 'idle' | 'loading' | 'success' | 'error';
type FormType = 'apply' | 'inquiry';

interface Fields {
  name: string;
  email: string;
  company: string;
  message: string;
}

const defaultFields: Fields = { name: '', email: '', company: '', message: '' };

export default function ContactForm() {
  const [formType, setFormType] = useState<FormType>('apply');
  const [fields, setFields] = useState<Fields>(defaultFields);
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Partial<Fields>>({});

  const validate = () => {
    const e: Partial<Fields> = {};
    if (!fields.name.trim()) e.name = 'お名前を入力してください';
    if (!fields.email.trim()) e.email = 'メールアドレスを入力してください';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = '正しいメールアドレスを入力してください';
    if (!fields.message.trim()) e.message = 'メッセージを入力してください';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setState('loading');
    try {
      await submitContact({ ...fields, type: formType });
      setState('success');
      setFields(defaultFields);
    } catch {
      setState('error');
    }
  };

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((err) => ({ ...err, [k]: undefined }));
  };

  return (
    <section id="contact" className="py-24 text-white" style={{ background: 'linear-gradient(135deg, #0f172a, #1e3a5f)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-300 bg-blue-900/50 border border-blue-800 rounded-full mb-4 uppercase tracking-wide">
            お申込み・お問い合わせ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">早期アクセスを申し込む</h2>
          <p className="text-slate-300 max-w-lg mx-auto">
            MemLinkの早期アクセスプログラムに参加して、オンデバイスAI記憶の未来を一緒に作りましょう。
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10">
          {/* tabs */}
          <div className="flex gap-2 p-1 bg-white/10 rounded-xl mb-8">
            {(['apply', 'inquiry'] as FormType[]).map((t) => (
              <button
                key={t}
                onClick={() => setFormType(t)}
                className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                  formType === t ? 'bg-blue-600 text-white shadow' : 'text-slate-300 hover:text-white'
                }`}
              >
                {t === 'apply' ? '早期アクセス申込' : 'お問い合わせ'}
              </button>
            ))}
          </div>

          {state === 'success' ? (
            <div className="flex flex-col items-center py-10 gap-4 text-center">
              <CheckCircle className="w-14 h-14 text-green-400" />
              <h3 className="text-xl font-bold text-white">送信しました！</h3>
              <p className="text-slate-300 text-sm">
                {formType === 'apply'
                  ? '早期アクセスの申し込みを受け付けました。準備が整い次第ご連絡します。'
                  : 'お問い合わせを受け付けました。3営業日以内にご連絡します。'}
              </p>
              <button
                onClick={() => setState('idle')}
                className="mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-full transition-colors"
              >
                もう一件送信する
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="お名前"
                  required
                  type="text"
                  placeholder="山田 太郎"
                  value={fields.name}
                  onChange={set('name')}
                  error={errors.name}
                />
                <Field
                  label="メールアドレス"
                  required
                  type="email"
                  placeholder="you@example.com"
                  value={fields.email}
                  onChange={set('email')}
                  error={errors.email}
                />
              </div>
              <Field
                label="会社名・所属"
                type="text"
                placeholder="株式会社〇〇（任意）"
                value={fields.company}
                onChange={set('company')}
              />
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-1.5">
                  {formType === 'apply' ? '利用したい用途・期待すること' : 'お問い合わせ内容'}
                  <span className="text-red-400 ml-1">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder={
                    formType === 'apply'
                      ? '例：複数デバイスでAIを使う業務があり、記憶が途切れることに困っています...'
                      : 'ご質問・ご要望をお聞かせください'
                  }
                  value={fields.message}
                  onChange={set('message')}
                  className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                    errors.message ? 'border-red-400' : 'border-white/20'
                  } text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </p>
                )}
              </div>

              {state === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-red-900/40 border border-red-700 rounded-lg text-red-300 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  送信に失敗しました。時間をおいて再度お試しください。
                </div>
              )}

              <button
                type="submit"
                disabled={state === 'loading'}
                className="w-full flex items-center justify-center gap-2 py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 active:scale-[0.99]"
              >
                {state === 'loading' ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    送信中...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {formType === 'apply' ? '早期アクセスを申し込む' : '送信する'}
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-400">
                送信することで、プライバシーポリシーに同意したものとみなします。
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  type,
  placeholder,
  value,
  onChange,
  error,
}: {
  label: string;
  required?: boolean;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-200 mb-1.5">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
          error ? 'border-red-400' : 'border-white/20'
        } text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
      />
      {error && (
        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          {error}
        </p>
      )}
    </div>
  );
}
