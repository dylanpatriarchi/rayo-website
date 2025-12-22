"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { animateHeader } from "@/utils/gsap-animations";
import React from 'react'; // Added import for React

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        animateHeader(headerRef.current);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const MenuLink = ({ href, children, onClick }: { href: string, children: React.ReactNode, onClick: () => void }) => (
        <Link href={href} onClick={onClick} className="text-4xl md:text-5xl font-bold tracking-tighter hover:text-primary transition-colors">
            {children}
        </Link>
    );

    return (
        <>
            <header
                ref={headerRef}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] text-foreground px-6 md:px-8 py-4 flex justify-between items-center bg-transparent transition-all rounded-full w-[90%] md:w-auto md:min-w-[600px] lg:min-w-[800px] border border-transparent"
            >
                <div className="flex items-center relative z-[60]">
                    <Link href="/">
                        <Image
                            src="/logo.svg"
                            alt="Rayo Consulting Logo"
                            width={160}
                            height={56}
                            className={`h-10 md:h-14 w-auto transition-all ${isMenuOpen ? 'invert md:invert-0' : ''}`} // Handle contrast on overlay if needed
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide font-light">
                    <a href="/services" className="hover:opacity-50 transition-opacity">Servizi</a>
                    <a href="/cases" className="hover:opacity-50 transition-opacity">Casi Studio</a>
                    <a href="/methodology" className="hover:opacity-50 transition-opacity">Metodologia</a>
                    <a href="/blog" className="hover:opacity-50 transition-opacity">Blog</a>
                    <a href="/about" className="hover:opacity-50 transition-opacity">Chi Siamo</a>
                </nav>

                <div className="flex items-center gap-4">
                    <button className="hidden md:block bg-primary hover:bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors">
                        Prenota una call
                    </button>

                    {/* Hamburger Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden relative z-[60] w-10 h-10 flex flex-col justify-center gap-1.5 focus:outline-none"
                    >
                        <span className={`block w-8 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2 bg-background dark:bg-foreground' : ''}`}></span>
                        <span className={`block w-8 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-8 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2 bg-background dark:bg-foreground' : ''}`}></span>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-foreground z-[90] flex flex-col items-center justify-center transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <nav className="flex flex-col gap-8 text-center text-background">
                    <MenuLink href="/services" onClick={toggleMenu}>Servizi</MenuLink>
                    <MenuLink href="/cases" onClick={toggleMenu}>Casi Studio</MenuLink>
                    <MenuLink href="/methodology" onClick={toggleMenu}>Metodologia</MenuLink>
                    <MenuLink href="/blog" onClick={toggleMenu}>Blog</MenuLink>
                    <MenuLink href="/about" onClick={toggleMenu}>Chi Siamo</MenuLink>
                    <div className="h-px w-24 bg-background/20 mx-auto my-4"></div>
                    <Link href="#contact" onClick={toggleMenu} className="text-xl font-light uppercase tracking-widest">
                        Contatti
                    </Link>
                </nav>
            </div>
        </>
    );
}
