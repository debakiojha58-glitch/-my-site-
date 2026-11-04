import { useState } from 'react';
import { Project } from '../data/portfolioData';
import { ArrowUpRight, Play, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export function Projects({ projects, onSelectProject }: ProjectsProps) {
  const [filter, setFilter] = useState<'all' | 'academic' | 'web' | 'video' | 'ai'>('all');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-16 sm:py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              Practical Work &amp; Activities
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mt-1">
              Featured Projects &amp; Creations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
              School assignments, coding experiments, regional web guides, and video editing showreels. Click any card to launch its live interactive demo!
            </p>
          </div>

          {/* Interactive Filter Tabs / Segmented Controls */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                filter === 'all'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter('academic')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                filter === 'academic'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Academic &amp; GPA
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                filter === 'web'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Web &amp; Heritage
            </button>
            <button
              onClick={() => setFilter('video')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                filter === 'video'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Video &amp; Media
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                filter === 'ai'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              AI Suite
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-indigo-400 dark:hover:border-indigo-700 transition-all flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Clean Unboxed Metadata with Typographic Separator (Zero-Pill Discipline) */}
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">{project.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.date}</span>
                </div>

                {/* Title */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors shrink-0 mt-1" />
                </div>

                {/* Summary */}
                <p className="mt-2.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.summary}
                </p>

                {/* Highlights preview */}
                <div className="mt-4 space-y-1.5">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.slice(0, 3).map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  <span className="inline-flex items-center gap-1 group-hover:underline">
                    <Play className="w-3.5 h-3.5" />
                    Launch Interactive Demo
                  </span>
                  <span className="text-[11px] text-slate-400 font-normal">View details →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
