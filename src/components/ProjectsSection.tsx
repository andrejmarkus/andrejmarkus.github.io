import { useGSAP } from "@gsap/react"
import ProjectsList from "./ProjectsList"
import gsap from "gsap"

const ProjectsSection = () => {
  useGSAP(() => {
    const cards = gsap.utils.toArray('.project-card')
    
    cards.forEach((card: any) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out'
      })
    })
  })

  return (
    <section id="projects" className="bg-base-100 min-h-[93vh]">
        <div className="container mx-auto py-4 md:px-0 px-4">
            <h2 className="text-3xl font-bold my-4">Projects</h2>
            <div className="flex flex-col gap-4 py-4">
                <ProjectsList />
            </div>
        </div>
    </section>
  )
}

export default ProjectsSection