import { useGSAP } from '@gsap/react'
import technologies from '../data/technologies'
import TechnologiesItem from './TechnologiesItem'
import gsap from 'gsap'

const TechnologiesStack = () => {
  useGSAP(() => {
    const cards = document.querySelectorAll('.technologies-card')

    cards.forEach((card: Element) => {
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
    technologies.map((tech) => (
      <TechnologiesItem 
        key={tech.title}
        title={tech.title}
        items={tech.items}
    />
    )
  )
)}

export default TechnologiesStack