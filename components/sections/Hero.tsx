'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
    const container = useRef(null)
    const line1 = useRef(null)
    const line2 = useRef(null)
    const tagline = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

            tl.from(line1.current, { y: 100, opacity: 0, duration: 1.2, delay: 0.2 })
                .from(line2.current, { y: 100, opacity: 0, duration: 1.2 }, "-=1")
                .from(tagline.current, { x: -20, opacity: 0, duration: 0.8 }, "-=0.5")
        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={container} className="h-screen w-full flex flex-col justify-center px-6 md:px-20 relative overflow-hidden">
            {/* Background Grid - Industrial Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#8A8D8F 1px, transparent 1px), linear-gradient(90deg, #8A8D8F 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="z-10 flex flex-col">
                {/* Main Headline: "Motori, non Vetrine" */}
                <h1 className="text-[12vw] leading-[0.9] font-bold uppercase tracking-tight mix-blend-difference text-stark-white">
                    <div className="overflow-hidden">
                        <span ref={line1} className="block">Motori,</span>
                    </div>
                    <div className="overflow-hidden">
                        <span ref={line2} className="block text-concrete-grey">Non Vetrine</span>
                    </div>
                </h1>

                <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between border-t border-concrete-grey/30 pt-6">
                    <p ref={tagline} className="font-technical text-sm md:text-base text-int-orange uppercase tracking-widest">
            // Rayo. Built to Scale.
                    </p>

                    <div className="mt-4 md:mt-0 max-w-md">
                        <p className="font-primary text-concrete-grey text-lg leading-relaxed">
                            In un mercato di estetica pura, costruiamo asset digitali proprietari.
                            Velocità pragmatica. Proprietà radicale.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
