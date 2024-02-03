import si, { Systeminformation } from 'systeminformation';

export async function getSystemInformation(): Promise<Systeminformation.SystemData> {
    return await si.system();
}

export async function getSystemUUID(): Promise<Systeminformation.UuidData> {
    return await si.uuid();
}

export async function getBIOS(): Promise<Systeminformation.BiosData> {
    return await si.bios();
}

export async function getCpuInformation(): Promise<Systeminformation.CpuData> {
    return await si.cpu()
}

export async function getCpuCache(): Promise<Systeminformation.CpuCacheData> {
    return await si.cpuCache()
}

export async function getMemoryInformation(): Promise<Systeminformation.MemData> {
    return await si.mem();
}

export async function getOSInformation(): Promise<Systeminformation.OsData> {
    return await si.osInfo();
}

export async function getDiskInformation(): Promise<Systeminformation.BlockDevicesData[]> {
    return await si.blockDevices();
}

export async function getCpuSpeed(): Promise<Systeminformation.CpuCurrentSpeedData> {
    return await si.cpuCurrentSpeed()
}

export async function getCpuTemperature(): Promise<Systeminformation.CpuTemperatureData> {
    return await si.cpuTemperature()
}

export async function getCurrentLoad(): Promise<Systeminformation.CurrentLoadData> {
    return await si.currentLoad()
}

export async function getFullLoad(): Promise<number> {
    return await si.fullLoad()
}

export async function getProcesses(): Promise<Systeminformation.ProcessesData> {
    return await si.processes()
}

export async function getMysqlServices(): Promise<Systeminformation.ServicesData[]> {
    return await si.services('mysql')
}

export async function getPostgresServices(): Promise<Systeminformation.ServicesData[]> {
    return await si.services('postgresql')
}

export async function getApacheServices(): Promise<Systeminformation.ServicesData[]> {
    return await si.services('apache')
}

export async function getNginxServices(): Promise<Systeminformation.ServicesData[]> {
    return await si.services('nginx');
}

export async function getMongoDBServices(): Promise<Systeminformation.ServicesData[]> {
    return await si.services('mongod');
}

export async function getRedisServices(): Promise<Systeminformation.ServicesData[]> {
    return await si.services('redis');
}

export async function getElasticsearchServices(): Promise<Systeminformation.ServicesData[]> {
    return await si.services('elasticsearch');
}

export async function getDockerServices(): Promise<Systeminformation.ServicesData[]> {
    return await si.services('docker');
}

export async function getSqlServerServices(): Promise<Systeminformation.ServicesData[]> {
    return await si.services('sqlservr');
}

export async function getOracleDBServices(): Promise<Systeminformation.ServicesData[]> {
    return await si.services('oracle');
}

export async function getCassandraServices(): Promise<Systeminformation.ServicesData[]> {
    return await si.services('cassandra');
}

export async function getRabbitMQServices(): Promise<Systeminformation.ServicesData[]> {
    return await si.services('rabbitmq');
}

export async function getKafkaServices(): Promise<Systeminformation.ServicesData[]> {
    return await si.services('kafka');
}

export async function getAllServices(): Promise<Systeminformation.ServicesData[]> {
    return await si.services('*');
}

export async function getNetworkStats(): Promise<Systeminformation.NetworkStatsData[]>{
    return await si.networkStats()
}