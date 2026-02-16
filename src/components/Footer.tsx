import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu"

const Footer = () => {
    return (
        <footer className="bg-black py-40 px-6 border-t border-white/5 relative overflow-hidden">
             {/* Background glow */}
             <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col items-center">
                    <div className="text-center space-y-12 mb-32">
                        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mx-auto">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                            </span>
                            Available for new projects
                        </div>
                        <h2 className="text-6xl font-black tracking-tight text-white sm:text-9xl leading-[0.9]">
                            LETS BUILD<br/>
                            <span className="text-primary italic">SOMETHING BIG.</span>
                        </h2>
                        <a 
                            href="mailto:andrejmarkus274@gmail.com" 
                            className="inline-flex items-center gap-4 text-2xl font-black text-slate-300 hover:text-white transition-all group"
                        >
                            andrejmarkus274@gmail.com
                            <div className="h-[1px] w-12 bg-primary/50 group-hover:w-24 transition-all duration-500" />
                        </a>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between w-full pt-16 border-t border-white/5 gap-12">
                        <div className="flex items-center gap-10">
                            <a href="https://www.github.com/andrejmarkus" target="_blank" rel="noopener noreferrer" 
                               className="text-slate-400 hover:text-primary transition-all hover:-translate-y-1">
                                <LuGithub size={28} />
                            </a>
                            <a href="https://www.linkedin.com/in/andrej-marku%C5%A1-376439349/" target="_blank" rel="noopener noreferrer"
                               className="text-slate-400 hover:text-primary transition-all hover:-translate-y-1">
                                <LuLinkedin size={28} />
                            </a>
                            <a href="mailto:andrejmarkus274@gmail.com"
                               className="text-slate-400 hover:text-primary transition-all hover:-translate-y-1">
                                <LuMail size={28} />
                            </a>
                        </div>

                        <div className="text-center md:text-right space-y-2">
                            <p className="text-slate-500 font-bold uppercase tracking-tighter hover:text-slate-300 transition-colors cursor-default">
                                © {new Date().getFullYear()} Andrej Markuš
                            </p>
                            <p className="text-[10px] uppercase tracking-[0.4em] text-primary/60 font-black">Digital Architect</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer