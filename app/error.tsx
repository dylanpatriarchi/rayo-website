"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service if needed
        console.error(error);
    }, [error]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tighter">
                Something went wrong.
            </h2>
            <p className="mb-8 max-w-md text-foreground/60 font-light">
                Si è verificato un errore imprevisto. Il nostro team è stato notificato.
            </p>
            <button
                onClick={() => reset()}
                className="rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
                Riprova
            </button>
        </div>
    );
}
