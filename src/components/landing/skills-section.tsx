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
  Palette,
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

interface SkillCardProps {
  skill: { name: string; icon: React.ReactNode };
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 border rounded-lg bg-card transition-transform duration-300 hover:scale-110 hover:shadow-lg">
      <div className="text-primary">{skill.icon}</div>
      <span className="text-sm font-medium text-center text-foreground/80">
        {skill.name}
      </span>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My Skills
        </h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">Main</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {mainSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Extra</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {extraSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
