"use client";

import { useState } from "react";
import clsx from "clsx";
import { faqs } from "@/lib/faq";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-16 md:py-24 px-6 md:px-12 bg-background border-t border-foreground/10">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">Domande Frequenti</h2>

                <div className="flex flex-col">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-foreground/10">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full py-8 flex justify-between items-center text-left hover:opacity-70 transition-opacity"
                            >
                                <span className="text-lg md:text-xl font-medium pr-8">{faq.question}</span>
                                <span className={clsx("text-2xl font-light transition-transform duration-300", openIndex === index ? "rotate-45" : "rotate-0")}>
                                    +
                                </span>
                            </button>
                            <div
                                className={clsx(
                                    "overflow-hidden transition-all duration-500 ease-out",
                                    openIndex === index ? "max-h-[300px] opacity-100 pb-8" : "max-h-0 opacity-0 pb-0"
                                )}
                            >
                                <p className="text-foreground/70 font-light leading-relaxed max-w-2xl">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
