import type { ViewScope } from '../types/skill'

interface ViewToggleProps {
  scope: ViewScope
  onScopeChange: (scope: ViewScope) => void
  stats: {
    topLevel: number
    ecc: number
    total: number
  }
}

export function ViewToggle({ scope, onScopeChange, stats }: ViewToggleProps) {
  const views: { key: ViewScope; label: string; count: number }[] = [
    { key: 'top-level', label: '顶级', count: stats.topLevel },
    { key: 'ecc', label: 'ECC', count: stats.ecc },
    { key: 'all', label: '全部', count: stats.total },
  ]

  return (
    <div className="flex gap-2">
      {views.map(view => (
        <button
          key={view.key}
          onClick={() => onScopeChange(view.key)}
          className={`
            px-4 py-2 rounded-lg font-medium transition-all duration-200
            ${scope === view.key
              ? 'bg-white text-purple-600 shadow-lg'
              : 'glass-dark text-white hover:bg-white/20'
            }
          `}
        >
          {view.label}
          <span className="ml-2 text-sm opacity-75">({view.count})</span>
        </button>
      ))}
    </div>
  )
}
