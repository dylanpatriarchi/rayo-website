'use client'

export default function Marquee({ text, className = "", reverse = false }: { text: string, className?: string, reverse?: boolean }) {
    return (
        <div className={`relative flex overflow-hidden w-full ${className}`}>
            <div className={`animate-marquee whitespace-nowrap flex gap-4 ${reverse ? 'direction-reverse' : ''}`} style={{ animationDirection: reverse ? 'reverse' : 'normal' }}>
                <span className="text-8xl md:text-[12rem] font-bold uppercase opacity-5 text-concrete-grey tracking-tight">
                    {text} • {text} • {text} •
                </span>
                <span className="text-8xl md:text-[12rem] font-bold uppercase opacity-5 text-concrete-grey tracking-tight">
                    {text} • {text} • {text} •
                </span>
            </div>
        </div>
    )
}
