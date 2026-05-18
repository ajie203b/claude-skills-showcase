import { useState } from 'react'
import type { Workflow } from '../types/skill'
import { WorkflowCard } from './WorkflowCard'
import { WorkflowEditor } from './WorkflowEditor'
import { getAllWorkflows, saveWorkflow, deleteWorkflow, resetWorkflows } from '../utils/workflow-storage'

export function WorkflowGrid() {
  const [workflows, setWorkflows] = useState<Workflow[]>(getAllWorkflows)
  const [editor, setEditor] = useState<{ workflow: Workflow | null; isNew: boolean } | null>(null)

  const customIds = new Set(
    JSON.parse(localStorage.getItem('claude-skills-custom-workflows') || '[]')
      .map((w: Workflow) => w.id)
  )

  const devWorkflows = workflows.filter(w => w.category === 'dev')
  const studyWorkflows = workflows.filter(w => w.category === 'study')

  const handleSave = (workflow: Workflow) => {
    saveWorkflow(workflow)
    setWorkflows(getAllWorkflows())
    setEditor(null)
  }

  const handleDelete = (id: string) => {
    deleteWorkflow(id)
    setWorkflows(getAllWorkflows())
    setEditor(null)
  }

  const handleReset = () => {
    if (confirm('确定要重置所有工作流为默认状态吗？自定义的内容将丢失。')) {
      resetWorkflows()
      setWorkflows(getAllWorkflows())
    }
  }

  return (
    <div className="space-y-6">
      {/* 操作栏 */}
      <div className="flex items-center justify-between">
        <div />
        <div className="flex gap-2">
          <button onClick={handleReset} className="btn text-xs text-[var(--gray-500)]">
            重置为默认
          </button>
          <button
            onClick={() => setEditor({ workflow: null, isNew: true })}
            className="btn btn-primary text-xs"
          >
            + 新建工作流
          </button>
        </div>
      </div>

      {/* 开发者场景 */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-5 bg-[var(--indigo-600)] rounded-full" />
          <h2 className="text-base font-semibold text-[var(--gray-800)]">开发者场景</h2>
          <span className="text-xs text-[var(--gray-400)]">{devWorkflows.length} 个场景</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {devWorkflows.map(workflow => (
            <WorkflowCard
              key={workflow.id}
              workflow={workflow}
              isCustom={customIds.has(workflow.id)}
              onEdit={(w) => setEditor({ workflow: w, isNew: false })}
            />
          ))}
        </div>
      </section>

      {/* 学生学习场景 */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-5 bg-[var(--success)] rounded-full" />
          <h2 className="text-base font-semibold text-[var(--gray-800)]">学生学习场景</h2>
          <span className="text-xs text-[var(--gray-400)]">{studyWorkflows.length} 个场景</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {studyWorkflows.map(workflow => (
            <WorkflowCard
              key={workflow.id}
              workflow={workflow}
              isCustom={customIds.has(workflow.id)}
              onEdit={(w) => setEditor({ workflow: w, isNew: false })}
            />
          ))}
        </div>
      </section>

      {/* 编辑器弹窗 */}
      {editor && (
        <WorkflowEditor
          workflow={editor.workflow}
          isNew={editor.isNew}
          onSave={handleSave}
          onDelete={editor.isNew ? undefined : handleDelete}
          onClose={() => setEditor(null)}
        />
      )}
    </div>
  )
}
