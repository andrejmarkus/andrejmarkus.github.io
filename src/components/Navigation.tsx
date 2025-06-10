import sections from "../data/sections"
import { handleScrollTo } from "../lib/animations"
import { LuChevronDown, LuChevronUp } from "react-icons/lu"
import { useState } from "react"

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (link: string) => {
    handleScrollTo(link);
    setMenuOpen(false);
  };

  return (
    <div className="fixed w-full top-0 z-10 left-0 right-0">
      <div className="mx-4 sm:mx-0">
        <nav className="navbar bg-base-200 rounded-2xl my-2 container mx-auto shadow-lg px-4">
          <div className="flex-1">
            <button onClick={() => handleScrollTo("0")} className="btn btn-ghost text-xl">Andrej Markuš</button>
          </div>

          <div className="flex-none sm:hidden">
            <button className="btn btn-ghost btn-circle">
              {menuOpen ? (
                <LuChevronUp
                  className="text-xl"
                  onClick={() => setMenuOpen(false)}
                />
              ) : (
                <LuChevronDown
                  className="text-xl"
                  onClick={() => setMenuOpen(true)}
                />
              )}
            </button>
            <div className={`absolute right-4 mt-4  ${menuOpen ? "block" : "hidden"}`}>
              <ul className="menu bg-base-200 rounded-2xl gap-3">
                {sections.map((section) => (
                  <li key={section.name}>
                    <button onClick={() => handleClick(section.link)}>
                      {section.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-none hidden sm:flex">
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
    </div>
  )
}

export default Navigation