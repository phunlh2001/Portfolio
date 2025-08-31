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
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    
    const items = itemsRef.current;
    const totalWidth = items.reduce((acc, item) => acc + item.offsetWidth, 0) / 2; // Divide by 2 because we doubled the items

    let ctx = gsap.context(() => {
      gsap.set(carousel, { x: 0 });

      const animate = () => {
        gsap.to(carousel, {
          x: direction === 'forward' ? `-=${totalWidth}` : `+=${totalWidth}`,
          duration: 30, // Adjust duration for speed
          ease: "none",
          onComplete: () => {
            // Reset position to create seamless loop
            gsap.set(carousel, { x: 0 });
            animate();
          }
        });
      };
      
      animate();

    }, carouselRef);

    return () => ctx.revert();
  }, [skills, direction]);


  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>
      <div className="overflow-hidden whitespace-nowrap">
        <div ref={carouselRef} className="flex">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el!)}
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
