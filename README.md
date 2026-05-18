# Claude Code Skills 展示

一个精美的网页应用，用于展示和管理 Claude Code Skills。

## 功能特性

- **技能展示**：以卡片形式展示所有已安装的 Claude Code Skills
- **视图切换**：支持在顶级 Skills、ECC Skills 和全部 Skills 之间切换
- **搜索功能**：实时搜索，支持按名称、描述、触发条件筛选
- **分类筛选**：按类别（后端框架、前端、测试、安全等）筛选技能
- **详情展开**：点击卡片可展开查看详细信息（触发条件、允许工具等）
- **响应式设计**：适配桌面、平板和手机等不同屏幕尺寸
- **玻璃态 UI**：采用现代玻璃态设计风格，视觉效果优雅

## 技术栈

- **前端框架**：React 18 + TypeScript
- **构建工具**：Vite
- **样式方案**：Tailwind CSS
- **数据处理**：gray-matter（解析 YAML frontmatter）

## 项目结构

```
claude-skills-showcase/
├── scripts/
│   └── extract-skills.ts        # 数据提取脚本
├── src/
│   ├── components/              # React 组件
│   │   ├── Header.tsx
│   │   ├── ViewToggle.tsx
│   │   ├── SearchBar.tsx
│   │   ├── CategoryFilter.tsx
│   │   ├── SkillGrid.tsx
│   │   └── SkillCard.tsx
│   ├── hooks/
│   │   └── useSkills.ts         # 数据管理 Hook
│   ├── types/
│   │   └── skill.ts             # 类型定义
│   ├── utils/
│   │   └── translate.ts         # 中文描述映射
│   ├── data/
│   │   └── skills.json          # 提取的技能数据
│   ├── App.tsx                  # 主应用组件
│   └── index.css                # 全局样式
├── package.json
└── README.md
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 提取技能数据

```bash
npm run extract-skills
```

这会扫描 `~/.claude/skills/` 目录，解析所有 SKILL.md 文件，生成 `src/data/skills.json`。

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173 查看效果。

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist/` 目录。

## 数据来源

技能数据来自 `~/.claude/skills/` 目录，包含：

- **顶级 Skills**：直接安装的技能（约 40 个）
- **ECC Skills**：来自 ECC 社区的技能（约 160 个）

每个技能包含以下信息：
- 名称和描述
- 分类标签
- 触发条件
- 允许的工具
- 来源信息

## 自定义配置

### 添加中文描述

编辑 `src/utils/translate.ts` 文件，为技能添加或更新中文描述。

### 修改分类规则

编辑 `scripts/extract-skills.ts` 文件中的 `CATEGORY_RULES` 数组，调整自动分类规则。

### 调整样式

修改 `src/index.css` 文件中的自定义样式，或调整组件中的 Tailwind 类名。

## 许可证

MIT
