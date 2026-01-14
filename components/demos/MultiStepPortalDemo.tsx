"use client";

import { MultiStepPortal } from "@/components/multi-step-portal";

export default function MultiStepPortalDemo() {
    const steps = [
        {
            title: "Account",
            description: "Setup your basic credentials",
            content: (
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <input placeholder="First Name" className="p-2 border rounded-md" />
                        <input placeholder="Last Name" className="p-2 border rounded-md" />
                    </div>
                    <input placeholder="Email Address" className="w-full p-2 border rounded-md" />
                </div>
            ),
        },
        {
            title: "Profile",
            description: "Personalize your experience",
            content: (
                <div className="space-y-4">
                    <select className="w-full p-2 border rounded-md bg-transparent">
                        <option>Frontend Developer</option>
                        <option>Backend Developer</option>
                        <option>UI Designer</option>
                    </select>
                    <textarea placeholder="Tell us about yourself..." className="w-full p-2 border rounded-md h-24" />
                </div>
            ),
        },
        {
            title: "Settings",
            description: "Finalize your preferences",
            content: (
                <div className="space-y-3">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4" />
                        <span>Enable email notifications</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4" />
                        <span>Opt-in for beta features</span>
                    </label>
                </div>
            ),
        },
    ];

    return (
        <div className="py-8 bg-muted/10 rounded-xl px-4">
            <MultiStepPortal
                steps={steps}
                onComplete={(data) => alert("Hatched! " + JSON.stringify(data))}
            />
        </div>
    );
}
