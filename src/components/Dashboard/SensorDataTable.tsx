import { useState } from "react";
import { Input, Pagination, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../common";
import { SensorData, SensorDataTableProps } from "../../types";



export function SensorDataTable({ data }: SensorDataTableProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = 15

  const filteredData = data.filter((item: SensorData) =>
    item.sensorId.toString().includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage)
  const startIndex = (currentPage - 1) * rowsPerPage
  const paginatedData = filteredData.slice(startIndex, startIndex + rowsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search by sensor id..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sensor ID</TableHead>
              <TableHead>Timestamp</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((row: SensorData, index: number) => (
              <TableRow key={index}>
                <TableCell>{row.sensorId}</TableCell>
                <TableCell>{row.timestamp}</TableCell>
                <TableCell>{row.value.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
};

