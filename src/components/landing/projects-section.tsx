import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Random Color",
    description: "A brief description of Project One. It solves a real-world problem by leveraging modern technologies.",
    image: "https://picsum.photos/400/250",
    tags: ["HTML5", "CSS3", "Javascript"],
    liveUrl: "https://phunlh2001.github.io/Random-Color/",
    githubUrl: "https://github.com/phunlh2001/Random-Color",
    imageHint: "tech code"
  },
  {
    title: "GuideNow",
    description: "A mobile-first application designed to provide a seamless user experience on any device.",
    image: "https://picsum.photos/400/253",
    tags: ["React Native", "Firebase", "Redux", "Expo Go"],
    githubUrl: "https://github.com/phunlh2001/GuideNow",
    imageHint: "mobile app"
  },
  {
    title: "PlantMed",
    description: "A data visualization dashboard that provides insights into complex datasets.",
    image: "https://picsum.photos/400/254",
    tags: ["ReactJS", "React-Native", ".NET 5", "Redux", "Redux-Toolkit", "MUI5", "Python", "FastAPI", "YOLO8", "AI", "SQL Server", "Firebase"],
    liveUrl: "https://plantmed.netlify.app/",
    githubUrl: "https://github.com/PlantMed-Capstone-Project",
    imageHint: "analytics chart"
  },
  {
    title: "Law-N-GenZ",
    description: "A data visualization dashboard that provides insights into complex datasets.",
    image: "https://picsum.photos/400/254",
    tags: ["Next", "Typescript", "Tailwind"],
    githubUrl: "https://github.com/phunlh2001/Law-N-Genz",
    imageHint: "analytics chart"
  },
  {
    title: "Baverage",
    description: "A data visualization dashboard that provides insights into complex datasets.",
    image: "https://picsum.photos/400/254",
    tags: ["Java", "SQLite", "Room Android"],
    githubUrl: "https://github.com/phunlh2001/PRM392-Beverages",
    imageHint: "analytics chart"
  },
  {
    title: "Extract zip file",
    description: "A data visualization dashboard that provides insights into complex datasets.",
    image: "https://picsum.photos/400/254",
    tags: ["Rust", "Tools"],
    githubUrl: "https://github.com/phunlh2001/Extract-Zip-File",
    imageHint: "analytics chart"
  },
  {
    title: "Generate QR Code",
    description: "A data visualization dashboard that provides insights into complex datasets.",
    image: "https://picsum.photos/400/254",
    tags: ["HTML5", "CSS3", "Javascript"],
    liveUrl: "https://phunlh2001.github.io/Generate-QR-Code/",
    githubUrl: "https://github.com/phunlh2001/Generate-QR-Code",
    imageHint: "analytics chart"
  },
  {
    title: "Random Quotes",
    description: "A data visualization dashboard that provides insights into complex datasets.",
    image: "https://picsum.photos/400/254",
    tags: ["HTML5", "CSS3", "Typescript"],
    githubUrl: "https://github.com/phunlh2001/Random-Quotes",
    imageHint: "analytics chart"
  },
  {
    title: "Color Theme Picker",
    description: "A data visualization dashboard that provides insights into complex datasets.",
    image: "https://picsum.photos/400/254",
    tags: ["HTML5", "CSS3", "Javascript"],
    liveUrl: "https://phunlh2001.github.io/Color-Theme-Picker/",
    githubUrl: "https://github.com/phunlh2001/Color-Theme-Picker",
    imageHint: "analytics chart"
  },
  {
    title: "Rock-Paper-Scissors",
    description: "A data visualization dashboard that provides insights into complex datasets.",
    image: "https://picsum.photos/400/254",
    tags: ["HTML5", "CSS3", "Javascript"],
    liveUrl: "https://phunlh2001.github.io/Rock-Paper-Scissors/",
    githubUrl: "https://github.com/phunlh2001/Rock-Paper-Scissors",
    imageHint: "analytics chart"
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Projects
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col h-full overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
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
                    <CardFooter className="gap-2 mt-auto">
                      <Button asChild variant="outline" className="w-full">
                        <Link href={project.githubUrl} target="_blank">
                          <Github /> Source Code
                        </Link>
                      </Button>
                      {project.liveUrl && (
                        <Button asChild className="w-full">
                          <Link href={project.liveUrl} target="_blank">
                            <ExternalLink /> Live Demo
                          </Link>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
