import { useState, useEffect } from 'react'

interface SearchBarProps {
  search: string
  onSearchChange: (search: string) => void
  resultCount: number
}

export function SearchBar({ search, onSearchChange, resultCount }: SearchBarProps) {
  const [inputValue, setInputValue] = useState(search)

  // 防抖处理
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(inputValue)
    }, 300)

    return () => clearTimeout(timer)
  }, [inputValue, onSearchChange])

  // 同步外部状态
  useEffect(() => {
    setInputValue(search)
  }, [search])

  return (
    <div className="relative flex-1 max-w-md">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          className="h-5 w-5 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="搜索 skills..."
        className="w-full pl-10 pr-4 py-2 glass-dark rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
      />

      {inputValue && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <button
            onClick={() => {
              setInputValue('')
              onSearchChange('')
            }}
            className="text-white/50 hover:text-white transition-colors"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {search && (
        <div className="absolute -bottom-6 left-0 text-sm text-white/60">
          找到 {resultCount} 个结果
        </div>
      )}
    </div>
  )
}
