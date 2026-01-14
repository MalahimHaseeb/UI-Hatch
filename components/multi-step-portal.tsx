"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, ChevronLeft } from "lucide-react";

interface Step {
    title: string;
    description?: string;
    content: React.ReactNode;
}

interface MultiStepPortalProps {
    steps: Step[];
    onComplete: (data: any) => void;
    className?: string;
}

export function MultiStepPortal({ steps, onComplete, className }: MultiStepPortalProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const totalSteps = steps.length;

    const next = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep((s) => s + 1);
        } else {
            onComplete({ timestamp: new Date() });
        }
    };

    const prev = () => {
        if (currentStep > 0) {
            setCurrentStep((s) => s - 1);
        }
    };

    return (
        <div className={cn("max-w-2xl mx-auto w-full space-y-8", className)}>
            {/* Step Indicators */}
            <div className="relative flex justify-between">
                <div className="absolute top-5 left-0 w-full h-0.5 bg-muted -z-10" />
                <div
                    className="absolute top-5 left-0 h-0.5 bg-primary transition-all duration-500 -z-10"
                    style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
                />

                {steps.map((step, idx) => {
                    const isCompleted = currentStep > idx;
                    const isActive = currentStep === idx;

                    return (
                        <div key={idx} className="flex flex-col items-center">
                            <div
                                className={cn(
                                    "h-10 w-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                                    isCompleted ? "bg-primary border-primary text-white" :
                                        isActive ? "bg-background border-primary text-primary shadow-[0_0_15px_rgba(var(--primary),0.3)]" :
                                            "bg-muted border-transparent text-muted-foreground"
                                )}
                            >
                                {isCompleted ? <Check className="h-5 w-5" /> : <span>{idx + 1}</span>}
                            </div>
                            <div className="mt-2 text-center">
                                <p className={cn("text-xs font-bold uppercase tracking-tighter", isActive ? "text-primary" : "text-muted-foreground")}>
                                    {step.title}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Content Area */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm min-h-[300px] transition-all animate-in fade-in zoom-in-95 duration-300">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-foreground">{steps[currentStep].title}</h2>
                    {steps[currentStep].description && (
                        <p className="text-muted-foreground mt-1">{steps[currentStep].description}</p>
                    )}
                </div>

                <div className="py-4">
                    {steps[currentStep].content}
                </div>

                <div className="mt-10 flex justify-between items-center border-t border-border pt-6">
                    <Button
                        variant="ghost"
                        onClick={prev}
                        disabled={currentStep === 0}
                        className="gap-2"
                    >
                        <ChevronLeft className="h-4 w-4" />
                        Previous
                    </Button>

                    <Button
                        onClick={next}
                        className="gap-2 min-w-[120px]"
                    >
                        {currentStep === totalSteps - 1 ? "Finish" : "Next Step"}
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
