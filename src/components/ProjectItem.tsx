import { LuExternalLink, LuGithub, LuStar } from "react-icons/lu"
import { SiTypescript, SiJavascript, SiPython, SiCplusplus } from "react-icons/si"

const LanguageIcon = ({ language }: { language?: string }) => {
  switch (language?.toLowerCase()) {
    case 'typescript': return <SiTypescript className="text-[#3178C6]" />
    case 'javascript': return <SiJavascript className="text-[#F7DF1E]" />
    case 'python': return <SiPython className="text-[#3776AB]" />
    case 'c++': return <SiCplusplus className="text-[#00599C]" />
    default: return null
  }
}

const ProjectItem = ({title, description, image, githubLink, link, stars, language, topics, category}: { title: string, description: string, image: string, githubLink: string, link?: string | null, stars?: number, language?: string, topics?: string[], category?: string }) => {
  return (
    <div className="project-card group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-neutral-900/30 backdrop-blur-md border border-white/5 transition-all duration-700 hover:border-primary/40 hover:bg-neutral-900/60 hover:shadow-[0_0_50px_-15px_rgba(34,197,94,0.2)]">
      {/* Spotlight Effect */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden m-4 rounded-[1.8rem] border border-white/5 group-hover:border-white/10 transition-colors duration-700 bg-neutral-900">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-all duration-1000 grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105" 
          loading="lazy"
          decoding="async"
          onError={(e) => {
              // Fallback if the service fails
              (e.target as HTMLImageElement).src = `https://generative-placeholders.vercel.app/api/deterministic/${title.length}?width=800&height=500&colors=10`;
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
        
        {/* Hover Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        {/* Live Site Badge */}
        {link && (
            <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30 text-[9px] font-black text-primary uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                </span>
                Live Version
            </div>
        )}

        {/* Floating Icons */}
        <div className="absolute top-6 right-6 flex gap-3 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 text-white transition-all hover:bg-white hover:text-black hover:scale-110">
                <LuGithub size={20} />
            </a>
            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 text-white transition-all hover:bg-primary hover:text-black hover:scale-110">
                    <LuExternalLink size={20} />
                </a>
            )}
        </div>

        {/* Project Number or Tag Badge */}
        <div className="absolute bottom-6 left-6 flex items-center gap-3 px-3 py-1.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white/70 uppercase tracking-widest translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            {stars !== undefined && stars > 0 && (
                <div className="flex items-center gap-1.5 border-r border-white/10 pr-3">
                    <LuStar size={12} className="text-yellow-500 fill-yellow-500" />
                    <span>{stars}</span>
                </div>
            )}
            <div className="flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Active Development
            </div>
        </div>
      </div>
      
      {/* Content Container */}
      <div className="flex flex-1 flex-col p-8 lg:p-10 pt-4 space-y-5 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="h-0.5 w-8 bg-primary/40 group-hover:w-16 transition-all duration-700" />
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary/80">{category || 'Application'}</span>
            </div>
            {language && (
                <div className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-tighter">
                    <LanguageIcon language={language} />
                    {language}
                </div>
            )}
          </div>
          
          <div className="space-y-3">
            <h3 className="text-4xl font-black tracking-tighter text-white leading-none italic group-hover:text-primary transition-colors duration-500">{title}</h3>
            <p className="text-lg leading-relaxed text-slate-400 font-medium group-hover:text-slate-300 transition-colors duration-500">
              {description}
            </p>
          </div>

          {topics && topics.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                  {topics.slice(0, 3).map((topic) => (
                      <span key={topic} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] font-bold text-slate-500 uppercase tracking-tighter group-hover:border-primary/20 group-hover:text-primary/60 transition-colors">
                          {topic}
                      </span>
                  ))}
              </div>
          )}

          <div className="pt-6 mt-auto">
              <div className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.25em] text-white/50 group-hover:text-primary transition-all duration-500 cursor-pointer">
                  EXPLORE PROJECT 
                  <div className="relative flex items-center">
                    <div className="h-[1px] w-8 bg-primary/20 group-hover:w-20 transition-all duration-700" />
                    <div className="absolute right-0 h-1.5 w-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ProjectItem