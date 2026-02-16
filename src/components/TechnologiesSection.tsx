import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import TechnologiesStack from "./TechnologiesStack"

const TechnologiesSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        const chars = gsap.utils.toArray(".char-tech");
        gsap.from(chars, {
            scrollTrigger: {
                trigger: "#tech-title",
                start: "top 90%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.05,
            ease: "expo.out"
        });

        // Floating particles animation
        const particles = gsap.utils.toArray(".tech-particle");
        particles.forEach((particle: any) => {
            gsap.to(particle, {
                x: "random(-100, 100)",
                y: "random(-100, 100)",
                duration: "random(10, 20)",
                repeat: -1,
                yoyo: true,
                ease: "none"
            });
        });
    }, { scope: sectionRef });

    const titleChars = "Tech Stack.".split("");

    return (
        <section id="technologies" ref={sectionRef} className="relative bg-black py-40 px-6 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: "linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
            
            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                <div className="tech-particle absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full shadow-[0_0_15px_#22c55e]" />
                <div className="tech-particle absolute top-1/2 left-1/3 w-2 h-2 bg-primary/40 rounded-full blur-[2px]" />
                <div className="tech-particle absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-primary/60 rounded-full" />
                <div className="tech-particle absolute top-1/3 right-1/4 w-1 h-1 bg-primary rounded-full shadow-[0_0_10px_#22c55e]" />
                <div className="tech-particle absolute bottom-1/4 right-1/3 w-2.5 h-2.5 bg-primary/20 rounded-full blur-[4px]" />
                <div className="tech-particle absolute top-10 right-10 w-1 h-1 bg-primary shadow-[0_0_10px_#22c55e]" />
                <div className="tech-particle absolute bottom-20 left-10 w-1.5 h-1.5 bg-primary/30 blur-[1px]" />
            </div>

            <div className="absolute top-0 left-1/4 h-[600px] w-[600px] bg-primary/10 blur-[180px] rounded-full pointer-events-none -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none translate-x-1/2" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div id="tech-title" className="mb-24 space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                        </span>
                        The Toolkit
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                        <h2 className="text-6xl font-black tracking-tight text-white sm:text-8xl flex flex-wrap">
                            {titleChars.map((char, i) => (
                                <span key={i} className="char-tech inline-block mr-[2px] transition-colors duration-500 hover:text-primary cursor-default relative group/char">
                                    {char === " " ? "\u00A0" : char}
                                    <span className="absolute -bottom-2 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover/char:w-full" />
                                </span>
                            ))}
                        </h2>
                        <div className="max-w-md space-y-4">
                            <p className="text-xl text-slate-300 leading-relaxed font-medium pb-4 border-l-2 border-primary/20 pl-8 italic">
                                A curated selection of modern tools focusing on scalability, developer experience, and user delight.
                            </p>
                            <div className="flex gap-4 pl-8">
                                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                                <div className="h-2 w-2 rounded-full bg-primary/40" />
                                <div className="h-2 w-2 rounded-full bg-primary/20" />
                            </div>
                        </div>
                    </div>
                </div>

                <TechnologiesStack />
            </div>
        </section>
    )
}

export default TechnologiesSection