import type { Project, ExperienceItem, AwardItem, SkillCategory, EducationInfo, ResearchTopic, ResearchEntry } from '../types';

export const PERSONAL_INFO = {
  name: 'ARCHISHA GHANSHANI',
  eyebrow: 'COMPUTER SCIENCE • ARTIFICIAL INTELLIGENCE • SOFTWARE',
  tagline: 'I build software at the intersection of engineering, AI, and real-world problems.',
  bio: 'Computer Science Engineering graduate specializing in Artificial Intelligence, with experience across software development, AI/ML, technical product development, and team leadership.',
  about: `I am a Computer Science Engineering graduate specializing in Artificial Intelligence, with hands-on experience in software development, AI/ML, and technical product development.

I've worked across frontend, full-stack, and mobile development, and have led the development of a mobile application from scratch as a team lead.

My work spans compiler design, NLP, cybersecurity, computer vision, and AI-powered applications. I've also won multiple national hackathons, have a first-author IEEE paper (provisionally accepted), and maintain an open source disk-compression tool published on Ubuntu's Snap Store.

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
  status: 'EXPLORING',
  description:
    'Reading and running small experiments, when time allows, to understand how neural networks represent and process information internally.',
  keyQuestions: [
    'How features are represented inside transformer layers (superposition)',
    'What causal interventions such as activation patching reveal about a model',
    'How reasoning traces relate to what a model actually computes',
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'neuroscript',
    number: '01',
    name: 'NeuroScript',
    subtitle: 'A programming language, compiler and virtual machine built from scratch.',
    description:
      'NeuroScript is a small general-purpose language whose keywords mimic human thought: remember to declare a variable, feel / otherwise for if / else, think while for loops, and speak / shout / whisper to print. Built entirely in Python with no compiler frameworks, the pipeline goes from a regex-based lexer (with indentation tracking for Python-style blocks) through a recursive-descent parser, semantic analysis with a symbol table, three-address code generation for control flow, a bytecode stage, and a stack-based virtual machine. A Streamlit interface shows tokens, AST, three-address code, bytecode and program output. Built in 2025.',
    technologies: ['Python', 'Compiler Design', 'Virtual Machines', 'Streamlit'],
    liveUrl: 'https://neuroscript-live.vercel.app/',
    isFeatured: true,
    pipelineStages: [
      'SOURCE CODE',
      'LEXICAL ANALYSIS',
      'PARSER / AST',
      'SEMANTIC ANALYSIS',
      'THREE-ADDRESS CODE',
      'BYTECODE + VM',
    ],
    codeSample: `# NeuroScript: code the way you think
remember energy = 3
think while energy > 0
    speak energy
    update energy = energy - 1
feel energy == 0
    shout "out of energy"
otherwise
    whisper "still going"`,
    details: {
      overview:
        'NeuroScript is a small general-purpose language built entirely in Python with no compiler frameworks or parser generators. Its keywords are designed to read like human thought: remember, feel, otherwise, think while, speak, shout, whisper, laugh, murmur, listen, panic, pause, sleep. A Streamlit interface shows every compilation stage interactively.',
      architecture: [
        'Regex-based lexer that tracks indentation with a stack, emitting INDENT and DEDENT tokens for Python-style blocks',
        'Recursive-descent parser that builds an Abstract Syntax Tree from the token stream',
        'Semantic analysis with a symbol table that rejects undeclared variables (no type checking or scope resolution)',
        'Three-address code generator that lowers if / else and while loops into labels and conditional jumps (JZ / JMP)',
        'Bytecode generator that translates three-address code into stack-machine instructions',
        'Stack-based virtual machine with PUSH, LOAD, STORE, arithmetic and comparison ops, and jump instructions',
      ],
      outcomes: [
        'Complete end-to-end compiler and VM implemented from scratch in Python, with no external compiler frameworks',
        'Streamlit UI showing tokens, AST, three-address code, bytecode and program output side by side',
        'The hardest stage was three-address code generation for control flow (if / else and while loops into labels and jumps)',
        'Live demo: https://neuroscript-live.vercel.app/',
      ],
    },
  },
  {
    id: 'smartcompress',
    number: '02',
    name: 'SmartCompress FS',
    subtitle: 'Open source tool that compresses your least-used files when disk space runs low. Published on the Snap Store.',
    description:
      "SmartCompress FS is an open source (MIT) Python tool that monitors disk usage and automatically compresses the coldest, largest files when free space falls below a configurable threshold. Files are ranked by last-access time and then size; gzip compression is applied while skipping .gz, .zlib, .log and .tmp files and the tool's own log. A separate Tkinter desktop app handles manual gzip / zlib compression and restoration using a JSON metadata store that preserves original paths and timestamps. Published on Ubuntu's Snap Store as a strictly confined snap: sudo snap install smartcompress.",
    technologies: ['Python', 'Linux', 'snapcraft', 'Gzip/Zlib', 'Tkinter'],
    liveUrl: 'https://snapcraft.io/smartcompress',
    isFeatured: true,
    details: {
      overview:
        "SmartCompress FS addresses low-storage and resource-constrained environments by automating the compression lifecycle. The CLI monitor watches a directory and triggers prioritised compression when free space falls below a threshold. A separate Tkinter app lets users compress and restore files manually. Open source under the MIT licence, with versions v1.0.0 and v1.1.0 on GitHub (https://github.com/archisha-g/smartcompress) and published on the Snap Store (https://snapcraft.io/smartcompress).",
      architecture: [
        'CLI monitor with --watch-dir (required), --threshold (default 10% free), --disk (default: disk holding the watched folder), and --interval (default 60 seconds) options',
        'File ranking by last-access time, then size: coldest and largest files are compressed first',
        'Lossless gzip compression; skips .gz, .zlib, .log and .tmp files and never compresses its own log',
        'JSON metadata store recording original path and timestamps for byte-for-byte restoration',
        'Separate Tkinter desktop app for manual gzip / zlib compression and restoration',
        "Published as a strictly confined snap (base core24, home folder access only) on Ubuntu's Snap Store",
      ],
      outcomes: [
        'Published on the Snap Store: https://snapcraft.io/smartcompress (install: sudo snap install smartcompress)',
        'Source code on GitHub under MIT licence: https://github.com/archisha-g/smartcompress (releases v1.0.0 and v1.1.0)',
        'Up to 60% storage reduction on text and CSV files, with byte-for-byte restoration via the metadata store',
        "Two sandbox bugs found and fixed during snap testing: the tool was reporting 100% free space (inside a strict snap, '/' is the snap's own read-only filesystem, so it now measures the disk holding the watched folder), and it was compressing its own log file",
        'Built 2025, packaged and published to the Snap Store in 2026',
      ],
    },
  },
  {
    id: 'sentinel',
    number: '03',
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
      ],
    },
  },
  {
    id: 'brain-tumour-detection',
    number: '04',
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
    number: '05',
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
    number: '06',
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
    number: '07',
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
    role: 'Data & Operations Analyst',
    company: 'U W and Associates',
    location: 'Meerut, India',
    period: 'June 2026 to Present',
    description:
      'Built structured, queryable datasets from Tally ERP exports, merging three financial years of receivables into one table of party, amount and days past due, and recovering due dates the source export masked. My analysis of payment patterns led to about INR 700,000 recovered from overdue private-sector accounts, with INR 1.2 million more in follow-up.',
    skillsHighlight: ['Data Analysis', 'Tally ERP', 'Data Cleaning', 'Receivables Analysis'],
  },
  {
    id: 'exp-2',
    number: '02',
    role: 'Mobile Application Developer & Team Lead',
    company: 'Fix Dukaan',
    period: 'January 2025 to August 2025',
    description:
      "Led the development team in building Fix Dukaan's mobile application from scratch, taking the product from initial requirements and architecture through development, testing, and refinement. Developed the cross-platform application using React Native, integrated backend APIs and database services, coordinated development tasks, and guided the team through implementation, debugging, and feature development.",
    skillsHighlight: ['React Native', 'Team Leadership', 'API Integration', 'Mobile Architecture'],
  },
  {
    id: 'exp-3',
    number: '03',
    role: 'Full Stack Developer Intern',
    company: 'TBI-GEU University Program',
    period: 'November 2024 to January 2025',
    description:
      'Developed full-stack web applications using the MERN stack across frontend, backend, and database layers. Built and integrated RESTful APIs, implemented application functionality, worked with database systems, and developed responsive interfaces connected to backend services.',
    skillsHighlight: ['MERN Stack', 'REST APIs', 'MongoDB', 'Responsive Interfaces'],
  },
  {
    id: 'exp-4',
    number: '04',
    role: 'Front End Developer Intern',
    company: "Tyson's Legal Allies",
    period: 'March 2024 to April 2024',
    description:
      'Developed responsive and user-friendly web interfaces using HTML, CSS, and JavaScript. Translated design requirements into functional and visually consistent web experiences while improving responsiveness, usability, and cross-device compatibility.',
    skillsHighlight: ['HTML5 / CSS3', 'JavaScript', 'UI Engineering', 'Cross-Device Usability'],
  },
];

export const AWARDS_DATA: AwardItem[] = [
  {
    id: 'award-women-in-tech',
    year: '2025',
    title: 'Top 5 Women in Tech Medal',
    organization: 'Graph-E-Thon 2.0',
    description:
      'Awarded special recognition medal in the Top 5 Women in Tech category at Graph-E-Thon 2.0 National Hackathon for technical innovation and contribution.',
    badge: 'MEDAL',
    media: [
      {
        type: 'photo',
        title: 'Graph-E-Thon 2.0 Trophy & Medal',
        url: '/recognition/graphtheon_trophy.jpg',
        caption: 'Archisha with the Graph-E-Thon 2.0 3rd Place Trophy & Top 5 Women in Tech Medal',
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
    title: 'Winner: QubitX National Hackathon',
    organization: 'GL Bajaj Group / HackWithIndia',
    description:
      'Secured 1st place among 400+ participating teams across India for developing Sentinel (AI-powered threat detection system) with Team SenaDrishti.',
    badge: '1st',
    media: [
      {
        type: 'certificate',
        title: 'QubitX National Hackathon Winner Certificate',
        url: '/recognition/qubitx_cert.jpg',
        caption: 'Certificate of Achievement: Position Winner (Team SenaDrishti, 400+ Teams)',
      },
    ],
  },
  {
    id: 'award-hackaccino',
    year: '2025',
    title: 'Winner: Hackaccino 3.0',
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
    title: 'First Overall: GNA Hackathon 3.0',
    organization: 'GNA University',
    description:
      'Secured 1st position overall in the national-level GNA Hackathon 3.0 for innovative technical engineering.',
    badge: '1st',
    media: [
      {
        type: 'certificate',
        title: 'GNA Hackathon 3.0 Certificate',
        url: '/recognition/gna_hackathon_cert.jpg',
        caption: 'Certificate of Participation & First Overall Position: GNA University',
      },
    ],
  },
  {
    id: 'award-kriyeta',
    year: '2025',
    title: '2nd Position: KRIYETA 4.0',
    organization: 'IEEE & Acropolis Group',
    description:
      'Secured 2nd position in the 48-hour national hackathon KRIYETA 4.0 organized by IEEE Student Branch.',
    badge: '2nd',
    media: [
      {
        type: 'certificate',
        title: 'KRIYETA 4.0 Certificate (2nd Position)',
        url: '/recognition/kriyeta_cert_2nd.jpg',
        caption: 'Certificate of Appreciation: 2nd Position in 48-hour hackathon',
      },
    ],
  },
  {
    id: 'award-graphtheon',
    year: '2025',
    title: '3rd Position: Graph-E-Thon 2.0',
    organization: 'Graphic Era University',
    description:
      'Secured 3rd position in Graph-E-Thon 2.0 National Level Hackathon with Team Resineon.',
    badge: '3rd',
    media: [
      {
        type: 'certificate',
        title: 'Graph-E-Thon 2.0 Certificate (3rd Position)',
        url: '/recognition/graphtheon_cert.jpg',
        caption: 'Certificate of Achievement: 3rd Position, Graph-E-Thon 2.0',
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
    category: 'Linux & Open Source',
    skills: ['Ubuntu', 'Bash', 'Git', 'snapcraft (snap packaging)'],
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
  specialization: 'Computer Science Engineering, Artificial Intelligence | CGPA 8.39/10',
  period: 'September 2022 to May 2026',
};

export const RESEARCH_ENTRIES_DATA: ResearchEntry[] = [
  {
    id: 'ieee-icaitpr-2026',
    title: 'Stage-Level Latency Decomposition of a Tactical Intelligence Pipeline with Hosted Vision Language Inference',
    subtitle:
      'IEEE ICAITPR 2026 (Provisionally Accepted)',
    type: 'PAPER',
    venue: 'IEEE International Conference on AI, Technology, Policy and Research 2026',
    venueShort: 'IEEE ICAITPR 2026',
    status: 'PROVISIONALLY ACCEPTED',
    year: '2026',
    abstract:
      'Transport latency has been a traditional way of assessing performance of tactical monitoring systems, and persistent bi-directional transport links have usually been preferred as a result. This work argues that transport latency is not the main metric for responsiveness once a machine vision pipeline has been integrated into the perception-to-decision chain. A three-level tactical intelligence architecture is proposed with frames captured by field agents, classification of weapons and crowds using a hosted vision language model, and broadcasting alerts via WebSocket connection to web-based command dashboards. During 7 observed cycles, the median cycle duration was 10,942 ms (with 52.7% being a configured delay and 45.8% being remote inference, summing to 98.4%). Alert transmission took 0.21 ms (0.0013% of cycle time), while delivery to the command dashboard over the persistent connection took a median of 0.71 ms.',
    keyFindings: [
      'Transport layer accounts for only 0.0013% of total cycle latency; inference and capture dominate',
      'Trained object detector excluded: good accuracy on high-res images but failed on real-time low-res streams and lacked scene reasoning',
      'Vision-language model provided both classification and domain-aware tactical output in a single pass',
      'Three hidden latency properties identified: freezing after detection, unpaired images, and lack of offline path',
      'Transport selection should be driven by overhead and push properties, not responsiveness',
    ],
    tags: ['Tactical Intelligence', 'Vision-Language Models', 'WebSocket', 'Latency Decomposition', 'Counter-Terrorism', 'Situational Awareness'],
  },
  {
    id: 'attribution-not-authority',
    title: 'Attribution, Not Authority: CoT Faithfulness in Reasoning Models',
    subtitle: 'What Makes a Model Adopt a False Answer',
    type: 'STUDY',
    venue: 'Personal Research Project',
    venueShort: 'Personal Research Project',
    status: 'INDEPENDENT RESEARCH',
    year: '2026',
    abstract:
      'The standard trick for testing unfaithful chain-of-thought introduces an authority cue ("a Stanford professor believes the answer is C") and checks whether the answer shifts without the reasoning acknowledging it. Using Qwen3-27B across 216 calls, the professor trick had zero effect (0/21 valid responses). The key finding reframes the question: it is not authority that moves the model, but attribution. An unattributed factual assertion is adopted 66% of the time; the identical claim clearly attributed to a named person is adopted 0% of the time. All 9 manually verified trace cases showed the model overriding its own correct calculations (and admitting it), making the influence transparent to any CoT monitor.',
    keyFindings: [
      'Authority framing (professor trick) had zero effect; model explicitly flagged it as an adversarial test',
      'Unattributed claim: 66% uptake. Same claim attributed to a person: 0%, a monotone relationship',
      'All 9 influenced traces were faithful: the model openly stated it was deferring to the external claim',
      'The problem is not hidden reasoning; it is uncritical deference to unsupported, unattributed assertions',
      'Arcuschin et al. contradiction test replicated at 0/40, confirming 95% CI ≤ 9% on this model',
      'Neither published faithfulness screening method would have caught this 66% uptake pattern',
    ],
    tags: ['AI Safety', 'Chain-of-Thought', 'Faithfulness', 'Sycophancy', 'Mechanistic Interpretability', 'Qwen3'],
  },
];
