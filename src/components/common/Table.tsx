import React from 'react'

interface TableProps {
    children: React.ReactNode
}

export function Table({ children }: TableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">{children}</table>
        </div>
    )
}

export function TableHeader({ children }: { children: React.ReactNode }) {
    return <thead className="bg-gray-50">{children}</thead>
}

export function TableBody({ children }: { children: React.ReactNode }) {
    return <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
}

export function TableRow({ children }: { children: React.ReactNode }) {
    return <tr>{children}</tr>
}

export function TableHead({ children }: { children: React.ReactNode }) {
    return (
        <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
            {children}
        </th>
    )
}

export function TableCell({ children }: { children: React.ReactNode }) {
    return <td className="px-6 py-4 whitespace-nowrap">{children}</td>
}

