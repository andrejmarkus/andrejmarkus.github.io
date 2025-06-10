const TechnologiesItem = ({ title, items }: { title: string, items: { name: string, icon: string, iconType: string, colored: boolean }[] }) => {
  return (
      <div className="technologies-card card bg-base-100 shadow-xl">
          <div className="card-body">
              <h2 className="card-title">{title}</h2>
          </div>
          <div className="card-body">
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                  {items.map((item) => (
                    <div key={item.icon} className="tooltip tooltip-bottom" data-tip={item.name}>
                      <i className={`text-[3rem] sm:text-[4rem] devicon-${item.icon}-${item.iconType} ${item.colored ? "colored": ""}`}></i>
                    </div>
                  ))}
              </div>
          </div>
      </div>
  )
}

export default TechnologiesItem