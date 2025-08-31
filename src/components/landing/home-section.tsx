export function HomeSection() {
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
          <p className="text-lg md:text-xl lg:text-2xl text-primary font-medium">
            I am a Backend Developer
          </p>
        </div>
      </div>
    </section>
  );
}
