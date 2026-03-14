"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Post } from "@/utils/mdx";

interface CaseStudiesPreviewProps {
    posts: Post[];
}

export default function CaseStudiesPreview({ posts }: CaseStudiesPreviewProps) {
    return (
        <section className="py-32 px-6 md:px-12 bg-background border-t border-foreground/10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-6 border-b border-foreground/10">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
                            Selected Work
                        </p>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
                            Il Nostro Impatto.
                        </h2>
                    </div>
                    <Link
                        href="/cases"
                        className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-foreground/50 hover:text-primary transition-colors mt-4 md:mt-0"
                    >
                        Tutti i casi <span className="text-primary">→</span>
                    </Link>
                </div>

                {/* Column headers — desktop */}
                <div className="hidden md:grid grid-cols-12 gap-4 mb-2 text-xs font-bold uppercase tracking-widest text-foreground/30">
                    <div className="col-span-1">#</div>
                    <div className="col-span-4">Settore / Progetto</div>
                    <div className="col-span-5">Descrizione</div>
                    <div className="col-span-2 text-right">Risultato chiave</div>
                </div>

                {/* Rows */}
                <div className="flex flex-col">
                    {posts.map((post, i) => (
                        <Link key={post.slug} href={`/cases/${post.slug}`} className="block group">
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                                className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 md:py-10 border-t border-foreground/8 group-hover:bg-foreground/[0.02] transition-colors duration-200"
                            >
                                {/* Index */}
                                <div className="hidden md:flex col-span-1 items-center">
                                    <span className="text-xs font-mono text-foreground/25 group-hover:text-primary transition-colors">
                                        {(i + 1).toString().padStart(2, "0")}
                                    </span>
                                </div>

                                {/* Industry + Title */}
                                <div className="col-span-1 md:col-span-4 flex flex-col gap-1.5">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/35">
                                        {post.metadata.industry || "AI"}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors leading-snug">
                                        {post.metadata.title}
                                    </h3>
                                </div>

                                {/* Summary */}
                                <div className="col-span-1 md:col-span-5 flex items-center">
                                    <p className="text-sm text-foreground/55 font-light leading-relaxed group-hover:text-foreground/75 transition-colors">
                                        {post.metadata.summary}
                                    </p>
                                </div>

                                {/* Stat — the headline number */}
                                <div className="col-span-1 md:col-span-2 flex md:flex-col md:items-end md:justify-center gap-2 md:gap-0 mt-3 md:mt-0">
                                    {post.metadata.stat ? (
                                        <>
                                            <span className="text-2xl md:text-3xl font-bold tracking-tighter text-primary leading-none">
                                                {post.metadata.stat}
                                            </span>
                                            {post.metadata.statLabel && (
                                                <span className="text-[10px] font-medium uppercase tracking-wider text-foreground/40 md:text-right leading-tight md:mt-1.5">
                                                    {post.metadata.statLabel}
                                                </span>
                                            )}
                                        </>
                                    ) : (
                                        <span className="text-xs font-mono text-foreground/30 group-hover:text-primary transition-colors">→</span>
                                    )}
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-10 pt-6 border-t border-foreground/10 md:hidden">
                    <Link href="/cases" className="text-sm font-medium text-foreground/50 hover:text-primary transition-colors flex items-center gap-2">
                        Tutti i casi <span className="text-primary">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
