import { handleScrollTo } from "../lib/animations"

const MainHero = () => {
  return (
    <div id="about" className="hero min-h-[93vh] bg-base-100">
        <div className="hero-content w-full flex-col lg:flex-row">
            <div className="max-w-lg">
                <h1 className="text-5xl font-bold text-primary">Andrej Markuš</h1>
                <h2 className="text-3xl font-semibold mt-4">Full Stack Developer</h2>
                <p className="py-6 text-lg">
                    Hi, I'm a passionate Full Stack Developer and a student at the Faculty of Management Science
                    and Informatics at University of Žilina. I specialize in building modern web applications
                    and transforming ideas into scalable solutions using cutting-edge technologies.
                </p>
                <div className="flex gap-4 justify-center">
                    <button onClick={() => handleScrollTo("#projects")} className="btn btn-primary">View Projects</button>
                    <a href="mailto:andrejmarkus274@gmail.com" className="btn btn-outline">Contact Me</a>
                </div>
            </div>
            <img
            src="/coding.svg"
            alt="Andrej Markuš"
            className="max-w-lg rounded-lg drop-shadow-2xl"
            />
        </div>
    </div>
  )
}

export default MainHero