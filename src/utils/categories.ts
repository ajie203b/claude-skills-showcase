// 分类颜色配置 — 统一管理，避免组件间重复定义
export const CATEGORY_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  '后端框架':   { bg: '#fff7ed', text: '#c2410c', dot: '#f97316' },
  '前端':       { bg: '#eff6ff', text: '#1d4ed8', dot: '#3b82f6' },
  '语言/平台':  { bg: '#f0fdf4', text: '#15803d', dot: '#22c55e' },
  '测试/质量':  { bg: '#fefce8', text: '#a16207', dot: '#eab308' },
  '安全':       { bg: '#fef2f2', text: '#b91c1c', dot: '#ef4444' },
  '部署/运维':  { bg: '#faf5ff', text: '#7e22ce', dot: '#a855f7' },
  '研究/搜索':  { bg: '#ecfeff', text: '#0e7490', dot: '#06b6d4' },
  '内容创作':   { bg: '#fdf2f8', text: '#be185d', dot: '#ec4899' },
  'API 设计':   { bg: '#eef2ff', text: '#4338ca', dot: '#6366f1' },
  'Agent/工作流': { bg: '#f5f3ff', text: '#6d28d9', dot: '#8b5cf6' },
  '数据/存储':  { bg: '#ecfdf5', text: '#047857', dot: '#10b981' },
  '设计/视觉':  { bg: '#fff1f2', text: '#be123c', dot: '#f43f5e' },
  '学习/进化':  { bg: '#fffbeb', text: '#b45309', dot: '#f59e0b' },
  '商业/投资':  { bg: '#f7fee7', text: '#4d7c0f', dot: '#84cc16' },
  '网络':       { bg: '#f0fdfa', text: '#0f766e', dot: '#14b8a6' },
  '科学研究':   { bg: '#f0f9ff', text: '#0369a1', dot: '#0ea5e9' },
  '运营/自动化': { bg: '#fdf4ff', text: '#a21caf', dot: '#d946ef' },
  '营销/传播':  { bg: '#fff1f2', text: '#be123c', dot: '#f43f5e' },
  '其他':       { bg: '#f9fafb', text: '#374151', dot: '#6b7280' },
}

export function getCategoryColor(category: string) {
  return CATEGORY_COLORS[category] || CATEGORY_COLORS['其他']
}
