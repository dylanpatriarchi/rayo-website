'use client'

import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-deep-carbon text-stark-white selection:bg-int-orange selection:text-deep-carbon">
            <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference">
                <Link href="/"><Logo className="w-12 h-12" /></Link>
                <div className="font-technical text-xs tracking-widest text-stark-white">
                    Legal / Privacy
                </div>
            </nav>

            <div className="pt-40 px-6 md:px-20 pb-20 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold uppercase mb-12">Privacy Policy</h1>

                <div className="space-y-8 font-technical text-concrete-grey leading-relaxed text-sm md:text-base">
                    <p>Last Updated: [Current Date]</p>

                    <p>
                        This Privacy Policy describes how Rayo Consulting collects, uses, and discloses your personal information when you visit our website.
                    </p>

                    <h3 className="text-stark-white text-lg font-bold mt-8">1. Data Collection</h3>
                    <p>
                        We collect minimal data necessary for operational integrity. This includes standard server logs, analytical data (anonymized), and information strictly provided by you via contact forms.
                    </p>

                    <h3 className="text-stark-white text-lg font-bold mt-8">2. Data Usage</h3>
                    <p>
                        Your data is used solely to maintain functionality and respond to inquiries. We do not sell data to third parties. We are architects, not data brokers.
                    </p>

                    <h3 className="text-stark-white text-lg font-bold mt-8">3. Cookies</h3>
                    <p>
                        We use minimal cookies for session handling and analytics. See Cookie Policy for details.
                    </p>
                </div>
            </div>
        </main>
    )
}
