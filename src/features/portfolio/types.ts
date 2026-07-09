export type Education = {
  degree: string;
  institution: string;
  department: string;
  cgpa: string;
  expectedGraduation: string;
};

export type EducationTimelineItem = {
  level: string;
  institution: string;
  location: string;
  period: string;
  program: string;
  result: string;
  highlights: string[];
  image: {
    src: string;
    alt: string;
  };
};

export type Profile = {
  name: string;
  title: string;
  introduction: string;
  summary: string;
  careerObjective: string;
  roles: string[];
  education: Education;
  focusAreas: string[];
  location: string;
  awards: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  links: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    resume: string;
  };
};

export type ProjectStatus =
  | "Prototype"
  | "In Progress"
  | "Completed"
  | "Research"
  | "Personal Build";

export type ProjectGalleryImage = {
  src: string;
  alt: string;
  caption: string;
  orientation: "landscape" | "portrait";
};

export type ProjectFeatureGroup = {
  title: string;
  items: string[];
};

export type ProjectStat = {
  label: string;
  value: string;
};

export type ProjectProtocolCommand = {
  command: string;
  purpose: string;
};

export type ProjectSpotlight = {
  eyebrow: string;
  title: string;
  summary: string;
  repositoryLabel: string;
  documentationLabel: string;
  stats: ProjectStat[];
  featureGroups: ProjectFeatureGroup[];
  protocol: ProjectProtocolCommand[];
  gallery: ProjectGalleryImage[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  techStack: string[];
  status: ProjectStatus;
  githubUrl: string;
  detailsUrl: string;
  spotlight?: ProjectSpotlight;
};

export type LabProject = {
  title: string;
  description: string;
  focus: string;
  tools: string[];
};

export type Certificate = {
  title: string;
  issuer: string;
  issueDate: string;
  thumbnail: {
    src: string;
    alt: string;
  };
  downloadUrl: string;
};
