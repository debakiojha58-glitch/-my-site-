import { useState, useEffect } from 'react';
import { initialProfileData, ProfileData, Project } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { CvSection } from './components/CvSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ProfileCustomizerModal } from './components/ProfileCustomizerModal';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem('jagdish_portfolio_profile');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to parse saved profile data from localStorage', e);
    }
    return initialProfileData;
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  // Sync theme with document element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleSaveProfile = (updated: ProfileData) => {
    setProfile(updated);
    try {
      localStorage.setItem('jagdish_portfolio_profile', JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to save profile to localStorage', e);
    }
  };

  const handleResetProfile = () => {
    setProfile(initialProfileData);
    try {
      localStorage.removeItem('jagdish_portfolio_profile');
    } catch (e) {
      console.warn('Failed to reset profile in localStorage', e);
    }
  };

  const scrollToCv = () => {
    const el = document.getElementById('cv');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-indigo-600 selection:text-white transition-colors duration-200">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Main Single Page Content */}
      <main className="flex-1">
        {/* Split-Screen Hero with Interactive Dev Console */}
        <Hero
          profile={profile}
          onOpenCvModal={scrollToCv}
        />

        {/* About, Strengths & Areas of Interest */}
        <About profile={profile} />

        {/* Education & Curriculum Path */}
        <Education
          education={profile.education}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* Projects & Activities Showcase */}
        <Projects
          projects={profile.projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* Skills & Capability Matrix */}
        <SkillsSection skills={profile.skills} />

        {/* Official Curriculum Vitae & PDF Viewer */}
        <CvSection profile={profile} />

        {/* Contact & Inquiries */}
        <ContactSection profile={profile} />
      </main>

      {/* Clean Footer */}
      <Footer profile={profile} />

      {/* Interactive Project Modal with Sandbox Demos */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Profile Details Customizer Modal */}
      <ProfileCustomizerModal
        profile={profile}
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        onSave={handleSaveProfile}
        onReset={handleResetProfile}
      />
    </div>
  );
}
