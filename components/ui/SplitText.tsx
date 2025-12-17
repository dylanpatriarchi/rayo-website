'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function SplitText({ children, className }: { children: string, className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        // Simple word splitting logic for now
        const ctx = gsap.context(() => {
            // Logic for future splitting and animation
            // Currently just rendering, will enhance in Hero implementation
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    )
}
