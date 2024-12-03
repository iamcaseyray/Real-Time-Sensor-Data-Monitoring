import { useEffect, useState } from "react";
import { generateData } from "../../__mocks__/data";
import { SensorData } from "../../types";
import { SensorDataTable } from "../../components/Dashboard";

export const Dashboard = () => {
    const [data, setData] = useState<SensorData[]>([]);

    useEffect(() => {
        try {
            const interval = setInterval(() => {
                const newData = generateData();
                console.log(newData);
                setData((prevData: SensorData[]) => [...prevData, newData]);
            }, 1000);
            return () => clearInterval(interval);
        } catch (error) {
            console.log("Error is: ", error);
        }
    }, []);

    return (
        <div>
            <h1 className="mt-5 text-2xl font-semibold text-center">Real-Time Sensor Data</h1>
            <SensorDataTable data={data} />
        </div>
    );
};
