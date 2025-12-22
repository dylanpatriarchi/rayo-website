"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Post } from "@/utils/mdx";

gsap.registerPlugin(ScrollTrigger);

interface CaseStudiesPreviewProps {
    posts: Post[];
}

export default function CaseStudiesPreview({ posts }: CaseStudiesPreviewProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<HTMLElement[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        gsap.fromTo(
            titleRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            }
        );

        cardsRef.current.forEach((card, i) => {
            if (!card) return;
            gsap.fromTo(
                card,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    },
                }
            );
        });
    }, []);

    return (
        <section ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 bg-background">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
                    <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1]">
                        Selected <br />
                        Work.
                    </h2>
                    <Link
                        href="/cases"
                        className="group flex items-center gap-2 text-lg font-medium border-b border-foreground/20 pb-1 hover:border-foreground transition-all"
                    >
                        Vedi tutti i casi studio
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {posts.map((post, i) => (
                        <Link
                            key={post.slug}
                            href={`/cases/${post.slug}`}
                            className="group relative block w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl bg-foreground/5 p-8 flex flex-col justify-end"
                            ref={(el) => { if (el) cardsRef.current[i] = el; }}
                        >
                            {post.metadata.image && (
                                <Image
                                    src={post.metadata.image}
                                    alt={post.metadata.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300" />

                            <div className="relative z-10 text-white transform transition-transform duration-300 group-hover:-translate-y-2">
                                <p className="text-xs font-bold uppercase tracking-wider mb-2 opacity-80">{post.metadata.industry}</p>
                                <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-2">{post.metadata.title}</h3>
                                <p className="text-sm md:text-base opacity-80 line-clamp-2 max-w-md">{post.metadata.summary}</p>
                            </div>

                            <div className="absolute bottom-8 right-8 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
