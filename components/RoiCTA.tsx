import Link from "next/link";

export default function RoiCTA() {
    return (
        <section className="py-24 px-6 md:px-12 border-t border-foreground/10 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
                    {/* Left */}
                    <div className="flex-1 max-w-2xl">
                        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-5">ROI Calculator</p>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight mb-6">
                            Quanto ti costa<br />
                            <span className="text-primary">non</span> usare l&apos;AI?
                        </h2>
                        <p className="text-lg text-foreground/60 font-light leading-relaxed">
                            Inserisci il numero di persone, le ore settimanali e il costo orario del processo manuale.
                            In 30 secondi vedi il risparmio reale e il payback stimato.
                        </p>
                    </div>

                    {/* Right: teaser card */}
                    <div className="flex-shrink-0 w-full md:w-80">
                        <div className="border border-foreground/10 rounded-2xl p-8 bg-foreground/[0.02]">
                            {/* Mock result preview */}
                            <div className="space-y-5 mb-8">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-foreground/30 mb-1">Costo processo attuale</p>
                                    <p className="text-3xl font-bold tracking-tighter">€74.750<span className="text-base font-light text-foreground/40">/anno</span></p>
                                </div>
                                <div className="border-t border-foreground/8 pt-5">
                                    <p className="text-xs font-bold uppercase tracking-wider text-foreground/30 mb-1">Risparmio stimato con AI</p>
                                    <p className="text-3xl font-bold tracking-tighter text-primary">€48.590<span className="text-base font-light text-primary/60">/anno</span></p>
                                </div>
                                <div className="border-t border-foreground/8 pt-5 flex gap-6">
                                    <div>
                                        <p className="text-xs text-foreground/30 mb-1">ROI anno 1</p>
                                        <p className="text-xl font-bold text-primary">+745%</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-foreground/30 mb-1">Payback</p>
                                        <p className="text-xl font-bold">1.4 mesi</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-[10px] text-foreground/25 mb-6 font-light">Esempio: 3 persone · 10h/sett · €35/h · 65% efficienza AI</p>
                            <Link
                                href="/roi-calculator"
                                className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold text-sm px-6 py-3.5 rounded-full hover:bg-primary/90 transition-colors"
                            >
                                Calcola il tuo ROI →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
