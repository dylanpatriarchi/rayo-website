import { GlobeDemo } from "@/components/ui/globe-demo";
import { MoveRight } from "lucide-react";

export default function InternationalSection() {
    return (
        <section className="w-full relative py-0 bg-white dark:bg-[#0B0B0F] overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
            <GlobeDemo />
        </section>
    );
}
