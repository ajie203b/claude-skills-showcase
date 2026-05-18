import type { Workflow } from '../types/skill'
import { WorkflowCard } from './WorkflowCard'

interface WorkflowGridProps {
  workflows: Workflow[]
}

export function WorkflowGrid({ workflows }: WorkflowGridProps) {
  const devWorkflows = workflows.filter(w => w.category === 'dev')
  const studyWorkflows = workflows.filter(w => w.category === 'study')

  return (
    <div className="space-y-8">
      {/* 开发者场景 */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-5 bg-[var(--indigo-600)] rounded-full" />
          <h2 className="text-base font-semibold text-[var(--gray-800)]">开发者场景</h2>
          <span className="text-xs text-[var(--gray-400)]">{devWorkflows.length} 个场景</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {devWorkflows.map(workflow => (
            <WorkflowCard key={workflow.id} workflow={workflow} />
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
            <WorkflowCard key={workflow.id} workflow={workflow} />
          ))}
        </div>
      </section>
    </div>
  )
}
