'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function DigitalWorkforce() {
    const container = useRef(null)
    const videoRef = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            // Parallax effect for the section
            gsap.from(videoRef.current, {
                y: 50,
                opacity: 0,
                duration: 1.5,
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 70%",
                    end: "bottom center",
                    scrub: 1
                }
            })
        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={container} className="min-h-screen py-20 px-6 md:px-20 bg-deep-carbon flex flex-col justify-center gap-12 border-t border-concrete-grey/20">

            <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                <h2 className="text-4xl md:text-8xl font-bold uppercase text-stark-white max-w-4xl">
                    Digital <span className="text-concrete-grey">Workforce</span>
                </h2>

                <div className="font-technical text-int-orange text-sm md:text-base max-w-xs text-right">
          // 24/7 Operations <br />
          // Zero Downtime <br />
          // Infinite Scale
                </div>
            </div>

            <div ref={videoRef} className="w-full aspect-video bg-concrete-grey/10 rounded-sm border border-concrete-grey/30 relative overflow-hidden group">
                {/* Placeholder for "Digital Worker" visualization - e.g. terminal code execution or abstract data flow */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <p className="font-technical text-concrete-grey text-lg mb-4 opacity-50">
                            System.Status: ONLINE
                        </p>
                        {/* Simulated Terminal Output */}
                        <div className="font-technical text-xs text-left text-int-orange p-6 bg-black/50 backdrop-blur-sm border border-concrete-grey/20 w-80">
                            <p>{`> agent_01 initialized`}</p>
                            <p>{`> optimizing_revenue_streams...`}</p>
                            <p>{`> deployment_success (14ms)`}</p>
                        </div>
                    </div>
                </div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
            </div>

            <div className="flex justify-between items-start font-technical text-xs text-concrete-grey mt-10">
                <p>L'AI non è un gadget.</p>
                <p>È un collaboratore.</p>
            </div>

        </section>
    )
}
