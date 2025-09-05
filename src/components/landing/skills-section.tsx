"use client";
import Image from "next/image";
import { useProjectFocusStore } from "@/lib/store";
import { projects } from "./projects-section";

const mainSkills = [
  { id: "dotnet", name: ".NET", icon: "/images/skills/dotnet.svg" },
  { id: "java", name: "Java", icon: "/images/skills/java.svg" },
  { id: "javascript", name: "JavaScript", icon: "/images/skills/javascript.svg" },
  { id: "typescript", name: "TypeScript", icon: "/images/skills/typescript.svg" },
  { id: "nodejs", name: "NodeJS", icon: "/images/skills/nodejs.svg" },
  { id: "nestjs", name: "NestJS", icon: "/images/skills/nestjs.svg" },
  { id: "mongodb", name: "MongoDB", icon: "/images/skills/mongodb.svg" },
  { id: "mssql", name: "MS SQL Server", icon: "/images/skills/mssql.svg" },
  { id: "postgresql", name: "PostgreSQL", icon: "/images/skills/postgresql.svg" },
];

const extraSkills = [
  { id: "react", name: "React", icon: "/images/skills/react.svg" },
  { id: "mui", name: "MUI5", icon: "/images/skills/mui.svg" },
  { id: "redux", name: "Redux", icon: "/images/skills/redux.svg" },
  { id: "prisma", name: "Prisma", icon: "/images/skills/prisma.svg" },
  { id: "sass", name: "Sass", icon: "/images/skills/sass.svg" },
  { id: "tailwind", name: "Tailwind", icon: "/images/skills/tailwindcss.svg" },
  { id: "bootstrap", name: "Bootstrap", icon: "/images/skills/bootstrap.svg" },
  { id: "jquery", name: "jQuery", icon: "/images/skills/jquery.svg" },
  { id: "git", name: "Git", icon: "/images/skills/git.svg" },
  { id: "figma", name: "Figma", icon: "/images/skills/figma.svg" },
  { id: "linux", name: "Linux", icon: "/images/skills/linux.svg" },
];

interface SkillCardProps {
  skill: { id: string; name: string; icon: string };
  onClick: () => void;
}

function SkillCard({ skill, onClick }: SkillCardProps) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-2 p-4 border rounded-lg bg-card transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
    >
      <div className="relative h-12 w-12">
        <Image
          src={skill.icon}
          alt={`${skill.name} logo`}
          fill
          className="object-contain"
        />
      </div>
      <span className="text-sm font-medium text-center text-foreground/80">
        {skill.name}
      </span>
    </div>
  );
}

export function SkillsSection() {
  const { setFocusedProjectIndex } = useProjectFocusStore();

  const handleSkillClick = (skillName: string) => {
    const projectIndex = projects.findIndex(p => p.tags.some(tag => tag.toLowerCase() === skillName.toLowerCase()));

    if (projectIndex !== -1) {
      setFocusedProjectIndex(projectIndex);
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

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
              <SkillCard key={skill.id} skill={skill} onClick={() => handleSkillClick(skill.name)} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Extra</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {extraSkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} onClick={() => handleSkillClick(skill.name)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
