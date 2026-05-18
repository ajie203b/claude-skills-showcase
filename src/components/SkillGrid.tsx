import type { Skill } from '../types/skill'
import { SkillCard } from './SkillCard'

interface SkillGridProps {
  skills: (Skill & { descriptionCN?: string })[]
}

export function SkillGrid({ skills }: SkillGridProps) {
  if (skills.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="card p-8 max-w-sm mx-auto">
          <svg className="w-12 h-12 mx-auto text-[var(--gray-300)] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-sm font-semibold text-[var(--gray-700)] mb-1">未找到匹配的技能</h3>
          <p className="text-xs text-[var(--gray-400)]">尝试调整搜索条件或清除筛选器</p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid-skills grid gap-4">
      {skills.map(skill => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  )
}
