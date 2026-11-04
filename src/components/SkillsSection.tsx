import { Code2, Video, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { SkillCategory } from '../data/portfolioData';

interface SkillsProps {
  skills: SkillCategory[];
}

export function SkillsSection({ skills }: SkillsProps) {
  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 1:
        return <Video className="w-5 h-5 text-amber-500" />;
      case 2:
        return <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            Competencies &amp; Toolkit
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mt-1">
            Skills &amp; Technical Capabilities
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            A balanced foundation of academic computer science principles, web programming, digital video workflows, and problem-solving.
          </p>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category, catIdx) => (
            <div
              key={catIdx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    {getCategoryIcon(catIdx)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill rows */}
                <div className="mt-4 space-y-3">
                  {category.skills.map((s, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 flex items-start justify-between gap-3"
                    >
                      <div>
                        <div className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                          {s.name}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {s.note}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 shrink-0 self-start">
                        {s.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
