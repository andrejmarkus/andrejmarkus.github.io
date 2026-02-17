import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import ScrollTrigger from "gsap/ScrollTrigger"
import Navigation from "./components/Navigation"
import MainHero from "./components/MainHero"
import AboutSection from "./components/AboutSection"
import ProjectsSection from "./components/ProjectsSection"
import TechnologiesSection from "./components/TechnologiesSection"
import Footer from "./components/Footer"

gsap.registerPlugin(useGSAP, ScrollToPlugin, ScrollTrigger);

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
