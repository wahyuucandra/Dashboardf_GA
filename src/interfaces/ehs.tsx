export interface ManagementType {
  links: string[]
  text: string
}

export interface EHSMetaForm {
  area: string
  branch: string
  lastUpdate: Date
}

export interface WasteManagementForm extends EHSMetaForm {
  existTrashWeight: number
  updateTrashWeight: number
}

export interface WaterManagementForm extends EHSMetaForm {
  existWaterMeter: number
  updateWaterMeter: number
}

export interface FuelManagementForm extends EHSMetaForm {
  existFuelUsage: number
  updateFuelUsage: number
}

export interface ElectricityManagementForm extends EHSMetaForm {
  existKwhMeter: number
  updateKwhMeter: number
}

export const defaulWasteManagementForm = {
  area: 'DKI 1',
  branch: 'Jakarta Timur A',
  lastUpdate: new Date(),
  existTrashWeight: 100,
  updateTrashWeight: undefined,
}

export const defaulWaterManagementForm = {
  area: 'DKI 1',
  branch: 'Jakarta Timur A',
  lastUpdate: new Date(),
  existWaterMeter: 1000,
  updateWaterMeter: undefined,
}

export const defaulFuelManagementForm = {
  area: 'DKI 1',
  branch: 'Jakarta Timur A',
  lastUpdate: new Date(),
  existFuelUsage: 100,
  updateFuelUsage: undefined,
}

export const defaulElectricityManagementForm = {
  area: 'DKI 1',
  branch: 'Jakarta Timur A',
  lastUpdate: new Date(),
  existKwhMeter: 100,
  updateKwhMeter: undefined,
}
