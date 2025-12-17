'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function Hero() {
    const containerRef = useRef(null)
    const titleRef = useRef(null)
    const taglineRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.5 })

            tl.from(titleRef.current, { y: 100, opacity: 0, duration: 1.2, ease: 'power3.out' })
                .from(taglineRef.current, { y: 20, opacity: 0, duration: 0.8, ease: 'power2.out' }, "-=0.8")
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="relative h-screen w-full flex flex-col justify-center px-6 pt-20 overflow-hidden">
            {/* Background Grid - Industrial Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#8A8D8F 1px, transparent 1px), linear-gradient(90deg, #8A8D8F 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="z-10 flex flex-col items-start mix-blend-difference">
                <div ref={titleRef} className="flex flex-col text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase text-stark-white">
                    <span className="block">PRAGMATIC</span>
                    <span className="block text-int-orange">VELOCITY</span>
                </div>

                <div ref={taglineRef} className="mt-8 font-technical text-concrete-grey text-sm md:text-base max-w-md uppercase tracking-wider">
                    <span className="block mb-2 text-int-orange">[ SYSTEM STATUS: ONLINE ]</span>
                    Motori, non vetrine. <br />
                    Costruiamo infrastrutture digitali scalabili per aziende che corrono.
                </div>
            </div>
        </section>
    )
}
