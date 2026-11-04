import { useState } from 'react';
import { Download, ExternalLink, Printer, FileText, CheckCircle2, MapPin, Phone, Mail, Award, Eye } from 'lucide-react';
import { ProfileData } from '../data/portfolioData';

interface CvSectionProps {
  profile: ProfileData;
}

export function CvSection({ profile }: CvSectionProps) {
  const [cvViewMode, setCvViewMode] = useState<'digital' | 'pdf'>('digital');

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="cv" className="py-16 sm:py-20 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              Student Curriculum Vitae
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mt-1">
              Curriculum Vitae &amp; Credentials
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
              Official student CV for academic admissions, internships, and educational collaboration. Download the verified PDF or preview the digital format.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto">
            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 p-1 bg-slate-200/80 dark:bg-slate-800 rounded-lg text-xs font-medium">
              <button
                onClick={() => setCvViewMode('digital')}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                  cvViewMode === 'digital'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Digital CV Format
              </button>
              <button
                onClick={() => setCvViewMode('pdf')}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                  cvViewMode === 'pdf'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Original PDF Document
              </button>
            </div>

            {/* Direct Download Button */}
            <a
              href={profile.cvPdfPath}
              download="Jagdish_Ojha_Student_CV.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold shadow-xs hover:shadow transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Open in new tab */}
            <a
              href={profile.cvPdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
              title="Open raw PDF in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Raw PDF</span>
            </a>
          </div>
        </div>

        {/* Viewport Content */}
        <div className="mt-8">
          {cvViewMode === 'digital' ? (
            /* Digital Curriculum Vitae Container */
            <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md p-6 sm:p-10 text-slate-800 dark:text-slate-200">
              {/* CV Top Header */}
              <div className="border-b-2 border-slate-900 dark:border-slate-100 pb-5">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 uppercase">
                      {profile.fullName}
                    </h3>
                    <div className="text-xs sm:text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 mt-1 uppercase">
                      STUDENT CURRICULUM VITAE | COMPUTER SCIENCE
                    </div>
                  </div>
                  <button
                    onClick={handlePrint}
                    className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-medium cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print CV</span>
                  </button>
                </div>

                {/* Contact Pill Table Header (Matching Original PDF layout) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
                  <div>
                    <span className="font-semibold text-slate-500 dark:text-slate-400 block text-[11px] uppercase">Phone</span>
                    <a href={`tel:${profile.phone}`} className="font-medium text-slate-800 dark:text-slate-200 hover:text-indigo-600 font-mono">
                      +977 {profile.phone}
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-500 dark:text-slate-400 block text-[11px] uppercase">Address</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {profile.location}, {profile.country}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-500 dark:text-slate-400 block text-[11px] uppercase">Email</span>
                    <a href={`mailto:${profile.email}`} className="font-medium text-slate-800 dark:text-slate-200 hover:text-indigo-600 font-mono break-all">
                      {profile.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Career Objective */}
              <div className="mt-6">
                <h4 className="text-xs font-bold tracking-wider uppercase text-slate-900 dark:text-slate-100 pb-1.5 border-b border-slate-200 dark:border-slate-800">
                  Career Objective
                </h4>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {profile.objective}
                </p>
              </div>

              {/* Education */}
              <div className="mt-6">
                <h4 className="text-xs font-bold tracking-wider uppercase text-slate-900 dark:text-slate-100 pb-1.5 border-b border-slate-200 dark:border-slate-800">
                  Education
                </h4>
                <div className="mt-3 space-y-4">
                  {profile.education.map((edu, idx) => (
                    <div key={idx} className="text-xs">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <span className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                          {edu.level}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400 font-mono">
                          {edu.academicYear}
                        </span>
                      </div>
                      <div className="text-slate-600 dark:text-slate-400 font-medium mt-0.5">
                        School / Institution: {edu.institution}
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Areas of Interest */}
              <div className="mt-6">
                <h4 className="text-xs font-bold tracking-wider uppercase text-slate-900 dark:text-slate-100 pb-1.5 border-b border-slate-200 dark:border-slate-800">
                  Areas of Interest
                </h4>
                <ul className="mt-2.5 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
                    <span><strong>Computer science and information technology</strong> — programming, algorithms, web architecture.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
                    <span><strong>Artificial intelligence and emerging technology</strong> — machine learning applications and generative tools.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
                    <span><strong>Video editing and digital content creation</strong> — non-linear editing, pacing, dynamic motion design.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
                    <span><strong>Learning through practical and creative projects</strong> — hands-on prototyping and self-directed building.</span>
                  </li>
                </ul>
              </div>

              {/* Personal Strengths */}
              <div className="mt-6">
                <h4 className="text-xs font-bold tracking-wider uppercase text-slate-900 dark:text-slate-100 pb-1.5 border-b border-slate-200 dark:border-slate-800">
                  Personal Strengths
                </h4>
                <ul className="mt-2.5 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {profile.strengths.map((str, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
                      <span><strong>{str.title}</strong> — {str.description}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Projects & Activities Summary */}
              <div className="mt-6">
                <h4 className="text-xs font-bold tracking-wider uppercase text-slate-900 dark:text-slate-100 pb-1.5 border-b border-slate-200 dark:border-slate-800">
                  Projects &amp; Activities
                </h4>
                <div className="mt-2.5 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  {profile.projects.slice(0, 3).map((p, idx) => (
                    <div key={idx} className="pb-2 border-b border-slate-100 dark:border-slate-800/60 last:border-0">
                      <div className="font-semibold text-slate-900 dark:text-slate-100">
                        {p.title} ({p.date})
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                        {p.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Details */}
              <div className="mt-6">
                <h4 className="text-xs font-bold tracking-wider uppercase text-slate-900 dark:text-slate-100 pb-1.5 border-b border-slate-200 dark:border-slate-800">
                  Personal Details
                </h4>
                <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <div><strong>Full Name:</strong> {profile.fullName}</div>
                  <div><strong>Location:</strong> {profile.location}, {profile.country}</div>
                  <div><strong>Phone:</strong> +977 {profile.phone}</div>
                  <div><strong>Email:</strong> {profile.email}</div>
                  <div className="sm:col-span-2">
                    <strong>Languages:</strong> {profile.languages.join(', ')}
                  </div>
                </div>
              </div>

              {/* References */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
                <div>
                  <strong>References:</strong> Available upon request.
                </div>
                <div className="font-mono text-[11px]">
                  Jagdish Ojha | Student CV
                </div>
              </div>
            </div>
          ) : (
            /* Embedded PDF Document Viewer */
            <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md overflow-hidden">
              <div className="p-4 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                  <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Jagdish_Ojha_Student_CV_0d6598bc.pdf</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={profile.cvPdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 bg-white dark:bg-slate-700 text-xs font-medium rounded text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 hover:bg-slate-50"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open in Tab
                  </a>
                  <a
                    href={profile.cvPdfPath}
                    download="Jagdish_Ojha_Student_CV.pdf"
                    className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-600 text-xs font-medium rounded text-white hover:bg-indigo-500"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </a>
                </div>
              </div>

              <div className="w-full h-[650px] bg-slate-200 dark:bg-slate-950 flex flex-col items-center justify-center relative">
                <iframe
                  src={`${profile.cvPdfPath}#toolbar=0&navpanes=0`}
                  title="Jagdish Ojha Student Curriculum Vitae"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
