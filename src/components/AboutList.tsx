import aboutContent from '../data/about'
import AboutItem from './AboutItem'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const AboutList = () => {
  useGSAP(() => {
    gsap.from(".about-item-wrapper", {
      scrollTrigger: {
        trigger: "#about",
        start: "top 70%",
      },
      duration: 0.8,
      opacity: 0,
      y: 30,
      stagger: 0.2,
      ease: "power3.out"
    })
  })

  return (
    <div className="flex flex-col gap-6">
        {aboutContent.map((item) => (
            <div key={item.title} className="about-item-wrapper">
                <AboutItem 
                    title={item.title}
                    content={item.content}
                />
            </div>
        ))}
    </div>
  )
}

export default AboutList