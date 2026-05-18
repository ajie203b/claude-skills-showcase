import { useState, useMemo } from 'react'
import type { Skill, ViewScope } from '../types/skill'
import skillsData from '../data/skills.json'
import { getDescriptionCN, getTriggersCN, getUsageCN } from '../utils/translate'

// 为每个 skill 添加中文描述、触发条件和使用说明
const skillsWithCN: Skill[] = (skillsData as Skill[]).map(skill => ({
  ...skill,
  descriptionCN: getDescriptionCN(skill.id, skill.description),
  triggersCN: getTriggersCN(skill.id, skill.triggers),
  usageCN: getUsageCN(skill.id),
}))

export function useSkills() {
  const [scope, setScope] = useState<ViewScope>('top-level')
  const [search, setSearch] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  // 获取所有可用的分类
  const allCategories = useMemo(() => {
    const categorySet = new Set<string>()
    for (const skill of skillsWithCN) {
      for (const cat of skill.categories) {
        categorySet.add(cat)
      }
    }
    return Array.from(categorySet).sort()
  }, [])

  // 过滤 skills
  const filteredSkills = useMemo(() => {
    return skillsWithCN.filter(skill => {
      // 范围过滤
      const matchScope = scope === 'all' || skill.scope === scope

      // 搜索过滤
      const searchLower = search.toLowerCase()
      const matchSearch = !search ||
        skill.name.toLowerCase().includes(searchLower) ||
        skill.description.toLowerCase().includes(searchLower) ||
        (skill as any).descriptionCN?.toLowerCase().includes(searchLower) ||
        skill.triggers.some(t => t.toLowerCase().includes(searchLower))

      // 分类过滤
      const matchCategory = selectedCategories.length === 0 ||
        skill.categories.some(c => selectedCategories.includes(c))

      return matchScope && matchSearch && matchCategory
    })
  }, [scope, search, selectedCategories])

  // 统计信息
  const stats = useMemo(() => {
    const topLevel = skillsWithCN.filter(s => s.scope === 'top-level').length
    const ecc = skillsWithCN.filter(s => s.scope === 'ecc').length
    return {
      total: skillsWithCN.length,
      topLevel,
      ecc,
      filtered: filteredSkills.length,
    }
  }, [filteredSkills.length])

  // 切换分类选择
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  // 清除所有筛选
  const clearFilters = () => {
    setSearch('')
    setSelectedCategories([])
  }

  return {
    skills: filteredSkills,
    scope,
    setScope,
    search,
    setSearch,
    selectedCategories,
    toggleCategory,
    clearFilters,
    allCategories,
    stats,
  }
}
