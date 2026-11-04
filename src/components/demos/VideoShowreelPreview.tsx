import { useState } from 'react';
import { Play, Pause, Film, Layers, Volume2, Sparkles, Scissors, Monitor } from 'lucide-react';

interface ReelProject {
  title: string;
  genre: string;
  duration: string;
  aspect: string;
  tools: string[];
  description: string;
  techniques: string[];
}

const sampleReels: ReelProject[] = [
  {
    title: 'High School Tech & Coding Journey',
    genre: 'Tech Explainer / Story',
    duration: '0:45',
    aspect: '9:16 (Vertical Reels / Shorts)',
    tools: ['CapCut', 'Premiere Pro', 'Audacity'],
    description: 'Dynamic montage showcasing daily programming sessions, screen recordings, terminal outputs, and study desk b-roll with synchronized lo-fi beats.',
    techniques: ['Match-cut typing transitions', 'Audio beat-marker sync', 'Clean dynamic subtitle popups', 'Subtle 10% zoom-in camera push']
  },
  {
    title: 'Bhimdatt Sunset at Mahakali River',
    genre: 'Cinematic Travel Reel',
    duration: '1:12',
    aspect: '16:9 (Cinematic Widescreen)',
    tools: ['Premiere Pro', 'Color Grading LUTs'],
    description: 'Slow-motion golden hour footage of Dodhara Chandani bridge and river reflections, focused on warm sunset tone separation and atmospheric sound design.',
    techniques: ['Warm amber color grading', 'Atmospheric river water ambient foley', 'Ramp speed effects (speed ramping)', 'Smooth 60fps slow-motion']
  },
  {
    title: 'Class 11 CS Concept: How Compilers Work',
    genre: 'Educational Motion Graphic',
    duration: '0:58',
    aspect: '1:1 / 9:16',
    tools: ['Canva Graphics', 'CapCut', 'Voiceover EQ'],
    description: 'Visual breakdown explaining the difference between High-Level Code, Compiler/Interpreter, Assembly, and Machine Binary for classmates.',
    techniques: ['Animated infographic icons', 'Clear voiceover audio leveling with -14 LUFS standard', 'Visual highlight callouts', 'Progress bar graphic']
  }
];

export function VideoShowreelPreview() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const activeReel = sampleReels[selectedIdx];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 gap-2">
        <div>
          <div className="flex items-center gap-2">
            <Film className="w-5 h-5 text-amber-500" />
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Video Editing & Creative Workflow</h4>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Breakdown of Jagdish&apos;s digital content creation pipeline & video projects
          </p>
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 self-start sm:self-auto">
          <Scissors className="w-3.5 h-3.5 text-amber-500" />
          <span>Non-linear Video Production</span>
        </div>
      </div>

      {/* Reel Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-4">
        {sampleReels.map((reel, idx) => {
          const isSelected = idx === selectedIdx;
          return (
            <button
              key={idx}
              onClick={() => {
                setSelectedIdx(idx);
                setIsPlaying(false);
              }}
              className={`p-2.5 rounded-lg text-left transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700 text-amber-950 dark:text-amber-200 shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
                {reel.genre}
              </div>
              <div className="text-xs font-semibold truncate mt-0.5">{reel.title}</div>
            </button>
          );
        })}
      </div>

      {/* Interactive Editor Canvas Mockup */}
      <div className="bg-slate-950 rounded-xl p-4 text-slate-200 border border-slate-800 font-mono text-xs">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2 text-slate-400">
            <Monitor className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-semibold text-slate-200">{activeReel.title}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-[11px]">
            <span>{activeReel.aspect}</span>
            <span aria-hidden="true">·</span>
            <span className="text-amber-400 font-semibold">{activeReel.duration}</span>
          </div>
        </div>

        {/* Video Scrubber & Playhead Simulator */}
        <div className="my-4 py-6 px-4 bg-slate-900 rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
          <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 hover:scale-105 transition-transform cursor-pointer"
              aria-label={isPlaying ? 'Pause simulation' : 'Play simulation'}
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
            </button>
          </div>
          <div className="text-xs text-slate-300 font-medium">
            {isPlaying ? 'Simulating Playback: Audio Ducking & Sync Active' : 'Click to preview editing timeline flow'}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            {activeReel.description}
          </div>

          {/* Simulated audio visualizer bars when playing */}
          {isPlaying && (
            <div className="flex items-end gap-1 mt-3 h-5">
              {[40, 70, 95, 60, 85, 50, 90, 75, 45, 80, 65, 90, 55].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="w-1 bg-amber-400 rounded-t animate-pulse"
                />
              ))}
            </div>
          )}
        </div>

        {/* Timeline Tracks Representation */}
        <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="w-16 text-[10px] text-slate-400">Video [V1]</span>
            <div className="flex-1 h-5 bg-indigo-900/60 border border-indigo-700/50 rounded flex items-center px-2 text-[10px] text-indigo-200 truncate">
              Primary A-Roll & Screen Recordings
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-16 text-[10px] text-slate-400">Overlay [V2]</span>
            <div className="flex-1 h-5 bg-amber-900/50 border border-amber-700/50 rounded flex items-center px-2 text-[10px] text-amber-200 truncate">
              Subtitles, Motion Callouts & Sound FX Triggers
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-16 text-[10px] text-slate-400">Audio [A1]</span>
            <div className="flex-1 h-5 bg-emerald-950/60 border border-emerald-800/50 rounded flex items-center px-2 text-[10px] text-emerald-200 truncate">
              Clean Voiceover track (-14 LUFS, Denoiser)
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-16 text-[10px] text-slate-400">Music [A2]</span>
            <div className="flex-1 h-5 bg-purple-950/60 border border-purple-800/50 rounded flex items-center px-2 text-[10px] text-purple-200 truncate">
              Dynamic Ducked BGM (-22 dB under voice)
            </div>
          </div>
        </div>
      </div>

      {/* Applied Techniques list */}
      <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800">
        <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
          Applied Techniques in this project:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          {activeReel.techniques.map((tech, idx) => (
            <div key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
