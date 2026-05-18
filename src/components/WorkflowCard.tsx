import { useState } from 'react'
import type { Workflow } from '../types/skill'
import { TaskCard } from './TaskCard'

interface WorkflowCardProps {
  workflow: Workflow
  isCustom?: boolean
  onEdit?: (workflow: Workflow) => void
}

export function WorkflowCard({ workflow, isCustom, onEdit }: WorkflowCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={`card cursor-pointer ${isExpanded ? 'card-expanded' : ''} ${isCustom ? 'ring-2 ring-[var(--indigo-200)]' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* 卡片头部 */}
      <div className="p-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{workflow.icon}</span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-semibold text-[var(--gray-900)]">{workflow.title}</h3>
              {isCustom && (
                <span className="tag text-[0.55rem]" style={{ background: '#dbeafe', color: '#1d4ed8' }}>
                  自定义
                </span>
              )}
            </div>
            <p className="text-xs text-[var(--gray-500)]">{workflow.subtitle}</p>
          </div>

          {/* 编辑按钮 */}
          {onEdit && (
            <button
              onClick={e => { e.stopPropagation(); onEdit(workflow) }}
              className="p-1.5 rounded-md text-[var(--gray-400)] hover:text-[var(--indigo-600)] hover:bg-[var(--indigo-50)] transition-colors"
              title="编辑工作流"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
          )}
        </div>

        {/* 技能预览 */}
        <div className="flex flex-wrap gap-1 mt-3">
          {[...new Set(workflow.tasks.map(t => t.skill))].filter(Boolean).slice(0, 4).map(skill => (
            <span key={skill} className="tag tag-indigo text-[0.6rem]">/{skill}</span>
          ))}
          {new Set(workflow.tasks.map(t => t.skill)).size > 4 && (
            <span className="tag tag-gray text-[0.6rem]">
              +{new Set(workflow.tasks.map(t => t.skill)).size - 4}
            </span>
          )}
        </div>

        {/* 展开指示 */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-[var(--gray-100)]">
          <span className="text-xs text-[var(--gray-400)]">{workflow.tasks.length} 个任务</span>
          <svg
            className={`w-4 h-4 text-[var(--gray-300)] transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* 展开：任务列表 */}
      <div className={`expand-area ${isExpanded ? 'open' : ''}`}>
        <div className="px-5 pb-5 border-t border-[var(--gray-100)]">
          <div className="divide-y divide-[var(--gray-100)]">
            {workflow.tasks.map((task, index) => (
              <TaskCard key={index} task={task} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
