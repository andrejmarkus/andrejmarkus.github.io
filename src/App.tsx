import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import Navigation from "./components/Navigation"
import MainHero from "./components/MainHero"
import TechnologiesSection from "./components/TechnologiesSection"
import Footer from "./components/Footer"
import ProjectsSection from "./components/ProjectsSection"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollToPlugin);

function App() {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      <Navigation />
      <main className="flex-1 flex-col">
        <MainHero />
        <ProjectsSection />
        <TechnologiesSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
