export interface ISecurityGuardService {
  id: string
  text: string
}

export interface ISecurityGuardServiceType {
  links: string[]
  text: string
}

export interface IFormASMS {
  area: string
  branch: string
  submissionDate: Date
  category: any
  shiftExisting: string
  additionalManpower: any
  reason: string
}

// Contoh penggunaan interface
export const formASMSValues: IFormASMS = {
  area: 'DKI Jakarta',
  branch: 'Jakarta Pusat',
  submissionDate: new Date(),
  category: { value: 1, label: 'Armed Guard' },
  shiftExisting: 'Shift pagi dan malam',
  additionalManpower: { value: 2, label: 'Security' },
  reason: 'Meningkatkan keamanan aset perusahaan',
}

export interface IFormManpowerSG {
  area: string
  branch: string
  submissionDate: Date
  selectedOption: any
  manpowerExistingName: string
  year: string
  month: string
  reason: string
}

export const formManpowerSGValues: IFormManpowerSG = {
  area: 'Jakarta Pusat',
  branch: 'Cabang A',
  submissionDate: new Date(),
  selectedOption: { label: 'Armed Guard', value: 1 },
  manpowerExistingName: 'John Doe',
  year: '2',
  month: '6',
  reason: 'Perlu tambahan manpower untuk keamanan gedung baru',
}
