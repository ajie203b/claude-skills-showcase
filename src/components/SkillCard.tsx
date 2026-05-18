import { useState } from 'react'
import type { Skill } from '../types/skill'

// 分类颜色映射
const CATEGORY_COLORS: Record<string, string> = {
  '后端框架': 'bg-orange-500/30 text-orange-200',
  '前端': 'bg-blue-500/30 text-blue-200',
  '语言/平台': 'bg-green-500/30 text-green-200',
  '测试/质量': 'bg-yellow-500/30 text-yellow-200',
  '安全': 'bg-red-500/30 text-red-200',
  '部署/运维': 'bg-purple-500/30 text-purple-200',
  '研究/搜索': 'bg-cyan-500/30 text-cyan-200',
  '内容创作': 'bg-pink-500/30 text-pink-200',
  'API 设计': 'bg-indigo-500/30 text-indigo-200',
  'Agent/工作流': 'bg-violet-500/30 text-violet-200',
  '数据/存储': 'bg-emerald-500/30 text-emerald-200',
  '设计/视觉': 'bg-rose-500/30 text-rose-200',
  '学习/进化': 'bg-amber-500/30 text-amber-200',
  '商业/投资': 'bg-lime-500/30 text-lime-200',
  '网络': 'bg-teal-500/30 text-teal-200',
  '科学研究': 'bg-sky-500/30 text-sky-200',
  '运营/自动化': 'bg-fuchsia-500/30 text-fuchsia-200',
  '营销/传播': 'bg-red-400/30 text-red-200',
  '其他': 'bg-gray-500/30 text-gray-200',
}

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
      className={`
        rounded-xl overflow-hidden transition-all duration-300 cursor-pointer
        hover:transform hover:scale-[1.02] hover:shadow-xl
        bg-white/10 border border-white/20
        ${isExpanded ? 'ring-2 ring-white/30' : ''}
      `}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* 卡片头部 */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-mono text-sm font-semibold text-white truncate">
              {skill.name}
            </h3>
            <p className="mt-2 text-sm text-white/80">
              {descriptionCN}
            </p>
          </div>

          <div className="flex-shrink-0">
            <span className={`
              inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
              ${skill.scope === 'top-level'
                ? 'bg-blue-500/30 text-blue-200'
                : 'bg-purple-500/30 text-purple-200'
              }
            `}>
              {skill.scope === 'top-level' ? '顶级' : 'ECC'}
            </span>
          </div>
        </div>

        {/* 分类标签 */}
        <div className="mt-3 flex flex-wrap gap-1">
          {skill.categories.slice(0, 3).map(category => (
            <span
              key={category}
              className={`
                inline-flex items-center px-2 py-0.5 rounded-full text-xs
                ${CATEGORY_COLORS[category] || CATEGORY_COLORS['其他']}
              `}
            >
              {category}
            </span>
          ))}
          {skill.categories.length > 3 && (
            <span className="text-xs text-white/50">+{skill.categories.length - 3}</span>
          )}
        </div>
      </div>

      {/* 展开的详情 */}
      <div className={`card-expand ${isExpanded ? 'expanded' : ''}`}>
        <div className="px-4 pb-4 border-t border-white/10 pt-3">
          {/* 使用说明 */}
          {usageCN && (
            <div className="mb-3">
              <h4 className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-1">
                如何使用
              </h4>
              <p className="text-sm text-white/80 leading-relaxed">{usageCN}</p>
            </div>
          )}

          {/* 中文触发条件 */}
          {triggersCN.length > 0 && (
            <div className="mb-3">
              <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
                触发条件
              </h4>
              <ul className="space-y-1">
                {triggersCN.map((trigger, index) => (
                  <li key={index} className="text-sm text-white/70 flex items-start">
                    <span className="text-white/40 mr-2">•</span>
                    <span>{trigger}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 允许的工具 */}
          {skill.allowedTools.length > 0 && (
            <div className="mb-3">
              <h4 className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">
                允许的工具
              </h4>
              <div className="flex flex-wrap gap-1">
                {skill.allowedTools.map(tool => (
                  <span
                    key={tool}
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-white/10 text-white/80"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 来源 */}
          {skill.origin && (
            <div className="text-xs text-white/50">
              来源: {skill.origin}
            </div>
          )}
        </div>
      </div>

      {/* 展开/收起指示器 */}
      <div className="px-4 py-2 border-t border-white/10 flex justify-center">
        <svg
          className={`w-4 h-4 text-white/40 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}
