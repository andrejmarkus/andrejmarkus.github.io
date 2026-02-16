export interface ProjectOverride {
    image?: string;
    description?: string;
    title?: string;
}

const projectOverrides: Record<string, ProjectOverride> = {
    "wallet-tracker": {
        description: "Real-time analytics for pump.fun wallets. Built with React and high-performance data streams."
    },
    "phd-manager-2": {
        title: "PhD Study Manager",
        description: "Comprehensive faculty administration system for PhD studies. Streamlining academic workflows."
    },
    "library-system": {
        description: "Modern library management with automated lending workflows and real-time inventory tracking."
    },
    "next-easy": {
        description: "The ultimate Next.js boilerplate. Pre-configured for speed with Prisma, Tailwind, and DaisyUI."
    },
    "generative-adventure": {
        description: "AI-powered storytelling engine that crafts unique narrative paths based on user interactions."
    }
}

export default projectOverrides;