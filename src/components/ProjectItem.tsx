import { LuExternalLink, LuGithub } from "react-icons/lu"

const ProjectItem = ({title, description, image, githubLink, link}: { title: string, description: string, image: string, githubLink: string, link?: string | null }) => {
  return (
    <div className="project-card group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-neutral-900/30 backdrop-blur-md border border-white/5 transition-all duration-700 hover:border-primary/40 hover:bg-neutral-900/60 hover:shadow-[0_0_50px_-15px_rgba(34,197,94,0.2)]">
      {/* Spotlight Effect */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden m-4 rounded-[1.8rem] border border-white/5 group-hover:border-white/10 transition-colors duration-700">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-all duration-1000 grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
        
        {/* Hover Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
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
        <div className="absolute bottom-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white/70 uppercase tracking-widest translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Active Development
        </div>
      </div>
      
      {/* Content Container */}
      <div className="flex flex-1 flex-col p-8 lg:p-10 pt-4 space-y-5 relative z-10">
          <div className="flex items-center gap-4">
            <div className="h-0.5 w-8 bg-primary/40 group-hover:w-16 transition-all duration-700" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary/80">Application</span>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-4xl font-black tracking-tighter text-white leading-none italic group-hover:text-primary transition-colors duration-500">{title}</h3>
            <p className="text-lg leading-relaxed text-slate-400 font-medium group-hover:text-slate-300 transition-colors duration-500">
              {description}
            </p>
          </div>

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