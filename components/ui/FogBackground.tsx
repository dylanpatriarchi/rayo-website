'use client'

import { useEffect, useRef } from 'react'

export default function FogBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none -z-[1] overflow-hidden">
            {/* Dynamic Fog Blobs */}
            <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-int-orange/5 blur-[120px] animate-fog-float opacity-40 mix-blend-screen"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-concrete-grey/5 blur-[100px] animate-fog-float-delayed opacity-30 mix-blend-screen"></div>
            <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-stark-white/5 blur-[80px] animate-pulse-slow opacity-20 mix-blend-overlay"></div>
        </div>
    )
}
