import type { Project, ExperienceItem, AwardItem, SkillCategory, EducationInfo, ResearchTopic } from '../types';

export const PERSONAL_INFO = {
  name: 'ARCHISHA GHANSHANI',
  eyebrow: 'COMPUTER SCIENCE • ARTIFICIAL INTELLIGENCE • SOFTWARE',
  tagline: 'I build software at the intersection of engineering, AI, and real-world problems.',
  bio: 'Computer Science Engineering graduate specializing in Artificial Intelligence, with experience across software development, AI/ML, technical product development, and team leadership.',
  about: `I am a Computer Science Engineering graduate specializing in Artificial Intelligence, with hands-on experience in software development, AI/ML, and technical product development.

I've worked across frontend, full-stack, and mobile development, and have led the development of a mobile application from scratch as a team lead.

My work spans compiler design, NLP, cybersecurity, computer vision, and AI-powered applications. I've also competed in and won multiple national hackathons and have research experience in artificial intelligence.

I enjoy solving complex technical problems and building practical, scalable solutions that combine strong engineering fundamentals with AI.`,
  status: {
    state: 'CURRENTLY',
    activity: 'BUILDING + LEARNING',
    location: 'MEERUT, INDIA',
    timezone: 'Asia/Kolkata',
  },
  ticker: ['SOFTWARE', 'AI SYSTEMS', 'COMPILER DESIGN', 'MECHANISTIC INTERPRETABILITY', 'RESEARCH'],
  profileStrip: [
    { label: 'Education', value: 'B.Tech. CSE, Artificial Intelligence' },
    { label: 'Experience', value: 'Software • AI/ML • Product' },
    { label: 'Location', value: 'Meerut, India' },
    { label: 'Languages', value: 'English • Hindi' },
  ],
  contacts: {
    email: 'archishaghanshani@gmail.com',
    linkedin: 'https://www.linkedin.com/in/archisha-ghanshani-a49620252/',
    github: 'https://github.com/archisha-g',
  },
};

export const CURRENT_RESEARCH: ResearchTopic = {
  title: 'Mechanistic Interpretability',
  area: 'AI Systems & Internal Representations',
  status: 'IN PROGRESS',
  description:
    'Exploring how neural networks represent and process information internally through hands-on experiments in mechanistic interpretability.',
  keyQuestions: [
    'Tracing circuit activations and feature superposition across transformer attention layers',
    'Analyzing causal intervention and activation patching on internal model representations',
    'Bridging empirical machine learning engineering with principled mechanistic understanding',
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'neuroscript',
    number: '01',
    name: 'NeuroScript',
    subtitle: 'A programming language and compiler designed around AI and natural language workflows.',
    description:
      'Developed a custom programming language and compiler with an intuitive high-level syntax for AI and natural language processing workflows. Built the complete compilation pipeline from scratch, including lexical analysis, parsing, semantic analysis, and Three-Address Code generation. Developed a FastAPI backend and interactive web-based IDE for writing, compiling, and executing NeuroScript programs.',
    technologies: ['Python', 'NLP', 'Compiler Design', 'FastAPI', 'JavaScript'],
    liveUrl: 'https://neuroscript-live.onrender.com/',
    isFeatured: true,
    pipelineStages: [
      'SOURCE CODE',
      'LEXICAL ANALYSIS',
      'PARSER / AST',
      'SEMANTIC ANALYSIS',
      'THREE-ADDRESS CODE',
      'EXECUTION ENGINE',
    ],
    codeSample: `// Sample NeuroScript AI Pipeline
pipeline TextClassifier {
  input text: String
  model = load("transformer/nlp-core")
  
  transform tokens = tokenize(text, clean: true)
  prediction = model.classify(tokens)
  
  emit prediction.confidence > 0.85 ? prediction.label : "uncertain"
}`,
    details: {
      overview:
        'NeuroScript addresses the gap between general-purpose languages and specialized AI pipeline development by creating a dedicated domain-specific language with first-class primitives for data streaming, tokenization, and model evaluation.',
      architecture: [
        'Custom Lexer tokenizing source code with regex token tables and line/column tracking',
        'Recursive Descent Parser validating grammar and building the Abstract Syntax Tree (AST)',
        'Semantic Analysis phase resolving variable scopes and type compatibility',
        'Intermediate Representation generator emitting linear Three-Address Code (3AC) quadruples',
        'FastAPI asynchronous runtime backend executing compiled instructions',
        'Interactive browser-based IDE with live compiler diagnostic feedback',
      ],
      outcomes: [
        'Complete end-to-end compiler implemented from fundamental computer science principles',
        'Full web-based playground enabling live compilation, AST inspection, and execution',
      ],
    },
  },
  {
    id: 'sentinel',
    number: '02',
    name: 'Sentinel',
    subtitle: 'AI-powered threat detection and response system.',
    description:
      'Developed an AI-powered threat detection and response system designed to identify, analyze, and respond to potential cybersecurity threats. Integrated the Google Gemini API to analyze security events, generate contextual threat assessments, and provide recommended responses.',
    technologies: ['Python', 'AI/ML', 'Google Gemini API'],
    liveUrl: 'https://sena-drishti-frontend.onrender.com/',
    isFeatured: true,
    threatFlow: [
      'EVENT INGESTION',
      'THREAT ANALYSIS',
      'RISK ASSESSMENT',
      'RECOMMENDED RESPONSE',
    ],
    details: {
      overview:
        'Sentinel evaluates security telemetry and access logs, leverages Google Gemini API to interpret threat vectors in real time, and synthesizes clear, actionable incident response recommendations for security teams.',
      architecture: [
        'Real-time ingestion of authentication and server access event logs',
        'Context-aware threat assessment prompts powered by Google Gemini API',
        'Automated risk severity classification based on attack surface impact',
        'Incident dashboard generating step-by-step containment recommendations',
      ],
      outcomes: [
        'National Hackathon Winner project (QubitX 2025 by Team SenaDrishti)',
        'Significantly accelerated incident analysis by delivering contextual natural language briefings',
      ],
    },
  },
  {
    id: 'brain-tumour-detection',
    number: '03',
    name: 'Brain Tumour Detection',
    subtitle: 'Deep learning medical image classification.',
    description:
      'Developed a deep learning-based medical image classification system for detecting brain tumors from medical scans using convolutional neural networks and transfer learning.',
    technologies: ['Python', 'TensorFlow', 'EfficientNetB0', 'Computer Vision'],
    details: {
      overview:
        'A computer vision system using transfer learning with an EfficientNetB0 backbone to classify brain MRI scans, utilizing image preprocessing and feature extraction techniques.',
      architecture: [
        'MRI image preprocessing, resizing, normalization, and contrast enhancement',
        'Transfer learning fine-tuning with EfficientNetB0 architecture',
        'Confusion matrix and classification report validation for diagnostic accuracy',
      ],
      outcomes: [
        'High-accuracy medical image classification utilizing transfer learning',
        'Robust performance across varied scan qualities and lighting conditions',
      ],
    },
  },
  {
    id: 'image-deblurring',
    number: '04',
    name: 'Image Deblurring',
    subtitle: 'Computer vision restoration system.',
    description:
      'Developed an image restoration system using computer vision and deep learning techniques to reduce blur and improve image quality.',
    technologies: ['Python', 'OpenCV', 'Deep Learning'],
    details: {
      overview:
        'An image restoration framework leveraging OpenCV filtering alongside deep convolutional restoration architectures to reduce motion blur, defocus, and noise artifacts.',
      architecture: [
        'Edge-preserving filters and image kernel processing via OpenCV',
        'Deep reconstruction network trained on blurred and sharp image pairs',
        'PSNR and SSIM image quality assessment metrics',
      ],
      outcomes: [
        'Restored degraded images with noticeable sharpening of fine structural details',
        'Efficient pipeline suitable for processing on standard computing hardware',
      ],
    },
  },
  {
    id: 'hate-speech-detection',
    number: '05',
    name: 'Hate Speech Detection',
    subtitle: 'NLP text classification pipeline.',
    description:
      'Developed a natural language processing system for detecting and classifying hate speech in text using machine learning and text classification techniques.',
    technologies: ['Python', 'NLP', 'Machine Learning', 'scikit-learn'],
    details: {
      overview:
        'An NLP pipeline for identifying toxic and offensive text across unstructured textual datasets, employing lexical normalization, TF-IDF vectorization, and supervised machine learning models.',
      architecture: [
        'Tokenization, lemmatization, stop-word removal, and n-gram feature extraction',
        'scikit-learn classification models with hyperparameter tuning',
        'Precision, recall, and F1-score evaluation metrics',
      ],
      outcomes: [
        'Reliable classification of toxic text patterns with high precision and recall',
        'Lightweight deployment footprint suitable for real-time text filtering',
      ],
    },
  },
  {
    id: 'fooddukaan',
    number: '06',
    name: 'FoodDukaan',
    subtitle: 'Full-stack food ordering platform.',
    description:
      'Developed a full-stack food ordering web application using the MERN stack, implementing frontend interfaces, backend APIs, database integration, and core ordering workflows.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    details: {
      overview:
        'A full-stack digital ordering system providing responsive user flows from item discovery to cart management, secure authentication, and order processing.',
      architecture: [
        'Modular React frontend with component-based state management',
        'Express.js RESTful API endpoints with authentication and validation middleware',
        'MongoDB document schemas for products, users, cart sessions, and orders',
      ],
      outcomes: [
        'Full-stack web application with responsive UI and seamless end-to-end ordering workflows',
        'Structured database schema design and API error handling',
      ],
    },
  },
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    number: '01',
    role: 'Technical Operations & Data Manager',
    company: 'U W and Associates',
    location: 'Meerut, India',
    period: 'June 2026 — Present',
    description:
      'Oversee technical operations and data management across business processes, combining technology, data, and operational workflows to improve efficiency, visibility, and decision-making. Manage and digitize processes across inventory, procurement, sales, accounting, and reporting, while maintaining and analyzing operational data to improve reporting and business insight. Coordinate technology and process improvements across day-to-day operations.',
    skillsHighlight: ['Process Digitization', 'Workflow Automation', 'Data Management', 'Operational Systems'],
  },
  {
    id: 'exp-2',
    number: '02',
    role: 'Mobile Application Developer & Team Lead',
    company: 'Fix Dukaan',
    period: 'January 2025 — August 2025',
    description:
      "Led the development team in building Fix Dukaan's mobile application from scratch, taking the product from initial requirements and architecture through development, testing, and refinement. Developed the cross-platform application using React Native, integrated backend APIs and database services, coordinated development tasks, and guided the team through implementation, debugging, and feature development.",
    skillsHighlight: ['React Native', 'Team Leadership', 'API Integration', 'Mobile Architecture'],
  },
  {
    id: 'exp-3',
    number: '03',
    role: 'Full Stack Developer Intern',
    company: 'TBI-GEU University Program',
    period: 'November 2024 — January 2025',
    description:
      'Developed full-stack web applications using the MERN stack across frontend, backend, and database layers. Built and integrated RESTful APIs, implemented application functionality, worked with database systems, and developed responsive interfaces connected to backend services.',
    skillsHighlight: ['MERN Stack', 'REST APIs', 'MongoDB', 'Responsive Interfaces'],
  },
  {
    id: 'exp-4',
    number: '04',
    role: 'Front End Developer Intern',
    company: "Tyson's Legal Allies",
    period: 'March 2024 — April 2024',
    description:
      'Developed responsive and user-friendly web interfaces using HTML, CSS, and JavaScript. Translated design requirements into functional and visually consistent web experiences while improving responsiveness, usability, and cross-device compatibility.',
    skillsHighlight: ['HTML5 / CSS3', 'JavaScript', 'UI Engineering', 'Cross-Device Usability'],
  },
];

export const AWARDS_DATA: AwardItem[] = [
  {
    id: 'award-women-in-tech',
    year: '2026',
    title: 'Top 5 Women in Tech Medal',
    organization: 'Graph-E-Thon 2.0',
    description:
      'Awarded special recognition medal in the Top 5 Women in Tech category at Graph-E-Thon 2.0 National Hackathon for technical innovation and contribution.',
    badge: 'MEDAL',
    media: [
      {
        type: 'photo',
        title: 'Graph-E-Thon 2.0 Golden Trophy & Medal',
        url: '/recognition/graphtheon_trophy.jpg',
        caption: 'Archisha with the Graph-E-Thon 2.0 Winner Trophy & Top 5 Women in Tech Medal',
      },
      {
        type: 'photo',
        title: 'Award Felicitation Ceremony',
        url: '/recognition/graphtheon_ceremony.jpg',
        caption: 'On stage during the Graph-E-Thon 2.0 felicitation ceremony',
      },
    ],
  },
  {
    id: 'award-paper',
    year: '2026',
    title: 'Provisionally Accepted Research Paper',
    organization: 'IEEE ICAITPR 2026',
    description:
      'Research paper provisionally accepted at IEEE ICAITPR 2026, recognizing research work in artificial intelligence and technology.',
    badge: 'RESEARCH',
  },
  {
    id: 'award-placement',
    year: '2026',
    title: 'Outstanding Placement Award',
    organization: 'Graphic Era University',
    description:
      'Received in recognition of exceptional performance and achievement during the university placement process at Graphic Era.',
    badge: 'AWARD',
    media: [
      {
        type: 'photo',
        title: 'Placement Felicitation Ceremony 2026',
        url: '/recognition/placement_award.jpg',
        caption: 'Receiving the Outstanding Placement Award at the 2026 Felicitation Ceremony',
      },
    ],
  },
  {
    id: 'award-qubitx',
    year: '2025',
    title: 'Winner — QubitX National Hackathon',
    organization: 'GL Bajaj Group / HackWithIndia',
    description:
      'Secured 1st place among 400+ participating teams across India for developing Sentinel (AI-powered threat detection system) with Team SenaDrishti.',
    badge: '1st',
    media: [
      {
        type: 'certificate',
        title: 'QubitX National Hackathon Winner Certificate',
        url: '/recognition/qubitx_cert.jpg',
        caption: 'Certificate of Achievement — Position Winner (Team SenaDrishti, 400+ Teams)',
      },
    ],
  },
  {
    id: 'award-hackaccino',
    year: '2025',
    title: 'Winner — Hackaccino 3.0',
    organization: 'Bennett University',
    description:
      'Secured 1st place through the development and presentation of a technical solution at Bennett University.',
    badge: '1st',
    media: [
      {
        type: 'photo',
        title: 'Hackaccino 3.0 Winner Presentation',
        url: '/recognition/hackaccino_winner.jpg',
        caption: 'Archisha holding the Winner award cheque at Bennett University',
      },
      {
        type: 'certificate',
        title: 'Hackaccino 3.0 Winner Certificate',
        url: '/recognition/hackaccino_cert.jpg',
        caption: 'Official Certificate of Achievement presented by Bennett University',
      },
    ],
  },
  {
    id: 'award-gna',
    year: '2025',
    title: 'First Overall — GNA Hackathon 3.0',
    organization: 'GNA University',
    description:
      'Secured 1st position overall in the national-level GNA Hackathon 3.0 for innovative technical engineering.',
    badge: '1st',
    media: [
      {
        type: 'certificate',
        title: 'GNA Hackathon 3.0 Certificate',
        url: '/recognition/gna_hackathon_cert.jpg',
        caption: 'Certificate of Participation & First Overall Position — GNA University',
      },
    ],
  },
  {
    id: 'award-kriyeta',
    year: '2025',
    title: '2nd Position — KRIYETA 4.0',
    organization: 'IEEE & Acropolis Group',
    description:
      'Secured 2nd position in the 48-hour national hackathon KRIYETA 4.0 organized by IEEE Student Branch.',
    badge: '2nd',
    media: [
      {
        type: 'certificate',
        title: 'KRIYETA 4.0 Certificate (2nd Position)',
        url: '/recognition/kriyeta_cert_2nd.jpg',
        caption: 'Certificate of Appreciation — 2nd Position in 48-hour hackathon',
      },
    ],
  },
  {
    id: 'award-graphtheon',
    year: '2025',
    title: '3rd Position — Graph-E-Thon 2.0',
    organization: 'Graphic Era University',
    description:
      'Secured 3rd position in Graph-E-Thon 2.0 National Level Hackathon with Team Resineon.',
    badge: '3rd',
    media: [
      {
        type: 'certificate',
        title: 'Graph-E-Thon 2.0 Certificate (3rd Position)',
        url: '/recognition/graphtheon_cert.jpg',
        caption: 'Certificate of Achievement — 3rd Position, Graph-E-Thon 2.0',
      },
      {
        type: 'photo',
        title: 'Award Ceremony Stage',
        url: '/recognition/graphtheon_ceremony.jpg',
        caption: 'Team felicitation on the main auditorium stage',
      },
    ],
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['Python', 'Java', 'C/C++', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'Web & Application Systems',
    skills: ['React', 'React Native', 'Node.js', 'Express.js', 'FastAPI', 'MERN'],
  },
  {
    category: 'AI & Machine Learning',
    skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'OpenCV', 'NLP', 'Computer Vision', 'EfficientNet'],
  },
  {
    category: 'Data & Engineering Tools',
    skills: ['MongoDB', 'PostgreSQL', 'pandas', 'NumPy', 'Git'],
  },
];

export const EDUCATION_DATA: EducationInfo = {
  institution: 'Graphic Era University',
  degree: 'Bachelor of Technology',
  specialization: 'Computer Science Engineering, Artificial Intelligence',
  period: 'September 2022 — June 2026',
};
