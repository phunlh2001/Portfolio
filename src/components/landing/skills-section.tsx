"use client";
import Image from "next/image";

const mainSkills = [
  { name: "C#", icon: "/icons/skills/csharp.svg" },
  { name: ".NET", icon: "/icons/skills/dotnet.svg" },
  { name: "Java", icon: "/icons/skills/java.svg" },
  { name: "JavaScript", icon: "/icons/skills/javascript.svg" },
  { name: "TypeScript", icon: "/icons/skills/typescript.svg" },
  { name: "NodeJS", icon: "/icons/skills/nodejs.svg" },
  { name: "Express.JS", icon: "/icons/skills/expressjs.svg" },
  { name: "NestJS", icon: "/icons/skills/nestjs.svg" },
  { name: "MongoDB", icon: "/icons/skills/mongodb.svg" },
  { name: "MS SQL Server", icon: "/icons/skills/mssql.svg" },
  { name: "PostgreSQL", icon: "/icons/skills/postgresql.svg" },
];

const extraSkills = [
  { name: "React", icon: "/icons/skills/react.svg" },
  { name: "MUI5", icon: "/icons/skills/mui.svg" },
  { name: "Redux", icon: "/icons/skills/redux.svg" },
  { name: "Redux-Toolkit", icon: "/icons/skills/redux-toolkit.svg" },
  { name: "Prisma", icon: "/icons/skills/prisma.svg" },
  { name: "HTML5", icon: "/icons/skills/html5.svg" },
  { name: "CSS3", icon: "/icons/skills/css3.svg" },
  { name: "Sass", icon: "/icons/skills/sass.svg" },
  { name: "Tailwind", icon: "/icons/skills/tailwindcss.svg" },
  { name: "Bootstrap", icon: "/icons/skills/bootstrap.svg" },
  { name: "jQuery", icon: "/icons/skills/jquery.svg" },
  { name: "Git", icon: "/icons/skills/git.svg" },
  { name: "Figma", icon: "/icons/skills/figma.svg" },
];

interface SkillCardProps {
  skill: { name: string; icon: string };
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 border rounded-lg bg-card transition-transform duration-300 hover:scale-110 hover:shadow-lg">
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
