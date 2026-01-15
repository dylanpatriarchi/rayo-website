"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Post } from "@/utils/mdx";

interface CaseStudiesPreviewProps {
    posts: Post[];
}

export default function CaseStudiesPreview({ posts }: CaseStudiesPreviewProps) {
    return (
        <section className="py-32 px-6 md:px-12 bg-background border-b border-neutral-100">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-foreground/10 pb-6">
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
                            Selected Work
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
                            Il Nostro Impatto.
                        </h3>
                    </div>
                    <Link
                        href="/cases"
                        className="hidden md:block text-sm font-mono text-foreground/60 hover:text-primary transition-colors hover:underline underline-offset-4"
                    >
                        Tutti i casi →
                    </Link>
                </div>

                <div className="flex flex-col">
                    {/* Header Row */}
                    <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-foreground/10 text-xs font-mono uppercase tracking-widest text-foreground/40">
                        <div className="col-span-1">ID</div>
                        <div className="col-span-4">Client / Industry</div>
                        <div className="col-span-7">Business Impact</div>
                    </div>

                    {posts.map((post, i) => (
                        <Link key={post.slug} href={`/cases/${post.slug}`} className="block group">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 py-8 md:py-12 border-b border-foreground/10 group-hover:bg-foreground/[0.02] transition-colors"
                            >
                                {/* ID */}
                                <div className="col-span-1 flex items-start">
                                    <span className="text-xs font-mono text-primary/60 group-hover:text-primary transition-colors">
                                        {(i + 1).toString().padStart(2, '0')}
                                    </span>
                                </div>

                                {/* Industry / Title */}
                                <div className="col-span-1 md:col-span-4 flex flex-col justify-start">
                                    <span className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-2">
                                        {post.metadata.industry || "Tech"}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors leading-tight">
                                        {post.metadata.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <div className="col-span-1 md:col-span-7 flex flex-col justify-between">
                                    <p className="text-sm md:text-base text-foreground/60 font-light leading-relaxed max-w-2xl group-hover:text-foreground/80 transition-colors">
                                        {post.metadata.summary}
                                    </p>
                                    <span className="md:hidden mt-4 text-xs font-mono text-primary flex items-center gap-2">
                                        Read Case Study →
                                    </span>
                                </div>

                                {/* Arrow (Desktop Only - Optional, keeping minimal) */}
                                <div className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-primary text-xl">→</span>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 md:hidden">
                    <Link
                        href="/cases"
                        className="text-sm font-mono text-foreground/60 hover:text-primary transition-colors hover:underline underline-offset-4"
                    >
                        Tutti i casi →
                    </Link>
                </div>
            </div>
        </section>
    );
}
