import { getCategoryColor } from '../utils/categories'

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
    <div className="flex flex-wrap gap-1.5 items-center">
      <span className="text-xs text-[var(--gray-400)] font-medium mr-1">分类:</span>

      {categories.map(category => {
        const isSelected = selectedCategories.includes(category)
        const colors = getCategoryColor(category)

        return (
          <button
            key={category}
            onClick={() => onToggleCategory(category)}
            className="tag"
            style={{
              background: isSelected ? colors.bg : 'var(--gray-50)',
              color: isSelected ? colors.text : 'var(--gray-500)',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: isSelected ? colors.dot + '40' : 'var(--gray-200)',
            }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: colors.dot }}
            />
            {category}
          </button>
        )
      })}

      {selectedCategories.length > 0 && (
        <button
          onClick={onClearFilters}
          className="text-xs text-[var(--gray-400)] hover:text-[var(--gray-600)] transition-colors ml-1"
        >
          清除
        </button>
      )}
    </div>
  )
}
