export type Project = {
  title: string;
  desc: string;
  tags: string[];
  href: string;
  featured?: boolean;
  accentColor: string;
};

export type SocialLink = {
  name: string;
  handle: string;
  href: string;
  bgColor: string;
  iconColor: string;
};

export type Skill = {
  name: string;
  color: string;
};
