import RoiCalculatorForm from "@/components/RoiCalculatorForm";

export const metadata = {
    title: "ROI Calculator | Rayo Consulting",
    description:
        "Calcola il ROI reale dell'implementazione AI nel tuo processo aziendale. Stima risparmio, payback e costi in 60 secondi.",
    alternates: { canonical: "https://rayo.consulting/roi-calculator" },
};

export default function RoiCalculatorPage() {
    return (
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto">
            {/* Page header */}
            <div className="mb-16">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                    ROI Calculator
                </span>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05] text-foreground mb-6 max-w-3xl">
                    Quanto ti costa non usare l&apos;AI?
                </h1>
                <p className="text-lg md:text-xl text-foreground/50 font-light leading-relaxed max-w-xl">
                    Inserisci i dati del tuo processo manuale. Calcoliamo il risparmio reale.
                </p>
            </div>

            {/* Interactive calculator (client component) */}
            <RoiCalculatorForm />
        </main>
    );
}
