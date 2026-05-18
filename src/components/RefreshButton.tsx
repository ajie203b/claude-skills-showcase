import { useState, useRef, useEffect } from 'react'

export function RefreshButton() {
  const [showGuide, setShowGuide] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!showGuide) return
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setShowGuide(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showGuide])

  const copyCommand = async (cmd: string) => {
    await navigator.clipboard.writeText(cmd)
  }

  return (
    <div className="relative" ref={panelRef}>
      <button
        onClick={() => setShowGuide(!showGuide)}
        className={`btn text-xs ${showGuide ? 'btn-active' : ''}`}
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        数据更新
      </button>

      {showGuide && (
        <div className="absolute right-0 top-full mt-2 w-[380px] bg-white rounded-xl shadow-xl border border-[var(--gray-200)] z-50 overflow-hidden">
          {/* 标题栏 */}
          <div className="px-4 py-3 bg-[var(--gray-50)] border-b border-[var(--gray-100)]">
            <h3 className="text-sm font-bold text-[var(--gray-800)]">数据更新指南</h3>
            <p className="text-[0.65rem] text-[var(--gray-400)] mt-0.5">
              本项目为静态站点，需在本地更新后推送到 GitHub
            </p>
          </div>

          {/* 步骤列表 */}
          <div className="p-4 space-y-4">
            {/* 步骤 1 */}
            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-[var(--indigo-600)] text-white flex items-center justify-center text-[0.6rem] font-bold flex-shrink-0 mt-0.5">
                1
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-[var(--gray-700)]">更新使用次数</p>
                <p className="text-[0.65rem] text-[var(--gray-400)] mt-0.5">
                  从 ~/.claude/projects/ 提取 skill 调用记录
                </p>
                <div className="mt-1.5 flex items-center gap-1.5">
                  <code className="flex-1 px-2 py-1 bg-[var(--gray-50)] rounded text-[0.65rem] text-[var(--indigo-600)] font-mono truncate">
                    npx tsx scripts/update-usage.ts
                  </code>
                  <button
                    onClick={() => copyCommand('npx tsx scripts/update-usage.ts')}
                    className="px-1.5 py-1 rounded hover:bg-[var(--gray-100)] text-[var(--gray-400)] hover:text-[var(--indigo-600)] transition-colors"
                    title="复制命令"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* 步骤 2 */}
            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-[var(--indigo-600)] text-white flex items-center justify-center text-[0.6rem] font-bold flex-shrink-0 mt-0.5">
                2
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-[var(--gray-700)]">同步技能列表</p>
                <p className="text-[0.65rem] text-[var(--gray-400)] mt-0.5">
                  扫描 ~/.claude/skills/ 目录，新增或删除的技能会自动识别
                </p>
                <div className="mt-1.5 flex items-center gap-1.5">
                  <code className="flex-1 px-2 py-1 bg-[var(--gray-50)] rounded text-[0.65rem] text-[var(--indigo-600)] font-mono truncate">
                    npx tsx scripts/extract-skills.ts
                  </code>
                  <button
                    onClick={() => copyCommand('npx tsx scripts/extract-skills.ts')}
                    className="px-1.5 py-1 rounded hover:bg-[var(--gray-100)] text-[var(--gray-400)] hover:text-[var(--indigo-600)] transition-colors"
                    title="复制命令"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* 步骤 3 */}
            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-[var(--indigo-600)] text-white flex items-center justify-center text-[0.6rem] font-bold flex-shrink-0 mt-0.5">
                3
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-[var(--gray-700)]">提交并部署</p>
                <p className="text-[0.65rem] text-[var(--gray-400)] mt-0.5">
                  推送到 main 分支后自动部署到 GitHub Pages
                </p>
                <div className="mt-1.5 flex items-center gap-1.5">
                  <code className="flex-1 px-2 py-1 bg-[var(--gray-50)] rounded text-[0.65rem] text-[var(--indigo-600)] font-mono truncate">
                    git add . && git commit -m "update data" && git push
                  </code>
                  <button
                    onClick={() => copyCommand('git add . && git commit -m "update data" && git push')}
                    className="px-1.5 py-1 rounded hover:bg-[var(--gray-100)] text-[var(--gray-400)] hover:text-[var(--indigo-600)] transition-colors"
                    title="复制命令"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* 一键复制全部 */}
            <div className="pt-2 border-t border-[var(--gray-100)]">
              <button
                onClick={() => copyCommand('npx tsx scripts/update-usage.ts && npx tsx scripts/extract-skills.ts && git add . && git commit -m "update data" && git push')}
                className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-[var(--indigo-50)] hover:bg-[var(--indigo-100)] rounded-lg text-[0.7rem] font-medium text-[var(--indigo-600)] transition-colors"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                复制全部命令（一键执行）
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
