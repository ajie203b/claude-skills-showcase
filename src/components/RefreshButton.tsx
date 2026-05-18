import { useState } from 'react'

export function RefreshButton() {
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const handleRefresh = async () => {
    setLoading(true)
    setDone(false)
    try {
      const res = await fetch('/api/refresh', { method: 'POST' })
      if (res.ok) {
        setDone(true)
        setTimeout(() => window.location.reload(), 500)
      }
    } catch {
      // 静默失败 — 可能没有运行 server.ts
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleRefresh}
      disabled={loading}
      className="btn text-xs"
      title="从 ~/.claude/skills/ 重新扫描数据"
    >
      <svg
        className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`}
        fill="none" stroke="currentColor" viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
      {done ? '已更新' : loading ? '更新中...' : '刷新数据'}
    </button>
  )
}
