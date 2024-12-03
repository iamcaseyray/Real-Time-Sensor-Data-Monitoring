# Real-Time Sensor Data Monitoring

This project is a real-time sensor data monitoring application built using React. The application simulates incoming sensor data at regular intervals and displays it in a table. It features search and pagination functionality for better data exploration.

## Features

- **Real-time data stream**: Sensor data is generated and displayed every second.
- **Search functionality**: Search and filter data by `sensorId`.
- **Pagination**: Data is paginated to allow easy navigation through large datasets.
- **Responsive design**: The UI is responsive and adapts to different screen sizes.

## Technologies Used

- **React**: Front-end library for building the user interface.
- **TypeScript**: For type safety and improved developer experience.
- **TailwindCSS**: For styling and responsiveness.
- **JavaScript (ES6)**: For logic and data handling.
- **Mock Data**: Simulated real-time sensor data using `setInterval`.

## Setup and Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/iamcaseyray/Real-Time-Sensor-Data-Monitoring.git
```

### 2. Install Dependencies

Use npm or yarn to install the required dependencies:

```bash
npm install
```

### 3. Start the Development Server

Run the following command to start the application:

```bash
npm run dev
```

This will start the development server and you can view the app in your browser at http://localhost:5173.

### How It Works

- The Dashboard component fetches and updates sensor data every second using setInterval. The data is generated via the generateData function, which simulates incoming data with random values.
- The data is passed down to the SensorDataTable component, which displays it in a paginated table. You can search the data by sensorId and navigate through the pages.
- The app uses TailwindCSS for styling, and the layout is designed to be responsive.

### Folder Structure

```bash
src/
├── components/
│   ├── common/
│   │   └── Button.tsx
│   │   └── Input.tsx
│   │   └── Pagination.tsx
│   │   └── Table.tsx
│   │   └── index.tsx
│   ├── Dashboard/
│   │   └── SensorDataTable.tsx     # Displays the sensor data in a table
│   │   └── index.tsx
├── __mocks__/
│   └── data.ts                     # Generates mock sensor data
├── types/
│   └── common.d.ts                   # Type definitions for SensorData and other types
│   └── dashboard.d.ts
│   └── index.tsx
├── views/
│   └── Dashboard/
│         └── index.tsx
├── App.tsx                         # Main app entry point
├── index.tsx                       # React DOM entry point
└── tailwind.config.js              # TailwindCSS configuration file
```
