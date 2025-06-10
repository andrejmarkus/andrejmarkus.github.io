import aboutContent from '../data/about'
import AboutItem from './AboutItem'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const AboutList = () => {
  useGSAP(() => {
    gsap.from("#about-content", {
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        toggleActions: "play none none reverse"
      },
      duration: 1,
      opacity: 0,
      y: -50,
      ease: "power3.out"
    })
    gsap.from("#about img", {
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        toggleActions: "play none none reverse"
      },
      duration: 1,
      opacity: 0,
      x: -50,
      ease: "power3.out",
    })
  })

  return (
    <>
        {aboutContent.map((item) => (
            <AboutItem 
                key={item.title}
                title={item.title}
                content={item.content}
            />
        ))}
    </>
  )
}

export default AboutList