"use client";

import Image from "next/image";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function FounderCard() {
    return (
        <section className="w-full py-24 bg-background flex flex-col items-center">
            <div className="w-full max-w-4xl px-6 md:px-0">
                {/* Minimalist Header */}
                <div className="mb-12 border-b border-foreground/10 pb-6">
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
                        Leadership
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Image Column */}
                    <div className="relative w-full md:w-1/3 aspect-[3/4] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 ease-out">
                        <Image
                            src="/images/dylan.jpg"
                            alt="Dylan Patriarchi"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 flex flex-col justify-center h-full pt-4">
                        <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-4">
                            Dylan Patriarchi
                        </h3>
                        <p className="text-lg text-foreground/60 leading-relaxed font-light mb-8 max-w-lg">
                            Founder & AI Architect.
                            <br />
                            Costruisco ponti tra complessità algoritmica e valore di business.
                        </p>

                        <div className="flex items-center gap-6 mt-auto">
                            <a
                                href="https://www.linkedin.com/in/dylan-patriarchi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm font-medium text-foreground/40 hover:text-primary transition-colors uppercase tracking-widest"
                            >
                                <FaLinkedin size={18} />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://instagram.com/dpatriarchi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm font-medium text-foreground/40 hover:text-primary transition-colors uppercase tracking-widest"
                            >
                                <FaInstagram size={18} />
                                <span>Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
