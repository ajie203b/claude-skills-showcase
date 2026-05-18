import type { Skill } from '../types/skill'
import { SkillCard } from './SkillCard'

interface SkillGridProps {
  skills: (Skill & { descriptionCN?: string })[]
}

export function SkillGrid({ skills }: SkillGridProps) {
  if (skills.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="glass-dark rounded-xl p-8 max-w-md mx-auto">
          <svg
            className="w-16 h-16 mx-auto text-white/30 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-lg font-semibold text-white mb-2">
            未找到匹配的 Skills
          </h3>
          <p className="text-white/60">
            尝试调整搜索条件或清除筛选器
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {skills.map(skill => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  )
}
