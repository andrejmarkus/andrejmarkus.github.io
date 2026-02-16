import Navigation from "./components/Navigation"
import MainHero from "./components/MainHero"
import TechnologiesSection from "./components/TechnologiesSection"
import Footer from "./components/Footer"
import ProjectsSection from "./components/ProjectsSection"
import AboutSection from "./components/AboutSection"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <Navigation />
        <main>
          <MainHero />
          <AboutSection />
          <ProjectsSection />
          <TechnologiesSection />
        </main>
      <Footer />
    </>
  )
}

export default App
