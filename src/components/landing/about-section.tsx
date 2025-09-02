"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, GraduationCap, Home } from "lucide-react";
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
                  I love coding and constantly explore best practices in my field to make my code more efficient and reliable. What excites me the most is building products that not only perform well but also bring a safe and enjoyable experience to users. Outside of work, I often find myself immersed in books or audio about history and culture, which broadens my perspective of the world. I also enjoy relaxing with friends through gaming, and I write blogs as a way to reflect and improve myself day by day.
                </p>
              </CardContent>
            </Card>
            <a href="/cv/HungPhu_CV.pdf" download="HungPhu_CV.pdf">
              <Button size="lg" className="mt-4">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </a>
          </div>
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative w-[280px] h-[320px] md:w-[350px] md:h-[400px] group [perspective:1000px]">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-accent rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative w-full h-full rounded-lg shadow-lg transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute w-full h-full [backface-visibility:hidden]">
                  <Image
                    src="/images/avatar.jpg"
                    alt="Hung Phu"
                    width={350}
                    height={400}
                    className="relative rounded-lg object-cover w-full h-full"
                    data-ai-hint="profile picture"
                  />
                </div>
                {/* Back Side */}
                <div className="absolute w-full h-full bg-card rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 flex flex-col justify-center">
                   <h3 className="text-2xl font-bold mb-4 text-center">My Info</h3>
                   <ul className="space-y-3 text-sm md:text-base">
                      <li className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-primary"/>
                        <span>0396384095</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-primary"/>
                        <span>phunlh2001@gmail.com</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <GraduationCap className="h-4 w-4 text-primary"/>
                        <span>7.9 (FPT University)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Home className="h-4 w-4 text-primary"/>
                        <span>From: Dong Thap</span>
                      </li>
                       <li className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-primary"/>
                        <span>Based in: Can Tho</span>
                      </li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

    