import { useState } from 'react'
import { Header } from './components/Header'
import { TabNav, type TabId } from './components/TabNav'
import { ViewToggle } from './components/ViewToggle'
import { SearchBar } from './components/SearchBar'
import { CategoryFilter } from './components/CategoryFilter'
import { SkillGrid } from './components/SkillGrid'
import { Leaderboard } from './components/Leaderboard'
import { WorkflowGrid } from './components/WorkflowGrid'
import { useSkills } from './hooks/useSkills'

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('skills')

  const {
    skills,
    scope,
    setScope,
    search,
    setSearch,
    selectedCategories,
    toggleCategory,
    clearFilters,
    allCategories,
    stats,
  } = useSkills()

  return (
    <div className="min-h-screen bg-[var(--gray-50)]">
      {/* 头部 */}
      <Header stats={stats} />

      {/* Tab 导航 */}
      <TabNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* 主内容区 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'skills' ? (
          <>
            {/* 控制面板 */}
            <div className="card p-4 sm:p-5 mb-6">
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                <ViewToggle scope={scope} onScopeChange={setScope} stats={stats} />
                <SearchBar
                  search={search}
                  onSearchChange={setSearch}
                  resultCount={stats.filtered}
                />
              </div>
              <div className="mt-3 pt-3 border-t border-[var(--gray-100)]">
                <CategoryFilter
                  categories={allCategories}
                  selectedCategories={selectedCategories}
                  onToggleCategory={toggleCategory}
                  onClearFilters={clearFilters}
                />
              </div>
            </div>

            {/* 排行榜 */}
            <Leaderboard skills={skills} />

            {/* 技能网格 */}
            <SkillGrid skills={skills} />

            {/* 底部状态 */}
            <div className="mt-6 text-center text-xs text-[var(--gray-400)]">
              显示 {stats.filtered} / {stats.total} 个技能
              {selectedCategories.length > 0 && (
                <span> · 已选择 {selectedCategories.length} 个分类</span>
              )}
            </div>
          </>
        ) : (
          <WorkflowGrid />
        )}
      </main>

      {/* 页脚 */}
      <footer className="border-t border-[var(--gray-200)] bg-white mt-12 py-6 px-4">
        <div className="max-w-7xl mx-auto text-center text-xs text-[var(--gray-400)] space-y-1">
          <p>claude-skills-showcase · {stats.total} skills</p>
          <p>source: ~/.claude/skills/</p>
        </div>
      </footer>
    </div>
  )
}

export default App
