"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function FounderCard() {
    return (
        <section className="w-full py-24 md:py-40 px-6 md:px-12 bg-background border-t border-foreground/10 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="relative w-full md:w-[340px] shrink-0"
                    >
                        <div className="relative aspect-[3/4] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 ease-out">
                            <Image
                                src="/images/dylan.jpg"
                                alt="Dylan Patriarchi, Founder e AI Architect di Rayo Consulting"
                                fill
                                sizes="(max-width: 768px) 100vw, 340px"
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative label */}
                        <div className="absolute -bottom-4 -right-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                            Founder
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
                        className="flex-1 flex flex-col justify-center pt-2 md:pt-12"
                    >
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary mb-8">Leadership</p>

                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-6 leading-none">
                            Dylan<br />Patriarchi
                        </h2>

                        <p className="text-lg md:text-xl text-foreground/50 leading-relaxed font-light mb-10 max-w-lg">
                            Founder &amp; AI Architect. Costruisco ponti tra complessità algoritmica e valore di business —
                            trasformando processi operativi in sistemi intelligenti che durano.
                        </p>

                        <div className="flex items-center gap-8 pt-8 border-t border-foreground/8">
                            <a
                                href="https://www.linkedin.com/in/dylan-patriarchi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm font-medium text-foreground/30 hover:text-primary transition-colors"
                            >
                                <FaLinkedin size={16} />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://instagram.com/dpatriarchi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm font-medium text-foreground/30 hover:text-primary transition-colors"
                            >
                                <FaInstagram size={16} />
                                <span>Instagram</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
