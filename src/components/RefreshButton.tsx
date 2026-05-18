import { useState } from 'react'

export function RefreshButton() {
  const [loading, setLoading] = useState(false)

  const handleRefresh = () => {
    setLoading(true)
    setTimeout(() => {
      window.location.reload()
    }, 300)
  }

  return (
    <button
      onClick={handleRefresh}
      disabled={loading}
      className="btn text-xs"
      title="刷新页面（数据更新需重新部署）"
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
  )
}
