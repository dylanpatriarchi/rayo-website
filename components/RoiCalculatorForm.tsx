"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const SETTIMANE_ANNO = 46;
const COSTO_RAYO_MIDPOINT = 5750;

function formatCurrency(value: number): string {
    return new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
    }).format(value);
}

function formatNumber(value: number): string {
    return new Intl.NumberFormat("it-IT", { maximumFractionDigits: 0 }).format(value);
}

export default function RoiCalculatorForm() {
    const [personeCoinvolte, setPersoneCoinvolte] = useState(3);
    const [oreSett, setOreSett] = useState(10);
    const [costoOrario, setCostoOrario] = useState(35);
    const [riduzione, setRiduzione] = useState(65);

    const results = useMemo(() => {
        const costoAttuale = personeCoinvolte * oreSett * costoOrario * SETTIMANE_ANNO;
        const risparmioAnnuo = costoAttuale * (riduzione / 100);
        const roiAnno1 = ((risparmioAnnuo - COSTO_RAYO_MIDPOINT) / COSTO_RAYO_MIDPOINT) * 100;
        const payback = risparmioAnnuo > 0 ? COSTO_RAYO_MIDPOINT / (risparmioAnnuo / 12) : 0;
        return { costoAttuale, risparmioAnnuo, roiAnno1, payback };
    }, [personeCoinvolte, oreSett, costoOrario, riduzione]);

    return (
        <div>
            {/* Two-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
                {/* Inputs */}
                <div className="space-y-8">
                    {/* Persone coinvolte */}
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-[0.15em] text-foreground/40 mb-3">
                            Persone coinvolte nel processo
                        </label>
                        <div className="flex items-center gap-4">
                            <input
                                type="number"
                                min={1}
                                max={50}
                                value={personeCoinvolte}
                                onChange={(e) =>
                                    setPersoneCoinvolte(Math.min(50, Math.max(1, Number(e.target.value))))
                                }
                                className="w-full bg-transparent border border-foreground/15 rounded-xl px-5 py-4 text-2xl font-bold text-foreground focus:outline-none focus:border-primary transition-colors duration-200"
                            />
                            <span className="text-foreground/30 font-light text-sm shrink-0">persone</span>
                        </div>
                    </div>

                    {/* Ore settimanali */}
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-[0.15em] text-foreground/40 mb-3">
                            Ore settimanali dedicate
                        </label>
                        <div className="flex items-center gap-4">
                            <input
                                type="number"
                                min={1}
                                max={80}
                                value={oreSett}
                                onChange={(e) =>
                                    setOreSett(Math.min(80, Math.max(1, Number(e.target.value))))
                                }
                                className="w-full bg-transparent border border-foreground/15 rounded-xl px-5 py-4 text-2xl font-bold text-foreground focus:outline-none focus:border-primary transition-colors duration-200"
                            />
                            <span className="text-foreground/30 font-light text-sm shrink-0">ore/sett.</span>
                        </div>
                    </div>

                    {/* Costo orario */}
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-[0.15em] text-foreground/40 mb-3">
                            Costo orario medio (€)
                        </label>
                        <div className="flex items-center gap-4">
                            <input
                                type="number"
                                min={10}
                                max={200}
                                value={costoOrario}
                                onChange={(e) =>
                                    setCostoOrario(Math.min(200, Math.max(10, Number(e.target.value))))
                                }
                                className="w-full bg-transparent border border-foreground/15 rounded-xl px-5 py-4 text-2xl font-bold text-foreground focus:outline-none focus:border-primary transition-colors duration-200"
                            />
                            <span className="text-foreground/30 font-light text-sm shrink-0">€/ora</span>
                        </div>
                    </div>

                    {/* Settimane anno — fixed info */}
                    <div className="flex items-center gap-3 px-5 py-4 bg-foreground/[0.03] border border-foreground/8 rounded-xl">
                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-foreground/30">
                            Settimane lavorative/anno
                        </span>
                        <span className="ml-auto text-lg font-bold text-foreground/40">
                            {SETTIMANE_ANNO}
                        </span>
                    </div>

                    {/* Efficienza stimata con AI */}
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <label className="text-xs font-bold uppercase tracking-[0.15em] text-foreground/40">
                                Efficienza stimata con AI
                            </label>
                            <span className="text-2xl font-bold text-primary">{riduzione}%</span>
                        </div>
                        <input
                            type="range"
                            min={40}
                            max={85}
                            step={1}
                            value={riduzione}
                            onChange={(e) => setRiduzione(Number(e.target.value))}
                            className="w-full h-1.5 bg-foreground/10 rounded-full appearance-none cursor-pointer accent-primary"
                        />
                        <div className="flex justify-between mt-2">
                            <span className="text-xs text-foreground/25">40%</span>
                            <span className="text-xs text-foreground/25">85%</span>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="space-y-4">
                    {/* Costo attuale */}
                    <div className="border border-foreground/10 rounded-2xl p-7">
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-foreground/35 mb-3">
                            Costo processo attuale
                        </p>
                        <p className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground leading-none">
                            {formatCurrency(results.costoAttuale)}
                        </p>
                        <p className="text-sm text-foreground/35 font-light mt-2">/ anno</p>
                    </div>

                    {/* Risparmio stimato */}
                    <div className="border border-primary/20 bg-primary/[0.03] rounded-2xl p-7">
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-foreground/35 mb-3">
                            Risparmio stimato con AI
                        </p>
                        <p className="text-4xl md:text-5xl font-bold tracking-tighter text-primary leading-none">
                            {formatCurrency(results.risparmioAnnuo)}
                        </p>
                        <p className="text-sm text-foreground/35 font-light mt-2">
                            / anno &nbsp;&middot;&nbsp; riducendo il tempo del {riduzione}%
                        </p>
                    </div>

                    {/* ROI + Payback row */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="border border-foreground/10 rounded-2xl p-7">
                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-foreground/35 mb-3">
                                ROI stimato anno 1
                            </p>
                            <p
                                className={[
                                    "text-3xl md:text-4xl font-bold tracking-tighter leading-none",
                                    results.roiAnno1 >= 0 ? "text-primary" : "text-foreground/50",
                                ].join(" ")}
                            >
                                {results.roiAnno1 >= 0 ? "+" : ""}
                                {formatNumber(results.roiAnno1)}%
                            </p>
                        </div>

                        <div className="border border-foreground/10 rounded-2xl p-7">
                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-foreground/35 mb-3">
                                Payback stimato
                            </p>
                            <p className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground leading-none">
                                {results.payback > 0 ? `${results.payback.toFixed(1)}` : "—"}
                                <span className="text-lg font-medium text-foreground/40 ml-1">mesi</span>
                            </p>
                        </div>
                    </div>

                    {/* Stima investimento Rayo */}
                    <div className="border border-foreground/8 rounded-2xl p-7 bg-foreground/[0.02]">
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-foreground/35 mb-3">
                            Investimento tipico Rayo
                        </p>
                        <p className="text-2xl font-bold tracking-tighter text-foreground/60">
                            ~€3.500 – €8.000
                        </p>
                        <p className="text-sm text-foreground/30 font-light mt-1">
                            progetto PoC incluso
                        </p>
                    </div>

                    {/* Disclaimer */}
                    <p className="text-xs text-foreground/25 font-light leading-relaxed px-1">
                        Stima basata su medie di progetto. I risultati reali variano in base alla
                        complessità del sistema.
                    </p>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="border-t border-foreground/10 pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                    <p className="text-xl md:text-2xl font-bold tracking-tight text-foreground mb-1">
                        Vuoi una stima personalizzata?
                    </p>
                    <p className="text-sm text-foreground/40 font-light">
                        Un ingegnere Rayo analizza il tuo caso specifico. Gratuitamente.
                    </p>
                </div>
                <Link
                    href="/contact"
                    className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:opacity-90 transition-opacity duration-200 text-sm whitespace-nowrap shrink-0"
                >
                    Richiedi stima personalizzata
                </Link>
            </div>
        </div>
    );
}
