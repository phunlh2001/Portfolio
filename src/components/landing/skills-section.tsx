"use client";

import { type CarouselApi } from "@/components/ui/carousel";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const mainSkills = ["NodeJS", "JavaScript", "TypeScript", "SQL", "MongoDB", "React", "Next.js", "HTML5", "CSS3"];
const extraSkills = ["Python", "Java", "C++", "Docker", "Git", "CI/CD", "Linux", "REST API", "GraphQL"];
const tools = ["VS Code", "Postman", "Jira", "Figma", "Notion", "GitHub", "GitLab"];

interface SkillCarouselProps {
  skills: string[];
  title: string;
  direction?: "forward" | "backward";
}

function SkillCarousel({ skills, title, direction = "forward" }: SkillCarouselProps) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>
      <Carousel 
        plugins={[
            Autoplay({
                delay: 2000,
                stopOnInteraction: false,
                direction: direction === "forward" ? "forward" : "backward",
            })
        ]}
        opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {skills.map((skill, index) => (
            <CarouselItem key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/6">
              <div className="p-1">
                <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg">
                  <CardContent className="flex aspect-square items-center justify-center p-4">
                    <span className="text-sm md:text-base font-medium text-center">{skill}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
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
