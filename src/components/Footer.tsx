import { ArrowUp, Heart } from 'lucide-react';
import { ProfileData } from '../data/portfolioData';

interface FooterProps {
  profile: ProfileData;
}

export function Footer({ profile }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-xs border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800/80">
          <div>
            <div className="font-bold text-base text-slate-900 dark:text-slate-100">
              {profile.fullName}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Class 11 Computer Science Student · Bhimdatt, Nepal
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-medium">
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              About
            </a>
            <a href="#education" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Education
            </a>
            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Projects
            </a>
            <a href="#cv" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Curriculum Vitae
            </a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Contact
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer self-start sm:self-auto"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {profile.fullName}. Built with modern web standards.
          </div>
          <div className="flex items-center gap-1">
            <span>Official student portfolio for academic &amp; technical showcase</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
