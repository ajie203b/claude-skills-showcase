import { useState } from 'react'

export function RefreshButton() {
  const [loading, setLoading] = useState(false)
  const [showTip, setShowTip] = useState(false)

  const handleRefresh = () => {
    setLoading(true)
    setTimeout(() => {
      window.location.reload()
    }, 300)
  }

  return (
    <div className="relative">
      <button
        onClick={handleRefresh}
        onMouseEnter={() => setShowTip(true)}
        onMouseLeave={() => setShowTip(false)}
        disabled={loading}
        className="btn text-xs"
        title="刷新页面"
      >
        <svg
          className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        {loading ? '刷新中...' : '刷新页面'}
      </button>

      {showTip && (
        <div className="absolute right-0 top-full mt-2 w-64 p-3 bg-white rounded-lg shadow-lg border border-[var(--gray-200)] z-50 text-left">
          <p className="text-xs font-medium text-[var(--gray-700)] mb-2">更新使用数据</p>
          <p className="text-[0.65rem] text-[var(--gray-500)] leading-relaxed">
            在本地运行以下命令更新排行榜：
          </p>
          <code className="block mt-1.5 p-1.5 bg-[var(--gray-50)] rounded text-[0.6rem] text-[var(--indigo-600)] font-mono break-all">
            npx tsx scripts/update-usage.ts
          </code>
          <p className="text-[0.6rem] text-[var(--gray-400)] mt-2">
            然后 git push 部署
          </p>
        </div>
      )}
    </div>
  )
}
