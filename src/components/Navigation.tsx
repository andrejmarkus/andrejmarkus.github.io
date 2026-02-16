import sections from "../data/sections"
import { handleScrollTo } from "../lib/animations"
import { LuChevronDown, LuChevronUp } from "react-icons/lu"
import { useState, useEffect, useRef } from "react"

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("#home");
    const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);

    useEffect(() => {
        const updatePill = () => {
            const activeIndex = sections.findIndex(s => s.link === activeSection);
            if (activeIndex !== -1 && navItemsRef.current[activeIndex]) {
                const el = navItemsRef.current[activeIndex];
                if (el) {
                    setPillStyle({
                        left: el.offsetLeft,
                        width: el.offsetWidth,
                        opacity: 1
                    });
                }
            }
        };

        updatePill();
        window.addEventListener("resize", updatePill);
        return () => window.removeEventListener("resize", updatePill);
    }, [activeSection]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(`#${entry.target.id}`);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((section) => {
            const element = document.getElementById(section.link.substring(1));
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const handleClick = (link: string) => {
        handleScrollTo(link);
        setMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] p-6 pointer-events-none">
            <nav className="mx-auto flex max-w-7xl items-center justify-between pointer-events-auto">
                {/* Logo Section */}
                <button 
                    onClick={() => handleScrollTo("#home")} 
                    className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 transition-all hover:border-primary/50"
                >
                    <span className="text-2xl font-black text-white group-hover:text-primary transition-colors">AM</span>
                    <div className="absolute inset-0 -z-10 bg-primary/0 transition-all group-hover:bg-primary/5" />
                </button>

                {/* Desktop Pill Menu */}
                <div className="hidden md:block">
                    <ul className="relative flex items-center gap-1 rounded-2xl bg-neutral-900/80 p-1.5 backdrop-blur-2xl border border-white/5 shadow-2xl">
                        {/* Animated Sliding Pill */}
                        <div 
                            className="absolute bg-white/10 rounded-xl transition-all duration-300 ease-out shadow-[0_0_15px_rgba(255,255,255,0.05)] border border-white/5"
                            style={{
                                left: `${pillStyle.left}px`,
                                width: `${pillStyle.width}px`,
                                height: "calc(100% - 12px)",
                                top: "6px",
                                opacity: pillStyle.opacity
                            }}
                        />

                        {sections.map((section, idx) => (
                            <li 
                                key={section.name} 
                                ref={(el) => { navItemsRef.current[idx] = el; }}
                                className="relative z-10"
                            >
                                <button 
                                    onClick={() => handleScrollTo(section.link)}
                                    className={`px-6 py-2.5 rounded-xl text-sm font-bold tracking-tight transition-all active:scale-95 ${
                                        activeSection === section.link 
                                            ? "text-white" 
                                            : "text-slate-400 hover:text-white"
                                    }`}
                                >
                                    {section.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact CTA */}
                <div className="hidden md:block">
                    <a 
                        href="mailto:andrejmarkus274@gmail.com"
                        className="btn btn-primary rounded-xl px-6 font-black capitalize tracking-tight shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all"
                    >
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Menu Trigger */}
                <div className="md:hidden">
                    <button 
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 border border-white/10 text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <LuChevronUp className="text-2xl" /> : <LuChevronDown className="text-2xl" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Fullscreen Overlay */}
            <div className={`fixed inset-0 z-[-1] bg-black/95 backdrop-blur-3xl transition-all duration-700 ease-in-out md:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {sections.map((section, i) => (
                        <button 
                            key={section.name}
                            onClick={() => handleClick(section.link)}
                            style={{ transitionDelay: `${menuOpen ? i * 75 + 100 : 0}ms` }}
                            className={`group flex items-center gap-4 text-5xl font-black tracking-tighter transition-all duration-500 ${
                                menuOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                            } ${
                                activeSection === section.link 
                                    ? "text-primary scale-110" 
                                    : "text-white hover:text-primary/70"
                            }`}
                        >
                            <span className={`h-2 w-2 rounded-full bg-primary transition-all duration-300 ${activeSection === section.link ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-40"}`} />
                            {section.name}
                        </button>
                    ))}
                    <a 
                        href="mailto:andrejmarkus274@gmail.com"
                        className={`mt-12 text-2xl font-bold text-primary underline underline-offset-8 transition-all duration-700 delay-500 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Navigation