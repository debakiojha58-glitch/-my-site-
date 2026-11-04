import { useState } from 'react';
import { Calculator, RotateCcw, Award } from 'lucide-react';

interface SubjectRow {
  name: string;
  theoryMarks: number;
  practicalMarks: number;
  creditHours: number;
}

const defaultSubjects: SubjectRow[] = [
  { name: 'Compulsory English', theoryMarks: 58, practicalMarks: 22, creditHours: 4 },
  { name: 'Compulsory Nepali', theoryMarks: 55, practicalMarks: 20, creditHours: 3 },
  { name: 'Mathematics', theoryMarks: 65, practicalMarks: 22, creditHours: 5 },
  { name: 'Physics / Computer Sci', theoryMarks: 62, practicalMarks: 24, creditHours: 5 },
  { name: 'Chemistry / Social Studies', theoryMarks: 56, practicalMarks: 21, creditHours: 5 },
];

function getGradePoint(totalMark: number): { grade: string; gp: number; remark: string } {
  if (totalMark >= 90) return { grade: 'A+', gp: 4.0, remark: 'Outstanding' };
  if (totalMark >= 80) return { grade: 'A', gp: 3.6, remark: 'Excellent' };
  if (totalMark >= 70) return { grade: 'B+', gp: 3.2, remark: 'Very Good' };
  if (totalMark >= 60) return { grade: 'B', gp: 2.8, remark: 'Good' };
  if (totalMark >= 50) return { grade: 'C+', gp: 2.4, remark: 'Satisfactory' };
  if (totalMark >= 40) return { grade: 'C', gp: 2.0, remark: 'Acceptable' };
  if (totalMark >= 35) return { grade: 'D', gp: 1.6, remark: 'Basic' };
  return { grade: 'NG', gp: 0.0, remark: 'Not Graded' };
}

export function GpaCalculator() {
  const [subjects, setSubjects] = useState<SubjectRow[]>(defaultSubjects);

  const updateMarks = (index: number, field: 'theoryMarks' | 'practicalMarks', value: number) => {
    const updated = [...subjects];
    const maxVal = field === 'theoryMarks' ? 75 : 25;
    const clamped = Math.max(0, Math.min(maxVal, isNaN(value) ? 0 : value));
    updated[index] = { ...updated[index], [field]: clamped };
    setSubjects(updated);
  };

  const resetMarks = () => {
    setSubjects(defaultSubjects);
  };

  const results = subjects.map((sub) => {
    const total = sub.theoryMarks + sub.practicalMarks;
    const gpData = getGradePoint(total);
    return {
      ...sub,
      total,
      ...gpData,
    };
  });

  const totalWeightedGp = results.reduce((acc, curr) => acc + curr.gp * curr.creditHours, 0);
  const totalCredits = results.reduce((acc, curr) => acc + curr.creditHours, 0);
  const calculatedGpa = totalCredits > 0 ? (totalWeightedGp / totalCredits).toFixed(2) : '0.00';

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Live NEB GPA Calculator Simulation</h4>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Class 11 standard curriculum: Theory (max 75) + Practical (max 25)
          </p>
        </div>
        <button
          onClick={resetMarks}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-lg transition-colors self-start sm:self-auto cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Defaults
        </button>
      </div>

      {/* GPA summary banner */}
      <div className="my-4 p-4 rounded-lg bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-between">
        <div>
          <span className="text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">
            Aggregate Performance
          </span>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="text-3xl font-extrabold text-indigo-900 dark:text-indigo-100 tabular-nums">
              {calculatedGpa}
            </span>
            <span className="text-xs text-indigo-700 dark:text-indigo-300 font-medium">/ 4.0 GPA</span>
          </div>
        </div>
        <div className="text-right">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-800 rounded-md text-xs font-semibold text-indigo-700 dark:text-indigo-300 shadow-xs">
            <Award className="w-3.5 h-3.5" />
            {Number(calculatedGpa) >= 3.6 ? 'Distinction Level' : Number(calculatedGpa) >= 3.2 ? 'First Division' : 'Satisfactory'}
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Based on NEB Letter Grading 2078</p>
        </div>
      </div>

      {/* Subject rows */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-medium">
              <th className="py-2 pr-3">Subject</th>
              <th className="py-2 px-2 text-center">Theory (75)</th>
              <th className="py-2 px-2 text-center">Practical (25)</th>
              <th className="py-2 px-2 text-center">Total (100)</th>
              <th className="py-2 px-2 text-center">Grade</th>
              <th className="py-2 pl-2 text-right">GP</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
            {results.map((sub, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                <td className="py-2.5 pr-3 font-medium text-slate-800 dark:text-slate-200">{sub.name}</td>
                <td className="py-2.5 px-2 text-center">
                  <input
                    type="number"
                    min="0"
                    max="75"
                    value={sub.theoryMarks}
                    onChange={(e) => updateMarks(idx, 'theoryMarks', parseInt(e.target.value))}
                    className="w-14 text-center py-1 px-1.5 border border-slate-200 dark:border-slate-700 rounded bg-slate-50 dark:bg-slate-800 font-mono text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </td>
                <td className="py-2.5 px-2 text-center">
                  <input
                    type="number"
                    min="0"
                    max="25"
                    value={sub.practicalMarks}
                    onChange={(e) => updateMarks(idx, 'practicalMarks', parseInt(e.target.value))}
                    className="w-14 text-center py-1 px-1.5 border border-slate-200 dark:border-slate-700 rounded bg-slate-50 dark:bg-slate-800 font-mono text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </td>
                <td className="py-2.5 px-2 text-center font-mono font-semibold text-slate-700 dark:text-slate-300">
                  {sub.total}
                </td>
                <td className="py-2.5 px-2 text-center">
                  <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                    {sub.grade}
                  </span>
                </td>
                <td className="py-2.5 pl-2 text-right font-mono font-medium text-slate-900 dark:text-slate-100">
                  {sub.gp.toFixed(1)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
