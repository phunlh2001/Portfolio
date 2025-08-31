import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Mail, MapPin } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <Card className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-lg">
              <Image
                src="https://picsum.photos/400/400"
                alt="Hung Phu's profile picture"
                width={300}
                height={300}
                className="object-cover w-full h-full"
                data-ai-hint="profile picture"
              />
            </Card>
          </div>
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I love coding, researching best practices, reading books, listening to audio about history & culture, writing blogs, and playing games.
                </p>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Based in Can Tho, Vietnam</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>phunlh2001@gmail.com</span>
                </div>
            </div>
            <a href="/phu_cv.pdf" download="Hung_Phu_CV.pdf">
              <Button size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
