const TechnologiesItem = ({ title, items }: { title: string, items: { name: string, icon: string, iconType: string, colored: boolean }[] }) => {
  return (
      <div className="technologies-card group relative p-8 rounded-[2.5rem] bg-neutral-900/40 backdrop-blur-md border border-white/5 transition-all duration-700 hover:border-primary/40 hover:bg-neutral-900/80 hover:shadow-[0_0_40px_-15px_rgba(34,197,94,0.3)]">
          {/* Subtle Glow Effect on Hover */}
          <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          {/* Corner Accent */}
          <div className="absolute top-0 right-0 h-24 w-24 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-tr-[2.5rem]" />

          <div className="mb-10 flex items-center justify-between relative z-10">
              <div className="space-y-3">
                 <div className="h-0.5 w-6 bg-primary/40 group-hover:w-12 transition-all duration-700" />
                 <h3 className="text-3xl font-black tracking-tighter text-white italic transition-colors leading-none">{title}</h3>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[0.6rem] font-bold uppercase tracking-widest text-slate-500 mb-1">Stack</span>
                <div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-lg font-black text-slate-400 group-hover:text-primary group-hover:border-primary/20 transition-all">
                    {items.length}
                </div>
              </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-5 gap-6 justify-items-center relative z-10">
              {items.map((item) => (
                <div 
                    key={item.icon} 
                    className="tooltip tooltip-primary transition-all duration-500 hover:-translate-y-2 group/icon" 
                    data-tip={item.name}
                >
                  <div className="relative p-3 flex items-center justify-center rounded-2xl bg-white/5 border border-white/5 group-hover/icon:border-primary/30 group-hover/icon:bg-primary/10 group-hover/icon:shadow-[0_0_15px_rgba(34,197,94,0.1)] transition-all duration-300">
                      <i className={`text-3xl sm:text-4xl devicon-${item.icon}-${item.iconType} ${item.colored ? "colored": "text-slate-400 group-hover/icon:text-white transition-colors"}`}></i>
                  </div>
                </div>
              ))}
          </div>
      </div>
  )
}

export default TechnologiesItem;
