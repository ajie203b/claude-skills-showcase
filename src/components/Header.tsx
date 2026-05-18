import { RefreshButton } from './RefreshButton'

interface HeaderProps {
  stats: {
    total: number
    topLevel: number
    ecc: number
    filtered: number
  }
}

export function Header({ stats }: HeaderProps) {
  return (
    <header className="bg-white border-b border-[var(--gray-200)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* 左侧标题 */}
          <div>
            <h1 className="text-2xl font-bold text-[var(--gray-900)] tracking-tight">
              <span className="text-[var(--indigo-600)]">ajie</span>
              <span className="text-[var(--gray-400)]">'s</span>
              <span className="ml-1.5">技能树</span>
            </h1>
            <p className="mt-1 text-sm text-[var(--gray-500)]">
              Claude Code Skills · 个人技能库
            </p>
          </div>

          {/* 右侧统计 + 刷新 */}
          <div className="flex items-center gap-4">
            <div className="flex gap-3">
              <StatBadge label="总计" value={stats.total} />
              <StatBadge label="顶级" value={stats.topLevel} color="var(--indigo-600)" />
              <StatBadge label="ECC" value={stats.ecc} color="var(--gray-500)" />
            </div>
            <RefreshButton />
          </div>
        </div>
      </div>
    </header>
  )
}

function StatBadge({ label, value, color }: { label: string; value: number; color?: string }) {
  return (
    <div className="text-center">
      <div
        className="text-lg font-bold tabular-nums"
        style={{ color: color || 'var(--gray-900)' }}
      >
        {value}
      </div>
      <div className="text-[0.65rem] text-[var(--gray-400)] uppercase tracking-wider font-medium">
        {label}
      </div>
    </div>
  )
}
