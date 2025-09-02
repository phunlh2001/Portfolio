"use client";
import Image from "next/image";

const mainSkills = [
  { name: ".NET", icon: "/images/skills/dotnet.svg" },
  { name: "Java", icon: "/images/skills/java.svg" },
  { name: "JavaScript", icon: "/images/skills/javascript.svg" },
  { name: "TypeScript", icon: "/images/skills/typescript.svg" },
  { name: "NodeJS", icon: "/images/skills/nodejs.svg" },
  { name: "NestJS", icon: "/images/skills/nestjs.svg" },
  { name: "MongoDB", icon: "/images/skills/mongodb.svg" },
  { name: "MS SQL Server", icon: "/images/skills/mssql.svg" },
  { name: "PostgreSQL", icon: "/images/skills/postgresql.svg" },
];

const extraSkills = [
  { name: "React", icon: "/images/skills/react.svg" },
  { name: "MUI5", icon: "/images/skills/mui.svg" },
  { name: "Redux", icon: "/images/skills/redux.svg" },
  { name: "Prisma", icon: "/images/skills/prisma.svg" },
  { name: "Sass", icon: "/images/skills/sass.svg" },
  { name: "Tailwind", icon: "/images/skills/tailwindcss.svg" },
  { name: "Bootstrap", icon: "/images/skills/bootstrap.svg" },
  { name: "jQuery", icon: "/images/skills/jquery.svg" },
  { name: "Git", icon: "/images/skills/git.svg" },
  { name: "Figma", icon: "/images/skills/figma.svg" },
  { name: "Linux", icon: "/images/skills/linux.svg" },
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
