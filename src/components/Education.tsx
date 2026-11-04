import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle, Code } from 'lucide-react';
import { EducationItem } from '../data/portfolioData';

interface EducationProps {
  education: EducationItem[];
  onOpenCustomizer: () => void;
}

export function Education({ education, onOpenCustomizer }: EducationProps) {
  return (
    <section id="education" className="py-16 sm:py-20 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              Academic Qualifications
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mt-1">
              Education &amp; Curriculum Path
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Formal studies in Computer Science under the National Examination Board (NEB) Nepal framework.
            </p>
          </div>
          <button
            onClick={onOpenCustomizer}
            className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-medium self-start sm:self-auto cursor-pointer"
          >
            Edit institution details →
          </button>
        </div>

        {/* Education Timeline Cards */}
        <div className="mt-10 space-y-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                        {item.level}
                      </h3>
                      {item.status === 'ongoing' ? (
                        <span className="text-[11px] font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-200 dark:border-indigo-800">
                          Current Academic Level
                        </span>
                      ) : (
                        <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                          Completed
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
                      {item.institution} · {item.stream}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 shrink-0 self-start md:self-auto">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>Academic Year: {item.academicYear}</span>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Subject Badges */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Key Curriculum Subjects:
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {item.keySubjects.map((sub, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200/50 dark:border-slate-700/50"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Practical Lab & Learning Focus Banner */}
        <div className="mt-8 p-5 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Class 11 Computer Science Practical Lab</div>
              <div className="text-xs text-slate-400 mt-0.5">
                Focuses on C language lab experiments, flowcharts, logic gates, and web markup assignments.
              </div>
            </div>
          </div>
          <a
            href="#projects"
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition-colors shrink-0 self-start sm:self-auto"
          >
            See Practical Projects →
          </a>
        </div>
      </div>
    </section>
  );
}
