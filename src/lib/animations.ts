import { gsap } from 'gsap'

export const handleScrollTo = (link: string) => {
    gsap.to(window, {
        scrollTo: { 
            y: link,
            offsetY: 90,
        },
        duration: 0.5,
        ease: "power2.inOut",
    })
}