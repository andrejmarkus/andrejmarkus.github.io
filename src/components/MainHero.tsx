import { useGSAP } from "@gsap/react"
import { handleScrollTo } from "../lib/animations"
import gsap from "gsap"

const MainHero = () => {
    useGSAP(() => {
        const scrollTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#home",
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true,
            }
        });

        scrollTl
            .to("#home img, #home h2, #home p, #home .flex, #main-header", {
                opacity: 0,
                y: 50,
                duration: 0.3
            })
            .set("#main-header", {
                position: "fixed",
                top: "50%",
                left: "50%",
                xPercent: -50,
                yPercent: -50,
                opacity: 1,
                y: 0,
                scale: 1
            })
            .to("#main-header", {
                scale: 2,
                duration: 0.3
            });
    });

  return (
    <div id="home" className="hero h-[93vh] bg-base-100">
        <div className="hero-content w-full flex-col-reverse lg:flex-row">
            <img
            src="/coding.svg"
            alt="coding-illustration"
            className="max-w-lg rounded-lg drop-shadow-2xl md:mt-0 mt-[-1rem]"
            loading="lazy"
            />
            <div className="max-w-lg text-center lg:text-left">
                <h1 id="main-header" className="text-4xl sm:text-5xl font-bold text-primary">Andrej Markuš</h1>
                <h2 className="text-2xl sm:text-3xl font-semibold mt-2 sm:mt-4">Full Stack Developer</h2>
                <p className="py-4 sm:py-6 text-md sm:text-lg">
                    Hi, I'm a Full Stack Developer and student at University of Žilina. 
                    I build modern web applications using cutting-edge technologies.
                </p>
                <div className="flex gap-4 justify-center">
                    <button onClick={() => handleScrollTo("#projects")} className="btn btn-primary">View Projects</button>
                    <a href="mailto:andrejmarkus274@gmail.com" className="btn btn-outline">Contact Me</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainHero