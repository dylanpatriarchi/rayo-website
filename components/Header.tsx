"use client";

import Image from "next/image";
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
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 text-foreground px-6 md:px-8 py-4 flex justify-between items-center bg-transparent transition-all rounded-full w-[90%] md:w-auto md:min-w-[600px] lg:min-w-[800px] border border-transparent"
        >
            <div className="flex items-center">
                <Image
                    src="/logo.svg"
                    alt="Rayo Consulting Logo"
                    width={160}
                    height={56}
                    className="h-10 md:h-14 w-auto"
                    priority
                />
            </div>
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
