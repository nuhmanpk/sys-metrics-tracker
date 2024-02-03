import { getCpuInformation, getFullLoad, getMemoryInformation, getCurrentLoad } from './general';
import { Systeminformation } from 'systeminformation';
import { Chart } from 'chart.js';

export async function calculateCurrentCpuUsage(): Promise<number> {
  const currentLoadData = await getCurrentLoad();
  return currentLoadData.currentLoadSystem;
}


export async function calculateCurrentMemoryUsage(): Promise<number> {
  const memoryData = await getMemoryInformation();

  const currentMemoryData = await getMemoryInformation();
  return (currentMemoryData.used / memoryData.total) * 100;

}

// export function plotRealTimeGraphWithChartJS(values: number[], title: string, interval: number) {
//   const ctx = document.getElementById('graph') as HTMLCanvasElement;
//   const chart = new Chart(ctx, {
//     type: 'line',
//     data: {
//       labels: [], // You can customize this based on your use case
//       datasets: [{
//         label: title,
//         data: values,
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//         fill: false,
//       }],
//     },
//     options: {
//       scales: {
//         x: {
//           type: 'linear',
//           position: 'bottom',
//         },
//         y: {
//           max: 100, // Customize based on your use case
//           min: 0,
//           stepSize: 10,
//         },
//       },
//     },
//   });

//   setInterval(async () => {
//     const currentLoadData = await getCurrentLoad();
//     const totalLoad: number = await getFullLoad();
//     const currentLoadPercentage = (currentLoadData.currentLoad / totalLoad) * 100;

//     chart.data.labels.push(''); // Add an empty label for each new data point
//     chart.data.datasets[0].data.push(currentLoadPercentage);
//     chart.update();
//   }, interval);
// }
