"use client";

import { motion } from "framer-motion";
import { Check, X, Code2, Clock, DollarSign, ShieldAlert } from "lucide-react";

export default function Comparison() {
    return (
        <section className="py-24 px-6 md:px-12 bg-background border-t border-foreground/5">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 md:text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Perché scegliere Rayo?
                    </h2>
                    <p className="text-lg text-foreground/60 font-light">
                        Costruire internamente un team AI richiede mesi e budget enormi.
                        Rayo ti offre un reparto R&D operativo dal primo giorno.
                    </p>
                </div>

                <div className="flex flex-col gap-8">
                    {/* Desktop Header - Hidden on Mobile */}
                    <div className="hidden md:grid grid-cols-12 gap-4 px-6 text-xs font-mono uppercase tracking-widest text-foreground/40">
                        <div className="col-span-4">Criterio</div>
                        <div className="col-span-4 text-center text-primary font-bold">Rayo Consulting</div>
                        <div className="col-span-4 text-center">In-House Team</div>
                    </div>

                    <div className="space-y-6 md:space-y-2">
                        {/* Row 1 */}
                        <ComparisonRow
                            icon={<Clock size={18} />}
                            criterion="Time to Market"
                            rayo="4 - 6 Settimane"
                            inHouse="6 - 12 Mesi"
                            delay={0}
                        />
                        {/* Row 2 */}
                        <ComparisonRow
                            icon={<DollarSign size={18} />}
                            criterion="Costo Operativo"
                            rayo="€1.5k - €30k / setup"
                            inHouse="€150k+ (Salaries/Yr)"
                            delay={0.1}
                        />
                        {/* Row 3 */}
                        <ComparisonRow
                            icon={<Code2 size={18} />}
                            criterion="Livello Expertise"
                            rayo="Sr. AI Engineers (Top 1%)"
                            inHouse="Generalist / Learning Curve"
                            delay={0.2}
                        />
                        {/* Row 4 */}
                        <ComparisonRow
                            icon={<ShieldAlert size={18} />}
                            criterion="Garanzia & Rischio"
                            rayo="PoC Gratuito (Zero Rischio)"
                            inHouse="Alto Tasso di Fallimento"
                            highlightRayo={true}
                            delay={0.3}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ComparisonRow({ icon, criterion, rayo, inHouse, highlightRayo = false, delay }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.4 }}
            className="flex flex-col md:grid md:grid-cols-12 gap-4 items-start md:items-center p-6 rounded-2xl bg-foreground/[0.02] md:bg-transparent hover:bg-foreground/[0.03] transition-colors duration-300 border border-transparent hover:border-foreground/5"
        >
            <div className="w-full md:col-span-4 flex items-center gap-4 mb-2 md:mb-0">
                <div className="p-3 bg-foreground/5 rounded-xl text-foreground/60 group-hover:text-primary group-hover:bg-primary/10 transition-colors shrink-0">
                    {icon}
                </div>
                <span className="font-medium text-lg md:text-base">{criterion}</span>
            </div>

            <div className="w-full md:col-span-4 flex flex-row md:justify-center items-center justify-between md:text-center">
                <span className="md:hidden text-xs font-mono uppercase text-primary font-bold mr-4">Rayo</span>
                <div className={`inline-block px-4 py-2 rounded-lg font-bold transition-all duration-300 ${highlightRayo ? 'bg-primary/10 text-primary scale-105 shadow-sm' : 'text-foreground group-hover:text-primary'} text-sm md:text-base`}>
                    {rayo}
                </div>
            </div>

            <div className="w-full md:col-span-4 flex flex-row md:justify-center items-center justify-between md:text-center font-light text-foreground/50 group-hover:text-foreground/70 transition-colors pt-2 md:pt-0 border-t border-foreground/5 md:border-0 mt-2 md:mt-0">
                <span className="md:hidden text-xs font-mono uppercase text-foreground/40 mr-4">In-House</span>
                <span className="text-sm md:text-base">{inHouse}</span>
            </div>
        </motion.div>
    );
}
