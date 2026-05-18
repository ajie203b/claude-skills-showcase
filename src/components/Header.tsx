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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center text-center gap-4">
          {/* 标题居中 */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              <span className="font-display text-gradient">ajie</span>
              <span className="text-[var(--gray-400)] text-3xl sm:text-4xl">'s</span>
              <span className="font-serif ml-2 text-[var(--gray-900)]">技能树</span>
            </h1>
            <p className="mt-2 text-sm text-[var(--gray-500)] font-serif">
              Claude Code Skills · 个人技能库
            </p>
          </div>

          {/* 统计 + 刷新 */}
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
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
        className="text-2xl font-bold tabular-nums font-display"
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
