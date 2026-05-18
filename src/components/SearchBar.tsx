import { useState, useEffect } from 'react'

interface SearchBarProps {
  search: string
  onSearchChange: (search: string) => void
  resultCount: number
}

export function SearchBar({ search, onSearchChange, resultCount }: SearchBarProps) {
  const [inputValue, setInputValue] = useState(search)

  useEffect(() => {
    const timer = setTimeout(() => onSearchChange(inputValue), 300)
    return () => clearTimeout(timer)
  }, [inputValue, onSearchChange])

  useEffect(() => { setInputValue(search) }, [search])

  return (
    <div className="relative flex-1 max-w-md">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg className="h-4 w-4 text-[var(--gray-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="搜索技能名称、描述..."
        className="w-full py-2 pl-10 pr-10 bg-white border border-[var(--gray-200)] rounded-lg text-sm text-[var(--gray-800)] placeholder-[var(--gray-400)] outline-none focus:border-[var(--indigo-500)] focus:ring-2 focus:ring-[var(--indigo-100)] transition-all"
      />

      {inputValue && (
        <button
          onClick={() => { setInputValue(''); onSearchChange('') }}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-[var(--gray-400)] hover:text-[var(--gray-600)] transition-colors"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      {search && (
        <div className="absolute -bottom-5 left-0 text-xs text-[var(--gray-400)]">
          找到 {resultCount} 个结果
        </div>
      )}
    </div>
  )
}
