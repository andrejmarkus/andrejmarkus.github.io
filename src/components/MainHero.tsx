import { useGSAP } from "@gsap/react"
import { handleScrollTo } from "../lib/animations"
import gsap from "gsap"

const MainHero = () => {
    useGSAP(() => {
        const tl = gsap.timeline();
        
        tl.set(".char", { opacity: 0, y: 100 })
          .to(".char", {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.05,
            ease: "expo.out"
          })
          .from(".hero-subtitle", {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power2.out"
          }, "-=0.5")
          .from(".hero-btns", {
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            ease: "back.out(1.7)"
          }, "-=0.3")
          .from(".hero-visual", {
            opacity: 0,
            x: 50,
            duration: 1.5,
            ease: "expo.out"
          }, "-=1");

        // Mouse move effect for the hero visual
        const visual = document.querySelector(".hero-visual");
        globalThis.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 20;
            const y = (clientY / window.innerHeight - 0.5) * 20;
            gsap.to(visual, { x, y, duration: 1, ease: "power2.out" });
        });
    });

    const nameChars = "Andrej Markuš".split("");

    return (
        <section id="home" className="hero-mesh relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32 pb-20">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-emerald-500/10 blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-green-500/5 blur-[150px]" />
            </div>

            <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="flex flex-col space-y-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                            </span>
                            Available for hire
                        </div>
                        <h1 className="text-6xl font-black leading-[1.1] sm:text-8xl flex flex-wrap">
                            {nameChars.map((char, i) => (
                                <span key={i} className="char inline-block mr-[2px]">{char === " " ? "\u00A0" : char}</span>
                            ))}
                        </h1>
                        <h2 className="hero-subtitle text-2xl font-medium text-slate-400 sm:text-4xl">
                            Engineering <span className="text-white underline decoration-primary decoration-4 underline-offset-8">modern solutions</span> for the web.
                        </h2>
                    </div>

                    <p className="hero-subtitle max-w-lg text-lg leading-relaxed text-slate-500">
                        Full Stack Developer specializing in building high-performance applications with React, Node.js, and a focus on clean architectures.
                    </p>

                    <div className="hero-btns flex flex-wrap items-center gap-6">
                        <button 
                            onClick={() => handleScrollTo("#projects")} 
                            className="group relative overflow-hidden rounded-xl bg-primary px-8 py-4 font-bold text-black transition-all hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                View Projects
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-0 w-full bg-white/20 transition-all group-hover:h-full" />
                        </button>
                        <a 
                            href="mailto:andrejmarkus274@gmail.com" 
                            className="group flex items-center gap-2 text-lg font-bold text-white hover:text-primary transition-colors"
                        >
                            Contact Me 
                            <span className="transition-transform group-hover:translate-x-2">→</span>
                        </a>
                    </div>
                </div>

                <div className="hero-visual relative hidden lg:block">
                    <div className="relative z-10 animate-float">
                        <img
                            src="/coding.svg"
                            alt="Visual"
                            className="w-full max-w-lg drop-shadow-[0_0_50px_rgba(34,197,94,0.3)] transition-transform"
                            loading="eager"
                        />
                    </div>
                    {/* Floating geometric bits */}
                    <div className="absolute -top-10 -right-10 h-24 w-24 rounded-2xl bg-primary/20 backdrop-blur-3xl animate-pulse" />
                    <div className="absolute -bottom-10 -left-10 h-16 w-16 rounded-full bg-secondary/30 backdrop-blur-2xl animate-bounce" />
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">Scroll</span>
                <div className="h-10 w-[2px] bg-linear-to-b from-primary to-transparent" />
            </div>
        </section>
    )
}

export default MainHero