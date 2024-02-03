import { Chart } from 'chart.js/auto';
import {
  calculateCurrentCpuLoad,
  calculateCurrentMemoryLoad,
  calculateTotalCoreLoad,
  calculateCpuCoreLoads,
  calculateNetworkRates,
} from './utils';


export function createRealTimeGraph(elementId: string, getDataFunction: () => Promise<any>, title: string) {
  const ctx = document.getElementById(elementId) as HTMLCanvasElement;

  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [] as string[], 
      datasets: [{
        label: title,
        data: [] as any[],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false,
      }],
    },
    options: {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
        },
        y: {
          max: 100, 
          min: 0,
        },
      },
    },
  });

  setInterval(async () => {
    const data = await getDataFunction();
    const timestamp = new Date().toLocaleTimeString();
    
    if (chart.data.labels) {
      chart.data.labels.push(timestamp);
    }

    if (chart.data.datasets[0].data) {
      (chart.data.datasets[0].data as any[]).push(data);
    }

    chart.update();
  }, 3000); // Update every 3 seconds, adjust as needed
}

createRealTimeGraph('cpuLoadGraph', calculateCurrentCpuLoad, 'CPU Load (%)');
createRealTimeGraph('memoryLoadGraph', calculateCurrentMemoryLoad, 'Memory Usage (%)');
createRealTimeGraph('totalCoreLoadGraph', async () => (await calculateTotalCoreLoad()).total, 'Total Core Load (%)');
createRealTimeGraph('cpuCoreLoadsGraph', async () => (await calculateCpuCoreLoads()).total, 'Total CPU Core Loads (%)');
createRealTimeGraph('networkUploadDownloadGraph', async () => {
  const { upload, download } = await calculateNetworkRates();
  return { upload, download };
}, 'Network Upload/Download (Mbps)');
