"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface Column<T> {
    header: string;
    accessorKey: keyof T;
    cell?: (value: any, item: T) => React.ReactNode;
}

interface AdaptiveTableProps<T> {
    data: T[];
    columns: Column<T>[];
    className?: string;
    mobileCardTitle?: keyof T;
}

export function AdaptiveTable<T>({
    data,
    columns,
    className,
    mobileCardTitle,
}: AdaptiveTableProps<T>) {
    return (
        <div className={cn("w-full", className)}>
            {/* Desktop View: Traditional Table */}
            <div className="hidden md:block overflow-x-auto rounded-lg border border-border bg-card">
                <table className="w-full text-left text-sm border-collapse">
                    <thead className="bg-muted/50 text-muted-foreground font-medium border-b border-border">
                        <tr>
                            {columns.map((column, i) => (
                                <th key={i} className="px-4 py-3">
                                    {column.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {data.map((item, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-muted/30 transition-colors">
                                {columns.map((column, colIndex) => (
                                    <td key={colIndex} className="px-4 py-3 text-foreground font-medium">
                                        {column.cell
                                            ? column.cell(item[column.accessorKey], item)
                                            : (item[column.accessorKey] as React.ReactNode)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile View: Card List */}
            <div className="grid grid-cols-1 gap-4 md:hidden">
                {data.map((item, rowIndex) => (
                    <div
                        key={rowIndex}
                        className="p-4 rounded-xl border border-border bg-card shadow-sm space-y-3"
                    >
                        {mobileCardTitle && (
                            <div className="text-lg font-bold border-b border-border pb-2">
                                {item[mobileCardTitle] as React.ReactNode}
                            </div>
                        )}
                        {columns.map((column, colIndex) => (
                            <div key={colIndex} className="flex justify-between items-start text-sm gap-2">
                                <span className="text-muted-foreground font-medium shrink-0">
                                    {column.header}:
                                </span>
                                <span className="text-foreground text-right">
                                    {column.cell
                                        ? column.cell(item[column.accessorKey], item)
                                        : (item[column.accessorKey] as React.ReactNode)}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
