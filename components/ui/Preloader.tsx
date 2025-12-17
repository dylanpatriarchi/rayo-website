'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Preloader() {
    const [progress, setProgress] = useState(0)
    const container = useRef(null)
    const counter = useRef(null)

    useEffect(() => {
        // Prevent scrolling during preload
        document.body.style.overflow = 'hidden'

        const tl = gsap.timeline({
            onComplete: () => {
                document.body.style.overflow = ''
                gsap.set(container.current, { display: 'none' })
            }
        })

        // Simulate Loading Progress
        let currentProgress = 0
        const interval = setInterval(() => {
            currentProgress += Math.floor(Math.random() * 10) + 1
            if (currentProgress > 100) {
                currentProgress = 100
                clearInterval(interval)
            }
            setProgress(currentProgress)
        }, 150)

        // Animations
        tl.to(counter.current, {
            opacity: 0,
            delay: 2.5, // Total load time approx
            duration: 0.5,
            ease: "power2.inOut"
        })
            .to(container.current, {
                y: '-100%',
                duration: 0.8,
                ease: "expo.inOut"
            }, "-=0.2")

        return () => {
            clearInterval(interval)
            document.body.style.overflow = ''
        }
    }, [])

    return (
        <div ref={container} className="fixed inset-0 z-[99999] bg-deep-carbon flex items-center justify-center">
            <div ref={counter} className="font-technical text-int-orange text-6xl md:text-9xl font-bold tracking-tighter flex flex-col items-center gap-4">
                <div className="flex items-end">
                    <span>{progress}</span>
                    <span className="text-2xl md:text-4xl mb-2 ml-2">%</span>
                </div>
                <div className="text-xs md:text-sm text-concrete-grey animate-pulse">
                    INITIALIZING CORE SYSTEMS...
                </div>
            </div>

            {/* Decorative Grid Lines */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"></div>
        </div>
    )
}
