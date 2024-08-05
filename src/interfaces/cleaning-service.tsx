export interface IFormManpowerAdditionalCleaningService {
  area: string
  branch: string
  lastUpdate: Date
  offeredCategory: any
  shiftExisting: string
  additionalManpower: any
  reason: string
}

export const manpowerAdditionalFormDefaultValues: IFormManpowerAdditionalCleaningService = {
  area: 'DKI Jakarta',
  branch: 'Jakarta Pusat',
  lastUpdate: new Date(),
  offeredCategory: { label: 'Additional', value: 2 },
  shiftExisting: 'Shift pagi dan malam',
  additionalManpower: { value: 4, label: 'Manpower' },
  reason: 'Meningkatkan keamanan aset perusahaan',
}

export interface IFormManpowerCleaningService {
  area: string
  branch: string
  lastUpdate: Date
  offeredCategory: any
  manpowerExisting: string
  year: string
  month: string
  reason: string
}

export const manpowerFormDefaultValues: IFormManpowerCleaningService = {
  area: 'Jakarta Pusat',
  branch: 'Harapan Indah',
  lastUpdate: new Date(),
  offeredCategory: { label: 'Refreshment', value: 1 },
  manpowerExisting: 'John Doe',
  year: '2',
  month: '6',
  reason: 'Perlu tambahan manpower untuk keamanan gedung baru',
}
