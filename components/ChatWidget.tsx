"use client";

import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

interface ChatResponse {
    response: string;
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string }[]>([
        { role: 'bot', content: 'Ciao, sono l\'AI di Rayo. Come posso aiutarti a ottimizzare i tuoi processi?' }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userMsg = inputValue;
        setInputValue("");
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setIsLoading(true);

        try {
            const res = await fetch('https://chat.rayo.consulting/webhook/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMsg }),
            });

            if (!res.ok) throw new Error('Network response was not ok');

            const data: ChatResponse = await res.json();
            setMessages(prev => [...prev, { role: 'bot', content: data.response }]);
        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, { role: 'bot', content: 'Mi dispiace, si è verificato un errore di connessione.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={clsx(
                    "fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-105",
                    isOpen ? "bg-foreground text-background rotate-90" : "bg-primary text-white"
                )}
            >
                {isOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                )}
            </button>

            {/* Chat Window */}
            <div
                className={clsx(
                    "fixed bottom-28 right-8 z-40 w-[90%] md:w-[400px] bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden transition-all duration-300 transform origin-bottom-right",
                    isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4 pointer-events-none"
                )}
                style={{ height: '600px', maxHeight: 'calc(100vh - 150px)' }}
            >
                {/* Header */}
                <div className="bg-primary/5 p-6 border-b border-foreground/5 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <h3 className="font-bold text-sm tracking-wide">Rayo AI Assistant</h3>
                    </div>
                </div>

                {/* Messages */}
                <div className="p-6 overflow-y-auto h-[cale(100%-140px)] flex flex-col gap-4" style={{ height: 'calc(100% - 130px)' }}>
                    {messages.map((msg, idx) => (
                        <div key={idx} className={clsx("flex flex-col max-w-[85%]", msg.role === 'user' ? "self-end items-end" : "self-start items-start")}>
                            <div className={clsx(
                                "px-5 py-3 text-sm leading-relaxed",
                                msg.role === 'user'
                                    ? "bg-primary text-white rounded-2xl rounded-tr-sm"
                                    : "bg-foreground/5 text-foreground rounded-2xl rounded-tl-sm"
                            )}>
                                {msg.content}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="self-start items-start max-w-[85%]">
                            <div className="px-5 py-4 bg-foreground/5 rounded-2xl rounded-tl-sm flex gap-1">
                                <div className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce"></div>
                                <div className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:0.1s]"></div>
                                <div className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="absolute bottom-0 w-full p-4 bg-white/50 border-t border-foreground/5 backdrop-blur-md">
                    <form onSubmit={handleSubmit} className="flex gap-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Chiedi qualcosa..."
                            className="flex-1 bg-transparent border border-foreground/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !inputValue.trim()}
                            className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
