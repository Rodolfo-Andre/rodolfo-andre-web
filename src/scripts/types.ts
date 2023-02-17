interface Link {
  name: string;
  href: string;
}

interface Skill {
  name: string;
  level: string;
}

interface Project {
  imageURL: string;
  nameProject: string;
  descriptionProject: string;
  repositoryURL: Link;
  webSite?: Link;
}

interface Contact {
  title: string;
  icon: string;
  description?: string;
  link?: Link;
}

export type { Link, Skill, Project, Contact };
