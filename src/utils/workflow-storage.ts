import type { Workflow } from '../types/skill'
import defaultWorkflows from '../data/workflows.json'

const STORAGE_KEY = 'claude-skills-custom-workflows'

// 获取所有工作流（默认 + 自定义）
export function getAllWorkflows(): Workflow[] {
  const custom = getCustomWorkflows()
  if (custom.length === 0) return defaultWorkflows as Workflow[]

  // 自定义工作流覆盖同 ID 的默认工作流
  const customMap = new Map(custom.map(w => [w.id, w]))
  const merged = (defaultWorkflows as Workflow[]).map(w =>
    customMap.get(w.id) || w
  )

  // 追加全新的自定义工作流
  const defaultIds = new Set(defaultWorkflows.map(w => w.id))
  const extra = custom.filter(w => !defaultIds.has(w.id))

  return [...merged, ...extra]
}

// 获取自定义工作流
export function getCustomWorkflows(): Workflow[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (!data) return []
    return JSON.parse(data) as Workflow[]
  } catch {
    return []
  }
}

// 保存自定义工作流
export function saveCustomWorkflows(workflows: Workflow[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(workflows))
}

// 重置为默认
export function resetWorkflows() {
  localStorage.removeItem(STORAGE_KEY)
}

// 单个工作流：保存
export function saveWorkflow(workflow: Workflow) {
  const custom = getCustomWorkflows()
  const index = custom.findIndex(w => w.id === workflow.id)
  if (index >= 0) {
    custom[index] = workflow
  } else {
    custom.push(workflow)
  }
  saveCustomWorkflows(custom)
}

// 单个工作流：删除
export function deleteWorkflow(id: string) {
  const custom = getCustomWorkflows()
  saveCustomWorkflows(custom.filter(w => w.id !== id))
}
