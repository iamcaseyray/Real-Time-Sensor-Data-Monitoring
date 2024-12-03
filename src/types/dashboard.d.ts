export interface SensorDataTableProps {
    data: SensorData[];
}

export interface SensorData {
    timestamp: string;
    sensorId: number;
    value: number;
}