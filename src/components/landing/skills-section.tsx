"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Card, CardContent } from "@/components/ui/card";

const mainSkills = ["NodeJS", "JavaScript", "TypeScript", "SQL", "MongoDB", "React", "Next.js", "HTML5", "CSS3"];
const extraSkills = ["Python", "Java", "C++", "Docker", "Git", "CI/CD", "Linux", "REST API", "GraphQL"];
const tools = ["VS Code", "Postman", "Jira", "Figma", "Notion", "GitHub", "GitLab"];

interface SkillCarouselProps {
  skills: string[];
  title: string;
  direction?: "forward" | "backward";
}

function SkillCarousel({ skills, title, direction = "forward" }: SkillCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    
    const items = Array.from(carousel.children) as HTMLDivElement[];
    const totalWidth = items.reduce((acc, item) => acc + item.offsetWidth, 0) / 2;

    gsap.set(carousel, { x: 0 });

    const mod = gsap.utils.wrap(0, -totalWidth);

    const timeline = gsap.timeline({
        repeat: -1,
        onReverseComplete: () => timeline.totalTime(timeline.rawTime() + timeline.duration() * 10)
    });
    
    timeline.to(carousel, {
      x: direction === 'forward' ? `-=${totalWidth}` : `+=${totalWidth}`,
      duration: 30,
      ease: "none",
    });

    return () => {
      timeline.kill();
    };
  }, [skills, direction]);


  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>
      <div className="overflow-hidden whitespace-nowrap">
        <div ref={carouselRef} className="flex">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="p-2 shrink-0"
              style={{ minWidth: '150px' }}
            >
              <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg">
                <CardContent className="flex aspect-square items-center justify-center p-4">
                  <span className="text-sm md:text-base font-medium text-center">{skill}</span>
                </CardContent>
              </Card>
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
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>
        <SkillCarousel skills={mainSkills} title="Main Skills" />
        <SkillCarousel skills={extraSkills} title="Extra Skills" direction="backward" />
        <SkillCarousel skills={tools} title="Tools" />
      </div>
    </section>
  );
}
