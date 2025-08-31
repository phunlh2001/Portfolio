"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
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

interface SkillCarouselProps {
  skills: { name: string; icon: React.ReactNode }[];
  title: string;
  direction?: "left" | "right";
}

function SkillCarousel({
  skills,
  title,
  direction = "left",
}: SkillCarouselProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const marquee = marqueeRef.current;
      const content = marquee.querySelector(".marquee-content") as HTMLDivElement;
      
      if (content) {
        const contentWidth = content.offsetWidth;
        const items = Array.from(content.children);
        
        // Clone items to create a seamless loop
        items.forEach(item => {
          content.appendChild(item.cloneNode(true));
        });

        const tl = gsap.timeline({ repeat: -1, ease: "linear" });

        if (direction === "left") {
          tl.fromTo(
            content,
            { x: 0 },
            { x: -contentWidth, duration: 30 }
          );
        } else {
          tl.fromTo(
            content,
            { x: -contentWidth },
            { x: 0, duration: 30 }
          );
        }

        return () => {
          tl.kill();
        };
      }
    }
  }, [direction]);

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-8 text-center">{title}</h3>
      <div
        ref={marqueeRef}
        className="marquee relative w-full overflow-hidden"
      >
        <div className="marquee-content flex">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-2 text-center mx-8 flex-shrink-0"
            >
              <div className="text-primary">{skill.icon}</div>
              <span className="text-sm font-medium text-foreground/80">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My Skills
        </h2>
        <SkillCarousel skills={mainSkills} title="Main Skills" direction="left" />
        <SkillCarousel skills={extraSkills} title="Extra Skills" direction="right" />
      </div>
    </section>
  );
}
