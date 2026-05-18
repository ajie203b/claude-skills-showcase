import { useState } from 'react'
import type { Workflow, WorkflowTask } from '../types/skill'

interface WorkflowEditorProps {
  workflow: Workflow | null
  isNew: boolean
  onSave: (workflow: Workflow) => void
  onDelete?: (id: string) => void
  onClose: () => void
}

export function WorkflowEditor({ workflow, isNew, onSave, onDelete, onClose }: WorkflowEditorProps) {
  const [data, setData] = useState<Workflow>(
    workflow || {
      id: '',
      title: '',
      subtitle: '',
      icon: '📌',
      category: 'study',
      tasks: [],
    }
  )

  const handleTaskChange = (index: number, field: keyof WorkflowTask, value: string) => {
    const tasks = [...data.tasks]
    tasks[index] = { ...tasks[index], [field]: value }
    setData({ ...data, tasks })
  }

  const addTask = () => {
    setData({
      ...data,
      tasks: [...data.tasks, { title: '', description: '', skill: '', prompt: '' }],
    })
  }

  const removeTask = (index: number) => {
    setData({ ...data, tasks: data.tasks.filter((_, i) => i !== index) })
  }

  const handleSave = () => {
    if (!data.title.trim()) return
    // 自动生成 id
    const id = data.id || data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    onSave({ ...data, id })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      {/* 遮罩 */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* 弹窗 */}
      <div
        className="relative bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* 头部 */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--gray-200)]">
          <h3 className="text-base font-semibold text-[var(--gray-900)]">
            {isNew ? '新建工作流' : '编辑工作流'}
          </h3>
          <button onClick={onClose} className="text-[var(--gray-400)] hover:text-[var(--gray-600)] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 内容 */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {/* 基本信息 */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-[var(--gray-500)] mb-1">图标</label>
              <input
                type="text"
                value={data.icon}
                onChange={e => setData({ ...data, icon: e.target.value })}
                className="input text-center text-lg"
                maxLength={4}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[var(--gray-500)] mb-1">分类</label>
              <select
                value={data.category}
                onChange={e => setData({ ...data, category: e.target.value as 'dev' | 'study' })}
                className="input"
              >
                <option value="dev">开发者场景</option>
                <option value="study">学生学习场景</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[var(--gray-500)] mb-1">标题</label>
            <input
              type="text"
              value={data.title}
              onChange={e => setData({ ...data, title: e.target.value })}
              className="input"
              placeholder="例如：Vue 3 开发"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[var(--gray-500)] mb-1">副标题</label>
            <input
              type="text"
              value={data.subtitle}
              onChange={e => setData({ ...data, subtitle: e.target.value })}
              className="input"
              placeholder="例如：Composition API + Pinia"
            />
          </div>

          {/* 任务列表 */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-medium text-[var(--gray-500)]">任务列表</label>
              <button onClick={addTask} className="btn text-xs py-1 px-2">
                + 添加任务
              </button>
            </div>

            <div className="space-y-3">
              {data.tasks.map((task, index) => (
                <div key={index} className="border border-[var(--gray-200)] rounded-lg p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[var(--indigo-600)]">任务 {index + 1}</span>
                    <button
                      onClick={() => removeTask(index)}
                      className="text-[var(--gray-400)] hover:text-[var(--error)] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={task.title}
                      onChange={e => handleTaskChange(index, 'title', e.target.value)}
                      className="input text-sm"
                      placeholder="任务名称"
                    />
                    <input
                      type="text"
                      value={task.skill}
                      onChange={e => handleTaskChange(index, 'skill', e.target.value)}
                      className="input text-sm"
                      placeholder="推荐技能 ID"
                    />
                  </div>

                  <input
                    type="text"
                    value={task.description}
                    onChange={e => handleTaskChange(index, 'description', e.target.value)}
                    className="input text-sm"
                    placeholder="一句话描述"
                  />

                  <textarea
                    value={task.prompt}
                    onChange={e => handleTaskChange(index, 'prompt', e.target.value)}
                    className="input text-sm min-h-[60px] resize-y"
                    placeholder="中文提示词..."
                  />
                </div>
              ))}

              {data.tasks.length === 0 && (
                <div className="text-center py-6 text-sm text-[var(--gray-400)]">
                  暂无任务，点击上方"添加任务"开始
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 底部按钮 */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-[var(--gray-200)] bg-[var(--gray-50)]">
          <div>
            {!isNew && onDelete && (
              <button
                onClick={() => onDelete(data.id)}
                className="btn text-xs text-[var(--error)] border-[var(--error)] hover:bg-red-50"
              >
                删除此工作流
              </button>
            )}
          </div>
          <div className="flex gap-2">
            <button onClick={onClose} className="btn text-xs">取消</button>
            <button onClick={handleSave} className="btn btn-primary text-xs">
              保存
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
