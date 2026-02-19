"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
    { src: "/logos/futura.svg", alt: "Futura" },
    { src: "/logos/sinergia.svg", alt: "Sinergia" },
    { src: "/logos/mercurio.svg", alt: "Mercurio Logistics" },
    { src: "/logos/spapperi.svg", alt: "Spapperi" },
];

export default function LogoStrip() {
    return (
        <section className="w-full bg-background border-b border-foreground/5 py-12 overflow-hidden">
            <div className="w-full">
                <p className="text-center text-xs font-mono uppercase tracking-widest text-foreground/40 mb-10">
                    Scelto da innovatori italiani
                </p>

                <div className="flex overflow-hidden">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-25%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 10
                        }}
                        className="flex items-center gap-24 md:gap-40 pr-24 md:pr-40 opacity-60 hover:opacity-100 transition-opacity duration-500"
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
