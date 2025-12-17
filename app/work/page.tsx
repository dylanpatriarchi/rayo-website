'use client'

import Link from 'next/link'
import Logo from '@/components/ui/Logo'

const PROJECTS = [
    {
        id: "001",
        client: "Nebula Finance",
        type: "Fintech Platform",
        year: "2024",
        status: "Active"
    },
    {
        id: "002",
        client: "Orbital Logistics",
        type: "Rebranding System",
        year: "2024",
        status: "Delivered"
    },
    {
        id: "003",
        client: "Vertex AI",
        type: "Web Application",
        year: "2025",
        status: "In Development"
    }
]

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-deep-carbon text-stark-white selection:bg-int-orange selection:text-deep-carbon">
            <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference">
                <Link href="/"><Logo className="w-12 h-12" /></Link>
                <div className="font-technical text-xs tracking-widest text-stark-white">
                    Menu / Work
                </div>
            </nav>

            <header className="pt-40 px-6 md:px-20 pb-20">
                <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-8">
                    Selected Work
                </h1>
                <p className="font-technical text-int-orange text-lg">
                    // Output_Log <br />
                    // Recent Deployments
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-6 md:px-20 pb-20">
                {PROJECTS.map((project) => (
                    <div key={project.id} className="aspect-square bg-concrete-grey/5 border border-concrete-grey/10 p-8 flex flex-col justify-between group hover:bg-concrete-grey/10 transition-colors duration-500 cursor-pointer">
                        <div className="flex justify-between items-start font-technical text-xs text-concrete-grey">
                            <span>ID: {project.id}</span>
                            <span>{project.year}</span>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold uppercase mb-2 group-hover:text-int-orange transition-colors">
                                {project.client}
                            </h3>
                            <p className="font-technical text-sm text-stark-white/60">
                                {project.type}
                            </p>
                        </div>

                        <div className="flex justify-between items-end">
                            <span className="font-technical text-xs px-2 py-1 bg-int-orange/10 text-int-orange">
                                {project.status}
                            </span>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                ↗
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="py-10 px-6 md:px-20 border-t border-concrete-grey/20">
                <Link href="/contact" className="font-technical text-concrete-grey hover:text-int-orange transition-colors">
                    Start a Project →
                </Link>
            </div>
        </main>
    )
}
