"use client";

import React, { useState } from "react";
import { MessageSquarePlus, X, Send, AlertCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type FeedbackType = "bug" | "feature" | "other";

export function FeedbackCollector() {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState<FeedbackType>("feature");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Capture metadata automatically
        const metadata = {
            type,
            message,
            url: window.location.href,
            userAgent: navigator.userAgent,
            screenSize: `${window.innerWidth}x${window.innerHeight}`,
            timestamp: new Date().toISOString(),
        };

        console.log("Feedback Submitted:", metadata);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setIsSent(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsSent(false);
            setMessage("");
        }, 2000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="h-12 w-12 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 bg-primary"
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageSquarePlus className="h-6 w-6" />}
            </Button>

            {isOpen && (
                <div className="absolute bottom-16 right-0 w-[350px] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all animate-in slide-in-from-bottom-5">
                    <div className="bg-muted/50 p-4 border-b border-border">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <Sparkles className="h-4 w-4 text-primary" />
                            Give Feedback
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">
                            Help us improve UI Hatch with your suggestions or report bugs.
                        </p>
                    </div>

                    {!isSent ? (
                        <form onSubmit={handleSubmit} className="p-4 space-y-4">
                            <div className="grid grid-cols-3 gap-2">
                                {(["feature", "bug", "other"] as FeedbackType[]).map((t) => (
                                    <button
                                        key={t}
                                        type="button"
                                        onClick={() => setType(t)}
                                        className={cn(
                                            "px-2 py-1.5 rounded-md text-[10px] font-bold uppercase transition-all tracking-wider border",
                                            type === t
                                                ? "bg-primary/10 border-primary text-primary"
                                                : "bg-muted border-transparent text-muted-foreground hover:border-border"
                                        )}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>

                            <textarea
                                required
                                placeholder={`Describe the ${type}...`}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full min-h-[120px] rounded-lg border border-input bg-background p-3 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />

                            <Button
                                disabled={isSubmitting || !message}
                                className="w-full h-10 gap-2"
                                type="submit"
                            >
                                {isSubmitting ? "Sending..." : "Send Feedback"}
                                <Send className="h-4 w-4" />
                            </Button>
                        </form>
                    ) : (
                        <div className="flex flex-col items-center justify-center p-12 text-center space-y-3">
                            <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center mb-2">
                                <AlertCircle className="h-6 w-6 text-green-500" />
                            </div>
                            <p className="font-bold text-foreground">Thank you!</p>
                            <p className="text-sm text-muted-foreground">Your feedback has been hatched.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
