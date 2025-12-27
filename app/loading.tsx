export default function Loading() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-4">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-foreground/10 border-t-primary"></div>
                <p className="animate-pulse text-sm font-light tracking-widest text-foreground/50">
                    LOADING...
                </p>
            </div>
        </div>
    );
}
