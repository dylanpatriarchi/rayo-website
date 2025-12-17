'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import Logo from '@/components/ui/Logo'

const SERVICES = [
    {
        id: "01",
        name: "AI Agents & Automation",
        description: "Digital Workers autonomi per Customer Service, Sales e Operations. Operativi 24/7, scalabilità infinita.",
        details: ["Customer Support Bots", "Sales Qualifiers", "Workflow Automation"]
    },
    {
        id: "02",
        name: "Immersive Tech (VTO)",
        description: "Virtual Try-On e configuratori 3D. Trasformiamo l'e-commerce in esperienza spaziale.",
        details: ["Virtual Try-On (Eyewear/Clothing)", "3D Product Configurators", "WebGL Experiences"]
    },
    {
        id: "03",
        name: "AI Infrastructure",
        description: "Architetture RAG proprietarie e Private LLMs. Il tuo cervello aziendale, sicuro e nel tuo server.",
        details: ["RAG Implementation", "Private LLM Deployment", "Vector Databases"]
    },
    {
        id: "04",
        name: "High-Performance Web",
        description: "Motori, non Vetrine. Prestazioni estreme, SEO tecnica, design industriale.",
        details: ["Next.js Applications", "Headless CMS", "Technical SEO"]
    },
    {
        id: "05",
        name: "Strategic Consulting",
        description: "Non vendiamo ore, vendiamo roadmap. Audit tecnologici e piani di adozione AI.",
        details: ["AI Readiness Audit", "Tech Stack Architecture", "Growth Strategy"]
    }
]

const PRICING_PACKAGES = [
    {
        name: "Discovery & Audit",
        price: "€2.500",
        type: "One-off",
        features: ["Analisi Stack Tecnologico", "AI Opportunity Mapping", "Report Strategico", "Roadmap di Implementazione"]
    },
    {
        name: "AI Agent Pilot",
        price: "€5.000",
        type: "Starting at",
        features: ["1 Custom AI Agent", "Integrazione Knowledge Base", "Testing & Tuning", "1 Mese di Supporto"]
    },
    {
        name: "Full Scale System",
        price: "€15.000",
        type: "Starting at",
        features: ["Ecosistema Multi-Agente", "Web App Proprietaria", "Integrazione CRM/ERP", "Training del Team"]
    }
]

export default function ServicesPage() {
    const container = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            // Services Animation
            gsap.utils.toArray('.service-row').forEach((row: any) => {
                gsap.from(row, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: row,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                })
            })

            // Pricing Animation
            gsap.from('.pricing-card', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.pricing-section',
                    start: "top 70%"
                }
            })

        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <main ref={container} className="min-h-screen bg-deep-carbon text-stark-white selection:bg-int-orange selection:text-deep-carbon">
            <header className="pt-40 px-6 md:px-20 pb-20 border-b border-concrete-grey/20">
                <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-8">
                    Services
                </h1>
                <p className="font-technical text-int-orange text-lg max-w-xl">
                    // Capabilities_Index <br />
                    // Status: Operational
                </p>
            </header>

            <div className="px-6 md:px-20">
                {SERVICES.map((service) => (
                    <div key={service.id} className="service-row group border-b border-concrete-grey/20 py-16 transition-colors hover:bg-stark-white/5">
                        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                            <span className="font-technical text-concrete-grey text-xl">[{service.id}]</span>

                            <div className="flex-1">
                                <h2 className="text-4xl md:text-6xl font-bold uppercase mb-6 group-hover:text-int-orange transition-colors duration-300">
                                    {service.name}
                                </h2>
                                <p className="text-xl text-concrete-grey max-w-2xl mb-8">
                                    {service.description}
                                </p>

                                <ul className="flex flex-wrap gap-4 font-technical text-xs text-stark-white/70">
                                    {service.details.map(detail => (
                                        <li key={detail} className="border border-concrete-grey/30 px-3 py-1 rounded-full">
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="hidden md:flex items-center">
                                <span className="w-12 h-12 rounded-full border border-concrete-grey/30 flex items-center justify-center group-hover:bg-int-orange group-hover:border-int-orange group-hover:text-deep-carbon transition-all duration-300">
                                    →
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pricing / Investment Protocols Section */}
            <section className="pricing-section py-32 px-6 md:px-20 bg-deep-carbon border-t border-concrete-grey/20">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold uppercase mb-4">Investment Protocols</h2>
                    <p className="font-technical text-concrete-grey max-w-xl">
                        Trasparenza radicale. Nessun preventivo "a sorpresa". Scegli il tuo livello di ingaggio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PRICING_PACKAGES.map((pkg, i) => (
                        <div key={i} className="pricing-card border border-concrete-grey/20 p-8 flex flex-col justify-between hover:border-int-orange transition-colors duration-300 bg-deep-carbon min-h-[400px]">
                            <div>
                                <div className="font-technical text-int-orange text-xs mb-4">PROTOCOL_0{i + 1}</div>
                                <h3 className="text-2xl font-bold uppercase mb-2">{pkg.name}</h3>
                                <div className="mb-8">
                                    <span className="text-xs text-concrete-grey">{pkg.type}</span>
                                    <div className="text-4xl font-bold">{pkg.price}</div>
                                </div>
                                <ul className="space-y-3 font-technical text-sm text-concrete-grey">
                                    {pkg.features.map((feat, j) => (
                                        <li key={j} className="flex gap-2">
                                            <span className="text-int-orange">&gt;</span> {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10">
                                <Link href="/contact" className="block w-full text-center py-3 border border-concrete-grey/30 hover:bg-int-orange hover:border-int-orange hover:text-deep-carbon transition-all uppercase font-bold text-xs tracking-widest">
                                    Initialize
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="py-20 px-6 md:px-20 border-t border-concrete-grey/20">
                <Link href="/work" className="font-technical text-concrete-grey hover:text-int-orange transition-colors">
                    Next: Selected Work →
                </Link>
            </div>
        </main>
    )
}
