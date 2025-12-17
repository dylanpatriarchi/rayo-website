export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
    return (
        <div className={className} aria-label="Rayo Consulting">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* L'Asta: Vertical solid rectangle */}
                <rect x="10" y="10" width="20" height="80" className="fill-concrete-grey" />

                {/* L'Arco: Squared block top */}
                <rect x="35" y="10" width="40" height="35" className="fill-concrete-grey" />

                {/* La Spinta: Diagonal bottom, separated, International Orange */}
                {/* Calculated to look like the leg of R, cut at 45 degrees */}
                <path d="M45 55 L85 90 H60 L35 65 Z" className="fill-int-orange" />
                {/* Adjusted using simple path for the diagonal. 
            M45 55: Start below the arch (gap)
            Details: 
            - Arch ends at y=45 (10+35)
            - Asta width 20 (x=10 to 30). Gap 5. Arch starts x=35.
            Let's adjust for "Architectural" feel.
        */}
            </svg>
        </div>
    )
}
