// 分类颜色映射
const CATEGORY_COLORS: Record<string, string> = {
  '后端框架': 'bg-orange-500/20 text-orange-200 border-orange-500/30',
  '前端': 'bg-blue-500/20 text-blue-200 border-blue-500/30',
  '语言/平台': 'bg-green-500/20 text-green-200 border-green-500/30',
  '测试/质量': 'bg-yellow-500/20 text-yellow-200 border-yellow-500/30',
  '安全': 'bg-red-500/20 text-red-200 border-red-500/30',
  '部署/运维': 'bg-purple-500/20 text-purple-200 border-purple-500/30',
  '研究/搜索': 'bg-cyan-500/20 text-cyan-200 border-cyan-500/30',
  '内容创作': 'bg-pink-500/20 text-pink-200 border-pink-500/30',
  'API 设计': 'bg-indigo-500/20 text-indigo-200 border-indigo-500/30',
  'Agent/工作流': 'bg-violet-500/20 text-violet-200 border-violet-500/30',
  '数据/存储': 'bg-emerald-500/20 text-emerald-200 border-emerald-500/30',
  '设计/视觉': 'bg-rose-500/20 text-rose-200 border-rose-500/30',
  '学习/进化': 'bg-amber-500/20 text-amber-200 border-amber-500/30',
  '商业/投资': 'bg-lime-500/20 text-lime-200 border-lime-500/30',
  '网络': 'bg-teal-500/20 text-teal-200 border-teal-500/30',
  '科学研究': 'bg-sky-500/20 text-sky-200 border-sky-500/30',
  '运营/自动化': 'bg-fuchsia-500/20 text-fuchsia-200 border-fuchsia-500/30',
  '营销/传播': 'bg-red-400/20 text-red-200 border-red-400/30',
  '其他': 'bg-gray-500/20 text-gray-200 border-gray-500/30',
}

interface CategoryFilterProps {
  categories: string[]
  selectedCategories: string[]
  onToggleCategory: (category: string) => void
  onClearFilters: () => void
}

export function CategoryFilter({
  categories,
  selectedCategories,
  onToggleCategory,
  onClearFilters,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <span className="text-white/60 text-sm mr-2">分类：</span>

      {categories.map(category => {
        const isSelected = selectedCategories.includes(category)
        const colorClass = CATEGORY_COLORS[category] || CATEGORY_COLORS['其他']

        return (
          <button
            key={category}
            onClick={() => onToggleCategory(category)}
            className={`
              category-tag border
              ${isSelected
                ? `${colorClass} ring-2 ring-white/30`
                : 'bg-black/20 text-white/80 border-white/20 hover:bg-white/10'
              }
            `}
          >
            {category}
          </button>
        )
      })}

      {selectedCategories.length > 0 && (
        <button
          onClick={onClearFilters}
          className="text-sm text-white/60 hover:text-white transition-colors ml-2"
        >
          清除筛选
        </button>
      )}
    </div>
  )
}
