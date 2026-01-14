"use client";

import { SpotlightCard } from "@/components/spotlight-card";

export default function SpotlightCardDemo() {
    return (
        <div className="flex items-center justify-center p-4">
            <SpotlightCard className="max-w-xs transition-all duration-300">
                <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-white/50">Feature</span>
                    <h3 className="text-xl font-bold text-white">Spotlight Effect</h3>
                    <p className="text-sm text-white/60">
                        Hover over this card to see the beautiful spotlight effect follow
                        your cursor.
                    </p>
                </div>
            </SpotlightCard>
        </div>
    );
}
