import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu"

const Footer = () => {
  return (
    <footer className="footer footer-horizontal container mx-auto items-center justify-between py-10 px-4 md:px-0 bg-base-100">
        <aside className="grid-flow-col items-center">
            <p>Copyright © {new Date().getFullYear()} Andrej Markuš</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a href="https://www.github.com/andrejmarkus" target="_blank" rel="noopener noreferrer"><LuGithub size={25} /></a>
            <a href="https://www.linkedin.com/in/andrej-marku%C5%A1-376439349/" target="_blank" rel="noopener noreferrer"><LuLinkedin size={25} /></a>
            <a href="mailto:andrejmarkus274@gmail.com"><LuMail size={25} /></a>
        </nav>
    </footer>
  )
}

export default Footer