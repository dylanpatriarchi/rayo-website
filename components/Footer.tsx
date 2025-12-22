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
                        href="mailto:hello@rayo.consulting"
                        className="text-xl md:text-2xl text-primary hover:text-blue-600 transition-colors underline underline-offset-4 decoration-1"
                    >
                        hello@rayo.consulting
                    </a>
                </div>

                <div className="text-right">
                    <p className="text-sm font-light text-foreground/50 mb-2">
                        Rayo Consulting © {new Date().getFullYear()}
                    </p>
                    <div className="flex gap-4 text-sm font-medium">
                        <a href="#" className="hover:opacity-50">LinkedIn</a>
                        <a href="#" className="hover:opacity-50">Twitter</a>
                        <a href="#" className="hover:opacity-50">Legal</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
