"use client";

import React, { useState } from 'react';
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
}) => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleMenu = () => {
        setIsHamburgerOpen(!isHamburgerOpen);
        setIsExpanded(!isExpanded);
    };

    const isInternal = (href: string) => href.startsWith('/') || href.startsWith('#');

    return (
        <div
            className={`card-nav-container fixed left-1/2 -translate-x-1/2 w-[95%] max-w-[600px] z-[100] top-6 md:top-8 transition-all duration-300 ${className}`}
        >
            <nav
                className={`card-nav block p-0 backdrop-blur-2xl border overflow-hidden transition-all duration-500 ease-in-out relative shadow-[0_8px_32px_rgba(0,0,0,0.12)]
                ${isExpanded ? 'rounded-[32px] bg-white/95 border-black/5' : 'rounded-[999px] bg-white/60 border-white/40 hover:bg-white/70'}`}
            >
                {/* Top Bar (Always fixed height of 60px) */}
                <div className="card-nav-top relative h-[60px] flex items-center justify-between px-6 z-[20]">
                    {/* Hamburger */}
                    <div
                        className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group h-full flex flex-col items-center justify-center cursor-pointer gap-[5px] w-[60px] items-start`}
                        onClick={toggleMenu}
                        role="button"
                    >
                        <div className={`hamburger-line w-[18px] h-[2px] bg-black transition-all duration-300 origin-center ${isHamburgerOpen ? 'translate-y-[3.5px] rotate-45' : ''} group-hover:opacity-60`} />
                        <div className={`hamburger-line w-[18px] h-[2px] bg-black transition-all duration-300 origin-center ${isHamburgerOpen ? '-translate-y-[3.5px] -rotate-45' : ''} group-hover:opacity-60`} />
                    </div>

                    {/* Logo */}
                    <div className="logo-container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-[30]">
                        <Link href="/" className="block" onClick={() => { setIsExpanded(false); setIsHamburgerOpen(false); }}>
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
                            onClick={() => { setIsExpanded(false); setIsHamburgerOpen(false); }}
                            className="card-nav-cta-button hidden md:inline-flex border border-[#0047FF]/10 bg-[#0047FF] hover:bg-[#003ad1] text-white rounded-full px-4 items-center justify-center h-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            Prenota
                        </Link>
                    </div>
                </div>

                {/* Content Area */}
                <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                    <div className="overflow-hidden min-h-0">
                        <div className="card-nav-content px-8 pb-8 pt-2 flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-0">
                            {(items || []).map((item, idx) => (
                                <div
                                    key={`${item.label}-${idx}`}
                                    className={`nav-group flex flex-col gap-3 flex-1 ${idx < (items?.length || 0) - 1 ? 'md:border-r md:border-black/5 md:pr-6' : 'md:pl-6'}`}
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
                                                onClick={() => { setIsExpanded(false); setIsHamburgerOpen(false); }}
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
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default CardNav;
