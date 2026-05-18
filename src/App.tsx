import { Header } from './components/Header'
import { ViewToggle } from './components/ViewToggle'
import { SearchBar } from './components/SearchBar'
import { CategoryFilter } from './components/CategoryFilter'
import { SkillGrid } from './components/SkillGrid'
import { Leaderboard } from './components/Leaderboard'
import { useSkills } from './hooks/useSkills'

function App() {
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
    <div className="min-h-screen gradient-bg">
      {/* 头部 */}
      <Header stats={stats} />

      {/* 主内容区 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 筛选栏 */}
        <div className="glass rounded-xl p-4 sm:p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* 视图切换 */}
            <ViewToggle scope={scope} onScopeChange={setScope} stats={stats} />

            {/* 搜索框 */}
            <SearchBar
              search={search}
              onSearchChange={setSearch}
              resultCount={stats.filtered}
            />
          </div>

          {/* 分类筛选 */}
          <div className="mt-4 pt-4 border-t border-white/10">
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

        {/* 底部统计 */}
        <div className="mt-8 text-center text-white/60 text-sm">
          <p>
            显示 {stats.filtered} / {stats.total} 个 Skills
            {selectedCategories.length > 0 && (
              <span> · 已选择 {selectedCategories.length} 个分类</span>
            )}
          </p>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="glass mt-auto py-6 px-4">
        <div className="max-w-7xl mx-auto text-center text-white/60 text-sm">
          <p>Claude Code Skills 展示 · {stats.total} 个可用技能</p>
          <p className="mt-1">
            数据来源: ~/.claude/skills/
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
