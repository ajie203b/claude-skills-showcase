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
    <header className="glass sticky top-0 z-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              ajie的技能树
            </h1>
            <p className="mt-2 text-lg text-white/80">
              探索 {stats.total} 个可用的 Claude Code 技能
            </p>
          </div>

          <div className="flex gap-4 text-sm">
            <div className="glass-dark rounded-lg px-4 py-2 text-center">
              <div className="text-2xl font-bold text-white">{stats.total}</div>
              <div className="text-white/60">总计</div>
            </div>
            <div className="glass-dark rounded-lg px-4 py-2 text-center">
              <div className="text-2xl font-bold text-blue-300">{stats.topLevel}</div>
              <div className="text-white/60">顶级</div>
            </div>
            <div className="glass-dark rounded-lg px-4 py-2 text-center">
              <div className="text-2xl font-bold text-purple-300">{stats.ecc}</div>
              <div className="text-white/60">ECC</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
