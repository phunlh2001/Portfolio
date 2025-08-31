import { Header } from "@/components/landing/header";
import { HomeSection } from "@/components/landing/home-section";
import { AboutSection } from "@/components/landing/about-section";
import { SkillsSection } from "@/components/landing/skills-section";
import { ContactSection } from "@/components/landing/contact-section";
import { Footer } from "@/components/landing/footer";
import { Separator } from "@/components/ui/separator";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Separator />
      <Footer />
    </div>
  );
}
