import sections from "../data/sections"
import { handleScrollTo } from "../lib/animations"

const Navigation = () => {
  return (
    <div className="sticky top-0 z-10">
      <nav className="navbar bg-base-200 rounded-2xl w-5/6 mx-auto my-4 shadow-lg">
        <div className="flex-1">
          <button onClick={() => handleScrollTo("0")} className="btn btn-ghost text-xl">Andrej Markuš</button>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal gap-3 p-0">
              {sections.map((section) => (
                <li key={section.name}>
                  <button onClick={() => handleScrollTo(section.link)}>
                    {section.name}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navigation