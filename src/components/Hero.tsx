import { useState } from 'react';
import { Download, Mail, Phone, Copy, Check, Terminal, ExternalLink, ArrowRight, Code2, Sparkles, UserCheck } from 'lucide-react';
import { ProfileData } from '../data/portfolioData';

interface HeroProps {
  profile: ProfileData;
  onOpenCvModal: () => void;
}

export function Hero({ profile, onOpenCvModal }: HeroProps) {
  const [activeConsoleTab, setActiveConsoleTab] = useState<'terminal' | 'facts' | 'code'>('terminal');
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  return (
    <section className="pt-10 pb-16 sm:pt-16 sm:pb-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed Kicker with dot separators */}
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3 tracking-wide uppercase">
              <span>{profile.location}, {profile.country}</span>
              <span aria-hidden="true">·</span>
              <span>{profile.education[0]?.level || 'Class 11 Computer Science'}</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.15] text-balance">
              Aspiring Computer Scientist & Digital Creator.
            </h1>

            {/* Subtext */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Hello, I&apos;m <strong className="font-semibold text-slate-900 dark:text-slate-100">{profile.fullName}</strong>. {profile.objective}
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold shadow-xs hover:shadow transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="px-5 py-2.5 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-lg text-xs font-semibold transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>View Official CV</span>
              </button>

              <a
                href="#contact"
                className="px-4 py-2.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Contact Me →
              </a>
            </div>

            {/* Quick Verified Contact Row */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
              {/* Email */}
              <div className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
                <Mail className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 font-mono text-[11px]"
                >
                  {profile.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="ml-1 p-0.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {emailCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              <div className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
                <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <a
                  href={`tel:${profile.phone}`}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 font-mono text-[11px]"
                >
                  +977 {profile.phone}
                </a>
                <button
                  onClick={copyPhone}
                  className="ml-1 p-0.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {phoneCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Student Dev Console */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="w-full h-full bg-slate-950 rounded-2xl border border-slate-800 text-slate-200 shadow-xl overflow-hidden flex flex-col font-mono text-xs">
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 text-[11px] text-slate-400 font-sans font-medium">
                    jagdish@bhimdatt-pc:~
                  </span>
                </div>
                {/* Console Tabs */}
                <div className="flex items-center gap-1 bg-slate-950 p-0.5 rounded-lg border border-slate-800 text-[11px]">
                  <button
                    onClick={() => setActiveConsoleTab('terminal')}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      activeConsoleTab === 'terminal'
                        ? 'bg-slate-800 text-indigo-300 font-medium'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Terminal
                  </button>
                  <button
                    onClick={() => setActiveConsoleTab('facts')}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      activeConsoleTab === 'facts'
                        ? 'bg-slate-800 text-indigo-300 font-medium'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => setActiveConsoleTab('code')}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      activeConsoleTab === 'code'
                        ? 'bg-slate-800 text-indigo-300 font-medium'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    main.c
                  </button>
                </div>
              </div>

              {/* Console Body */}
              <div className="p-4 sm:p-5 flex-1 overflow-y-auto space-y-3 leading-relaxed">
                {activeConsoleTab === 'terminal' && (
                  <div className="space-y-3 text-slate-300">
                    <div>
                      <span className="text-emerald-400">jagdish@bhimdatt:~$</span>{' '}
                      <span className="text-slate-100">cat academic_summary.json</span>
                    </div>
                    <div className="pl-3 border-l border-slate-800 text-[11px] text-slate-400 space-y-1">
                      <p><span className="text-indigo-400">&quot;name&quot;</span>: <span className="text-amber-300">&quot;Jagdish Ojha&quot;</span>,</p>
                      <p><span className="text-indigo-400">&quot;status&quot;</span>: <span className="text-amber-300">&quot;Class 11 (Computer Science)&quot;</span>,</p>
                      <p><span className="text-indigo-400">&quot;location&quot;</span>: <span className="text-amber-300">&quot;Bhimdatt, Nepal&quot;</span>,</p>
                      <p><span className="text-indigo-400">&quot;focus&quot;</span>: [<span className="text-emerald-300">&quot;C Programming&quot;</span>, <span className="text-emerald-300">&quot;Web Dev&quot;</span>, <span className="text-emerald-300">&quot;Video Editing&quot;</span>, <span className="text-emerald-300">&quot;AI&quot;</span>],</p>
                      <p><span className="text-indigo-400">&quot;availability&quot;</span>: <span className="text-emerald-400">&quot;Open for student projects &amp; academic learning&quot;</span></p>
                    </div>
                    <div className="pt-1">
                      <span className="text-emerald-400">jagdish@bhimdatt:~$</span>{' '}
                      <span className="text-slate-100">./check_strengths.sh</span>
                    </div>
                    <div className="text-[11px] text-emerald-400/90 pl-3">
                      ✓ Willingness to learn &amp; improve verified.<br />
                      ✓ Creativity &amp; digital media active.<br />
                      ✓ Enthusiasm for problem-solving online.
                    </div>
                    <div className="pt-2 flex items-center gap-1.5 text-slate-400">
                      <span className="text-emerald-400">jagdish@bhimdatt:~$</span>
                      <span className="w-2 h-4 bg-indigo-500 animate-pulse"></span>
                    </div>
                  </div>
                )}

                {activeConsoleTab === 'facts' && (
                  <div className="space-y-2.5 text-xs">
                    <div className="text-indigo-400 font-semibold mb-2 text-[11px]">
                      // STUDENT FACTSHEET
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-900 text-slate-400">
                      <span>Stream:</span>
                      <span className="text-slate-200">Computer Science (NEB)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-900 text-slate-400">
                      <span>Municipality:</span>
                      <span className="text-slate-200">Bhimdatt, Kanchanpur</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-900 text-slate-400">
                      <span>Province:</span>
                      <span className="text-slate-200">Sudurpashchim, Nepal</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-900 text-slate-400">
                      <span>Languages:</span>
                      <span className="text-slate-200">Nepali, English, Hindi</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-900 text-slate-400">
                      <span>Curriculum:</span>
                      <span className="text-slate-200">Class 11 Science &amp; CS</span>
                    </div>
                    <div className="pt-2 text-[11px] text-slate-400">
                      All verified details directly mapped to student curriculum vitae.
                    </div>
                  </div>
                )}

                {activeConsoleTab === 'code' && (
                  <div className="text-[11px] text-slate-300 space-y-1">
                    <p className="text-slate-500">/* Class 11 C Programming Lab */</p>
                    <p><span className="text-rose-400">#include</span> <span className="text-amber-300">&lt;stdio.h&gt;</span></p>
                    <p className="pt-1"><span className="text-indigo-400">int</span> <span className="text-amber-400">main</span>() &#123;</p>
                    <p className="pl-4 text-slate-400">// Career objective initialization</p>
                    <p className="pl-4"><span className="text-indigo-400">char</span> student[] = <span className="text-amber-300">&quot;Jagdish Ojha&quot;</span>;</p>
                    <p className="pl-4"><span className="text-indigo-400">int</span> grade = <span className="text-purple-400">11</span>;</p>
                    <p className="pl-4"><span className="text-amber-400">printf</span>(<span className="text-amber-300">&quot;Ready to build practical computing skills!\\n&quot;</span>);</p>
                    <p className="pl-4"><span className="text-rose-400">return</span> <span className="text-purple-400">0</span>;</p>
                    <p>&#125;</p>
                  </div>
                )}
              </div>

              {/* Console Footer */}
              <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800 text-[10px] text-slate-500 flex items-center justify-between">
                <span>UTF-8 · bash v5.2</span>
                <span className="text-emerald-400">Interactive Student Terminal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metrics / Quantitative Rigor Strip below Split */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Academic Standing</div>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 tabular-nums mt-1">Class 11</div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Computer Science Stream</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Hometown Location</div>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">Bhimdatt</div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Kanchanpur, Nepal</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Specialization Areas</div>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 tabular-nums mt-1">4 Pillars</div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">CS, AI, Video &amp; Projects</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Language Fluency</div>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 tabular-nums mt-1">3 Languages</div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Nepali, English, Hindi</div>
          </div>
        </div>
      </div>
    </section>
  );
}
