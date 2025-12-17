'use client'

import Link from 'next/link'
import Logo from '@/components/ui/Logo'

const POSTS = [
    {
        id: "LOG_01",
        title: "Why Most Websites Are Just Digital Paperweights",
        date: "2025-01-15",
        category: "Strategy"
    },
    {
        id: "LOG_02",
        title: "The End of the Creative Agency as We Know It",
        date: "2025-02-02",
        category: "Industry"
    },
    {
        id: "LOG_03",
        title: "Introducing Digital Workers: The Scale Multiplier",
        date: "2025-02-20",
        category: "Technology"
    }
]

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-deep-carbon text-stark-white selection:bg-int-orange selection:text-deep-carbon">
            <header className="pt-40 px-6 md:px-20 pb-20 border-b border-concrete-grey/20">
                <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-8">
                    System Logs
                </h1>
                <p className="font-technical text-int-orange text-lg">
                    // Internal_Thoughts <br />
                    // Strategic_Updates
                </p>
            </header>

            <div className="px-6 md:px-20">
                {POSTS.map((post) => (
                    <Link href={`/blog/${post.id.toLowerCase()}`} key={post.id} className="block group">
                        <div className="py-12 border-b border-concrete-grey/20 flex flex-col md:flex-row gap-6 md:items-center justify-between">
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-4 font-technical text-xs text-int-orange">
                                    <span>[{post.id}]</span>
                                    <span>{post.date}</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold uppercase group-hover:text-concrete-grey transition-colors max-w-4xl">
                                    {post.title}
                                </h2>
                            </div>

                            <div className="font-technical text-sm text-concrete-grey border border-concrete-grey/30 px-3 py-1 rounded-full self-start md:self-center">
                                {post.category}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}
