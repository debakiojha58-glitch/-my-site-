import { CheckCircle, Lightbulb, Video, Laptop, Compass, HeartHandshake, Globe } from 'lucide-react';
import { ProfileData } from '../data/portfolioData';

interface AboutProps {
  profile: ProfileData;
}

export function About({ profile }: AboutProps) {
  return (
    <section id="about" className="py-16 sm:py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            Background &amp; Philosophy
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mt-1">
            Driven by curiosity, craft, and code.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            From algorithmic problem-solving to polished video editing, I focus on combining technical logic with creative visual output.
          </p>
        </div>

        {/* Objective & Narrative Card */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
            Career Objective
          </div>
          <blockquote className="text-base sm:text-lg text-slate-800 dark:text-slate-200 font-medium leading-relaxed italic border-l-2 border-indigo-600 pl-4 my-2">
            &ldquo;{profile.objective}&rdquo;
          </blockquote>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Currently based in Bhimdatt (Kanchanpur, Sudurpashchim Province, Nepal), I am dedicating my secondary education years to mastering core Computer Science principles, modern programming paradigms, and digital content creation tools. My long-term aspiration is to contribute meaningfully to computing advancements and digital media initiatives in Nepal and beyond.
          </p>
        </div>

        {/* 3 Core Strengths (from CV) */}
        <div className="mt-12">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
            Personal Strengths &amp; Mindset
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profile.strengths.map((strength, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
                  {idx === 0 ? <CheckCircle className="w-4 h-4" /> : idx === 1 ? <Video className="w-4 h-4" /> : <Lightbulb className="w-4 h-4" />}
                </div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {strength.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {strength.description}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-indigo-600 dark:text-indigo-400 font-medium">
                  {strength.quote}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Areas of Interest (from CV) */}
        <div className="mt-12">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
            Areas of Interest &amp; Exploration
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {profile.interests.map((interest, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs flex flex-col justify-between"
              >
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                    {interest.title}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Active study:</span> {interest.focus}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages & Quick Facts */}
        <div className="mt-8 p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
            <span className="font-semibold text-slate-900 dark:text-slate-100">Languages:</span>
            <span className="text-slate-600 dark:text-slate-300">
              {profile.languages.join(' · ')}
            </span>
          </div>
          <div className="text-slate-500 dark:text-slate-400 text-[11px]">
            References: <strong className="text-slate-700 dark:text-slate-200 font-medium">Available upon request</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
