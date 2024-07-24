export interface WasteManagementForm {
  area: string | undefined
  branch: string | undefined
  lastUpdate: Date | undefined
  existWeight: number | undefined
  updateWeight: number | undefined
}

export const DefaulWasteManagementForm = {
  area: 'DKI',
  branch: 'Jakarta Timur',
  lastUpdate: new Date(),
  existWeight: 100,
  updateWeight: undefined,
}
