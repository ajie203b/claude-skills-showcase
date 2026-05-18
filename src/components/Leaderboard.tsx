import { useMemo, useCallback } from 'react'
import type { Skill } from '../types/skill'
import usageData from '../data/usage.json'
import allSkillsData from '../data/skills.json'

interface LeaderboardItem {
  rank: number
  name: string
  usage: number
  scope?: string
}

export function Leaderboard() {
  const scrollToSkill = useCallback((skillId: string) => {
    const element = document.getElementById(`skill-${skillId}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      element.style.boxShadow = '0 0 0 2px var(--indigo-500), var(--shadow-lg)'
      setTimeout(() => { element.style.boxShadow = '' }, 2000)
    }
  }, [])

  const leaderboard = useMemo(() => {
    const allSkills = allSkillsData as Skill[]
    const skillMap = new Map(allSkills.map(s => [s.id, s]))
    const items: LeaderboardItem[] = []

    for (const [skillId, usage] of Object.entries(usageData)) {
      const skill = skillMap.get(skillId)
      items.push({ name: skillId, usage, rank: 0, scope: skill?.scope })
    }

    items.sort((a, b) => b.usage - a.usage)
    items.forEach((item, index) => { item.rank = index + 1 })
    return items.slice(0, 12)
  }, [])

  if (leaderboard.length === 0) return null

  const maxUsage = leaderboard[0]?.usage || 1

  return (
    <div className="card p-4">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">🏆</span>
        <h2 className="text-sm font-bold text-[var(--gray-800)]">使用排行榜</h2>
        <span className="ml-auto text-[0.6rem] text-[var(--gray-400)]">Top 12</span>
      </div>

      <div className="space-y-0.5">
        {leaderboard.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-[var(--gray-50)] transition-colors cursor-pointer group"
            onClick={() => scrollToSkill(item.name)}
          >
            <div className={`
              w-5 h-5 rounded flex items-center justify-center text-[0.65rem] font-bold flex-shrink-0
              ${item.rank <= 3 ? 'bg-amber-100 text-amber-600' : 'bg-[var(--gray-100)] text-[var(--gray-500)]'}
            `}>
              {item.rank}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-medium text-[var(--gray-700)] truncate group-hover:text-[var(--indigo-600)] transition-colors">
                  {item.name}
                </span>
                {item.scope && (
                  <span className={`text-[0.5rem] px-1 py-0.5 rounded ${item.scope === 'top-level' ? 'bg-indigo-50 text-indigo-600' : 'bg-gray-100 text-gray-500'}`}>
                    {item.scope === 'top-level' ? 'TL' : 'ECC'}
                  </span>
                )}
              </div>
              <div className="mt-1 h-1 bg-[var(--gray-100)] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${item.rank <= 3 ? 'bg-amber-400' : 'bg-[var(--gray-300)]'}`}
                  style={{ width: `${(item.usage / maxUsage) * 100}%` }}
                />
              </div>
            </div>

            <div className="text-right flex-shrink-0">
              <span className="text-xs font-bold text-[var(--gray-700)] tabular-nums">{item.usage}</span>
              <span className="text-[0.55rem] text-[var(--gray-400)] ml-0.5">次</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
