"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Post } from "@/utils/mdx";

interface BlogPreviewProps {
    posts: Post[];
}

export default function BlogPreview({ posts }: BlogPreviewProps) {
    return (
        <section className="py-32 px-6 md:px-12 bg-background border-t border-foreground/10">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                            Insights
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
                            Dalla Ricerca<br />alla Pratica.
                        </h3>
                    </div>
                    <Link
                        href="/blog"
                        className="hidden md:flex items-center gap-2 text-sm font-mono text-foreground/40 hover:text-primary transition-colors duration-200"
                    >
                        Tutti gli articoli →
                    </Link>
                </div>

                <div className="flex flex-col border-t border-foreground/10">
                    {posts.map((post, i) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                        >
                            <Link
                                href={`/blog/${post.slug}`}
                                className="group flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-foreground/10 hover:bg-foreground/[0.02] transition-colors duration-300 -mx-6 md:-mx-0 px-6 md:px-0"
                            >
                                <div className="md:col-span-2 flex items-start pt-1">
                                    <span className="text-xs font-mono text-foreground/30">
                                        {new Date(post.metadata.publishedAt).toLocaleDateString("it-IT", {
                                            year: "numeric",
                                            month: "short",
                                        })}
                                    </span>
                                </div>

                                <div className="md:col-span-6">
                                    <h4 className="text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200 leading-snug">
                                        {post.metadata.title}
                                    </h4>
                                </div>

                                <div className="md:col-span-4 flex flex-col justify-between gap-6">
                                    <p className="text-sm text-foreground/40 font-light leading-relaxed line-clamp-2">
                                        {post.metadata.summary}
                                    </p>
                                    <span className="text-xs font-mono text-foreground/30 group-hover:text-primary transition-colors duration-200 flex items-center gap-2">
                                        Leggi →
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-10 md:hidden">
                    <Link
                        href="/blog"
                        className="text-sm font-mono text-foreground/40 hover:text-primary transition-colors duration-200"
                    >
                        Tutti gli articoli →
                    </Link>
                </div>

            </div>
        </section>
    );
}
