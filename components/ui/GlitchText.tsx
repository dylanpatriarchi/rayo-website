'use client'

import { useState } from 'react'

export default function GlitchText({ text, className = "" }: { text: string, className?: string }) {
    const [isHovered, setIsHovered] = useState(false)
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"

    return (
        <span
            className={`relative inline-block ${className} group`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="relative z-10">{text}</span>

            {/* Glitch Layers */}
            <span className={`absolute top-0 left-0 -z-10 w-full h-full text-int-orange opacity-0 transition-opacity duration-100 ${isHovered ? 'animate-glitch-1 opacity-70' : ''} translate-x-[2px]`}>
                {text}
            </span>
            <span className={`absolute top-0 left-0 -z-10 w-full h-full text-blue-500 opacity-0 transition-opacity duration-100 ${isHovered ? 'animate-glitch-2 opacity-70' : ''} -translate-x-[2px]`}>
                {text}
            </span>
        </span>
    )
}
