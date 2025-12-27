"use client";

import { useState } from "react";
import Link from "next/link";
import { Post } from "@/utils/mdx";
import { Search } from "lucide-react";

interface PostListProps {
    initialPosts: Post[];
    variant: "blog" | "cases";
}

export default function PostList({ initialPosts, variant }: PostListProps) {
    const [query, setQuery] = useState("");

    const filteredPosts = initialPosts.filter((post) => {
        const searchContent = `${post.metadata.title} ${post.metadata.summary} ${post.metadata.industry || ""
            }`.toLowerCase();
        return searchContent.includes(query.toLowerCase());
    });

    return (
        <div className="flex flex-col gap-12">
            {/* Search Input */}
            <div className="relative max-w-md">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-foreground/50">
                    <Search size={18} />
                </div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={`Cerca nei ${variant === "blog" ? "post" : "casi studio"}...`}
                    className="w-full bg-transparent border border-foreground/20 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-foreground/30"
                />
            </div>

            {query && filteredPosts.length === 0 && (
                <div className="text-center py-12 opacity-50 font-light">
                    Nessun risultato trovato per &quot;{query}&quot;
                </div>
            )}

            {/* Blog Variant */}
            {variant === "blog" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {filteredPosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group block border-t border-foreground/10 pt-8"
                        >
                            <div className="text-sm text-foreground/50 mb-4">
                                {post.metadata.publishedAt}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                                {post.metadata.title}
                            </h3>
                            <p className="text-foreground/70 font-light leading-relaxed mb-4">
                                {post.metadata.summary}
                            </p>
                            <div className="text-sm font-bold underline decoration-1 underline-offset-4 decoration-primary/50 group-hover:decoration-primary transition-all">
                                Leggi tutto
                            </div>
                        </Link>
                    ))}
                </div>
            )}

            {/* Cases Variant */}
            {variant === "cases" && (
                <div className="grid grid-cols-1 gap-px bg-foreground/10 border border-foreground/10">
                    {filteredPosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/cases/${post.slug}`}
                            className="group block bg-background p-8 md:p-12 hover:bg-foreground/5 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-8">
                                <div>
                                    <div className="text-sm uppercase tracking-wide opacity-50 mb-2">
                                        {post.metadata.industry}
                                    </div>
                                    <h3 className="text-2xl md:text-4xl font-bold group-hover:text-primary transition-colors">
                                        {post.metadata.title}
                                    </h3>
                                </div>
                                <div className="text-right hidden md:block">
                                    <div className="text-4xl font-bold tracking-tight">
                                        {post.metadata.stat}
                                    </div>
                                    <div className="text-xs uppercase opacity-50">
                                        {post.metadata.statLabel}
                                    </div>
                                </div>
                            </div>

                            <p className="text-xl md:text-2xl font-light text-foreground/70 leading-relaxed max-w-3xl mb-8">
                                {post.metadata.summary}
                            </p>

                            <div className="text-sm font-bold underline decoration-1 underline-offset-4 decoration-primary/50 group-hover:decoration-primary transition-all">
                                Scopri l&apos;implementazione
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
