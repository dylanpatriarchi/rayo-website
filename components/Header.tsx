"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import { animateHeader } from "@/utils/gsap-animations";
import React from 'react'; // Added import for React

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLogoVisible, setIsLogoVisible] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        animateHeader(headerRef.current);
    }, []);

    // Handle Logo Visibility (Hidden in Hero on Homepage, visible elsewhere)
    useEffect(() => {
        const isHomePage = pathname === "/";

        if (!isHomePage) {
            setIsLogoVisible(true);
            return;
        }

        // Initial check
        setIsLogoVisible(window.scrollY > window.innerHeight * 0.8);

        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.8) {
                setIsLogoVisible(true);
            } else {
                setIsLogoVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

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
                    <Link
                        href="/"
                        className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden flex items-center ${isLogoVisible || isMenuOpen
                            ? 'opacity-100 translate-y-0 w-[160px] pointer-events-auto'
                            : 'opacity-0 -translate-y-4 w-0 pointer-events-none'
                            }`}
                    >
                        <Image
                            src="/logo.svg"
                            alt="Rayo Consulting Logo"
                            width={160}
                            height={56}
                            className={`h-10 md:h-14 w-auto object-contain transition-all whitespace-nowrap ${isMenuOpen ? 'invert md:invert-0' : ''}`}
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-5 text-xs uppercase tracking-wider font-light items-center">
                    <a href="/services" className="hover:opacity-50 transition-opacity whitespace-nowrap">Servizi</a>
                    <a href="/cases" className="hover:opacity-50 transition-opacity whitespace-nowrap">Casi Studio</a>
                    <a href="/methodology" className="hover:opacity-50 transition-opacity whitespace-nowrap">Metodologia</a>
                    <a href="/blog" className="hover:opacity-50 transition-opacity whitespace-nowrap">Blog</a>
                    <a href="/about" className="hover:opacity-50 transition-opacity whitespace-nowrap">Chi Siamo</a>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/contact" className="hidden md:block bg-primary hover:bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors">
                        Prenota una call
                    </Link>

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
