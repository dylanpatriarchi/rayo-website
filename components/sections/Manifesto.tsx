'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const PILLARS = [
    {
        id: "01",
        title: "Pragmatic Velocity",
        description: "Lancio, Sprint, Deployment. Non cerchiamo la perfezione estetica infinita, cerchiamo la performance immediata.",
        keywords: ["001_SPEED", "DEPLOY_NOW"]
    },
    {
        id: "02",
        title: "Radical Ownership",
        description: "Nessun canone nascosto. Paghi lo sviluppo, possiedi l'asset. Asset, non Affitti.",
        keywords: ["002_ASSET", "OWNERSHIP_100%"]
    },
    {
        id: "03",
        title: "The Digital Workforce",
        description: "L'AI non è un gadget. È un collaboratore che lavora 24/7 mentre il tuo team scala.",
        keywords: ["003_AI_AGENT", "SCALE_X10"]
    }
]

export default function Manifesto() {
    const container = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            const pillars = gsap.utils.toArray('.pillar-card')

            pillars.forEach((pillar: any, i) => {
                gsap.from(pillar, {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: pillar,
                        start: "top 80%",
                        end: "top 20%",
                        toggleActions: "play none none reverse"
                    }
                })
            })
        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={container} className="py-32 px-6 md:px-20 bg-deep-carbon relative z-10">
            <div className="flex flex-col gap-32">
                {PILLARS.map((pillar) => (
                    <div key={pillar.id} className="pillar-card border-t border-concrete-grey pt-6 flex flex-col md:flex-row justify-between gap-8 md:gap-20">
                        <div className="font-technical text-int-orange text-sm md:text-xl tracking-widest">
                            [{pillar.id}]
                        </div>

                        <div className="flex-1">
                            <h2 className="text-4xl md:text-7xl font-bold uppercase mb-6 text-stark-white">
                                {pillar.title}
                            </h2>
                            <p className="text-lg md:text-2xl text-concrete-grey max-w-2xl leading-relaxed">
                                {pillar.description}
                            </p>

                            <div className="flex gap-4 mt-8 font-technical text-xs text-int-orange/70 uppercase">
                                {pillar.keywords.map(kw => (
                                    <span key={kw}>//{kw}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
