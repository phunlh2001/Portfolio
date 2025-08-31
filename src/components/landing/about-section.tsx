import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              A Little Bit About Me
            </h2>
            <Card className="bg-secondary border-none shadow-none">
              <CardContent className="pt-6">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I love to code and research best practices related to my major so that I can optimize my code performance. I am deeply committed to ensuring the user experience and the safety of users when using our product. In addition, I also enjoy reading books and listening to audio about the history and culture of various countries. I also enjoy playing games with my friends in my free time. And write a blog to improve myself day by day.
                </p>
              </CardContent>
            </Card>
            <a href="/phu_cv.pdf" download="Hung_Phu_CV.pdf">
              <Button size="lg" className="mt-4">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </a>
          </div>
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative w-[280px] h-[320px] md:w-[350px] md:h-[400px] group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-accent rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <Image
                src="https://picsum.photos/350/400"
                alt="Hung Phu"
                width={350}
                height={400}
                className="relative rounded-lg object-cover w-full h-full shadow-lg"
                data-ai-hint="profile picture"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}