
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

interface Skill {
  id: string
  name: string
  description: string
  origin: string
  scope: 'top-level' | 'ecc'
  categories: string[]
  allowedTools: string[]
  triggers: string[]
  filePath: string
}

const SKILLS_DIR = path.join(process.env.HOME || process.env.USERPROFILE || '', '.claude', 'skills')
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'data', 'skills.json')

// 分类规则
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
    if (pattern.test(text)) {
      categories.add(category)
    }
  }

  return categories.size > 0 ? Array.from(categories) : ['其他']
}

function extractTriggers(content: string): string[] {
  // 提取 "When to Activate" 部分的列表项
  const triggerMatch = content.match(/## When to (?:Activate|Use)\s*\n([\s\S]*?)(?=\n##|$)/)
  if (!triggerMatch) return []

  const triggerSection = triggerMatch[1]
  const triggers: string[] = []

  // 匹配以 - 或 * 开头的列表项
  const listItems = triggerSection.match(/^[\s]*[-*]\s+(.+)$/gm)
  if (listItems) {
    for (const item of listItems) {
      const cleaned = item.replace(/^[\s]*[-*]\s+/, '').trim()
      if (cleaned) {
        triggers.push(cleaned)
      }
    }
  }

  return triggers.slice(0, 5) // 最多保留 5 个触发条件
}

function parseSkillFile(filePath: string, scope: 'top-level' | 'ecc'): Skill | null {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const { data, content: markdownContent } = matter(content)

    const id = path.basename(path.dirname(filePath))
    const name = data.name || id
    const description = data.description || ''
    const origin = data.origin || ''
    const allowedTools = data.allowed_tools || []

    const categories = categorize(name, description)
    const triggers = extractTriggers(markdownContent)

    return {
      id,
      name,
      description,
      origin,
      scope,
      categories,
      allowedTools,
      triggers,
      filePath: filePath.replace(SKILLS_DIR, '').replace(/\\/g, '/'),
    }
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error)
    return null
  }
}

function scanSkills(): Skill[] {
  const skills: Skill[] = []

  if (!fs.existsSync(SKILLS_DIR)) {
    console.error(`Skills directory not found: ${SKILLS_DIR}`)
    return []
  }

  const entries = fs.readdirSync(SKILLS_DIR, { withFileTypes: true })

  for (const entry of entries) {
    // 支持目录和符号链接（指向目录）
    const isDir = entry.isDirectory() || (entry.isSymbolicLink && fs.statSync(path.join(SKILLS_DIR, entry.name)).isDirectory())
    if (!isDir) continue

    if (entry.name === 'ecc') {
      // 扫描 ecc 子目录
      const eccDir = path.join(SKILLS_DIR, 'ecc')
      const eccEntries = fs.readdirSync(eccDir, { withFileTypes: true })

      for (const eccEntry of eccEntries) {
        const isEccDir = eccEntry.isDirectory() || (eccEntry.isSymbolicLink && fs.statSync(path.join(eccDir, eccEntry.name)).isDirectory())
        if (!isEccDir) continue

        const skillFile = path.join(eccDir, eccEntry.name, 'SKILL.md')
        if (fs.existsSync(skillFile)) {
          const skill = parseSkillFile(skillFile, 'ecc')
          if (skill) skills.push(skill)
        }
      }
    } else {
      // 扫描顶级目录
      const skillFile = path.join(SKILLS_DIR, entry.name, 'SKILL.md')
      if (fs.existsSync(skillFile)) {
        const skill = parseSkillFile(skillFile, 'top-level')
        if (skill) skills.push(skill)
      }
    }
  }

  return skills
}

// 主函数
function main() {
  console.log('Scanning skills directory:', SKILLS_DIR)
  const skills = scanSkills()
  console.log(`Found ${skills.length} skills`)

  // 确保输出目录存在
  const outputDir = path.dirname(OUTPUT_FILE)
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // 写入 JSON 文件
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(skills, null, 2), 'utf-8')
  console.log(`Skills data written to: ${OUTPUT_FILE}`)

  // 统计信息
  const topLevelCount = skills.filter(s => s.scope === 'top-level').length
  const eccCount = skills.filter(s => s.scope === 'ecc').length
  console.log(`  - Top-level: ${topLevelCount}`)
  console.log(`  - ECC: ${eccCount}`)

  // 统计分类
  const categoryCount = new Map<string, number>()
  for (const skill of skills) {
    for (const cat of skill.categories) {
      categoryCount.set(cat, (categoryCount.get(cat) || 0) + 1)
    }
  }
  console.log('\nCategories:')
  for (const [cat, count] of Array.from(categoryCount.entries()).sort((a, b) => b[1] - a[1])) {
    console.log(`  - ${cat}: ${count}`)
  }
}

main()
