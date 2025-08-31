import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A brief description of Project One. It solves a real-world problem by leveraging modern technologies.",
    image: "https://picsum.photos/400/250",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    imageHint: "tech code"
  },
  {
    title: "Project Two",
    description: "An innovative application that streamlines a specific workflow, built with a focus on user experience.",
    image: "https://picsum.photos/400/251",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    imageHint: "laptop desk"
  },
  {
    title: "Project Three",
    description: "A server-side rendered application that provides fast and reliable data fetching and display.",
    image: "https://picsum.photos/400/252",
    tags: ["Next.js", "GraphQL", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    imageHint: "data dashboard"
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="aspect-video relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    data-ai-hint={project.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-1 pt-6">
                <CardTitle className="mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button asChild variant="outline" className="w-full">
                  <Link href={project.githubUrl} target="_blank">
                    <Github /> Source Code
                  </Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href={project.liveUrl} target="_blank">
                    <ExternalLink /> Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
