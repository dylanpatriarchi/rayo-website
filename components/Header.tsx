"use client";

import { useEffect, useRef } from "react";
import { animateHeader } from "@/utils/gsap-animations";

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        animateHeader(headerRef.current);
    }, []);

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 w-full z-50 text-foreground px-6 md:px-12 py-8 flex justify-between items-center bg-transparent transition-all"
        >
            <div className="text-xl font-bold tracking-tight">RAYO</div>
            <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide font-light">
                <a href="#services" className="hover:opacity-50 transition-opacity">Servizi</a>
                <a href="#methodology" className="hover:opacity-50 transition-opacity">Metodologia</a>
                <a href="#contact" className="hover:opacity-50 transition-opacity">Contatti</a>
            </nav>
            <button className="bg-primary hover:bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors">
                Prenota una call
            </button>
        </header>
    );
}
