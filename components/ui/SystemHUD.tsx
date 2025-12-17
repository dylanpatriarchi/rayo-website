'use client'

import { useState, useEffect, useRef } from 'react'

export default function SystemHUD() {
    const [time, setTime] = useState('')
    const [scroll, setScroll] = useState(0)
    const [mouse, setMouse] = useState({ x: 0, y: 0 })
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        // Time Updater
        const updateTime = () => {
            const now = new Date()
            setTime(now.toLocaleTimeString('it-IT', { hour12: false }))
        }
        const timeInterval = setInterval(updateTime, 1000)
        updateTime()

        // Scroll Updater
        const handleScroll = () => {
            const scrolled = window.scrollY
            const max = document.body.scrollHeight - window.innerHeight
            setScroll(Math.round((scrolled / max) * 100) || 0)
        }

        // Mouse & Grid Interaction
        const handleMouseMove = (e: MouseEvent) => {
            setMouse({ x: e.clientX, y: e.clientY })
            drawGrid(e.clientX, e.clientY)
        }

        const drawGrid = (mouseX: number, mouseY: number) => {
            const canvas = canvasRef.current
            if (!canvas) return
            const ctx = canvas.getContext('2d')
            if (!ctx) return

            const width = canvas.width
            const height = canvas.height
            const gridSize = 50

            ctx.clearRect(0, 0, width, height)

            // Draw Grid Points
            ctx.fillStyle = '#8A8D8F'

            for (let x = 0; x <= width; x += gridSize) {
                for (let y = 0; y <= height; y += gridSize) {
                    const distance = Math.hypot(x - mouseX, y - mouseY)
                    const maxDistance = 200

                    // Base opacity
                    let opacity = 0.05
                    let size = 1

                    // Interactive Proximity
                    if (distance < maxDistance) {
                        opacity = 0.05 + (1 - distance / maxDistance) * 0.4
                        size = 1 + (1 - distance / maxDistance) * 2
                    }

                    ctx.globalAlpha = opacity
                    ctx.fillRect(x, y, size, size)
                }
            }
        }

        // Canvas Resize
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth
                canvasRef.current.height = window.innerHeight
                drawGrid(-1000, -1000) // Initial draw off-screen mouse
            }
        }

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('resize', handleResize)

        handleResize() // Init

        return () => {
            clearInterval(timeInterval)
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none z-[50] overflow-hidden">
            {/* 1. Interactive Canvas Grid */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />

            {/* 2. Noise Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
                }}
            ></div>

            {/* 3. Corner Data Elements */}
            <div className="absolute top-6 left-6 font-technical text-[10px] text-concrete-grey hidden md:block">
                RAYO_OS v3.0 // SYSTEM_NORMAL
            </div>

            <div className="absolute top-6 right-6 font-technical text-[10px] text-concrete-grey flex gap-4 hidden md:flex">
                <span>MILANO, IT</span>
                <span className="text-int-orange">{time}</span>
            </div>

            <div className="absolute bottom-6 left-6 font-technical text-[10px] text-concrete-grey hidden md:block">
                X: {mouse.x} Y: {mouse.y}
            </div>

            <div className="absolute bottom-6 right-6 font-technical text-[10px] text-concrete-grey hidden md:block">
                SCROLL: {scroll}%
            </div>

            {/* 4. Decorative Crosshairs */}
            <div className="absolute top-1/2 left-6 w-2 h-2 border-l border-t border-concrete-grey opacity-50"></div>
            <div className="absolute top-1/2 right-6 w-2 h-2 border-r border-t border-concrete-grey opacity-50"></div>
            <div className="absolute bottom-1/2 left-6 w-2 h-2 border-l border-b border-concrete-grey opacity-50"></div>
            <div className="absolute bottom-1/2 right-6 w-2 h-2 border-r border-b border-concrete-grey opacity-50"></div>
        </div>
    )
}
