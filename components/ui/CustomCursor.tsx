'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
    const cursor = useRef<HTMLDivElement>(null)
    const cursorLabel = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            })
            gsap.to(cursorLabel.current, {
                x: e.clientX + 20,
                y: e.clientY + 20,
                duration: 0.2,
                ease: "power2.out"
            })
        }

        // Hover Effects for clickable elements
        const handleLinkHover = () => {
            gsap.to(cursor.current, { scale: 3, opacity: 0.5, mixBlendMode: 'difference' })
        }
        const handleLinkLeave = () => {
            gsap.to(cursor.current, { scale: 1, opacity: 1, mixBlendMode: 'normal' })
        }

        window.addEventListener('mousemove', moveCursor)

        // Attach to all links and buttons
        const links = document.querySelectorAll('a, button')
        links.forEach(link => {
            link.addEventListener('mouseenter', handleLinkHover)
            link.addEventListener('mouseleave', handleLinkLeave)
        })

        // MutationObserver to attach to new links (dynamic content)
        const observer = new MutationObserver(() => {
            const links = document.querySelectorAll('a, button')
            links.forEach(link => {
                link.removeEventListener('mouseenter', handleLinkHover)
                link.removeEventListener('mouseleave', handleLinkLeave)
                link.addEventListener('mouseenter', handleLinkHover)
                link.addEventListener('mouseleave', handleLinkLeave)
            })
        })
        observer.observe(document.body, { childList: true, subtree: true })

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            observer.disconnect()
        }
    }, [])

    return (
        <>
            <div ref={cursor} className="fixed top-0 left-0 w-4 h-4 rounded-full bg-int-orange pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-difference"></div>
            <div ref={cursorLabel} className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block text-[10px] font-technical text-int-orange"></div>
        </>
    )
}
