export interface Project {
  id: string;
  title: string;
  category: 'web' | 'video' | 'academic' | 'ai';
  categoryLabel: string;
  summary: string;
  description: string;
  technologies: string[];
  date: string;
  highlights: string[];
  interactiveType?: 'gpa' | 'quiz' | 'tourism' | 'video' | 'prompt';
}

export interface EducationItem {
  level: string;
  stream: string;
  institution: string;
  academicYear: string;
  status: 'ongoing' | 'completed';
  description: string;
  keySubjects: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: string; note: string }[];
}

export interface ProfileData {
  fullName: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  region: string;
  country: string;
  objective: string;
  languages: string[];
  cvPdfPath: string;
  interests: {
    title: string;
    description: string;
    focus: string;
  }[];
  strengths: {
    title: string;
    description: string;
    quote: string;
  }[];
  education: EducationItem[];
  projects: Project[];
  skills: SkillCategory[];
}

export const initialProfileData: ProfileData = {
  fullName: "Jagdish Ojha",
  title: "Class 11 Computer Science Student & Digital Creator",
  phone: "9745806817",
  email: "jagdishojha0516@gmail.com",
  location: "Bhimdatt",
  region: "Kanchanpur, Sudurpashchim",
  country: "Nepal",
  objective:
    "Motivated Class 11 student studying Computer Science, eager to build knowledge in computing and digital technology. Interested in learning new skills, completing academic projects, and developing practical experience while continuing education.",
  languages: ["Nepali (Native)", "English (Fluent)", "Hindi (Fluent)"],
  cvPdfPath: "/assets/aistudio/Jagdish_Ojha_Student_CV_0d6598bc.pdf",
  interests: [
    {
      title: "Computer Science & IT",
      description: "Fundamental programming logic, computer architecture, networking basics, and web technologies.",
      focus: "C programming, web development, algorithms & data structures basics"
    },
    {
      title: "Artificial Intelligence & Emerging Tech",
      description: "Exploring machine learning concepts, modern AI tooling, prompt engineering, and real-world applications.",
      focus: "Generative tools, automated workflows, future of computing"
    },
    {
      title: "Video Editing & Content Creation",
      description: "Crafting engaging digital media with pacing, color grading, audio synchronization, and visual storytelling.",
      focus: "Short-form video editing, montage pacing, digital media aesthetics"
    },
    {
      title: "Practical & Creative Projects",
      description: "Hands-on implementation of theoretical knowledge through coding experiments, web utilities, and creative experiments.",
      focus: "Learning by building, open-source curiosity, peer collaboration"
    }
  ],
  strengths: [
    {
      title: "Willingness to Learn and Improve",
      description: "Constantly receptive to feedback, rapid adoption of new programming concepts, and dedication to refining skills daily.",
      quote: "Curiosity and discipline drive consistent academic and technical growth."
    },
    {
      title: "Creativity & Interest in Digital Media",
      description: "Unique blend of technical analytical thinking and creative flair in video editing, layout design, and presentation.",
      quote: "Merging logic with visual craft creates engaging digital experiences."
    },
    {
      title: "Enthusiasm for Technology & Problem-Solving",
      description: "Passionate about dissecting complex problems into manageable steps and finding software-driven solutions.",
      quote: "Every technical obstacle is an opportunity to learn a better approach."
    }
  ],
  education: [
    {
      level: "Class 11 – Computer Science",
      stream: "Science / Computer Science Stream",
      institution: "Higher Secondary Education (NEB)",
      academicYear: "2024 – 2025 (2081 BS)",
      status: "ongoing",
      description:
        "Comprehensive curriculum covering Computer Fundamentals, C Programming, Digital Logic, Database Systems, Web Development (HTML/CSS), and Applied Mathematics.",
      keySubjects: ["Computer Science", "Physics", "Chemistry", "Mathematics", "English", "Nepali"]
    },
    {
      level: "Class 10 – Secondary Education Examination (SEE)",
      stream: "General Secondary Education",
      institution: "Secondary School, Bhimdatt",
      academicYear: "Completed (2080 BS)",
      status: "completed",
      description:
        "Graduated with honors in Science, Mathematics, and Computer Studies, establishing a strong analytical grounding for technical higher education.",
      keySubjects: ["Compulsory Mathematics", "Science & Technology", "Computer Studies", "Social Studies", "English", "Nepali"]
    }
  ],
  projects: [
    {
      id: "project-gpa",
      title: "Nepal Class 11 GPA & Grade Calculator",
      category: "academic",
      categoryLabel: "Academic & Utility",
      date: "2024",
      summary: "A practical GPA calculation tool conforming to the NEB Nepal grading matrix with theory/practical weightings.",
      description:
        "Built to assist Class 11 & 12 students in calculating their term and final GPA. Handles subject theory (75%) vs practical (25%) scores, grade point conversions (A+, A, B+, B, C+, C, D), and provides targeted recommendations for grade improvements.",
      technologies: ["JavaScript", "HTML5", "CSS3", "NEB Grading System"],
      highlights: [
        "Accurate NEB grading system mapping (4.0 Scale)",
        "Separate Theory & Practical mark weighting",
        "Instant performance insights and feedback",
        "Mobile-optimized for high school classmates"
      ],
      interactiveType: "gpa"
    },
    {
      id: "project-tourism",
      title: "Bhimdatt & Sudurpashchim Digital Guide",
      category: "web",
      categoryLabel: "Web Development",
      date: "2024",
      summary: "An interactive tourism portal showcasing the landmarks and culture of Bhimdatt, Kanchanpur, and Far-Western Nepal.",
      description:
        "A regional digital guide celebrating Kanchanpur heritage—featuring Shuklaphanta National Park, the iconic Dodhara Chandani Suspension Bridge, and local Tharu cultural traditions with interactive landmark previews.",
      technologies: ["React", "Tailwind CSS", "Responsive Design", "Interactive Maps"],
      highlights: [
        "Highlights Shuklaphanta National Park wildlife",
        "Dodhara Chandani multi-span bridge showcase",
        "Curated travel tips & eco-tourism highlights",
        "Fast-loading responsive layout"
      ],
      interactiveType: "tourism"
    },
    {
      id: "project-video",
      title: "Digital Media & Video Editing Portfolio",
      category: "video",
      categoryLabel: "Video & Media",
      date: "2024",
      summary: "Curated collection of short-form educational videos, tech explainers, and cinematic travel clips.",
      description:
        "Demonstrates proficiency in modern digital content workflows: audio-beat matching, color correction, dynamic transitions, text callouts, and multi-track audio leveling tailored for modern high-retention video formats.",
      technologies: ["Video Editing", "CapCut", "Premiere Workflow", "Audio Balancing", "Color Grading"],
      highlights: [
        "Dynamic pacing & micro-cut transitions",
        "Crisp subtitle and typography placement",
        "Audio balancing with background score ducking",
        "Over 10+ completed short-form video projects"
      ],
      interactiveType: "video"
    },
    {
      id: "project-quiz",
      title: "High School CS Quiz & Logic Trainer",
      category: "academic",
      categoryLabel: "Interactive Learning",
      date: "2024",
      summary: "An interactive multiple-choice test simulator for students preparing for Class 11 Computer Science exams.",
      description:
        "Features randomized questions on Boolean logic, number systems (Binary, Octal, Hexadecimal), C syntax, and network topologies, complete with instant score breakdown and explanatory answers.",
      technologies: ["JavaScript", "State Management", "Gamified Learning", "Algorithm Logic"],
      highlights: [
        "Covers NEB Computer Science syllabus",
        "Instant explanation for every answer",
        "Timed challenges to build exam speed",
        "Interactive score tracking"
      ],
      interactiveType: "quiz"
    },
    {
      id: "project-prompt",
      title: "Student AI Prompt & Study Assistant",
      category: "ai",
      categoryLabel: "AI & Emerging Tech",
      date: "2024",
      summary: "An interactive laboratory exploring prompt techniques for summarizing technical literature and debugging code.",
      description:
        "An educational sandbox testing prompt engineering templates for students: summarizing textbook chapters, explaining complex code errors in plain English, and generating study flashcards.",
      technologies: ["AI Prompting", "LLM Workflows", "Prompt Engineering", "Documentation"],
      highlights: [
        "Structured study prompt templates",
        "Code bug explainer framework",
        "Revision flashcard generator logic",
        "Ethical AI usage guidelines for students"
      ],
      interactiveType: "prompt"
    }
  ],
  skills: [
    {
      title: "Programming & Web Technologies",
      description: "Languages and foundational tools for building digital experiences.",
      skills: [
        { name: "HTML5 & CSS3", level: "Proficient", note: "Modern semantics, responsive flexbox & grid" },
        { name: "JavaScript (ES6+)", level: "Intermediate", note: "DOM manipulation, async logic, modern syntax" },
        { name: "C Programming", level: "Academic Core", note: "Pointers, arrays, structures, file handling in Class 11" },
        { name: "Python Basics", level: "Familiar", note: "Scripting, algorithmic problem solving" },
        { name: "Git & Version Control", level: "Foundational", note: "Commits, branches, GitHub workflow" }
      ]
    },
    {
      title: "Digital Media & Video Editing",
      description: "Creative visual storytelling and media production.",
      skills: [
        { name: "Video Timeline Editing", level: "Skilled", note: "Pacing, multi-track timeline, J/L cuts" },
        { name: "Motion & Text Callouts", level: "Intermediate", note: "Subtitling, animated typography" },
        { name: "Audio Sync & Sound Design", level: "Skilled", note: "Noise reduction, audio ducking, sound effects" },
        { name: "Thumbnail & Graphic Design", level: "Intermediate", note: "Visual contrast, typography hierarchy" }
      ]
    },
    {
      title: "Computer Science Foundations",
      description: "Theoretical grounding and computational thinking.",
      skills: [
        { name: "Number Systems & Logic", level: "Proficient", note: "Binary, hexadecimal conversions, logic gates" },
        { name: "Database Concepts", level: "Academic Core", note: "DBMS architecture, relational models, SQL basics" },
        { name: "Computer Architecture", level: "Academic Core", note: "CPU cycles, memory hierarchy, I/O devices" },
        { name: "Networking Fundamentals", level: "Academic Core", note: "OSI model, topologies, IP addressing" }
      ]
    },
    {
      title: "Personal Strengths & Work Ethic",
      description: "Core soft skills driving continuous improvement.",
      skills: [
        { name: "Rapid Learner", level: "High", note: "Quick to pick up new frameworks and tools" },
        { name: "Creative Problem Solving", level: "High", note: "Approaching challenges with both logic and design" },
        { name: "Academic Dedication", level: "High", note: "Consistent study discipline and project follow-through" },
        { name: "Collaborative Spirit", level: "High", note: "Constructive peer code review and group projects" }
      ]
    }
  ]
};
