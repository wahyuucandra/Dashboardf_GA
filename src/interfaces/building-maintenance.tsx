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

export interface IBuildingMaintenanceService {
  id: string
  text: string
}

export interface IBuildingMaintenanceServiceType {
  links: string[]
  text: string
}

export interface ImprovementProposalForm {
  area: string
  branch: string
  submissionDate: Date
  description: string
  estCost: string
}

export interface BudgetTimelineForm {
  area: string
  branch: string
  repairTimeline: Date
  description: string
  budget: string
}

export interface BranchConditionReportForm {
  area: string
  branch: string
  updateDate: Date
}

export interface BranchStandardsForm {}
export interface RepairHistoryForm {}

export const defaultImprovementProposalForm: ImprovementProposalForm = {
  area: 'DKI 1',
  branch: 'Jakarta Timur A',
  submissionDate: new Date(),
  description: 'Improve waste management system',
  estCost: '100000000',
}

export const defaultBudgetTimelineForm: BudgetTimelineForm = {
  area: 'DKI 2',
  branch: 'Jakarta Barat B',
  repairTimeline: new Date(2024, 11, 31), // December 31, 2024
  description: 'Repair damaged roof',
  budget: '50000000',
}

export const defaultBranchConditionReportForm: BranchConditionReportForm = {
  area: 'DKI 3',
  branch: 'Jakarta Selatan C',
  updateDate: new Date(),
}
