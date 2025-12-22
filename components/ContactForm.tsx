"use client";

import { useState } from "react";
import clsx from "clsx";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            company: formData.get("company"),
            vat: formData.get("vat"),
            sector: formData.get("sector"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const jsonResponse = await response.json();

            if (response.ok && jsonResponse.response === "OK") {
                setSuccess(true);
            } else {
                console.error("Failed to submit form: Unexpected response", jsonResponse);
                alert("Si è verificato un errore durante l'invio del messaggio. Riprova più tardi.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Si è verificato un errore di connessione. Riprova più tardi.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact-form" className="py-24 px-6 md:px-12 bg-background border-t border-foreground/10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Parla con un Ingegnere</h2>
                <p className="text-lg text-foreground/60 font-light mb-12">Nessun commerciale. Solo soluzioni tecniche.</p>

                {success ? (
                    <div className="p-8 bg-green-50 text-green-800 rounded-2xl border border-green-100 flex flex-col items-center text-center">
                        <svg className="w-16 h-16 mb-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-2xl font-bold mb-2">Messaggio Inviato</h3>
                        <p>Ti risponderemo entro 24 ore lavorative.</p>
                        <button onClick={() => setSuccess(false)} className="mt-6 text-sm underline text-green-700">Invia un altro messaggio</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs uppercase tracking-wider font-bold text-foreground/40">Nome</label>
                                <input name="name" type="text" required className="bg-transparent border-b border-foreground/20 py-3 focus:border-primary focus:outline-none transition-colors" placeholder="Il tuo nome" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs uppercase tracking-wider font-bold text-foreground/40">Email</label>
                                <input name="email" type="email" required className="bg-transparent border-b border-foreground/20 py-3 focus:border-primary focus:outline-none transition-colors" placeholder="nome@azienda.com" />
                            </div>
                        </div>

                        {/* New Fields Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs uppercase tracking-wider font-bold text-foreground/40">Azienda</label>
                                <input name="company" type="text" required className="bg-transparent border-b border-foreground/20 py-3 focus:border-primary focus:outline-none transition-colors" placeholder="Nome Azienda" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs uppercase tracking-wider font-bold text-foreground/40">P.IVA / CF</label>
                                <input name="vat" type="text" className="bg-transparent border-b border-foreground/20 py-3 focus:border-primary focus:outline-none transition-colors" placeholder="Opzionale" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs uppercase tracking-wider font-bold text-foreground/40">Settore</label>
                                <select name="sector" defaultValue="" className="bg-transparent border-b border-foreground/20 py-3 focus:border-primary focus:outline-none transition-colors appearance-none">
                                    <option value="" disabled>Seleziona...</option>
                                    <option value="finance">Finance & Banking</option>
                                    <option value="legal">Legal & Compliance</option>
                                    <option value="manufacturing">Manufacturing</option>
                                    <option value="retail">Retail & E-commerce</option>
                                    <option value="healthcare">Healthcare</option>
                                    <option value="tech">Tech & SaaS</option>
                                    <option value="other">Altro</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs uppercase tracking-wider font-bold text-foreground/40">Messaggio</label>
                            <textarea name="message" required rows={4} className="bg-transparent border-b border-foreground/20 py-3 focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Descrivi brevemente il tuo progetto..." />
                        </div>

                        <div className="flex items-start gap-4 mt-4">
                            <input type="checkbox" id="privacy" required className="mt-1 accent-primary" />
                            <label htmlFor="privacy" className="text-sm font-light text-foreground/60 leading-snug">
                                Acconsento al trattamento dei dati personali secondo la <a href="/privacy-policy" className="underline">Privacy Policy</a>.
                                I dati non saranno mai ceduti a terzi.
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={clsx(
                                "mt-8 bg-foreground text-background py-4 px-12 rounded-full font-bold tracking-wide self-start hover:bg-foreground/90 transition-all",
                                loading && "opacity-70 cursor-wait"
                            )}
                        >
                            {loading ? "Invio in corso..." : "Invia Richiesta"}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
