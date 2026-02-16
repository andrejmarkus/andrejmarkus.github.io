import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import aboutContent from "../data/about"
import { useRef } from "react"
import { FiMapPin, FiTarget, FiZap, FiBookOpen, FiStar, FiChevronRight } from "react-icons/fi"

const AboutSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const overview = aboutContent.find(i => i.title === "Brief Overview");
    const role = aboutContent.find(i => i.title === "Current Role & Status");
    const drives = aboutContent.find(i => i.title === "What Drives Me");
    const attributes = aboutContent.find(i => i.title === "Professional Attributes");

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        const cards = gsap.utils.toArray(".bento-card");
        gsap.from(cards, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "expo.out",
            clearProps: "all"
        });

        const chars = gsap.utils.toArray(".char-about");
        gsap.from(chars, {
            scrollTrigger: {
                trigger: "#about-title",
                start: "top 90%",
            },
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.03,
            ease: "power4.out"
        });
    }, { scope: containerRef });

    const titleChars = "About Me.".split("");
    const cleanRoleTitle = role?.content[0].replace(/^[\p{Emoji}\s]+/u, '') || "";

    return (
        <section id="about" className="relative bg-black py-40 px-6 lg:px-12 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-primary/10 blur-[180px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 h-[400px] w-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2" />
            
            <div ref={containerRef} className="container mx-auto max-w-7xl relative z-10">
                <div id="about-title" className="mb-24 space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-xs font-black uppercase tracking-[.25em] text-primary">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary"></span>
                        </span>
                        The Identity
                    </div>
                    <h2 className="text-7xl font-black tracking-tighter text-white sm:text-9xl flex flex-wrap leading-[0.85]">
                        {titleChars.map((char, i) => (
                            <span key={i} className="char-about inline-block">{char === " " ? "\u00A0" : char}</span>
                        ))}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
                    {/* Primary Mission Card */}
                    <div className="md:col-span-8 md:row-span-2 bento-card relative group overflow-hidden rounded-[2.5rem] bg-neutral-900 border border-white/5 p-10 flex flex-col justify-end min-h-[440px]">
                        <div className="absolute top-10 right-10 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-10 transition-all duration-700">
                            <FiTarget size={120} />
                        </div>
                        <div className="relative z-10 space-y-6">
                            <div className="h-1 w-20 bg-primary group-hover:w-32 transition-all duration-700" />
                            <h3 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                                <span className="text-gradient">Crafting</span> digital solutions that drive success.
                            </h3>
                            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-medium">
                                {drives?.content[0]}
                            </p>
                        </div>
                    </div>

                    {/* Portrait Card */}
                    <div className="md:col-span-4 md:row-span-3 bento-card group relative overflow-hidden rounded-[2.5rem] bg-neutral-900 border border-white/5 min-h-[500px]">
                        <img
                            src="/portrait.jpeg"
                            alt="Portrait"
                            className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110 saturate-0 group-hover:saturate-100"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-10 bg-linear-to-t from-black via-black/90 to-transparent z-20">
                            <h4 className="text-2xl font-black text-white leading-tight uppercase tracking-tight">
                                {cleanRoleTitle}
                            </h4>
                            <div className="mt-4 flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                                <p className="text-slate-400 font-bold text-xs tracking-widest uppercase">Open for collaborations</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Facts Card */}
                    <div className="md:col-span-4 md:row-span-1 bento-card group rounded-[2.5rem] bg-primary border border-primary/20 p-8 flex flex-col justify-center gap-2 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all">
                        <div className="flex items-center gap-3 text-black/60">
                            <FiZap size={20} />
                            <span className="text-xs font-black uppercase tracking-widest text-black/60">Philosophy</span>
                        </div>
                        <h4 className="text-3xl font-black text-black leading-none">
                            CONTINUOUS<br/>EVOLUTION
                        </h4>
                    </div>

                    {/* Code Snippet Card */}
                    <div className="md:col-span-4 md:row-span-1 bento-card group rounded-[2.5rem] bg-neutral-950 border border-white/5 p-8 flex flex-col justify-center font-mono">
                        <div className="flex gap-2 mb-4 text-xs opacity-50">
                            <span className="w-2 h-2 rounded-full bg-red-400" />
                            <span className="w-2 h-2 rounded-full bg-yellow-400" />
                            <span className="w-2 h-2 rounded-full bg-green-400" />
                        </div>
                        <div className="space-y-1.5 text-xs text-slate-400">
                            <p><span className="text-indigo-400">const</span> skills = <span className="text-white">{"{"}</span></p>
                            <p className="pl-4">frontend: <span className="text-emerald-400">"React.js"</span>,</p>
                            <p className="pl-4">backend: <span className="text-emerald-400">"Node.js"</span>,</p>
                            <p className="pl-4">versatile: <span className="text-pink-400">true</span></p>
                            <p><span className="text-white">{"}"}</span>;</p>
                        </div>
                    </div>

                    {/* Attributes Section */}
                    <div className="md:col-span-4 md:row-span-1 bento-card rounded-[2.5rem] bg-neutral-900 border border-white/5 p-10 flex flex-col justify-center gap-6">
                        <div className="flex items-center justify-between">
                             <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Core Attributes</span>
                             <FiStar className="text-primary" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                             {attributes?.content.map((attr, i) => (
                                <span key={i} className="px-3 py-1 rounded-lg cursor-pointer bg-white/5 border border-white/10 text-[10px] font-black text-white hover:bg-primary hover:text-black transition-all">
                                    {attr.toUpperCase()}
                                </span>
                             ))}
                        </div>
                    </div>

                    {/* Education Card */}
                    <div className="md:col-span-4 md:row-span-1 bento-card group rounded-[2.5rem] bg-neutral-900 border border-white/5 p-8 flex items-center gap-6 hover:bg-neutral-800/50 transition-all">
                        <div className="h-16 w-16 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <FiBookOpen size={28} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Studying at</p>
                            <h4 className="text-lg font-black text-white leading-tight">Faculty of Informatics</h4>
                            <p className="text-xs text-slate-400 mt-1">University of Žilina</p>
                        </div>
                    </div>

                    {/* Location & Bio Combined */}
                    <div className="md:col-span-4 md:row-span-1 bento-card group rounded-[2.5rem] bg-neutral-900 border border-white/5 p-8 flex items-center justify-between">
                        <div className="space-y-1">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 block">Based in</span>
                            <h4 className="text-2xl font-black text-white">Slovakia</h4>
                            <p className="text-sm text-slate-400 font-medium">Teplička nad Váhom</p>
                        </div>
                        <div className="relative">
                            <div className="text-5xl group-hover:scale-125 transition-transform duration-500">🇸🇰</div>
                            <div className="absolute -top-2 -right-2 p-1.5 bg-primary rounded-full text-black shadow-lg scale-0 group-hover:scale-100 transition-transform duration-500">
                                <FiMapPin size={12} />
                            </div>
                        </div>
                    </div>

                    {/* Journey Card */}
                    <div className="md:col-span-12 md:row-span-1 bento-card rounded-[2.5rem] bg-neutral-900 border border-white/5 p-10 flex flex-col md:flex-row md:items-center justify-between gap-8 group">
                        <div className="space-y-4 max-w-2xl">
                             <div className="flex items-center gap-2 text-primary">
                                 <span className="text-[10px] font-black uppercase tracking-widest">My Story</span>
                                 <FiChevronRight />
                             </div>
                             <p className="text-xl text-slate-300 font-medium leading-relaxed">
                                 {overview?.content[0]}
                             </p>
                        </div>
                        <div className="shrink-0 h-1 z-10 w-full md:w-32 bg-primary/20 relative overflow-hidden rounded-full">
                            <div className="absolute inset-y-0 left-0 bg-primary w-2/3 group-hover:w-full transition-all duration-1000" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection