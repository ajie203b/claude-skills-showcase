import express from 'express'
import { createServer as createViteServer } from 'vite'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const SKILLS_DIR = path.join(process.env.HOME || process.env.USERPROFILE || '', '.claude', 'skills')
const OUTPUT_FILE = path.join(__dirname, 'src', 'data', 'skills.json')

// 分类规则（与 scripts/extract-skills.ts 保持一致）
const CATEGORY_RULES: [RegExp, string][] = [
  [/django|laravel|fastapi|flask|express|nestjs|springboot/i, '后端框架'],
  [/react|vue|angular|frontend|css|tailwind|nextjs|nuxt/i, '前端'],
  [/python|rust|golang|kotlin|flutter|swift|cpp|csharp|java|perl|ruby/i, '语言/平台'],
  [/test|tdd|coverage|review|quality/i, '测试/质量'],
  [/security|auth|csrf|xss|hipaa|compliance|bounty/i, '安全'],
  [/deploy|ci|cd|docker|k8s|devops|github-ops/i, '部署/运维'],
  [/research|search|retrieval|exa|iterative/i, '研究/搜索'],
  [/content|article|writing|blog|copywriting/i, '内容创作'],
  [/api|rest|graphql|endpoint|connector/i, 'API 设计'],
  [/agent|harness|loop|workflow|dmux|orchestra/i, 'Agent/工作流'],
  [/data|database|sql|cache|migration|postgres|mysql|redis/i, '数据/存储'],
  [/ui|ux|design|ppt|image|video|slide|dashboard/i, '设计/视觉'],
  [/learning|skill|instinct|evolve/i, '学习/进化'],
  [/market|investor|business|finance|billing/i, '商业/投资'],
  [/network|cisco|bgp|ssh|interface/i, '网络'],
  [/scientific|pubmed|scholar|literature/i, '科学研究'],
  [/automation|audit|ops|jira|email|notification/i, '运营/自动化'],
  [/brand|seo|social|crosspost/i, '营销/传播'],
]

function categorize(name: string, description: string): string[] {
  const text = `${name} ${description}`
  const categories = new Set<string>()
  for (const [pattern, category] of CATEGORY_RULES) {
    if (pattern.test(text)) categories.add(category)
  }
  return categories.size > 0 ? Array.from(categories) : ['其他']
}

function extractTriggers(content: string): string[] {
  const triggerMatch = content.match(/## When to (?:Activate|Use)\s*\n([\s\S]*?)(?=\n##|$)/)
  if (!triggerMatch) return []
  const listItems = triggerMatch[1].match(/^[\s]*[-*]\s+(.+$/gm)
  if (!listItems) return []
  return listItems
    .map(item => item.replace(/^[\s]*[-*]\s+/, '').trim())
    .filter(Boolean)
    .slice(0, 5)
}

function scanSkills() {
  const skills: any[] = []
  if (!fs.existsSync(SKILLS_DIR)) return skills

  const entries = fs.readdirSync(SKILLS_DIR, { withFileTypes: true })
  for (const entry of entries) {
    if (!entry.isDirectory()) continue

    if (entry.name === 'ecc') {
      const eccDir = path.join(SKILLS_DIR, 'ecc')
      for (const eccEntry of fs.readdirSync(eccDir, { withFileTypes: true })) {
        if (!eccEntry.isDirectory()) continue
        const skillFile = path.join(eccDir, eccEntry.name, 'SKILL.md')
        if (fs.existsSync(skillFile)) {
          const skill = parseSkillFile(skillFile, 'ecc')
          if (skill) skills.push(skill)
        }
      }
    } else {
      const skillFile = path.join(SKILLS_DIR, entry.name, 'SKILL.md')
      if (fs.existsSync(skillFile)) {
        const skill = parseSkillFile(skillFile, 'top-level')
        if (skill) skills.push(skill)
      }
    }
  }
  return skills
}

function parseSkillFile(filePath: string, scope: 'top-level' | 'ecc') {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const { data, content: markdownContent } = matter(content)
    const id = path.basename(path.dirname(filePath))
    return {
      id,
      name: data.name || id,
      description: data.description || '',
      origin: data.origin || '',
      scope,
      categories: categorize(id, data.description || ''),
      allowedTools: data.allowed_tools || [],
      triggers: extractTriggers(markdownContent),
      filePath: filePath.replace(SKILLS_DIR, '').replace(/\\/g, '/'),
    }
  } catch {
    return null
  }
}

async function startServer() {
  const app = express()
  app.use(express.json())

  // API: 刷新技能数据
  app.post('/api/refresh', (_req, res) => {
    try {
      console.log('🔄 Scanning skills...')
      const skills = scanSkills()
      fs.writeFileSync(OUTPUT_FILE, JSON.stringify(skills, null, 2), 'utf-8')
      console.log(`✅ Found ${skills.length} skills, written to ${OUTPUT_FILE}`)
      res.json({ success: true, count: skills.length })
    } catch (error) {
      console.error('❌ Refresh failed:', error)
      res.status(500).json({ success: false, error: String(error) })
    }
  })

  // Vite 开发服务器
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  })

  app.use(vite.middlewares)

  app.listen(5173, () => {
    console.log('')
    console.log('  🚀 开发服务器已启动')
    console.log('  ➜  Local:   http://localhost:5173/claude-skills-showcase/')
    console.log('  ➜  API:     http://localhost:5173/api/refresh (POST)')
    console.log('')
  })
}

startServer()
