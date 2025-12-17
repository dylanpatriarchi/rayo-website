'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function KineticText({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    const textRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        let proxy = { skew: 0 }
        let skewSetter = gsap.quickSetter(textRef.current, "skewX", "deg")
        let clamp = gsap.utils.clamp(-20, 20)

        ScrollTrigger.create({
            onUpdate: (self) => {
                let skew = clamp(self.getVelocity() / -300)
                if (Math.abs(skew) > Math.abs(proxy.skew)) {
                    proxy.skew = skew
                    gsap.to(proxy, {
                        skew: 0,
                        duration: 0.8,
                        ease: "power3",
                        overwrite: true,
                        onUpdate: () => skewSetter(proxy.skew)
                    })
                }
            }
        })
    }, [])

    return (
        <div ref={textRef} className={`will-change-transform ${className}`}>
            {children}
        </div>
    )
}
