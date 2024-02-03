# System Metrics Tracker

System Metrics Tracker is a simple tool for visualizing real-time system metrics in your web browser. It uses the [systeminformation](https://systeminformation.io/) library to gather system information and [Chart.js](https://www.chartjs.org/) for real-time graph rendering.

## Features

- Real-time visualization of CPU load, memory usage, total core load, CPU core loads, and network upload/download rates.
- Easily customizable and extensible for additional metrics.

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd sys-metrics-tracker
   ```

2. Install Packages
    ```bash
    npm install
    ```
3. Build the project:
    ```bash
    npm run build
    ```

## Usage
Open the dist/index.html file in your web browser to view real-time graphs for various system metrics. Each graph updates at a 3-second interval.