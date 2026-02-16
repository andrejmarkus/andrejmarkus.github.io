import { useGSAP } from '@gsap/react'
import technologies from '../data/technologies'
import TechnologiesItem from './TechnologiesItem'
import gsap from 'gsap'

const TechnologiesStack = () => {
  useGSAP(() => {
    const cards = document.querySelectorAll('.technologies-card')

    cards.forEach((card: Element, i: number) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
        },
        opacity: 0,
        y: 40,
        duration: 1,
        delay: i * 0.1,
        ease: 'power3.out'
      })
    })
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {technologies.map((tech) => (
        <TechnologiesItem 
          key={tech.title}
          title={tech.title}
          items={tech.items}
        />
      ))}
    </div>
  )
}

export default TechnologiesStack