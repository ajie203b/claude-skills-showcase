import type { ViewScope } from '../types/skill'

interface ViewToggleProps {
  scope: ViewScope
  onScopeChange: (scope: ViewScope) => void
  stats: { topLevel: number; ecc: number; total: number }
}

export function ViewToggle({ scope, onScopeChange, stats }: ViewToggleProps) {
  const views: { key: ViewScope; label: string; count: number }[] = [
    { key: 'top-level', label: '顶级', count: stats.topLevel },
    { key: 'ecc', label: 'ECC', count: stats.ecc },
    { key: 'all', label: '全部', count: stats.total },
  ]

  return (
    <div className="flex gap-1.5">
      {views.map(view => (
        <button
          key={view.key}
          onClick={() => onScopeChange(view.key)}
          className={`btn text-xs ${scope === view.key ? 'btn-active' : ''}`}
        >
          {view.label}
          <span className="opacity-50">({view.count})</span>
        </button>
      ))}
    </div>
  )
}
