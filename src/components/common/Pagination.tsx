import { PaginationProps } from '../../types/common'
import { Button } from './Button'

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

    return (
        <nav className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <Button
                onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                variant="outline"
            >
                Previous
            </Button>
            {pageNumbers.map((number) => (
                <Button
                    key={number}
                    onClick={() => onPageChange(number)}
                    variant={currentPage === number ? 'default' : 'outline'}
                >
                    {number}
                </Button>
            ))}
            <Button
                onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                variant="outline"
            >
                Next
            </Button>
        </nav>
    )
}