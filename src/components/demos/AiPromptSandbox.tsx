import { useState } from 'react';
import { Bot, Sparkles, Terminal, Copy, Check, ArrowRight } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  category: string;
  promptExample: string;
  mockOutput: string;
  keyLearning: string;
}

const templates: Template[] = [
  {
    id: 'code-debugger',
    name: 'C Syntax & Logic Bug Explainer',
    category: 'Programming Study',
    promptExample: `Explain why this C code causes a segmentation fault, and show the line-by-line correction using student-friendly terminology:
\`\`\`c
int *ptr;
*ptr = 10;
printf("%d", *ptr);
\`\`\``,
    mockOutput: `[Analysis]
The variable \`ptr\` is an uninitialized wild pointer. It currently holds a random junk memory address. When you dereference it with \`*ptr = 10\`, the program attempts to write into restricted OS memory, triggering SIGSEGV (Segmentation Fault).

[Corrected Code]
int val = 10;
int *ptr = &val;  // Point to a valid memory location
printf("%d\\n", *ptr);

[Key Takeaway for Class 11]
Always ensure pointers point to valid, allocated memory before dereferencing!`,
    keyLearning: 'Pointers & memory safety in C'
  },
  {
    id: 'summarizer',
    name: 'Computer Architecture Chapter Summarizer',
    category: 'Academic Revision',
    promptExample: `Summarize the Von Neumann Architecture principles into 3 bullet points with an analogy for high school students.`,
    mockOutput: `[Von Neumann Architecture in 3 Core Ideas]
1. Stored-Program Concept: Both instructions (programs) and data are stored together in the same unified primary memory (RAM).
2. Central Processing Unit (CPU): Contains the ALU (Arithmetic Logic Unit for math) and Control Unit (CU for directing traffic).
3. Sequential Fetch-Decode-Execute Cycle: Executes one instruction after another systematically.

[Student Analogy]
Think of the CPU as a master chef, RAM as the prep counter holding both the recipe card (program) and ingredients (data), and the bus system as the assistant passing bowls between them!`,
    keyLearning: 'CPU cycles, memory architecture & analogies'
  },
  {
    id: 'flashcards',
    name: 'Networking OSI Model Flashcard Generator',
    category: 'Exam Prep',
    promptExample: `Generate 3 high-yield flashcard questions and answers comparing OSI Layer 2 (Data Link) and Layer 3 (Network).`,
    mockOutput: `[Flashcard 1]
Q: Which address type operates at Layer 2 vs Layer 3?
A: Layer 2 uses physical MAC addresses (hardware-burned). Layer 3 uses logical IP addresses (network-routed).

[Flashcard 2]
Q: What is the Protocol Data Unit (PDU) at Layer 2 vs Layer 3?
A: Layer 2 = Frames. Layer 3 = Packets.

[Flashcard 3]
Q: Name a primary device for Layer 2 vs Layer 3.
A: Layer 2 = Network Switch / Bridge. Layer 3 = Router.`,
    keyLearning: 'OSI 7-layer stack & networking exam recall'
  }
];

export function AiPromptSandbox() {
  const [selectedId, setSelectedId] = useState(templates[0].id);
  const [copied, setCopied] = useState(false);
  const activeTemplate = templates.find((t) => t.id === selectedId) || templates[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTemplate.promptExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 gap-2">
        <div>
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">AI Prompt Engineering Study Suite</h4>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Jagdish&apos;s curated prompt templates designed to master Computer Science concepts
          </p>
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 self-start sm:self-auto">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
          <span>Student Study Assistant</span>
        </div>
      </div>

      {/* Template tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-4">
        {templates.map((tpl) => {
          const isSelected = tpl.id === selectedId;
          return (
            <button
              key={tpl.id}
              onClick={() => setSelectedId(tpl.id)}
              className={`p-2.5 rounded-lg text-left transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-300 dark:border-indigo-700 text-indigo-950 dark:text-indigo-200 shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
                {tpl.category}
              </div>
              <div className="text-xs font-semibold truncate mt-0.5">{tpl.name}</div>
            </button>
          );
        })}
      </div>

      {/* Prompt input card */}
      <div className="space-y-3">
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3.5 border border-slate-200 dark:border-slate-700/80">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
            <span className="font-semibold uppercase tracking-wider text-[11px] text-slate-700 dark:text-slate-300">
              Structured Prompt Input
            </span>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Prompt'}</span>
            </button>
          </div>
          <pre className="font-mono text-xs whitespace-pre-wrap text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 p-2.5 rounded border border-slate-200 dark:border-slate-800">
            {activeTemplate.promptExample}
          </pre>
        </div>

        {/* AI Output preview */}
        <div className="bg-slate-950 rounded-lg p-3.5 border border-slate-800 text-slate-200">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
            <div className="flex items-center gap-1.5 text-indigo-400 font-semibold">
              <Terminal className="w-3.5 h-3.5" />
              <span>Model Execution & Breakdown</span>
            </div>
            <span className="text-[11px] text-slate-500">Learning: {activeTemplate.keyLearning}</span>
          </div>
          <pre className="font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto">
            {activeTemplate.mockOutput}
          </pre>
        </div>
      </div>
    </div>
  );
}
