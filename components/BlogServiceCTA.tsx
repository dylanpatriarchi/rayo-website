import Link from "next/link";
import { getServiceBySlug } from "@/lib/services-landing";

export default function BlogServiceCTA({ service }: { service: string }) {
    const data = getServiceBySlug(service);
    if (!data) return null;
    return (
        <div className="my-10 p-6 rounded-2xl bg-foreground/5 border border-foreground/10 not-prose">
            <p className="text-sm font-bold uppercase tracking-wider text-foreground/50 mb-2">
                Lo facciamo noi
            </p>
            <p className="text-lg font-medium text-foreground mb-3">{data.title}</p>
            <Link
                href={`/servizi/${data.slug}`}
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
            >
                Scopri come →{" "}
            </Link>
        </div>
    );
}
