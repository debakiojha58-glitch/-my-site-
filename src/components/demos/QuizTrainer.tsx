import { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Trophy } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correctIdx: number;
  explanation: string;
  topic: string;
}

const quizQuestions: Question[] = [
  {
    topic: 'Number Systems',
    question: 'What is the binary equivalent of decimal number 25?',
    options: ['11001', '10101', '11100', '10011'],
    correctIdx: 0,
    explanation: '25 in binary is 16 + 8 + 1 = 11001₂ (2⁴ + 2³ + 2⁰).'
  },
  {
    topic: 'C Programming',
    question: 'Which format specifier is used in C to print an integer value?',
    options: ['%f', '%c', '%d', '%s'],
    correctIdx: 2,
    explanation: '%d (or %i) is used for signed decimal integers, %f for float, %c for character, and %s for string.'
  },
  {
    topic: 'Computer Networking',
    question: 'Which network topology connects all nodes to a single central cable (backbone)?',
    options: ['Star Topology', 'Ring Topology', 'Bus Topology', 'Mesh Topology'],
    correctIdx: 2,
    explanation: 'In Bus topology, every workstation is connected to a single primary communication line known as the bus or backbone.'
  },
  {
    topic: 'Digital Logic',
    question: 'Which universal logic gate produces an output of 0 ONLY when all inputs are 1?',
    options: ['NAND Gate', 'NOR Gate', 'XOR Gate', 'AND Gate'],
    correctIdx: 0,
    explanation: 'A NAND gate is an inverted AND gate. When all inputs are 1, its output is 0. Otherwise, it outputs 1.'
  },
  {
    topic: 'Database Concepts',
    question: 'In a Relational Database (RDBMS), what is a row in a table technically known as?',
    options: ['Attribute', 'Tuple / Record', 'Domain', 'Schema'],
    correctIdx: 1,
    explanation: 'Each row in a relational table represents a single record and is formally known as a tuple.'
  }
];

export function QuizTrainer() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = quizQuestions[currentIdx];

  const handleSelect = (idx: number) => {
    if (selectedOption !== null) return; // already answered
    setSelectedOption(idx);
    setAnsweredCount((prev) => prev + 1);
    if (idx === currentQ.correctIdx) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setAnsweredCount(0);
    setIsFinished(false);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 gap-2">
        <div>
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Class 11 Computer Science Practice Quiz</h4>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Test your knowledge of NEB Computer Science curriculum essentials
          </p>
        </div>
        <div className="text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-2.5 py-1 rounded-md border border-indigo-200 dark:border-indigo-900 self-start sm:self-auto">
          Score: {score} / {quizQuestions.length}
        </div>
      </div>

      {!isFinished ? (
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
            <span className="font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider text-[11px]">
              Topic: {currentQ.topic}
            </span>
            <span>Question {currentIdx + 1} of {quizQuestions.length}</span>
          </div>

          <h5 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-4">
            {currentQ.question}
          </h5>

          <div className="space-y-2">
            {currentQ.options.map((opt, optIdx) => {
              const isChosen = selectedOption === optIdx;
              const isCorrect = optIdx === currentQ.correctIdx;
              let btnClass = 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800';

              if (selectedOption !== null) {
                if (isCorrect) {
                  btnClass = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold';
                } else if (isChosen && !isCorrect) {
                  btnClass = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200';
                } else {
                  btnClass = 'opacity-60 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-500';
                }
              }

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelect(optIdx)}
                  disabled={selectedOption !== null}
                  className={`w-full p-3 rounded-lg border text-left text-xs transition-colors flex items-center justify-between cursor-pointer ${btnClass}`}
                >
                  <span>{opt}</span>
                  {selectedOption !== null && (
                    <span>
                      {isCorrect ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      ) : isChosen ? (
                        <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
                      ) : null}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {selectedOption !== null && (
            <div className="mt-4 p-3 rounded-lg bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40">
              <div className="text-xs font-semibold text-indigo-900 dark:text-indigo-200">
                Explanation:
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">
                {currentQ.explanation}
              </p>
            </div>
          )}

          <div className="mt-5 flex justify-end">
            {selectedOption !== null && (
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
              >
                {currentIdx < quizQuestions.length - 1 ? 'Next Question' : 'View Final Score'}
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="py-6 text-center">
          <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center mx-auto mb-3">
            <Trophy className="w-6 h-6" />
          </div>
          <h5 className="text-base font-bold text-slate-900 dark:text-slate-100">
            Quiz Completed!
          </h5>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            You scored {score} out of {quizQuestions.length} ({Math.round((score / quizQuestions.length) * 100)}%)
          </p>

          <div className="mt-4 inline-block px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300">
            {score >= 4
              ? 'Mastery Level! Ready for NEB Computer Science exams.'
              : score >= 3
              ? 'Great performance! Review binary conversions and logic gates.'
              : 'Keep practicing! Review Chapter 1 and Chapter 2.'}
          </div>

          <div className="mt-6">
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Retake Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
