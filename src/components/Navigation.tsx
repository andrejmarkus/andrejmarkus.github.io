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
    <div className="sticky top-4 z-10 sm:mx-0 mx-4">
      <nav className="navbar container mx-auto justify-center bg-base-200 rounded-2xl my-4 shadow-lg">
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
          <div className={`absolute right-0 mt-4  ${menuOpen ? "block" : "hidden"}`}>
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
  )
}

export default Navigation