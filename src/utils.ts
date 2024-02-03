import { Systeminformation } from 'systeminformation';
import { getMemoryInformation, getCurrentLoad, getNetworkStats } from './general';

export async function calculateCurrentCpuLoad(): Promise<{ avg?: number, load: number; }> {
  const loadValues: { avg?: number, load: number; } = {
    load: 0,
    avg: 0,
  };

  const currentLoadData = await getCurrentLoad();
  loadValues.avg = parseFloat(currentLoadData.avgLoad.toFixed(2));
  loadValues.load = parseFloat(currentLoadData.currentLoadSystem.toFixed(2));

  return loadValues;
}

export async function calculateCurrentMemoryLoad(): Promise<number> {
  const memoryData = await getMemoryInformation();
  const currentMemoryData = await getMemoryInformation();
  const memoryUsagePercentage = parseFloat((currentMemoryData.used / memoryData.total * 100).toFixed(2));

  return memoryUsagePercentage;
}

export async function calculateTotalCoreLoad(): Promise<{ total: number, cores: number[]; }> {
  const currentLoadData = await getCurrentLoad();

  if (currentLoadData.cpus) {
    const totalCoreLoad = parseFloat(currentLoadData.currentLoad.toFixed(2));
    const coreLoads = currentLoadData.cpus.map(core => parseFloat(core.load.toFixed(2)));

    return { total: totalCoreLoad, cores: coreLoads };
  }

  return { total: 0, cores: [] };
}

export async function calculateCpuCoreLoads(): Promise<{ total: number, totalCores: number, cores: { [index: number]: number; }; }> {
  const totalCoreLoadData = await calculateTotalCoreLoad();
  const coreLoads: { [index: number]: number; } = {};

  totalCoreLoadData.cores.forEach((coreLoad, index) => {
    coreLoads[index] = coreLoad;
  });

  return { total: totalCoreLoadData.total, totalCores: totalCoreLoadData.cores.length, cores: coreLoads };
}

export async function calculateNetworkRates(): Promise<{ upload: number; download: number; }> {
  const currentStats = await getNetworkStats();

  if (currentStats[0]) {
    const timeElapsed = 3; // Assuming the stats are collected at 3-second intervals

    const uploadRate = (
      (currentStats[currentStats.length - 1].tx_sec || 0) / timeElapsed
    ) * 8 / 1e6;

    const downloadRate = (
      (currentStats[currentStats.length - 1].rx_sec || 0) / timeElapsed
    ) * 8 / 1e6;

    return { upload: +uploadRate.toFixed(2), download: +downloadRate.toFixed(2) };
  }


  return { upload: 0, download: 0 };
}