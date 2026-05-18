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

const MEDAL_COLORS = [
  'text-yellow-400', // 金牌
  'text-gray-300',   // 银牌
  'text-orange-400', // 铜牌
]

export function Leaderboard({ skills }: LeaderboardProps) {
  const scrollToSkill = useCallback((skillId: string) => {
    const element = document.getElementById(`skill-${skillId}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      // 添加高亮效果
      element.classList.add('ring-2', 'ring-yellow-400')
      setTimeout(() => {
        element.classList.remove('ring-2', 'ring-yellow-400')
      }, 2000)
    }
  }, [])
  const leaderboard = useMemo(() => {
    const skillMap = new Map(skills.map(s => [s.id, s]))
    const items: LeaderboardItem[] = []

    for (const [skillId, usage] of Object.entries(usageData)) {
      const skill = skillMap.get(skillId)
      items.push({
        name: skillId,
        usage,
        rank: 0,
        scope: skill?.scope,
      })
    }

    // 按使用次数降序排序
    items.sort((a, b) => b.usage - a.usage)

    // 添加排名
    items.forEach((item, index) => {
      item.rank = index + 1
    })

    return items.slice(0, 15) // 显示前15名
  }, [skills])

  if (leaderboard.length === 0) {
    return null
  }

  const maxUsage = leaderboard[0]?.usage || 1

  return (
    <div className="glass rounded-xl p-4 sm:p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <svg
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
        <h2 className="text-lg font-semibold text-white">使用排行榜</h2>
      </div>

      <div className="space-y-2">
        {leaderboard.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            onClick={() => scrollToSkill(item.name)}
          >
            {/* 排名 */}
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
              ${item.rank <= 3 ? 'bg-white/20' : 'bg-white/10'}
              ${item.rank <= 3 ? MEDAL_COLORS[item.rank - 1] : 'text-white/60'}
            `}>
              {item.rank}
            </div>

            {/* 技能信息 */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm text-white truncate">
                  {item.name}
                </span>
                {item.scope && (
                  <span className={`
                    px-1.5 py-0.5 rounded text-xs
                    ${item.scope === 'top-level'
                      ? 'bg-blue-500/30 text-blue-200'
                      : 'bg-purple-500/30 text-purple-200'
                    }
                  `}>
                    {item.scope === 'top-level' ? '顶级' : 'ECC'}
                  </span>
                )}
              </div>

              {/* 进度条 */}
              <div className="mt-1.5 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`
                    h-full rounded-full transition-all duration-500
                    ${item.rank <= 3
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
                      : 'bg-white/30'
                    }
                  `}
                  style={{ width: `${(item.usage / maxUsage) * 100}%` }}
                />
              </div>
            </div>

            {/* 使用次数 */}
            <div className="text-right flex-shrink-0">
              <span className="text-sm font-semibold text-white">
                {item.usage}
              </span>
              <span className="text-xs text-white/50 ml-1">次</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
