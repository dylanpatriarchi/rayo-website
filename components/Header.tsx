"use client";

import React from 'react';
import CardNav from './CardNav';

export default function Header() {
    const items = [
        {
            label: "Company",
            links: [
                { label: "Chi Siamo", ariaLabel: "Chi Siamo", href: "/about" },
                { label: "Karta", ariaLabel: "Karta", href: "/karta" },
                { label: "Blog", ariaLabel: "Blog", href: "/blog" }
            ]
        },
        {
            label: "Work",
            links: [
                { label: "Servizi", ariaLabel: "Servizi", href: "/services" },
                { label: "Casi Studio", ariaLabel: "Casi Studio", href: "/cases" },
                { label: "Metodologia", ariaLabel: "Metodologia", href: "/methodology" }
            ]
        },
        {
            label: "Connect",
            links: [
                { label: "Contatti", ariaLabel: "Contatti", href: "/contact" }
            ]
        }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
            {/* Pointer events none on container so clicks pass through around the nav */}
            <div className="pointer-events-auto">
                <CardNav
                    logo="/logo.svg"
                    logoAlt="Rayo Consulting Logo"
                    items={items}
                    ease="power3.out"
                />
            </div>
        </header>
    );
}
