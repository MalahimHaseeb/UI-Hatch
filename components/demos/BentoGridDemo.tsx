"use client";

import { BentoGrid, BentoCard } from "@/components/bento-grid";
import { BellIcon, CalendarIcon, FileTextIcon, GlobeIcon, SearchIcon } from "lucide-react";

const features = [
    {
        Icon: FileTextIcon,
        name: "Save your files",
        description: "We automatically save your files as you type.",
        href: "/",
        cta: "Learn more",
        background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
        Icon: SearchIcon,
        name: "Full text search",
        description: "Search through all your files in seconds.",
        href: "/",
        cta: "Learn more",
        background: <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10" />,
        className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
        Icon: GlobeIcon,
        name: "Multilingual",
        description: "Supports over 100 languages worldwide.",
        href: "/",
        cta: "Learn more",
        background: <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10" />,
        className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    },
    {
        Icon: CalendarIcon,
        name: "Calendar",
        description: "Use the calendar to filter your files by date.",
        href: "/",
        cta: "Learn more",
        background: <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10" />,
        className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    },
    {
        Icon: BellIcon,
        name: "Notifications",
        description: "Get notified when someone shares a file with you.",
        href: "/",
        cta: "Learn more",
        background: <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />,
        className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
    },
];

export default function BentoGridDemo() {
    return (
        <BentoGrid className="lg:grid-rows-2">
            {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>
    );
}
