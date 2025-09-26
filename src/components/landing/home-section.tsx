"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

export function HomeSection() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  const texts = [
    "I am a Junior Backend Developer",
    "I am interested in AI",
    "I am learning about Cyber Security",
    "I like reading books and playing video games"
  ];

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
    const cursorTl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    // Cursor blinking animation
    cursorTl.to(cursorRef.current, { opacity: 0, duration: 0.5, ease: "power2.inOut" })
            .to(cursorRef.current, { opacity: 1, duration: 0.5, ease: "power2.inOut" });

    // Typing animation for each text
    texts.forEach(text => {
      tl.to(textRef.current, {
        duration: text.length / 10, // Adjust speed based on text length
        text: text,
        ease: "none"
      }).to(textRef.current, { // Pause at the end of the sentence
        duration: 1.5
      }).to({ length: text.length }, {
        duration: text.length / 20,
        length: 0,
        ease: "none",
        onUpdate: function () {
          const currentLength = Math.floor(this.targets()[0].length);
          if (textRef.current) {
            textRef.current.textContent = text.substring(0, currentLength);
          }  
        }
      });
    });

    return () => {
      tl.kill();
      cursorTl.kill();
    };
  }, []);

  return (
    <section id="home" className="w-full h-[calc(100vh-3.5rem)] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] dark:bg-grid-black/[0.2]"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div 
          className="animate-in fade-in slide-in-from-bottom-5 duration-1000"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4">
            Hi 👋 My name is Hung Phu
          </h1>
        </div>
        <div 
          className="animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-300"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <p className="text-lg md:text-xl lg:text-2xl text-primary font-medium h-8 md:h-10">
            <span ref={textRef}></span>
            <span ref={cursorRef} className="ml-1 opacity-100">|</span>
          </p>
        </div>
      </div>
    </section>
  );
}
