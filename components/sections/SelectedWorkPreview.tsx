'use client'

import Link from 'next/link'

export default function SelectedWorkPreview() {
    return (
        <section className="py-20 px-6 md:px-20 bg-deep-carbon border-t border-concrete-grey/20">
            <div className="mb-16">
                <h2 className="text-4xl md:text-6xl font-bold uppercase text-stark-white mb-4">
                    Selected <span className="text-concrete-grey">Deployments</span>
                </h2>
            </div>

            <div className="space-y-4">
                {[
                    { name: "Nebula Finance", type: "Fintech Platform", year: "2024" },
                    { name: "Orbital Logistics", type: "Rebranding System", year: "2024" },
                    { name: "Vertex AI", type: "Web Application", year: "2025" }
                ].map((project, i) => (
                    <Link href="/work" key={i} className="block group">
                        <div className="border-t border-concrete-grey/20 py-8 flex flex-col md:flex-row justify-between md:items-center hover:bg-stark-white/5 transition-colors px-4 -mx-4">
                            <div>
                                <h3 className="text-3xl md:text-5xl font-bold uppercase group-hover:text-int-orange transition-colors">{project.name}</h3>
                                <p className="font-technical text-xs text-concrete-grey mt-2">{project.type}</p>
                            </div>
                            <div className="font-technical text-stark-white/50 text-sm mt-4 md:mt-0">
                                {project.year} — <span className="group-hover:text-int-orange transition-colors">Explore Assets</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-12 text-center">
                <Link href="/work" className="font-technical text-concrete-grey hover:text-int-orange transition-colors border-b border-concrete-grey hover:border-int-orange pb-1">
                    Access Full Archive
                </Link>
            </div>
        </section>
    )
}
