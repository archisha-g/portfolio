export interface Project {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  isFeatured?: boolean;
  pipelineStages?: string[];
  threatFlow?: string[];
  codeSample?: string;
  details?: {
    overview: string;
    architecture: string[];
    outcomes: string[];
  };
}

export interface ExperienceItem {
  id: string;
  number: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  skillsHighlight?: string[];
}

export interface AwardItem {
  id: string;
  year: string;
  title: string;
  organization?: string;
  description: string;
  badge: '1st' | '2nd' | '3rd' | 'RESEARCH' | 'MEDAL' | 'AWARD';
  media?: {
    type: 'photo' | 'certificate';
    title: string;
    url: string;
    caption?: string;
  }[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationInfo {
  institution: string;
  degree: string;
  specialization: string;
  period: string;
}

export interface ResearchTopic {
  title: string;
  area: string;
  status: 'IN PROGRESS' | 'EXPLORING';
  description: string;
  keyQuestions: string[];
}

export interface ResearchEntry {
  id: string;
  title: string;
  subtitle: string;
  type: 'PAPER' | 'STUDY';
  venue: string;
  venueShort: string;
  status: string;
  year: string;
  abstract: string;
  keyFindings: string[];
  tags: string[];
}
