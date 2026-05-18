export interface Skill {
  id: string
  name: string
  description: string
  origin: string
  scope: 'top-level' | 'ecc'
  categories: string[]
  allowedTools: string[]
  triggers: string[]
  filePath: string
  descriptionCN?: string
  triggersCN?: string[]
  usageCN?: string
}

export type ViewScope = 'top-level' | 'ecc' | 'all'

export interface FilterState {
  scope: ViewScope
  search: string
  categories: string[]
}
