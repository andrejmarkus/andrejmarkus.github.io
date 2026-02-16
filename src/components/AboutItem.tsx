const AboutItem = ({ title, content }: { title: string, content: string[] }) => {
  return (
    <div className="group relative rounded-3xl bg-neutral-900 border border-white/5 p-8 transition-all duration-500 hover:border-primary/20 hover:bg-neutral-800/50">
        <div className="mb-4">
            <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-primary transition-colors">{title}</h3>
        </div>
        <div className="space-y-4">
            {content.map((item, idx) => (
                <p key={idx} className="text-lg leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                    {item}
                </p>
            ))}
        </div>
        {/* Animated corner accent */}
        <div className="absolute top-0 right-0 h-16 w-16 overflow-hidden rounded-tr-3xl">
            <div className="absolute top-0 right-0 h-[2px] w-Full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
            <div className="absolute top-0 right-0 h-full w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
        </div>
    </div>
  )
}

export default AboutItem