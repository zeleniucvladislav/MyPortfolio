export interface Image {
  fields: {
    file: {
      url: string;
    };
  };
}

export interface Project {
  fields: {
    description: string;
    image: Image;
    link: string;
    name: string;
  };
  sys: {
    id: string;
  };
}

export interface PortfolioData {
  description: string;
  profileImage: Image;
  technologies: string[];
  projects: Project[];
}
