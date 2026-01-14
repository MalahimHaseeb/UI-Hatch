"use client";

import { FeedbackCollector } from "@/components/feedback-collector";

export default function FeedbackCollectorDemo() {
    return (
        <div className="h-[400px] flex items-center justify-center border-2 border-dashed border-border rounded-xl relative overflow-hidden bg-muted/20">
            <div className="text-center">
                <p className="text-muted-foreground">The collector button is in the bottom-right of this container.</p>
                <p className="text-xs text-muted-foreground mt-2">(In a real app, it stays fixed to the viewport)</p>
            </div>
            <FeedbackCollector />
        </div>
    );
}
