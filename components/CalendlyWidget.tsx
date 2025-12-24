"use client";

import { InlineWidget } from "react-calendly";

export default function CalendlyWidget() {
    return (
        <div className="w-full h-[700px] mt-8">
            <InlineWidget
                url="https://calendly.com/rayo-info/30min"
                styles={{
                    height: '100%',
                    width: '100%'
                }}
            />
        </div>
    );
}
