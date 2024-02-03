import si, { Systeminformation } from 'systeminformation';

export async function getSystemInformation(): Promise<Systeminformation.SystemData> {
    const systemInfo = await si.system();
    return {
        manufacturer: systemInfo.manufacturer,
        model: systemInfo.model,
        version: systemInfo.version,
        serial: systemInfo.serial,
        uuid: systemInfo.uuid,
        sku: systemInfo.sku,
        virtual: systemInfo.virtual
    };
}

export async function getSystemUUID(): Promise<Systeminformation.UuidData> {
    const uuidData = await si.uuid();
    return {
        os: uuidData.os,
        hardware: uuidData.hardware,
        macs: uuidData.macs
    };
}

export async function getBIOS(): Promise<Systeminformation.BiosData> {
    const biosData = await si.bios();
    return {
        vendor: biosData.vendor,
        version: biosData.version,
        releaseDate: biosData.releaseDate,
        revision: biosData.revision,
        features: biosData.features,
        language: biosData.language,
        serial: biosData.serial
    };
}