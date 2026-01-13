"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Check, Key, Zap, Lock, Globe, Layers, Download, ChevronDown, Sparkles, ArrowRight, Star, MessageCircle, Rocket } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

function KartaDemo() {
    const [activeTab, setActiveTab] = useState<"generate" | "settings">("generate");
    const containerRef = useRef<HTMLDivElement>(null);

    // Scroll Animation Logic
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Transform: Start tilted (bent), end flat (straight)
    const rotateX = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0.5, 1]);

    return (
        <div ref={containerRef} className="mt-24 w-full max-w-5xl mx-auto perspective-[2000px] h-[800px] flex items-center justify-center relative">

            <motion.div
                style={{ rotateX, scale, opacity }}
                className="w-full h-full relative"
            >
                {/* 1. Underlying Fake Page (Blurred Context) */}
                <div className="absolute inset-0 bg-[#F3F2EF] rounded-2xl border border-gray-200 shadow-2xl overflow-hidden flex flex-col">
                    {/* Chrome Toolbar */}
                    <div className="bg-[#DFE1E5] px-4 py-3 flex items-center gap-4 border-b border-gray-300 flex-shrink-0">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/10"></div>
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10"></div>
                            <div className="w-3 h-3 rounded-full bg-[#28C840] border border-black/10"></div>
                        </div>
                        <div className="flex-1 bg-white rounded-md h-7 px-3 flex items-center gap-2 text-xs text-gray-500 shadow-sm border border-gray-200">
                            <Lock size={10} className="text-gray-400" />
                            <span className="text-gray-400">linkedin.com/in/dylanpatriarchi</span>
                        </div>
                    </div>

                    {/* Fake LinkedIn Header */}
                    <div className="h-14 bg-white border-b border-gray-200 flex items-center px-8 gap-4">
                        <div className="w-8 h-8 bg-[#0A66C2] rounded"></div>
                        <div className="w-64 h-8 bg-gray-100 rounded-md"></div>
                        <div className="ml-auto flex gap-6">
                            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                        </div>
                    </div>

                    {/* Fake Profile Content */}
                    <div className="max-w-4xl mx-auto mt-6 bg-white rounded-xl border border-gray-300 h-[600px] relative overflow-hidden">
                        <div className="h-40 bg-gradient-to-r from-blue-100 to-blue-200"></div>
                        <div className="px-8 relative">
                            <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-200 -mt-20 mb-4"></div>
                            <div className="h-8 w-64 bg-gray-800 rounded mb-3"></div>
                            <div className="h-4 w-96 bg-gray-400 rounded mb-6"></div>
                            <div className="flex gap-2">
                                <div className="h-8 w-24 bg-[#0A66C2] rounded-full"></div>
                                <div className="h-8 w-24 bg-white border border-gray-400 rounded-full"></div>
                            </div>
                        </div>
                        {/* Blur Overlay to simulate "behind extension" focus */}
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
                    </div>
                </div>

                {/* 2. Interactive Extension Popup (Floating on top) */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="absolute top-20 right-[15%] w-[380px] bg-white rounded-[24px] shadow-2xl border border-gray-100 overflow-hidden flex flex-col z-20"
                >
                    {/* Popup Header */}
                    <div className="px-6 py-5 flex items-center justify-between bg-white">
                        <div className="flex items-center gap-3">
                            <Image src="/favicon.svg" width={32} height={32} alt="Karta Logo" className="w-8 h-8" />
                            <span className="font-bold text-xl tracking-tight text-black">Karta</span>
                        </div>
                        <div className="bg-[#F3F4F6] p-1 rounded-full flex text-xs font-medium relative">
                            {/* Animated Tab Background */}
                            <motion.div
                                className="absolute top-1 bottom-1 bg-white rounded-full shadow-sm z-0"
                                initial={false}
                                animate={{
                                    x: activeTab === 'generate' ? 4 : 86,
                                    width: activeTab === 'generate' ? 82 : 78
                                }}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />

                            <button
                                onClick={() => setActiveTab("generate")}
                                className={`px-4 py-1.5 rounded-full z-10 transition-colors relative ${activeTab === 'generate' ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`}
                            >
                                Generate
                            </button>
                            <button
                                onClick={() => setActiveTab("settings")}
                                className={`px-4 py-1.5 rounded-full z-10 transition-colors relative ${activeTab === 'settings' ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`}
                            >
                                Settings
                            </button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="px-6 pb-6 min-h-[500px] bg-white">
                        <AnimatePresence mode="wait">
                            {activeTab === "generate" ? (
                                <motion.div
                                    key="generate"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.2 }}
                                    className="space-y-6 pt-2"
                                >
                                    {/* Settings Card for Generate Tab */}
                                    <div className="bg-white rounded-3xl p-1 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-gray-100">
                                        <div className="p-4 space-y-4">
                                            {/* Model Select */}
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">
                                                    <Sparkles size={11} className="text-[#0047FF]" /> Model
                                                </div>
                                                <div className="w-full bg-[#f9f9f9] hover:bg-gray-50 transition-colors rounded-xl px-4 py-3 flex items-center justify-between text-sm font-medium text-gray-900 cursor-pointer group">
                                                    <span>OpenAI GPT-5.2</span>
                                                    <ChevronDown size={16} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                                                </div>
                                            </div>

                                            {/* Language Select */}
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">
                                                    <Globe size={11} className="text-[#0047FF]" /> Language
                                                </div>
                                                <div className="w-full bg-[#f9f9f9] hover:bg-gray-50 transition-colors rounded-xl px-4 py-3 flex items-center justify-between text-sm font-medium text-gray-900 cursor-pointer group">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-base">🇮🇹</span>
                                                        <span>Italian</span>
                                                    </div>
                                                    <ChevronDown size={16} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                                                </div>
                                            </div>

                                            {/* Tone Select */}
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">
                                                    <MessageCircle size={11} className="text-[#0047FF]" /> Tone
                                                </div>
                                                <div className="w-full bg-[#f9f9f9] hover:bg-gray-50 transition-colors rounded-xl px-4 py-3 flex items-center justify-between text-sm font-medium text-gray-900 cursor-pointer group">
                                                    <div className="flex items-center gap-2">
                                                        <Rocket size={16} className="text-orange-500" />
                                                        <span>Bold</span>
                                                    </div>
                                                    <ChevronDown size={16} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Generate Button */}
                                    <button className="w-full bg-black hover:bg-gray-800 text-white rounded-full h-14 font-semibold text-base flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                                        <Sparkles size={18} />
                                        Generate Icebreakers
                                        <ArrowRight size={18} className="ml-1 opacity-50" />
                                    </button>

                                    {/* Result Placeholder */}
                                    <div className="bg-white rounded-3xl p-5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100/50 flex gap-4 opacity-40 blur-[0.5px]">
                                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-xs font-bold text-gray-300 flex-shrink-0">1</div>
                                        <div className="space-y-2">
                                            <div className="h-2 w-full bg-gray-100 rounded"></div>
                                            <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                                            <div className="h-2 w-4/6 bg-gray-100 rounded"></div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="settings"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.2 }}
                                    className="space-y-4 pt-2"
                                >
                                    <div className="bg-white rounded-[24px] p-5 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-gray-100 space-y-5">
                                        {/* Inputs with labels matching screenshot style */}
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-800 ml-1">OpenAI API Key</label>
                                            <input
                                                type="password"
                                                value="sk-proj-........................"
                                                readOnly
                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-500 font-mono focus:outline-none focus:ring-2 focus:ring-[#0047FF]/20 focus:border-[#0047FF]"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-800 ml-1">Anthropic API Key</label>
                                            <input
                                                type="text"
                                                placeholder="sk-ant-..."
                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 font-mono focus:outline-none focus:ring-2 focus:ring-[#0047FF]/20 focus:border-[#0047FF]"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-800 ml-1">Gemini API Key</label>
                                            <input
                                                type="text"
                                                placeholder="Alza..."
                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 font-mono focus:outline-none focus:ring-2 focus:ring-[#0047FF]/20 focus:border-[#0047FF]"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-800 ml-1">DeepSeek API Key</label>
                                            <input
                                                type="text"
                                                placeholder="ds-..."
                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 font-mono focus:outline-none focus:ring-2 focus:ring-[#0047FF]/20 focus:border-[#0047FF]"
                                            />
                                        </div>
                                    </div>

                                    <button className="w-full bg-black hover:bg-gray-900 text-white rounded-full h-14 font-bold text-sm shadow-xl hover:shadow-2xl transform hover:scale-[1.01] active:scale-[0.99] transition-all">
                                        Save Changes
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default function KartaPage() {
    return (
        <main className="min-h-screen bg-white text-black pt-32 pb-20">
            {/* 1. HERO SECTION */}
            <section className="relative px-6 md:px-12 max-w-7xl mx-auto mb-32 flex flex-col items-center text-center">

                {/* Product Tagline / Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-[#0047FF]"></span>
                    <span className="text-xs font-semibold tracking-wide uppercase text-gray-500">v1.0 Disponibile Ora</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-8 max-w-4xl"
                >
                    Il Generatore di Icebreaker <br />
                    <span className="text-[#0047FF]">LinkedIn, fatto bene.</span>
                </motion.h1>

                {/* Subhead */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl leading-relaxed mb-10"
                >
                    Smetti di fissare lo schermo cercando l'apertura perfetta.
                    Karta analizza il profilo e genera 3 messaggi iper-personalizzati in secondi, usando le tue chiavi AI.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <button className="h-14 px-8 rounded-full bg-[#0047FF] text-white font-semibold text-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30 flex items-center gap-2">
                        <Download size={20} />
                        Aggiungi a Chrome
                    </button>
                    <a
                        href="https://github.com/dylanpatriarchi/karta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-14 px-8 rounded-full bg-gray-50 text-gray-900 border border-gray-200 font-medium text-lg hover:bg-gray-100 transition-all flex items-center gap-2"
                    >
                        <Star size={20} className="fill-current text-yellow-400" />
                        Star on GitHub
                    </a>
                </motion.div>

                {/* Interactive 3D Mockup */}
                <KartaDemo />
            </section>

            {/* 2. THE PROBLEM (Editorial Statement) */}
            <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="max-w-5xl">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-12">
                        Le richieste generiche <br />
                        <span className="text-gray-300">vengono ignorate.</span>
                    </h2>
                    <div className="w-full h-px bg-gray-200 mb-12"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <p className="text-xl md:text-2xl text-gray-900 font-light leading-relaxed">
                            Un prospect medio riceve decine di messaggi "Vorrei aggiungerti alla mia rete" ogni giorno.
                            Li ignorano tutti.
                        </p>
                        <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
                            Per distinguerti, devi essere rilevante. Ma leggere ogni profilo e gli ultimi post richiede 10 minuti per lead.
                            <br /><strong className="text-[#0047FF] font-medium">Karta lo fa in 3 secondi.</strong>
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. HOW IT WORKS (Minimal Process) */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0047FF]">Process</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {/* Step 01 */}
                    <div className="border-t border-gray-200 pt-8 group cursor-default">
                        <span className="text-xs font-mono text-[#0047FF] mb-4 block">01</span>
                        <h3 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-[#0047FF] transition-colors">Scraping</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Karta legge Nome, Headline, e gli ultimi 3 post per capire il contesto reale del prospect.
                        </p>
                    </div>
                    {/* Step 02 */}
                    <div className="border-t border-gray-200 pt-8 group cursor-default">
                        <span className="text-xs font-mono text-[#0047FF] mb-4 block">02</span>
                        <h3 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-[#0047FF] transition-colors">Reasoning</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Il modello AI (GPT-5, Sonnet, etc.) identifica hook non banali e interessi comuni.
                        </p>
                    </div>
                    {/* Step 03 */}
                    <div className="border-t border-gray-200 pt-8 group cursor-default">
                        <span className="text-xs font-mono text-[#0047FF] mb-4 block">03</span>
                        <h3 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-[#0047FF] transition-colors">Execution</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Genera 3 opzioni (Bold, Casual, Pro) pronte per essere inviate con un click.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. FEATURES (Editorial Grid) */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0047FF]">Capabilities</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16">
                    {/* Feature 1 */}
                    <div className="flex flex-col gap-6">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50">
                            <Lock size={24} className="text-gray-900" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Privacy First Architecture</h3>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                Niente server. Niente database. Le tue chiavi API vivono criptate nel tuo browser.
                                Nessun dato dei tuoi lead viene mai salvato da noi.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col gap-6">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50">
                            <Globe size={24} className="text-gray-900" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Native Polyglot</h3>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                Fai prospezione in DACH o LATAM? Karta rileva la lingua del profilo e genera
                                icebreaker madrelingua in Italiano, Inglese, Tedesco, Spagnolo e altre 6 lingue.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 - BYOK (Expanded) */}
                    <div className="lg:col-span-2 border-t border-gray-100 pt-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0047FF]/5 text-[#0047FF] text-xs font-bold uppercase tracking-wider mb-6">
                                    Fair Price Model
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                                    Bring Your Own Key.
                                </h3>
                                <p className="text-lg text-gray-500 leading-relaxed mb-8">
                                    Non ti addebitiamo 30€/mese per "AI Features". Paghi il prezzo wholesale
                                    direttamente ai provider (OpenAI, Anthropic).
                                    <br />
                                    <span className="text-gray-900 font-medium">Spendi circa 1€ per 500 generazioni.</span>
                                </p>
                            </div>

                            {/* Comparison / Tick list */}
                            <div className="bg-gray-50 rounded-3xl p-8 md:p-10">
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-[#0047FF] flex items-center justify-center shrink-0">
                                            <Check size={12} className="text-white" />
                                        </div>
                                        <div>
                                            <span className="block font-bold text-gray-900">Zero Commissioni</span>
                                            <span className="text-sm text-gray-500">Paghi solo quello che consumi</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-[#0047FF] flex items-center justify-center shrink-0">
                                            <Check size={12} className="text-white" />
                                        </div>
                                        <div>
                                            <span className="block font-bold text-gray-900">Modelli Premium</span>
                                            <span className="text-sm text-gray-500">Accedi a GPT-5 e Claude 3.5 Opus</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-[#0047FF] flex items-center justify-center shrink-0">
                                            <Check size={12} className="text-white" />
                                        </div>
                                        <div>
                                            <span className="block font-bold text-gray-900">Total Control</span>
                                            <span className="text-sm text-gray-500">Cambia provider quando vuoi</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FAQ (Accordion Style) */}
            <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Domande Frequenti</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </section>

            {/* 7. BOTTOM CTA */}
            <section className="py-32 text-center bg-white text-gray-900 rounded-t-[4rem] -mb-20 pb-40 relative z-10 overflow-hidden shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.05)]">
                {/* Blue Glow Ambient Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#0047FF]/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-3xl mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-gray-900">
                        Pronto a rompere il ghiaccio?
                    </h2>
                    <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
                        Inizia a chiudere più deal con la tua AI personale per LinkedIn.
                    </p>
                    <button className="h-16 px-10 rounded-full bg-[#0047FF] text-white font-bold text-xl hover:bg-blue-600 transition-all shadow-[0_8px_30px_rgb(0,71,255,0.4)] hover:shadow-[0_8px_40px_rgb(0,71,255,0.6)] flex items-center gap-3 mx-auto transform hover:-translate-y-1">
                        <Download size={24} />
                        Aggiungi a Chrome - È Gratis
                    </button>
                    <p className="mt-8 text-xs text-gray-400 uppercase tracking-[0.2em]">
                        Funziona su Chrome, Arc e Edge
                    </p>
                    <div className="mt-12 pt-12 border-t border-gray-100 flex justify-center">
                        <a href="/karta/privacy" className="text-sm text-gray-400 hover:text-[#0047FF] underline underline-offset-4 transition-colors">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

const faqs = [
    {
        question: "Karta è gratuita?",
        answer: "L'estensione Karta è gratuita da scaricare. Tuttavia, poiché segue un modello \"Bring Your Own Key\" (BYOK), hai bisogno della tua chiave API personale da un provider AI (come OpenAI o Anthropic). Paghi loro direttamente per l'utilizzo, che tipicamente è molto economico (pochi centesimi per centinaia di icebreaker). Noi non addebitiamo alcun abbonamento mensile."
    },
    {
        question: "Dove vengono salvate le mie chiavi API? È sicuro?",
        answer: "La tua privacy è la nostra priorità. Le tue chiavi API vengono salvate localmente sul tuo dispositivo utilizzando l'API secure storage di Chrome (chrome.storage.local). Non vengono mai inviate ai nostri server (perché non ne abbiamo in realtà!). Vengono utilizzate solo per autenticare le richieste direttamente dal tuo browser al provider AI."
    },
    {
        question: "Quali modelli AI supporta Karta?",
        answer: "Karta ti dà la libertà di scelta. Attualmente supportiamo: OpenAI (GPT-5.2, GPT-5 Mini, o3 Mini), Anthropic (Claude 3.5 Sonnet), Google (Gemini 3 Pro), DeepSeek (DeepSeek V3.2). Puoi passare da un modello all'altro istantaneamente nella tab delle impostazioni."
    },
    {
        question: "Quali informazioni legge Karta da LinkedIn?",
        answer: "Per generare icebreaker personalizzati, Karta legge le informazioni pubbliche della tab del profilo attivo: Nome, Headline, Sezione Info, Esperienza e il testo dei 3 post più recenti. Non facciamo scraping di indirizzi email o informazioni di contatto private."
    },
    {
        question: "Karta funziona in lingue diverse dall'inglese?",
        answer: "Sì! Puoi selezionare la tua lingua di destinazione nel popup dell'estensione. Le lingue supportate includono Inglese, Italiano, Spagnolo, Tedesco, Francese, Portoghese, Olandese, Russo, Cinese e Giapponese. L'AI analizzerà il profilo (anche se è in un'altra lingua) e scriverà l'icebreaker nella lingua che hai scelto."
    },
    {
        question: "Posso cambiare il tono dei messaggi?",
        answer: "Assolutamente. Puoi scegliere tra \"Professional\" (tono business standard e sicuro), \"Casual\" (amichevole, colloquiale), o \"Bold\" (diretto e creativo) per adattarsi al tuo stile personale e al prospect che stai contattando."
    },
    {
        question: "Perché devo aprire un profilo LinkedIn prima?",
        answer: "Karta è un'estensione \"context-aware\". Deve \"vedere\" il profilo che stai visitando per estrarre i dettagli necessari alla personalizzazione. Se provi a usarla su una pagina non LinkedIn, ti chiederà di navigare su un profilo valido."
    },
    {
        question: "Karta automatizza l'invio dei messaggi?",
        answer: "No. Karta è un assistente di produttività, non un bot. Genera il testo per te, ma devi cliccare su \"Copia\" e incollarlo nel campo messaggio tu stesso. Questo mantiene il tuo account al sicuro e ti assicura di avere l'ultima parola su tutto ciò che invii."
    },
    {
        question: "Cosa succede se l'AI genera qualcosa di sbagliato?",
        answer: "Sebbene il nostro prompt sia ingegnerizzato rigorosamente per essere rilevante (il SYSTEM_PROMPT impone regole severe), l'AI può occasionalmente avere allucinazioni. Raccomandiamo sempre di leggere velocemente l'icebreaker generato prima di inviarlo. Karta fornisce 3 opzioni—se una non è perfetta, un'altra probabilmente lo è!"
    },
    {
        question: "Ho bisogno di un account LinkedIn Premium?",
        answer: "No, Karta funziona con qualsiasi tipo di account LinkedIn (Free, Premium, Sales Navigator). Finché puoi visualizzare la pagina del profilo, Karta può analizzarla."
    }
];

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden transition-all duration-200 hover:border-gray-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left"
            >
                <span className="font-bold text-lg text-gray-900">{question}</span>
                <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} className="text-gray-400" />
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 text-gray-500 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
