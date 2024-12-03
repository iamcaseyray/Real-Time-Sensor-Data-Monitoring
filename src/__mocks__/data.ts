export const generateData = () => ({
    timestamp: new Date().toLocaleTimeString(),
    sensorId: Math.floor(Math.random() * 100),
    value: Math.random() * 100,
});