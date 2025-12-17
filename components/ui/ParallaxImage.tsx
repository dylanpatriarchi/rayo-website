'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ParallaxImage({ src, alt, className = "" }: { src: string, alt: string, className?: string }) {
    const container = useRef(null)
    const img = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        // Parallax Effect
        gsap.fromTo(img.current,
            { y: '-10%' },
            {
                y: '10%',
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            }
        )
    }, [])

    return (
        <div ref={container} className={`overflow-hidden relative ${className}`}>
            <div ref={img} className="relative w-full h-[120%] -top-[10%]">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Scanline Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none"></div>
            </div>
        </div>
    )
}
