import { useState } from 'react'
import type { WorkflowTask } from '../types/skill'

interface TaskCardProps {
  task: WorkflowTask
  index: number
}

export function TaskCard({ task, index }: TaskCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(task.prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // 降级方案
      const textarea = document.createElement('textarea')
      textarea.value = task.prompt
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="flex gap-3 py-3">
      {/* 序号 */}
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--indigo-50)] text-[var(--indigo-600)] flex items-center justify-center text-xs font-bold mt-0.5">
        {index + 1}
      </div>

      {/* 内容 */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="text-sm font-semibold text-[var(--gray-800)]">{task.title}</h4>
          <span className="tag tag-indigo text-[0.6rem]">/{task.skill}</span>
        </div>
        <p className="text-xs text-[var(--gray-500)] mb-2">{task.description}</p>

        {/* 提示词 */}
        <div
          className={`prompt-block ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
          title="点击复制提示词"
        >
          <div className="flex items-start justify-between gap-2">
            <span className="flex-1 whitespace-pre-wrap">{task.prompt}</span>
            <svg
              className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-colors ${copied ? 'text-[var(--success)]' : 'text-[var(--gray-400)]'}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              {copied ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              )}
            </svg>
          </div>
          {copied && (
            <div className="text-[0.65rem] text-[var(--success)] mt-1 font-medium">已复制到剪贴板</div>
          )}
        </div>
      </div>
    </div>
  )
}
