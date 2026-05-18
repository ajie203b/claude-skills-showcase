import { useMemo, useCallback } from 'react'
import type { Skill } from '../types/skill'
import usageData from '../data/usage.json'

interface LeaderboardProps {
  skills: Skill[]
}

interface LeaderboardItem {
  rank: number
  name: string
  usage: number
  scope?: string
}

export function Leaderboard({ skills }: LeaderboardProps) {
  const scrollToSkill = useCallback((skillId: string) => {
    const element = document.getElementById(`skill-${skillId}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      element.style.boxShadow = '0 0 0 2px var(--indigo-500), var(--shadow-lg)'
      setTimeout(() => { element.style.boxShadow = '' }, 2000)
    }
  }, [])

  const leaderboard = useMemo(() => {
    const skillMap = new Map(skills.map(s => [s.id, s]))
    const items: LeaderboardItem[] = []

    for (const [skillId, usage] of Object.entries(usageData)) {
      const skill = skillMap.get(skillId)
      items.push({ name: skillId, usage, rank: 0, scope: skill?.scope })
    }

    items.sort((a, b) => b.usage - a.usage)
    items.forEach((item, index) => { item.rank = index + 1 })
    return items.slice(0, 15)
  }, [skills])

  if (leaderboard.length === 0) return null

  const maxUsage = leaderboard[0]?.usage || 1

  return (
    <div className="card p-5 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <svg className="w-4 h-4 text-[var(--warning)]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
        <h2 className="text-sm font-semibold text-[var(--gray-800)]">使用排行榜</h2>
        <span className="ml-auto text-[0.65rem] text-[var(--gray-400)]">Top 15</span>
      </div>

      <div className="space-y-1">
        {leaderboard.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[var(--gray-50)] transition-colors cursor-pointer group"
            onClick={() => scrollToSkill(item.name)}
          >
            <div className={`
              w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold
              ${item.rank <= 3 ? 'bg-[var(--indigo-50)] text-[var(--indigo-600)]' : 'bg-[var(--gray-100)] text-[var(--gray-500)]'}
            `}>
              {item.rank}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-[var(--gray-700)] truncate group-hover:text-[var(--indigo-600)] transition-colors">
                  {item.name}
                </span>
                {item.scope && (
                  <span className={`tag text-[0.55rem] ${item.scope === 'top-level' ? 'tag-indigo' : 'tag-gray'}`}>
                    {item.scope === 'top-level' ? 'TL' : 'ECC'}
                  </span>
                )}
              </div>
              <div className="mt-1.5 h-1 bg-[var(--gray-100)] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${item.rank <= 3 ? 'bg-[var(--indigo-500)]' : 'bg-[var(--gray-300)]'}`}
                  style={{ width: `${(item.usage / maxUsage) * 100}%` }}
                />
              </div>
            </div>

            <div className="text-right flex-shrink-0">
              <span className="text-sm font-semibold text-[var(--gray-700)] tabular-nums">{item.usage}</span>
              <span className="text-[0.6rem] text-[var(--gray-400)] ml-0.5">次</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
