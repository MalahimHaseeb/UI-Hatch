"use client";

import { AdaptiveTable } from "@/components/adaptive-table";

const data = [
    { id: 1, name: "Apple MacBook Pro", category: "Laptops", price: "$2,499", status: "In Stock" },
    { id: 2, name: "iPhone 15 Pro", category: "Phones", price: "$999", status: "Out of Stock" },
    { id: 3, name: "iPad Air", category: "Tablets", price: "$599", status: "In Stock" },
    { id: 4, name: "Apple Watch S9", category: "Wearables", price: "$399", status: "Low Stock" },
];

const columns = [
    { header: "Product", accessorKey: "name" as const },
    { header: "Category", accessorKey: "category" as const },
    { header: "Price", accessorKey: "price" as const },
    {
        header: "Status",
        accessorKey: "status" as const,
        cell: (value: string) => (
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${value === "In Stock" ? "bg-green-500/10 text-green-500" :
                    value === "Out of Stock" ? "bg-red-500/10 text-red-500" :
                        "bg-yellow-500/10 text-yellow-500"
                }`}>
                {value}
            </span>
        )
    },
];

export default function AdaptiveTableDemo() {
    return (
        <div className="p-4 w-full max-w-4xl mx-auto">
            <div className="mb-6">
                <h3 className="text-lg font-bold mb-1">Adaptive Inventory</h3>
                <p className="text-sm text-muted-foreground italic mb-4">Resize your browser to see it switch to Cards on mobile!</p>
                <AdaptiveTable
                    data={data}
                    columns={columns}
                    mobileCardTitle="name"
                />
            </div>
        </div>
    );
}
