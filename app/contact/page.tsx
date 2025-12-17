'use client'

import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-deep-carbon text-stark-white selection:bg-int-orange selection:text-deep-carbon flex flex-col">
            <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference">
                <Link href="/"><Logo className="w-12 h-12" /></Link>
                <div className="font-technical text-xs tracking-widest text-stark-white">
                    Menu / Contact
                </div>
            </nav>

            <div className="flex-1 flex flex-col justify-center px-6 md:px-20 pt-32">
                <header className="mb-20">
                    <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-8">
                        Get System <br /> Access
                    </h1>
                    <p className="font-technical text-int-orange text-lg">
                        // Initiate_Handshake <br />
                        // Response_Time: &lt; 24h
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="space-y-12">
                        <div className="border-l-2 border-int-orange pl-6">
                            <h3 className="font-technical text-concrete-grey text-sm mb-2">EMAIL_PROTOCOL</h3>
                            <a href="mailto:hello@rayo.consulting" className="text-3xl md:text-5xl font-bold hover:text-int-orange transition-colors">
                                hello@rayo.consulting
                            </a>
                        </div>

                        <div className="border-l-2 border-concrete-grey pl-6">
                            <h3 className="font-technical text-concrete-grey text-sm mb-2">HQ_COORDINATES</h3>
                            <p className="text-xl md:text-2xl leading-relaxed">
                                Via dell'Innovazione Digitale, 42 <br />
                                20100 Milano, IT
                            </p>
                        </div>
                    </div>

                    {/* Minimal Terminal Form Placeholder */}
                    <div className="bg-black/40 border border-concrete-grey/20 p-8 font-technical text-sm">
                        <div className="mb-6 text-concrete-grey border-b border-concrete-grey/20 pb-2">
                            &gt; input_requirements_
                        </div>

                        <form className="space-y-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-stark-white/60">var name =</label>
                                <input type="text" className="bg-transparent border-b border-concrete-grey/40 focus:border-int-orange outline-none py-2 text-stark-white" placeholder='"John Doe"' />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-stark-white/60">var intent =</label>
                                <select className="bg-transparent border-b border-concrete-grey/40 focus:border-int-orange outline-none py-2 text-stark-white appearance-none rounded-none">
                                    <option className="bg-deep-carbon text-concrete-grey">Select Intent...</option>
                                    <option className="bg-deep-carbon" value="project">New Asset Construction</option>
                                    <option className="bg-deep-carbon" value="audit">System Audit</option>
                                    <option className="bg-deep-carbon" value="partnership">Partnership Protocol</option>
                                </select>
                            </div>

                            <div className="pt-8">
                                <button type="submit" className="w-full py-4 border border-int-orange text-int-orange hover:bg-int-orange hover:text-deep-carbon transition-all uppercase tracking-widest font-bold">
                                    &gt; Execute_Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="py-10 px-6 md:px-20 text-center font-technical text-xs text-concrete-grey/40">
                Secure Connection // SSL Encrypted
            </div>
        </main>
    )
}
