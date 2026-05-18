import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Claude Code 项目目录
const CLAUDE_DIR = path.join(process.env.HOME || process.env.USERPROFILE || '', '.claude', 'projects')
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'data', 'usage.json')

interface UsageMap {
  [skillId: string]: number
}

function scanSessionFiles(): UsageMap {
  const usage: UsageMap = {}

  if (!fs.existsSync(CLAUDE_DIR)) {
    console.error(`Claude projects directory not found: ${CLAUDE_DIR}`)
    return usage
  }

  // 遍历所有项目目录
  const projects = fs.readdirSync(CLAUDE_DIR, { withFileTypes: true })

  for (const project of projects) {
    if (!project.isDirectory()) continue

    const projectDir = path.join(CLAUDE_DIR, project.name)

    // 查找所有 .jsonl 文件
    const files = fs.readdirSync(projectDir, { withFileTypes: true })

    for (const file of files) {
      if (!file.isFile() || !file.name.endsWith('.jsonl')) continue

      const filePath = path.join(projectDir, file.name)

      try {
        const content = fs.readFileSync(filePath, 'utf-8')
        const lines = content.split('\n').filter(line => line.trim())

        for (const line of lines) {
          try {
            const entry = JSON.parse(line)

            // 检查是否有 attributionSkill 字段
            if (entry.attributionSkill) {
              const skillId = entry.attributionSkill
              usage[skillId] = (usage[skillId] || 0) + 1
            }

            // 也检查 message.content 中的 skill 调用
            if (entry.message?.content && Array.isArray(entry.message.content)) {
              for (const contentItem of entry.message.content) {
                // 检查 skill 工具调用
                if (contentItem.type === 'tool_use' && contentItem.name === 'Skill') {
                  const skillInput = contentItem.input
                  if (skillInput?.skill) {
                    const skillId = skillInput.skill
                    usage[skillId] = (usage[skillId] || 0) + 1
                  }
                }
              }
            }
          } catch {
            // 跳过无效的 JSON 行
          }
        }
      } catch (error) {
        console.error(`Error reading ${filePath}:`, error)
      }
    }
  }

  return usage
}

function mergeWithExisting(newUsage: UsageMap): UsageMap {
  // 读取现有的 usage.json
  let existingUsage: UsageMap = {}

  if (fs.existsSync(OUTPUT_FILE)) {
    try {
      const content = fs.readFileSync(OUTPUT_FILE, 'utf-8')
      existingUsage = JSON.parse(content)
    } catch {
      console.log('No existing usage.json found, starting fresh')
    }
  }

  // 合并数据（累加）
  const merged: UsageMap = { ...existingUsage }

  for (const [skillId, count] of Object.entries(newUsage)) {
    merged[skillId] = (merged[skillId] || 0) + count
  }

  return merged
}

function main() {
  console.log('Scanning Claude Code session files...')
  console.log(`Projects directory: ${CLAUDE_DIR}`)

  const newUsage = scanSessionFiles()
  const totalEntries = Object.values(newUsage).reduce((sum, count) => sum + count, 0)
  console.log(`Found ${totalEntries} skill usages across ${Object.keys(newUsage).length} skills`)

  const mergedUsage = mergeWithExisting(newUsage)

  // 按使用次数排序
  const sortedUsage: UsageMap = {}
  const entries = Object.entries(mergedUsage).sort((a, b) => b[1] - a[1])

  for (const [skillId, count] of entries) {
    sortedUsage[skillId] = count
  }

  // 写入文件
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(sortedUsage, null, 2), 'utf-8')
  console.log(`\nUsage data written to: ${OUTPUT_FILE}`)

  // 显示 Top 10
  console.log('\nTop 10 Skills:')
  entries.slice(0, 10).forEach(([skillId, count], index) => {
    console.log(`  ${index + 1}. ${skillId}: ${count}`)
  })
}

main()
