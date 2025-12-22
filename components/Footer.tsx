import Image from "next/image";

export default function Footer() {
    return (
        <footer id="contact" className="py-24 px-6 md:px-12 bg-background border-t border-foreground/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                <div>
                    <div className="mb-12">
                        <Image
                            src="/logo.svg"
                            alt="Rayo Consulting Logo"
                            width={280}
                            height={96}
                            className="h-24 w-auto"
                        />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
                        Let&apos;s build <br />
                        intelligence.
                    </h2>
                    <a
                        href="mailto:info@rayo.consulting"
                        className="text-xl md:text-2xl text-primary hover:text-blue-600 transition-colors underline underline-offset-4 decoration-1"
                    >
                        info@rayo.consulting
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 text-center md:text-left">
                    <div className="flex flex-col gap-1 text-sm font-light text-foreground/60">
                        <p className="font-bold text-foreground">Rayo Consulting di Patriarchi Dylan</p>
                        <p>P.IVA 03988190546</p>
                        <p>Vocabolo Marcheggiane 56/C</p>
                        <p>Breccione Zona Industriale, 06018 PG</p>
                        <a href="mailto:info@rayo.consulting" className="hover:text-primary transition-colors mt-2">info@rayo.consulting</a>
                    </div>

                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex gap-4 text-sm font-medium">
                            <a href="https://www.linkedin.com/company/rayoconsulting" target="_blank" rel="noopener noreferrer" className="hover:opacity-50">LinkedIn</a>
                            <a href="https://www.instagram.com/rayo.consulting/" target="_blank" rel="noopener noreferrer" className="hover:opacity-50">Instagram</a>
                        </div>
                        <div className="flex gap-4 text-xs font-light text-foreground/40">
                            <a href="/privacy-policy" className="hover:opacity-70">Privacy Policy</a>
                            <a href="/cookie-policy" className="hover:opacity-70">Cookie Policy</a>
                        </div>
                        <p className="text-xs font-light text-foreground/30 mt-auto">
                            © {new Date().getFullYear()} Rayo Consulting. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
