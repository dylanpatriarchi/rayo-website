'use client'

import { useState, useRef, useEffect } from 'react'
import Magnetic from '@/components/ui/Magnetic'
import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import gsap from 'gsap'
import { usePathname } from 'next/navigation'

const LINKS = [
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'Journal', href: '/blog' },
    { name: 'Contact', href: '/contact' }
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)
    const linksRef = useRef([])
    const pathname = usePathname()

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    useEffect(() => {
        if (isOpen) {
            // Open Animation
            gsap.to(menuRef.current, {
                y: '0%',
                duration: 0.8,
                ease: 'power3.inOut'
            })
            gsap.fromTo(linksRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.4, ease: 'power2.out' }
            )
        } else {
            // Close Animation
            gsap.to(menuRef.current, {
                y: '-100%',
                duration: 0.8,
                ease: 'power3.inOut'
            })
        }
    }, [isOpen])

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-4 flex justify-between items-center mix-blend-difference text-stark-white backdrop-blur-sm border-b border-white/10">
                <Magnetic>
                    <Link href="/" className="z-[102] block">
                        <Logo className="w-10 h-10 md:w-12 md:h-12" />
                    </Link>
                </Magnetic>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-12 font-technical text-xs tracking-widest uppercase">
                    {LINKS.map(link => (
                        <Magnetic key={link.name}>
                            <Link
                                href={link.href}
                                className="relative group hover:text-int-orange transition-colors p-2"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-int-orange group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        </Magnetic>
                    ))}
                    <Magnetic>
                        <Link href="/contact" className="px-4 py-2 border border-stark-white/20 hover:bg-int-orange hover:border-int-orange hover:text-deep-carbon transition-all">
                            Start Project
                        </Link>
                    </Magnetic>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden z-[102]">
                    <Magnetic>
                        <button
                            className="flex flex-col gap-1.5 group p-2"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className={`w-8 h-[2px] bg-stark-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`w-8 h-[2px] bg-stark-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-8 h-[2px] bg-stark-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>
                    </Magnetic>
                </div>
            </nav>

            {/* Fullscreen Mobile Menu Overlay */}
            <div
                ref={menuRef}
                className="fixed inset-0 bg-deep-carbon z-[100] translate-y-[-100%] flex flex-col justify-center px-6 md:hidden border-b border-int-orange"
            >
                <div className="flex flex-col gap-8">
                    {LINKS.map((link, i) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            // @ts-ignore
                            ref={el => linksRef.current[i] = el}
                            className="text-5xl font-bold uppercase hover:text-int-orange transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="mt-20 border-t border-concrete-grey/20 pt-8 font-technical text-concrete-grey text-sm">
                    <p className="mb-4">Rayo Consulting v3.0</p>
                    <p>Milano, IT</p>
                </div>
            </div>
        </>
    )
}
