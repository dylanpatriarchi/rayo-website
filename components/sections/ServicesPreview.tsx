'use client'

import Link from 'next/link'

export default function ServicesPreview() {
    return (
        <section className="py-20 px-6 md:px-20 bg-deep-carbon border-t border-concrete-grey/20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <h2 className="text-4xl md:text-6xl font-bold uppercase text-stark-white max-w-2xl">
                    System <span className="text-concrete-grey">Capabilities</span>
                </h2>
                <Link href="/services" className="font-technical text-int-orange hover:text-white transition-colors mt-6 md:mt-0">
                    View All Capabilities →
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                {[
                    { title: "Brand Engineering", desc: "Identity Systems & Design Tokens" },
                    { title: "Asset Architecture", desc: "Next.js & WebGL Applications" },
                    { title: "Growth Infrastructure", desc: "SEO & Conversion Systems" }
                ].map((item, i) => (
                    <div key={i} className="bg-concrete-grey/5 p-8 border border-concrete-grey/10 hover:bg-concrete-grey/10 transition-colors group h-full flex flex-col justify-between min-h-[300px]">
                        <div className="font-technical text-concrete-grey text-xs mb-4">0{i + 1}</div>
                        <div>
                            <h3 className="text-2xl font-bold uppercase mb-2 group-hover:text-int-orange transition-colors">{item.title}</h3>
                            <p className="font-technical text-sm text-stark-white/60">{item.desc}</p>
                        </div>

                        <div className="flex justify-end mt-8">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-int-orange">+</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
