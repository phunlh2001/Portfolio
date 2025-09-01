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
    description: "A simple tool that generates random colors to help users quickly find suitable color codes for backgrounds or design ideas.",
    image: "/images/projects/random-color.png",
    tags: ["HTML5", "CSS3", "Javascript"],
    liveUrl: "https://phunlh2001.github.io/Random-Color/",
    githubUrl: "https://github.com/phunlh2001/Random-Color"
  },
  {
    title: "GuideNow",
    description: "A mobile app created with a startup mindset, designed to connect users with local food, drinks, and travel experiences for a more authentic journey.",
    image: "/images/projects/guidenow.png",
    tags: ["React Native", "Firebase", "Redux", "Expo Go"],
    githubUrl: "https://github.com/phunlh2001/GuideNow"
  },
  {
    title: "PlantMed",
    description: "A capstone project that leverages AI and custom-trained models to identify medicinal plants through photos, providing insights into their benefits and potential side effects.",
    image: "/images/projects/plantmed.png",
    tags: ["ReactJS", "React-Native", ".NET 5", "Redux", "Redux-Toolkit", "MUI5", "Python", "FastAPI", "YOLO8", "AI", "SQL Server", "Firebase"],
    liveUrl: "https://plantmed.netlify.app/",
    githubUrl: "https://github.com/PlantMed-Capstone-Project"
  },
  {
    title: "Baverage",
    description: "A Java-based mobile app built to support take-away beverage orders, offering a simple and convenient way for users to purchase drinks.",
    image: "/images/projects/baverage.png",
    tags: ["Java", "SQLite", "Room Android"],
    githubUrl: "https://github.com/phunlh2001/PRM392-Beverages"
  },
  {
    title: "Generate QR Code",
    description: "A lightweight project that transforms any input into a QR code, making it easy to share links, text, or information instantly.",
    image: "/images/projects/generate-qr.png",
    tags: ["HTML5", "CSS3", "Javascript"],
    liveUrl: "https://phunlh2001.github.io/Generate-QR-Code/",
    githubUrl: "https://github.com/phunlh2001/Generate-QR-Code"
  },
  {
    title: "Extract zip file",
    description: "A first Rust learning project that focuses on building a tool to extract compressed files, marking the starting point of my journey with the language.",
    image: "/images/projects/extract-zip.png",
    tags: ["Rust", "Tools"],
    githubUrl: "https://github.com/phunlh2001/Extract-Zip-File"
  },
  {
    title: "Color Theme Picker",
    description: "A creative experiment that generates random color themes, helping users explore text and background combinations effortlessly.",
    image: "/images/projects/theme-picker.png",
    tags: ["HTML5", "CSS3", "Javascript"],
    liveUrl: "https://phunlh2001.github.io/Color-Theme-Picker/",
    githubUrl: "https://github.com/phunlh2001/Color-Theme-Picker"
  },
  {
    title: "Rock-Paper-Scissors",
    description: "A fun web game designed for entertainment, bringing the classic rock-paper-scissors experience to browsers with a simple and interactive interface.",
    image: "/images/projects/rock-paper-scissors.png",
    tags: ["HTML5", "CSS3", "Javascript"],
    liveUrl: "https://phunlh2001.github.io/Rock-Paper-Scissors/",
    githubUrl: "https://github.com/phunlh2001/Rock-Paper-Scissors"
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
