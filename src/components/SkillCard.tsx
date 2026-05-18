import { useState } from 'react'
import type { Skill } from '../types/skill'
import { getCategoryColor } from '../utils/categories'

interface SkillCardProps {
  skill: Skill & {
    descriptionCN?: string
    triggersCN?: string[]
    usageCN?: string
  }
}

export function SkillCard({ skill }: SkillCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const descriptionCN = skill.descriptionCN || skill.description
  const triggersCN = skill.triggersCN || skill.triggers
  const usageCN = skill.usageCN || ''

  return (
    <div
      id={`skill-${skill.id}`}
      className={`card cursor-pointer ${isExpanded ? 'card-expanded' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* 卡片头部 */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-sm font-semibold text-[var(--gray-900)] truncate leading-tight">
            {skill.name}
          </h3>
          <span className={`tag ${skill.scope === 'top-level' ? 'tag-indigo' : 'tag-gray'} flex-shrink-0 text-[0.6rem]`}>
            {skill.scope === 'top-level' ? 'TL' : 'ECC'}
          </span>
        </div>

        <p className="text-sm text-[var(--gray-500)] leading-relaxed line-clamp-2">
          {descriptionCN}
        </p>

        {/* 分类标签 */}
        <div className="mt-3 flex flex-wrap gap-1">
          {skill.categories.slice(0, 3).map(category => {
            const colors = getCategoryColor(category)
            return (
              <span
                key={category}
                className="tag"
                style={{ background: colors.bg, color: colors.text }}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: colors.dot }} />
                {category}
              </span>
            )
          })}
          {skill.categories.length > 3 && (
            <span className="tag tag-gray">+{skill.categories.length - 3}</span>
          )}
        </div>
      </div>

      {/* 展开详情 */}
      <div className={`expand-area ${isExpanded ? 'open' : ''}`}>
        <div className="px-4 pb-4 border-t border-[var(--gray-100)] pt-3">
          {usageCN && (
            <div className="mb-3">
              <h4 className="text-[0.65rem] font-semibold text-[var(--indigo-600)] uppercase tracking-wider mb-1">
                使用方法
              </h4>
              <p className="text-sm text-[var(--gray-600)] leading-relaxed">{usageCN}</p>
            </div>
          )}

          {triggersCN.length > 0 && (
            <div className="mb-3">
              <h4 className="text-[0.65rem] font-semibold text-[var(--warning)] uppercase tracking-wider mb-1">
                触发条件
              </h4>
              <ul className="space-y-1">
                {triggersCN.map((trigger, index) => (
                  <li key={index} className="text-sm text-[var(--gray-500)] flex items-start gap-1.5">
                    <span className="text-[var(--gray-300)] mt-1 text-[0.5rem]">●</span>
                    <span>{trigger}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {skill.allowedTools.length > 0 && (
            <div className="mb-3">
              <h4 className="text-[0.65rem] font-semibold text-[var(--gray-500)] uppercase tracking-wider mb-1">
                工具
              </h4>
              <div className="flex flex-wrap gap-1">
                {skill.allowedTools.map(tool => (
                  <span key={tool} className="tag tag-gray text-[0.6rem]">{tool}</span>
                ))}
              </div>
            </div>
          )}

          {skill.origin && (
            <div className="text-[0.65rem] text-[var(--gray-400)]">
              来源: {skill.origin}
            </div>
          )}
        </div>
      </div>

      {/* 展开指示器 */}
      <div className="px-4 py-2 border-t border-[var(--gray-100)] flex justify-center">
        <svg
          className={`w-3.5 h-3.5 text-[var(--gray-300)] transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}
