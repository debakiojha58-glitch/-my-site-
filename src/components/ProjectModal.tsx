import { X, Calendar, Layers, CheckCircle2, PlayCircle } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { GpaCalculator } from './demos/GpaCalculator';
import { TourismGuide } from './demos/TourismGuide';
import { VideoShowreelPreview } from './demos/VideoShowreelPreview';
import { QuizTrainer } from './demos/QuizTrainer';
import { AiPromptSandbox } from './demos/AiPromptSandbox';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">{project.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {project.date}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Summary / Description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
              Project Overview
            </h4>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {project.description}
            </p>
          </div>

          {/* Interactive Live Demo Component */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <PlayCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                Interactive Showcase & Sandbox
              </h4>
            </div>

            {project.interactiveType === 'gpa' && <GpaCalculator />}
            {project.interactiveType === 'tourism' && <TourismGuide />}
            {project.interactiveType === 'video' && <VideoShowreelPreview />}
            {project.interactiveType === 'quiz' && <QuizTrainer />}
            {project.interactiveType === 'prompt' && <AiPromptSandbox />}
          </div>

          {/* Key Highlights */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Key Features & Architectural Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Tools & Technologies Applied
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-md font-mono font-medium border border-slate-200/60 dark:border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
