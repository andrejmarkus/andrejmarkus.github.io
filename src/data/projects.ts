const projects: { title: string, description: string, image: string, githubLink: string, link?: string | null }[] = [
    {
        title: "Wallet Tracker",
        description: "A web application for tracking pump.fun cryptocurrency wallets, providing real-time updates and analytics.",
        image: "/wallet-tracker.png",
        githubLink: "https://github.com/andrejmarkus/wallet-tracker",
    },
    {
        title: "PhD Manager",
        description: "A web application designed to make administrating PhD studies on my faculty easier.",
        image: "/phd-manager.png",
        githubLink: "https://github.com/andrejmarkus/phd-manager-2",
        link: "https://phdweb.fri.uniza.sk/"
    },
    {
        title: "Library System",
        description: "A web application for managing library operations, including book lending and returns.",
        image: "/library-system.png",
        githubLink: "https://github.com/andrejmarkus/library-system"
    },
    {
        title: "Next Easy",
        description: "A Next.js boilerplate with TypeScript, Prisma, Tailwind CSS, and DaisyUI, designed for rapid development.",
        image: "/next-easy.png",
        githubLink: "https://github.com/andrejmarkus/next-easy"
    },
    {
        title: "Generative Adventure",
        description: "A web application that generates a unique adventure story based on user input, showcasing the power of AI in creative writing.",
        image: "/generative-adventure.png",
        githubLink: "https://github.com/andrejmarkus/generative-adventure"
    }
]

export default projects;