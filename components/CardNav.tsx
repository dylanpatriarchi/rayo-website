"use client";

import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";

type CardNavLink = {
    label: string;
    href: string;
    ariaLabel: string;
};

export type CardNavItem = {
    label: string;
    links: CardNavLink[];
    bgColor?: string;
    textColor?: string;
};

export interface CardNavProps {
    logo: string;
    logoAlt?: string;
    items: CardNavItem[];
    className?: string;
    ease?: string;
    baseColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
    logo,
    logoAlt = 'Logo',
    items,
    className = '',
    ease = 'power3.out',
}) => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    const calculateHeight = () => {
        return 240;
    };

    const createTimeline = () => {
        const navEl = navRef.current;
        if (!navEl) return null;

        // Reset
        gsap.set(navEl, { height: 60 });
        gsap.set(cardsRef.current, { y: 15, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        tl.to(navEl, {
            height: calculateHeight,
            duration: 0.5,
            ease: "power4.inOut"
        });

        tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out", stagger: 0.05 }, '-=0.3');

        return tl;
    };

    useLayoutEffect(() => {
        const tl = createTimeline();
        tlRef.current = tl;
        return () => {
            tl?.kill();
            tlRef.current = null;
        };
    }, [ease, items]);

    useLayoutEffect(() => {
        const handleResize = () => {
            if (isExpanded && tlRef.current) {
                gsap.set(navRef.current, { height: calculateHeight() });
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isExpanded]);

    const toggleMenu = () => {
        const tl = tlRef.current;
        if (!tl) return;
        if (!isExpanded) {
            setIsHamburgerOpen(true);
            setIsExpanded(true);
            tl.play(0);
        } else {
            setIsHamburgerOpen(false);
            tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
            tl.reverse();
        }
    };

    const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
        if (el) cardsRef.current[i] = el!;
    };

    const isInternal = (href: string) => href.startsWith('/') || href.startsWith('#');

    return (
        <div
            className={`card-nav-container fixed left-1/2 -translate-x-1/2 w-[95%] max-w-[600px] z-[100] top-6 md:top-8 transition-all duration-300 ${className}`}
        >
            {/* NAV: Handles BACKGROUND, SHAPE, and CLIPPING. */}
            <nav
                ref={navRef}
                className={`card-nav block h-[60px] p-0 backdrop-blur-2xl border overflow-hidden transition-[border-radius,background-color,box-shadow,border-color] duration-500 ease-in-out relative shadow-[0_8px_32px_rgba(0,0,0,0.12)]
                ${isExpanded ? 'rounded-[32px] bg-white/90 border-black/5' : 'rounded-[999px] bg-white/60 border-white/40 hover:bg-white/70'}`}
                style={{ borderRadius: isExpanded ? '32px' : '9999px' }} // Explicit inline style to override any legacy conflicts
            >
                <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between px-6 z-[20]">
                    {/* Hamburger */}
                    <div
                        className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group h-full flex flex-col items-center justify-center cursor-pointer gap-[5px] w-[60px] items-start`}
                        onClick={toggleMenu}
                        role="button"
                        style={{ color: '#000' }}
                    >
                        <div className={`hamburger-line w-[18px] h-[2px] bg-black transition-all duration-300 origin-center ${isHamburgerOpen ? 'translate-y-[3.5px] rotate-45' : ''} group-hover:opacity-60`} />
                        <div className={`hamburger-line w-[18px] h-[2px] bg-black transition-all duration-300 origin-center ${isHamburgerOpen ? '-translate-y-[3.5px] -rotate-45' : ''} group-hover:opacity-60`} />
                    </div>

                    {/* Logo - Large and Visible */}
                    <div className="logo-container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-[30]">
                        <Link href="/" className="block">
                            <Image
                                src={logo}
                                alt={logoAlt}
                                width={180}
                                height={56}
                                className="h-10 md:h-12 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* CTA */}
                    <div className="cta-container w-[80px] flex justify-end h-[36px]">
                        <Link
                            href="/contact"
                            className="card-nav-cta-button hidden md:inline-flex border border-[#0047FF]/10 bg-[#0047FF] hover:bg-[#003ad1] text-white rounded-full px-4 items-center justify-center h-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            Prenota
                        </Link>
                    </div>
                </div>

                <div
                    className={`card-nav-content absolute left-0 right-0 top-[70px] bottom-0 px-8 pb-6 flex flex-col md:flex-row items-start justify-between z-[10] ${isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}`}
                    aria-hidden={!isExpanded}
                >
                    {(items || []).map((item, idx) => (
                        <div
                            key={`${item.label}-${idx}`}
                            className={`nav-group flex flex-col gap-3 flex-1 h-full pt-2 ${idx < (items?.length || 0) - 1 ? 'md:border-r md:border-black/5 md:pr-6' : 'md:pl-6'}`}
                            ref={setCardRef(idx)}
                        >
                            <div className="nav-group-label font-bold text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                                {item.label}
                            </div>
                            <div className="nav-group-links flex flex-col gap-2">
                                {item.links?.map((lnk, i) => (
                                    <Link
                                        key={i}
                                        className="nav-link text-lg font-medium text-black hover:text-[#0047FF] transition-colors duration-200 flex items-center gap-2 group/link"
                                        href={lnk.href}
                                        onClick={() => toggleMenu()}
                                        target={isInternal(lnk.href) ? "_self" : "_blank"}
                                        rel={isInternal(lnk.href) ? "" : "noopener noreferrer"}
                                    >
                                        {lnk.label}
                                        <GoArrowUpRight className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-[#0047FF] text-lg" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default CardNav;
