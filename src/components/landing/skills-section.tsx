"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { 
  Database, 
  Server, 
  Code, 
  FileCode, 
  GitBranch, 
  RefreshCw, 
  Terminal, 
  Webhook, 
  Package,
  Braces,
  GitCommit,
  Bot,
  Figma,
  CheckSquare
} from "lucide-react";

const mainSkills = [
  { name: "NodeJS", icon: <Server size={48} /> },
  { name: "JavaScript", icon: <FileCode size={48} /> },
  { name: "TypeScript", icon: <Braces size={48} /> },
  { name: "SQL", icon: <Database size={48} /> },
  { name: "MongoDB", icon: <Database size={48} /> },
  { name: "React", icon: <Code size={48} /> },
  { name: "Next.js", icon: <Code size={48} /> },
  { name: "HTML5", icon: <FileCode size={48} /> },
  { name: "CSS3", icon: <FileCode size={48} /> },
];
const extraSkills = [
  { name: "Python", icon: <FileCode size={48} /> },
  { name: "Java", icon: <FileCode size={48} /> },
  { name: "C++", icon: <FileCode size={48} /> },
  { name: "Docker", icon: <Package size={48} /> },
  { name: "Git", icon: <GitBranch size={48} /> },
  { name: "CI/CD", icon: <RefreshCw size={48} /> },
  { name: "Linux", icon: <Terminal size={48} /> },
  { name: "REST API", icon: <Webhook size={48} /> },
  { name: "GraphQL", icon: <GitCommit size={48} /> },
];
const tools = [
  { name: "VS Code", icon: <Code size={48} /> },
  { name: "Postman", icon: <Webhook size={48} /> },
  { name: "Jira", icon: <CheckSquare size={48} /> },
  { name: "Figma", icon: <Figma size={48} /> },
  { name: "Notion", icon: <CheckSquare size={48} /> },
  { name: "GitHub", icon: <GitBranch size={48} /> },
  { name: "GitLab", icon: <GitBranch size={48} /> },
];

interface SkillCarouselProps {
  skills: { name: string; icon: React.ReactNode }[];
  title: string;
  direction?: "forward" | "backward";
}

function SkillCarousel({ skills, title, direction = "forward" }: SkillCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    
    const items = Array.from(carousel.children) as HTMLDivElement[];
    if (items.length === 0) return;
    const totalWidth = items.reduce((acc, item) => acc + item.offsetWidth, 0) / 2;

    gsap.set(carousel, { x: 0 });

    const timeline = gsap.timeline({
        repeat: -1,
        onReverseComplete: () => timeline.totalTime(timeline.rawTime() + timeline.duration() * 10)
    });
    
    timeline.to(carousel, {
      x: direction === 'forward' ? `-=${totalWidth}` : `+=${totalWidth}`,
      duration: 40,
      ease: "none",
    });

    return () => {
      timeline.kill();
    };
  }, [skills, direction]);


  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-6 text-center">{title}</h3>
      <div className="overflow-hidden whitespace-nowrap group relative">
        <div ref={carouselRef} className="flex">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="p-4 shrink-0"
              style={{ minWidth: '120px' }}
            >
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <div className="text-primary transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-foreground/80">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-background to-transparent"></div>
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-background to-transparent"></div>
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>
        <SkillCarousel skills={mainSkills} title="Main Skills" />
        <SkillCarousel skills={extraSkills} title="Extra Skills" direction="backward" />
        <SkillCarousel skills={tools} title="Tools" />
      </div>
    </section>
  );
}
