'use client'

import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function Footer() {
    return (
        <footer className="bg-deep-carbon text-stark-white border-t border-concrete-grey/20 pt-20 pb-10 px-6 md:px-20">
            <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-40 mb-20">
                <div className="flex-1">
                    <Link href="/" className="inline-block mb-8">
                        <Logo className="w-16 h-16" />
                    </Link>
                    <p className="font-technical text-concrete-grey text-lg max-w-sm">
                        Rayo Consulting.<br />
                        Engineered for Scale.<br />
                        Motori, non Vetrine.
                    </p>
                </div>

                <div className="flex gap-10 md:gap-20 font-technical text-sm">
                    <div className="flex flex-col gap-4">
                        <span className="text-int-orange tracking-widest uppercase mb-2">Sitemap</span>
                        <Link href="/services" className="hover:text-int-orange transition-colors">Services</Link>
                        <Link href="/work" className="hover:text-int-orange transition-colors">Work</Link>
                        <Link href="/blog" className="hover:text-int-orange transition-colors">Journal</Link>
                        <Link href="/contact" className="hover:text-int-orange transition-colors">Contact</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="text-int-orange tracking-widest uppercase mb-2">Legal</span>
                        <Link href="/privacy" className="hover:text-int-orange transition-colors">Privacy Policy</Link>
                        <Link href="/cookie" className="hover:text-int-orange transition-colors">Cookie Policy</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="text-int-orange tracking-widest uppercase mb-2">Connect</span>
                        <a href="#" className="hover:text-int-orange transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-int-orange transition-colors">Twitter</a>
                    </div>
                </div>
            </div>

            <div className="border-t border-concrete-grey/10 pt-10 flex flex-col md:flex-row justify-between items-center font-technical text-xs text-concrete-grey/40">
                <p>© 2025 Rayo Consulting. All Systems Operational.</p>
                <p>Built to Scale v3.0</p>
            </div>
        </footer>
    )
}
