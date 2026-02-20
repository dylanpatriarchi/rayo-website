"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
    { src: "/logos/futura.svg", alt: "Futura" },
    { src: "/logos/sinergia.svg", alt: "Sinergia" },
    { src: "/logos/compario.svg", alt: "Compario" },
    { src: "/logos/mercurio.svg", alt: "Mercurio Logistics" },
    { src: "/logos/horizon.svg", alt: "Horizon" },
    { src: "/logos/aegis.svg", alt: "Aegis" },
    { src: "/logos/spapperi.svg", alt: "Spapperi" },
];

export default function LogoStrip() {
    return (
        <section className="w-full bg-background border-b border-foreground/5 py-12 overflow-hidden">
            <div className="w-full">
                <div
                    className="flex overflow-hidden relative w-full"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                    }}
                >
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-25%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 15 // slower for a premium feel
                        }}
                        className="flex items-center gap-24 md:gap-40 pr-24 md:pr-40 opacity-40 hover:opacity-100 transition-opacity duration-1000"
                        style={{ width: "fit-content" }}
                    >
                        {/* 4 Sets of logos to ensure full coverage and smooth looping */}
                        {[...Array(4)].map((_, setIndex) => (
                            <div key={`set-${setIndex}`} className="flex gap-24 md:gap-40 shrink-0">
                                {logos.map((logo, i) => (
                                    <div key={`${setIndex}-${i}`} className="relative h-12 w-48 shrink-0 grayscale hover:grayscale-0 transition-all">
                                        <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
