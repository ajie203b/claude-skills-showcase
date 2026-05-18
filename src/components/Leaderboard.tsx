import { useMemo, useCallback, useState } from 'react'
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
  const [tooltip, setTooltip] = useState<string | null>(null)

  const scrollToSkill = useCallback((skillId: string) => {
    const element = document.getElementById(`skill-${skillId}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      element.style.boxShadow = '0 0 0 2px var(--indigo-500), var(--shadow-lg)'
      setTimeout(() => { element.style.boxShadow = '' }, 2000)
    } else {
      setTooltip(skillId)
      setTimeout(() => setTooltip(null), 2000)
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
    return items.slice(0, 15)
  }, [])

  if (leaderboard.length === 0) return null

  const maxUsage = leaderboard[0]?.usage || 1

  return (
    <div className="card p-4">
      {/* 标题栏 */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">🏆</span>
        <h2 className="text-sm font-bold text-[var(--gray-800)]">使用排行榜</h2>
        <span className="text-[0.6rem] text-[var(--gray-400)]">← 左右滑动查看更多</span>
      </div>

      {/* 提示 */}
      {tooltip && (
        <div className="mb-2 px-2 py-1.5 bg-amber-50 border border-amber-200 rounded text-[0.6rem] text-amber-700 text-center">
          "{tooltip}" 不在当前筛选视图中，请切换到"全部"查看
        </div>
      )}

      {/* 横向滚动容器 */}
      <div className="overflow-x-auto pb-2 -mx-1 px-1">
        <div className="flex gap-3" style={{ minWidth: 'min-content' }}>
          {leaderboard.map((item) => (
            <div
              key={item.name}
              onClick={() => scrollToSkill(item.name)}
              className="flex-shrink-0 w-44 p-3 rounded-lg border border-[var(--gray-100)] hover:border-[var(--indigo-200)] hover:bg-[var(--indigo-50)] transition-all cursor-pointer group"
            >
              {/* 排名 + 名称 */}
              <div className="flex items-center gap-2 mb-2">
                <div className={`
                  w-5 h-5 rounded flex items-center justify-center text-[0.6rem] font-bold flex-shrink-0
                  ${item.rank <= 3 ? 'bg-amber-100 text-amber-600' : 'bg-[var(--gray-100)] text-[var(--gray-500)]'}
                `}>
                  {item.rank}
                </div>
                <span className="text-xs font-medium text-[var(--gray-700)] truncate group-hover:text-[var(--indigo-600)] transition-colors">
                  {item.name}
                </span>
              </div>

              {/* 进度条 */}
              <div className="h-1.5 bg-[var(--gray-100)] rounded-full overflow-hidden mb-2">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${item.rank <= 3 ? 'bg-amber-400' : 'bg-[var(--gray-300)]'}`}
                  style={{ width: `${(item.usage / maxUsage) * 100}%` }}
                />
              </div>

              {/* 次数 + 标签 */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[var(--gray-700)] tabular-nums">
                  {item.usage}<span className="text-[0.55rem] text-[var(--gray-400)] ml-0.5">次</span>
                </span>
                {item.scope && (
                  <span className={`text-[0.5rem] px-1 py-0.5 rounded ${item.scope === 'top-level' ? 'bg-indigo-50 text-indigo-600' : 'bg-gray-100 text-gray-500'}`}>
                    {item.scope === 'top-level' ? 'TL' : 'ECC'}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
