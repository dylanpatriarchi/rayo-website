'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import Logo from '@/components/ui/Logo'

const SERVICES = [
    {
        id: "01",
        name: "Brand Engineering",
        description: "Costruiamo identità visive come sistemi operativi. Scalabili, modulari, indistruttibili.",
        details: ["Visual Identity Systems", "Design Tokens", "Brand Books"]
    },
    {
        id: "02",
        name: "Asset Architecture",
        description: "Sviluppiamo piattaforme proprietarie. Il tuo codice, il tuo server, le tue regole.",
        details: ["High-End Web Dev", "Next.js Applications", "3D Web Experiences"]
    },
    {
        id: "03",
        name: "Growth Infrastructure",
        description: "Non facciamo 'campagne'. Costruiamo tubature per il traffico e la conversione.",
        details: ["SEO Technical Audits", "Conversion Rate Optimization", "Analytics Setup"]
    }
]

export default function ServicesPage() {
    const container = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            gsap.utils.toArray('.service-row').forEach((row: any) => {
                gsap.from(row, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: row,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                })
            })
        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <main ref={container} className="min-h-screen bg-deep-carbon text-stark-white selection:bg-int-orange selection:text-deep-carbon">
            <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference">
                <Link href="/"><Logo className="w-12 h-12" /></Link>
                <div className="font-technical text-xs tracking-widest text-stark-white">
                    Menu / Services
                </div>
            </nav>

            <header className="pt-40 px-6 md:px-20 pb-20 border-b border-concrete-grey/20">
                <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-8">
                    Services
                </h1>
                <p className="font-technical text-int-orange text-lg max-w-xl">
                    // Capabilities_Index <br />
                    // Status: Operational
                </p>
            </header>

            <div className="px-6 md:px-20">
                {SERVICES.map((service) => (
                    <div key={service.id} className="service-row group border-b border-concrete-grey/20 py-16 transition-colors hover:bg-stark-white/5">
                        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                            <span className="font-technical text-concrete-grey text-xl">[{service.id}]</span>

                            <div className="flex-1">
                                <h2 className="text-4xl md:text-6xl font-bold uppercase mb-6 group-hover:text-int-orange transition-colors duration-300">
                                    {service.name}
                                </h2>
                                <p className="text-xl text-concrete-grey max-w-2xl mb-8">
                                    {service.description}
                                </p>

                                <ul className="flex flex-wrap gap-4 font-technical text-xs text-stark-white/70">
                                    {service.details.map(detail => (
                                        <li key={detail} className="border border-concrete-grey/30 px-3 py-1 rounded-full">
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="hidden md:flex items-center">
                                <span className="w-12 h-12 rounded-full border border-concrete-grey/30 flex items-center justify-center group-hover:bg-int-orange group-hover:border-int-orange group-hover:text-deep-carbon transition-all duration-300">
                                    →
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="py-20 px-6 md:px-20">
                <Link href="/work" className="font-technical text-concrete-grey hover:text-int-orange transition-colors">
                    Next: Selected Work →
                </Link>
            </div>
        </main>
    )
}
