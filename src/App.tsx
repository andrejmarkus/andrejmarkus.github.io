import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import ScrollTrigger from "gsap/ScrollTrigger"
import { lazy, Suspense } from "react"
import Navigation from "./components/Navigation"
import MainHero from "./components/MainHero"
import Footer from "./components/Footer"

const AboutSection = lazy(() => import("./components/AboutSection"))
const ProjectsSection = lazy(() => import("./components/ProjectsSection"))
const TechnologiesSection = lazy(() => import("./components/TechnologiesSection"))

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <Navigation />
        <main>
          <MainHero />
          <Suspense fallback={<div className="h-screen bg-black" />}>
            <AboutSection />
          </Suspense>
          <Suspense fallback={<div className="h-96 bg-black" />}>
            <ProjectsSection />
          </Suspense>
          <Suspense fallback={<div className="h-96 bg-black" />}>
            <TechnologiesSection />
          </Suspense>
        </main>
      <Footer />
    </>
  )
}

export default App
