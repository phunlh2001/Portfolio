"use client";

import {
  Database,
  Server,
  Code,
  FileCode,
  GitBranch,
  Terminal,
  Webhook,
  Package,
  Braces,
  GitCommit,
  Figma,
  Wind,
  BrainCircuit,
  Palette
} from "lucide-react";

const mainSkills = [
  { name: "C#", icon: <Code size={48} /> },
  { name: ".NET", icon: <Code size={48} /> },
  { name: "Java", icon: <FileCode size={48} /> },
  { name: "JavaScript", icon: <FileCode size={48} /> },
  { name: "TypeScript", icon: <Braces size={48} /> },
  { name: "NodeJS", icon: <Server size={48} /> },
  { name: "Express.JS", icon: <Webhook size={48} /> },
  { name: "NestJS", icon: <BrainCircuit size={48} /> },
  { name: "MongoDB", icon: <Database size={48} /> },
  { name: "MS SQL Server", icon: <Database size={48} /> },
  { name: "PostgreSQL", icon: <Database size={48} /> },
];

const extraSkills = [
  { name: "React", icon: <Code size={48} /> },
  { name: "MUI5", icon: <Palette size={48} /> },
  { name: "Redux", icon: <GitCommit size={48} /> },
  { name: "Redux-Toolkit", icon: <GitCommit size={48} /> },
  { name: "Prisma", icon: <Database size={48} /> },
  { name: "HTML5", icon: <FileCode size={48} /> },
  { name: "CSS3", icon: <FileCode size={48} /> },
  { name: "Sass", icon: <FileCode size={48} /> },
  { name: "Tailwind", icon: <Wind size={48} /> },
  { name: "Bootstrap", icon: <Package size={48} /> },
  { name: "jQuery", icon: <FileCode size={48} /> },
  { name: "Git", icon: <GitBranch size={48} /> },
  { name: "Figma", icon: <Figma size={48} /> },
];

const tools = [
  { name: "Bash", icon: <Terminal size={48} /> },
  { name: "VS Code", icon: <Code size={48} /> },
  { name: "Vim", icon: <Terminal size={48} /> },
  { name: "NeoVim", icon: <Terminal size={48} /> },
  { name: "Sublime Text", icon: <FileCode size={48} /> },
  { name: "Jetbrains", icon: <Code size={48} /> },
  { name: "Visual Studio", icon: <Code size={48} /> },
];

interface SkillGridProps {
  skills: { name: string; icon: React.ReactNode }[];
  title: string;
}

function SkillGrid({ skills, title }: SkillGridProps) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-8 text-center">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-8 justify-items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center gap-2 text-center group"
          >
            <div className="text-primary transition-transform duration-300 group-hover:scale-110">
              {skill.icon}
            </div>
            <span className="text-sm font-medium text-foreground/80">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">My Skills</h2>
        <SkillGrid skills={mainSkills} title="Main Skills" />
        <SkillGrid skills={extraSkills} title="Extra Skills" />
        <SkillGrid skills={tools} title="Tools" />
      </div>
    </section>
  );
}
