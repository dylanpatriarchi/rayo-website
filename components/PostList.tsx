"use client";

import { useState } from "react";
import Link from "next/link";
import { Post } from "@/utils/mdx";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PostListProps {
    initialPosts: Post[];
    variant: "blog" | "cases";
}

export default function PostList({ initialPosts, variant }: PostListProps) {
    const [query, setQuery] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const filteredPosts = initialPosts.filter((post) => {
        const searchContent = `${post.metadata.title} ${post.metadata.summary} ${post.metadata.industry || ""
            }`.toLowerCase();
        return searchContent.includes(query.toLowerCase());
    });

    // Featured post logic for Blog (only if no search query)
    const showFeatured = variant === "blog" && !query && filteredPosts.length > 0;
    const featuredPost = showFeatured ? filteredPosts[0] : null;
    const remainingPosts = showFeatured
        ? filteredPosts.slice(1)
        : filteredPosts;

    return (
        <div className="flex flex-col gap-16 relative">
            {/* Floating Search Bar */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="sticky top-6 z-40 mx-auto w-full max-w-lg"
            >
                <div
                    className={`relative group transition-all duration-300 ${isFocused ? "scale-105" : "scale-100"
                        }`}
                >
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-md rounded-full border border-foreground/10 shadow-sm group-hover:shadow-md transition-shadow" />
                    <div className="relative flex items-center px-4 py-3">
                        <Search size={18} className="text-foreground/40 mr-3" />
                        <input
                            type="text"
                            value={query}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder={`Cerca in ${variant === "blog" ? "trasmissioni" : "casi studio"
                                }...`}
                            className="w-full bg-transparent text-sm font-light placeholder:text-foreground/30 focus:outline-none"
                        />
                    </div>
                </div>
            </motion.div>

            {query && filteredPosts.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-24 opacity-50 font-light"
                >
                    Nessun risultato trovato per &quot;{query}&quot;
                </motion.div>
            )}

            {/* Blog Layout */}
            {variant === "blog" && (
                <div className="flex flex-col gap-12">
                    {/* Featured Post */}
                    {featuredPost && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link
                                href={`/blog/${featuredPost.slug}`}
                                className="group block relative overflow-hidden rounded-2xl bg-foreground/5 p-8 md:p-12 transition-all hover:bg-foreground/10"
                            >
                                <div className="mb-6 text-xs font-bold uppercase tracking-widest text-primary">
                                    In Evidenza
                                </div>
                                <h3 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl group-hover:underline decoration-2 underline-offset-4 decoration-primary">
                                    {featuredPost.metadata.title}
                                </h3>
                                <p className="mb-8 max-w-2xl text-lg font-light leading-relaxed text-foreground/80 md:text-xl">
                                    {featuredPost.metadata.summary}
                                </p>
                                <div className="flex items-center gap-4 text-sm font-medium opacity-60">
                                    <span>{featuredPost.metadata.publishedAt}</span>
                                    <span>•</span>
                                    <span>Leggi articolo →</span>
                                </div>
                            </Link>
                        </motion.div>
                    )}

                    {/* Grid Posts */}
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
                        <AnimatePresence>
                            {remainingPosts.map((post, index) => (
                                <motion.div
                                    key={post.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                >
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="group block h-full flex flex-col"
                                    >
                                        <div className="mb-4 text-xs font-medium text-foreground/40">
                                            {post.metadata.publishedAt}
                                        </div>
                                        <h3 className="mb-3 text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                                            {post.metadata.title}
                                        </h3>
                                        <p className="mb-4 flex-grow text-sm font-light leading-relaxed text-foreground/70">
                                            {post.metadata.summary}
                                        </p>
                                        <div className="text-xs font-bold uppercase tracking-wider text-primary decoration-primary/30 underline decoration-1 underline-offset-4 transition-all group-hover:decoration-primary">
                                            Leggi
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            )}

            {/* Cases Layout (Bento Grid) */}
            {variant === "cases" && (
                <div className="grid auto-rows-[minmax(300px,_auto)] grid-cols-1 gap-4 md:grid-cols-3">
                    <AnimatePresence>
                        {filteredPosts.map((post, index) => {
                            // Simple logic for bento sizing:
                            // Index 0: Large (2 cols, 2 rows)
                            // Index 1, 2: Standard
                            // Index 3: Wide (2 cols)
                            // etc. pattern repeating
                            const isLarge = index % 7 === 0;
                            const isWide = index % 7 === 3 || index % 7 === 6;

                            const colSpan = isLarge ? "md:col-span-2 md:row-span-2" : isWide ? "md:col-span-2" : "md:col-span-1";

                            return (
                                <motion.div
                                    key={post.slug}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className={`${colSpan} group relative overflow-hidden rounded-2xl bg-foreground/5 p-8 transition-all hover:bg-foreground/10`}
                                >
                                    <Link href={`/cases/${post.slug}`} className="flex h-full flex-col justify-between">
                                        <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-primary/80">
                                                {post.metadata.industry}
                                            </div>
                                            <h3 className={`font-bold leading-none tracking-tight ${isLarge ? "text-4xl md:text-5xl mb-6" : "text-2xl mb-4"}`}>
                                                {post.metadata.title}
                                            </h3>
                                            <p className={`font-light text-foreground/60 ${isLarge ? "text-lg max-w-xl" : "text-sm line-clamp-3"}`}>
                                                {post.metadata.summary}
                                            </p>
                                        </div>

                                        <div className="relative z-10 mt-8 flex items-end justify-between border-t border-foreground/10 pt-6">
                                            <div>
                                                <div className="text-2xl font-bold tracking-tighter">
                                                    {post.metadata.stat}
                                                </div>
                                                <div className="text-[10px] uppercase tracking-wide opacity-50">
                                                    {post.metadata.statLabel}
                                                </div>
                                            </div>
                                            <div className="h-8 w-8 rounded-full border border-foreground/20 flex items-center justify-center opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                                                →
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
}
