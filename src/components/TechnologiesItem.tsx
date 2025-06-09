const TechnologiesItem = ({ title, items }: { title: string, items: { name: string, icon: string, iconType: string }[] }) => {
  return (
    <div>
        <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
            </div>
            <div className="card-body">
                <div className="flex flex-wrap justify-center gap-8">
                    {items.map((item) => (
                      <div key={item.icon} className="tooltip tooltip-bottom" data-tip={item.name}>
                        <img className="w-16 h-16" src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.icon}/${item.icon}-${item.iconType}.svg`} alt={`${item.icon}-image`} />
                      </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TechnologiesItem