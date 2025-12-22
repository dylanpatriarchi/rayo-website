import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const registerGSAP = () => {
    if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }
};

// Register immediately to avoid race conditions
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export const animateTextReveal = (element: HTMLElement | null, delay: number = 0) => {
    if (!element) return;

    // Ensure the element has overflow hidden and a child for the transform
    // But strictly speaking, for a mask reveal, we often animate the element itself from y: 100% to 0
    // inside a parent container with overflow: hidden.
    // Alternatively, we can use clip-path.

    // Let's assume the element passed is the text itself, and we wrap it or animate it.
    // A simple slide up fade in is:

    gsap.fromTo(
        element,
        { y: "100%", opacity: 0 },
        {
            y: "0%",
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            delay,
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
            },
        }
    );
};

export const animateStaggeredList = (elements: HTMLElement[], delay: number = 0) => {
    if (!elements.length) return;

    gsap.fromTo(
        elements,
        { y: 30, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            delay,
            scrollTrigger: {
                trigger: elements[0],
                start: "top 85%",
            },
        }
    );
};

export const animateHeader = (header: HTMLElement | null) => {
    if (!header) return;

    ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
            if (self.direction === 1 && self.scroll() > 50) {
                gsap.to(header, {
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(12px)",
                    duration: 0.4,
                    ease: "power2.out",
                    boxShadow: "0 1px 0 0 rgba(0,0,0,0.05)"
                });
            } else if (self.scroll() < 50) {
                gsap.to(header, {
                    paddingTop: "2rem",
                    paddingBottom: "2rem",
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    backdropFilter: "blur(0px)",
                    duration: 0.4,
                    ease: "power2.out",
                    boxShadow: "none"
                });
            }
        }
    });
};
