'use client'

import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function CookiePage() {
    return (
        <main className="min-h-screen bg-deep-carbon text-stark-white selection:bg-int-orange selection:text-deep-carbon">
            <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference">
                <Link href="/"><Logo className="w-12 h-12" /></Link>
                <div className="font-technical text-xs tracking-widest text-stark-white">
                    Legal / Cookies
                </div>
            </nav>

            <div className="pt-40 px-6 md:px-20 pb-20 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold uppercase mb-12">Cookie Policy</h1>

                <div className="space-y-8 font-technical text-concrete-grey leading-relaxed text-sm md:text-base">
                    <p>Last Updated: [Current Date]</p>

                    <p>
                        Rayo Consulting uses cookies to enhance system performance.
                    </p>

                    <h3 className="text-stark-white text-lg font-bold mt-8">1. What are Cookies?</h3>
                    <p>
                        Small text files stored on your device. They act as local memory for the website.
                    </p>

                    <h3 className="text-stark-white text-lg font-bold mt-8">2. Essential Cookies</h3>
                    <p>
                        Necessary for the website to function (e.g., security tokens, load balancing).
                    </p>

                    <h3 className="text-stark-white text-lg font-bold mt-8">3. Analytical Cookies</h3>
                    <p>
                        Used to understand traffic flow. All data is anonymized.
                    </p>
                </div>
            </div>
        </main>
    )
}
