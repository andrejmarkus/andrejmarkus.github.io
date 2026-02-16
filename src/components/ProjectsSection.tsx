import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import ProjectsList from "./ProjectsList"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const ProjectsSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        const chars = gsap.utils.toArray(".char-proj");
        gsap.from(chars, {
            scrollTrigger: {
                trigger: "#projects-title",
                start: "top 90%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.05,
            ease: "expo.out"
        });

        // Floating particles animation (reusing logic)
        const particles = gsap.utils.toArray(".proj-particle");
        particles.forEach((particle: any) => {
            gsap.to(particle, {
                x: "random(-100, 100)",
                y: "random(-100, 100)",
                duration: "random(12, 24)",
                repeat: -1,
                yoyo: true,
                ease: "none"
            });
        });
    }, { scope: sectionRef });

    const titleChars = "Selected Works.".split("");

    return (
        <section id="projects" ref={sectionRef} className="relative bg-black py-40 px-6 overflow-hidden border-t border-white/5">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" 
                 style={{ backgroundImage: "linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)", backgroundSize: "100px 100px" }} />
            
            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="proj-particle absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_20px_#22c55e]" />
                <div className="proj-particle absolute bottom-1/3 left-1/4 w-2 h-2 bg-primary/40 rounded-full blur-[2px]" />
                <div className="proj-particle absolute top-2/3 right-1/3 w-1 h-1 bg-primary/60 rounded-full shadow-[0_0_10px_#22c55e]" />
            </div>

            <div className="absolute top-0 right-0 h-[800px] w-[800px] bg-primary/5 blur-[180px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 h-[600px] w-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div id="projects-title" className="mb-24 space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                        </span>
                        Featured Projects
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                        <h2 className="text-6xl font-black tracking-tight text-white sm:text-8xl flex flex-wrap">
                            {titleChars.map((char, i) => (
                                <span key={i} className="char-proj inline-block mr-[2px] transition-colors duration-500 hover:text-primary cursor-default relative group/char">
                                    {char === " " ? "\u00A0" : char}
                                    <span className="absolute -bottom-2 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover/char:w-full" />
                                </span>
                            ))}
                        </h2>
                        <div className="max-w-md space-y-4">
                            <p className="text-xl text-slate-300 leading-relaxed font-medium pb-4 border-l-2 border-primary/20 pl-8 italic">
                                A curated selection of projects focusing on high-performance architecture and pixel-perfect execution.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    <ProjectsList />
                </div>

                <div className="mt-24 flex justify-center">
                    <a 
                        href="https://github.com/andrejmarkus?tab=repositories" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-4 rounded-full border border-white/10 bg-neutral-900 px-10 py-5 text-sm font-black uppercase tracking-[0.3em] text-white transition-all hover:border-primary/50 hover:bg-neutral-800"
                    >
                        View Full Archive
                        <span className="text-primary transition-transform group-hover:translate-x-2">→</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection