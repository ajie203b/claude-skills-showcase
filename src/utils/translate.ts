// 中文描述映射表
// 为每个 skill 提供简洁的中文描述
export const DESCRIPTION_CN: Record<string, string> = {
  // 内容创作类
  'article-writing': '撰写文章、指南、博客、教程等长篇内容，支持从示例中提取风格',
  'content-engine': '为 X、LinkedIn、TikTok、YouTube、newsletter 创建平台原生内容',
  'crosspost': '多平台内容分发（X、LinkedIn、Threads、Bluesky）',

  // 研究与分析类
  'deep-research': '使用 firecrawl 和 exa MCP 进行多源深度研究，生成带引用的报告',
  'exa-search': 'Exa 搜索工具集成',
  'market-research': '市场研究分析',
  'iterative-retrieval': '迭代检索，逐步深入获取信息',

  // 开发模式类
  'frontend-patterns': 'React、Next.js 前端开发模式、状态管理、性能优化',
  'backend-patterns': 'Node.js、Express、Next.js API 路由的后端架构模式',
  'coding-standards': '跨项目编码规范（命名、可读性、不可变性）',
  'python-patterns': 'Python 开发模式和最佳实践',
  'python-testing': 'Python 测试策略和框架',
  'fastapi-patterns': 'FastAPI 开发模式和最佳实践',

  // Django 生态
  'django-patterns': 'Django 架构模式、DRF REST API、ORM、缓存、信号、中间件',
  'django-security': 'Django 安全最佳实践和防护措施',
  'django-tdd': 'Django 测试策略（pytest-django、TDD）',
  'django-verification': 'Django 项目验证循环（迁移、lint、测试、覆盖率）',

  // Laravel 生态
  'laravel-patterns': 'Laravel 架构模式和最佳实践',
  'laravel-plugin-discovery': 'Laravel 插件发现和集成',
  'laravel-security': 'Laravel 安全最佳实践',
  'laravel-tdd': 'Laravel 测试驱动开发',
  'laravel-verification': 'Laravel 项目验证和检查',

  // 测试与质量
  'tdd-workflow': '测试驱动开发工作流，80%+ 覆盖率',
  'verification-loop': '代码验证循环和质量检查',
  'security-review': '安全审查清单和漏洞检测',
  'eval-harness': '评估工具和测试框架',
  'e2e-testing': 'Playwright E2E 测试模式、页面对象模型、CI/CD 集成',

  // AI 与自动化
  'continuous-learning': '[已弃用] 旧版学习系统，请使用 continuous-learning-v2',
  'continuous-learning-v2': '基于本能的学习系统，通过 hooks 观察会话并进化',
  'dmux-workflows': '使用 dmux 的多代理编排（并行代理工作流）',
  'skill-creator': '创建、修改、优化 skills，运行评估',
  'find-skills': '查找和发现可用的 Skills',

  // 投资与商业
  'investor-materials': '投资者材料准备和制作',
  'investor-outreach': '投资者外联和沟通策略',

  // 媒体与文件处理
  'gpt-image': '使用 OpenAI gpt-image-2 模型生成和编辑图片',
  'fal-ai-media': 'Fal AI 媒体生成和处理',
  'video-editing': '视频编辑和处理',
  'ian-handdrawn-ppt': '手绘风格 PPT 制作',
  'exam-prep': '整合大学开卷考试复习资料，生成适合 A4 打印的文档',

  // 搜索与工具
  'search-first': '搜索优先策略，先搜索再实现',
  'strategic-compact': '策略性压缩和优化',
  'x-api': 'X (Twitter) API 集成和使用',

  // 文件处理
  'docx': 'Word 文档处理和生成',
  'pdf-extraction': 'PDF 文本、表格、元数据提取',
  'pptx': 'PowerPoint 文件处理和创建',
  'xlsx': 'Excel 文件处理和数据分析',

  // ECC 社区 skills
  'android-clean-architecture': 'Android Clean Architecture 实现模式',
  'compose-multiplatform-patterns': 'Compose Multiplatform 开发模式',
  'cpp-coding-standards': 'C++ 编码规范和最佳实践',
  'cpp-testing': 'C++ 测试策略和框架',
  'csharp-testing': 'C# 测试策略和框架',
  'dart-flutter-patterns': 'Dart/Flutter 开发模式',
  'dotnet-patterns': '.NET 开发模式和最佳实践',
  'golang-patterns': 'Go 语言开发模式',
  'golang-testing': 'Go 语言测试策略',
  'java-coding-standards': 'Java 编码规范',
  'jpa-patterns': 'JPA 数据访问模式',
  'kotlin-coroutines-flows': 'Kotlin 协程和 Flow',
  'kotlin-exposed-patterns': 'Kotlin Exposed ORM 模式',
  'kotlin-ktor-patterns': 'Kotlin Ktor 框架模式',
  'kotlin-patterns': 'Kotlin 开发模式',
  'kotlin-testing': 'Kotlin 测试策略',
  'nestjs-patterns': 'NestJS 框架模式',
  'nodejs-keccak256': 'Node.js Keccak256 哈希实现',
  'perl-patterns': 'Perl 开发模式',
  'perl-security': 'Perl 安全最佳实践',
  'perl-testing': 'Perl 测试策略',
  'rust-patterns': 'Rust 开发模式',
  'rust-testing': 'Rust 测试策略',
  'springboot-patterns': 'Spring Boot 开发模式',
  'springboot-security': 'Spring Boot 安全配置',
  'springboot-tdd': 'Spring Boot 测试驱动开发',
  'springboot-verification': 'Spring Boot 项目验证',
  'swift-actor-persistence': 'Swift Actor 持久化',
  'swift-concurrency-6-2': 'Swift 6.2 并发模式',
  'swift-protocol-di-testing': 'Swift 协议依赖注入测试',
  'swiftui-patterns': 'SwiftUI 开发模式',

  // DevOps 与基础设施
  'database-migrations': '数据库迁移策略和工具',
  'deployment-patterns': '部署模式和最佳实践',
  'docker-patterns': 'Docker 容器化模式',
  'github-ops': 'GitHub 运维和自动化',
  'homelab-network-setup': '家庭实验室网络配置',
  'mcp-server-patterns': 'MCP 服务器模式',
  'mysql-patterns': 'MySQL 数据库模式',
  'postgres-patterns': 'PostgreSQL 数据库模式',
  'clickhouse-io': 'ClickHouse 数据库集成',

  // 安全与合规
  'defi-amm-security': 'DeFi AMM 安全审计',
  'hipaa-compliance': 'HIPAA 合规性检查',
  'healthcare-phi-compliance': '医疗 PHI 合规性',
  'security-bounty-hunter': '安全漏洞赏金猎人',
  'security-scan': '安全扫描和检测',
  'llm-trading-agent-security': 'LLM 交易代理安全',

  // AI 与代理
  'agent-harness-construction': '代理框架构建',
  'agentic-engineering': '代理工程设计',
  'agent-introspection-debugging': '代理内省和调试',
  'agent-sort': '代理排序和组织',
  'ai-first-engineering': 'AI 优先工程方法',
  'ai-regression-testing': 'AI 回归测试',
  'autonomous-loops': '自主循环和自动化',
  'claude-devfleet': 'Claude 开发舰队管理',
  'continuous-agent-loop': '持续代理循环',
  'cost-aware-llm-pipeline': '成本感知的 LLM 管道',
  'council': '委员会和决策系统',
  'foundation-models-on-device': '设备端基础模型',
  'nanoclaw-repl': 'Nanoclaw REPL 集成',
  'prompt-optimizer': '提示词优化器',
  'token-budget-advisor': 'Token 预算顾问',

  // 业务与运营
  'automation-audit-ops': '自动化审计运维',
  'carrier-relationship-management': '承运商关系管理',
  'customer-billing-ops': '客户计费运维',
  'customs-trade-compliance': '海关贸易合规',
  'email-ops': '邮件运维和自动化',
  'energy-procurement': '能源采购管理',
  'enterprise-agent-ops': '企业代理运维',
  'finance-billing-ops': '财务计费运维',
  'google-workspace-ops': 'Google Workspace 运维',
  'inventory-demand-planning': '库存需求规划',
  'jira-integration': 'Jira 集成和自动化',
  'knowledge-ops': '知识运维和管理',
  'lead-intelligence': '潜在客户智能分析',
  'logistics-exception-management': '物流异常管理',
  'messages-ops': '消息运维和处理',
  'project-flow-ops': '项目流程运维',
  'research-ops': '研究运维和管理',
  'returns-reverse-logistics': '退货逆向物流',
  'terminal-ops': '终端运维和管理',
  'unified-notifications-ops': '统一通知运维',

  // 网络与硬件
  'cisco-ios-patterns': 'Cisco IOS 配置模式',
  'netmiko-ssh-automation': 'Netmiko SSH 自动化',
  'network-bgp-diagnostics': '网络 BGP 诊断',
  'network-config-validation': '网络配置验证',
  'network-interface-health': '网络接口健康检查',

  // 科学与研究
  'scientific-db-pubmed-database': 'PubMed 科学数据库',
  'scientific-thinking-literature-review': '科学思维文献综述',
  'scientific-thinking-scholar-evaluation': '科学思维学者评估',

  // 创意与媒体
  'brand-voice': '品牌声音和语调',
  'dashboard-builder': '仪表盘构建器',
  'data-scraper-agent': '数据抓取代理',
  'frontend-slides': '前端幻灯片设计',
  'liquid-glass-design': 'iOS 26 液态玻璃设计系统',
  'man-video': '视频制作和编辑',
  'manim-video': 'Manim 动画解说视频制作',
  'remotion-video-creation': 'Remotion 视频创建',
  'seo': '搜索引擎优化',
  'social-graph-ranker': '社交图谱排名',
  'ui-demo': 'UI 演示和原型',
  'ui-to-vue': 'UI 转 Vue 实现',
  'videodb': '视频数据库管理',

  // 其他特殊用途
  'api-connector-builder': 'API 连接器构建',
  'api-design': 'API 设计和规范',
  'blueprint': '蓝图和模板系统',
  'product-capability': '将 PRD 意图转化为可实现的能力计划',
  'code-tour': '代码导览和文档',
  'configure-ecc': 'ECC 配置管理',
  'connections-optimizer': '连接优化器',
  'content-hash-cache-pattern': '内容哈希缓存模式',
  'ecc-tools-cost-audit': 'ECC 工具成本审计',
  'evm-token-decimals': 'EVM Token 小数位处理',
  'hookify-rules': 'Hookify 规则配置',
  'nutrient-document-processing': '营养文档处理',
  'plankton-code-quality': 'Plankton 代码质量检查',
  'production-audit': '生产审计',
  'production-scheduling': '生产调度',
  'quality-nonconformance': '质量不符合项处理',
  'ralphinho-rfc-pipeline': 'Ralphinho RFC 管道',
  'regex-vs-llm-structured-text': '正则表达式 vs LLM 结构化文本',
  'skill-stocktake': 'Skill 库存盘点',
  'team-builder': '团队构建器',
  'visa-doc-translate': '签证文档翻译',
  'workspace-surface-audit': '工作区表面审计',
}

// 中文触发条件映射表
export const TRIGGERS_CN: Record<string, string[]> = {
  // 内容创作类
  'article-writing': [
    '撰写博客文章、论文、发布帖、指南、教程或通讯',
    '将笔记、访谈或研究转化为精炼文章',
    '根据示例匹配创始人、运营者或品牌声音',
    '优化已有长文的结构、节奏和论据'
  ],
  'content-engine': [
    '撰写 X 帖子或长推文',
    '起草 LinkedIn 帖子或发布更新',
    '编写短视频或 YouTube 解说脚本',
    '将文章、播客、演示、文档或内部笔记转化为公开内容',
    '围绕产品、洞察或叙事构建发布序列或持续内容系统'
  ],
  'crosspost': [
    '将内容同时发布到多个社交平台',
    '为不同平台调整内容格式',
    '管理跨平台发布计划'
  ],

  // 研究与分析类
  'deep-research': [
    '深入研究特定主题',
    '收集多方来源的信息',
    '生成带引用的研究报告',
    '市场趋势分析',
    '竞品研究'
  ],
  'exa-search': [
    '使用 Exa 进行网络搜索',
    '语义搜索和内容发现',
    '搜索相关文档和资源'
  ],
  'market-research': [
    '市场规模和增长分析',
    '竞争对手分析',
    '用户需求调研',
    '行业趋势研究'
  ],
  'iterative-retrieval': [
    '逐步深入检索信息',
    '多轮搜索优化结果',
    '复杂问题的分步解答'
  ],

  // 开发模式类
  'frontend-patterns': [
    '构建 React 组件（组合、props、渲染）',
    '管理状态（useState、useReducer、Zustand、Context）',
    '实现数据获取（SWR、React Query、服务端组件）',
    '优化性能（记忆化、虚拟化、代码分割）',
    '处理表单（验证、受控输入、Zod schemas）',
    '构建可访问、响应式的 UI 模式'
  ],
  'backend-patterns': [
    '设计 REST 或 GraphQL API 端点',
    '实现仓储、服务或控制器层',
    '优化数据库查询（N+1、索引、连接池）',
    '添加缓存（Redis、内存缓存、HTTP 缓存头）',
    '设置后台任务或异步处理'
  ],
  'coding-standards': [
    '启动新项目或模块',
    '审查代码质量和可维护性',
    '重构现有代码以遵循规范',
    '强制命名、格式或结构一致性',
    '设置 linting、格式化或类型检查规则'
  ],
  'python-patterns': [
    'Python 项目结构设计',
    '异步编程模式',
    '类型提示使用',
    '包管理和依赖处理'
  ],
  'python-testing': [
    '编写 pytest 测试',
    '使用 fixtures 和参数化',
    'Mock 和 patch 技巧',
    '测试覆盖率分析'
  ],
  'fastapi-patterns': [
    '设计 FastAPI 端点',
    'Pydantic 模型验证',
    '依赖注入系统',
    '异步处理和并发'
  ],

  // Django 生态
  'django-patterns': [
    '设计 Django 模型和关系',
    '实现 DRF REST API',
    '优化 ORM 查询',
    '配置缓存策略',
    '使用信号和中间件'
  ],
  'django-security': [
    '配置认证和授权',
    '防止 CSRF 和 XSS 攻击',
    'SQL 注入防护',
    '安全头部配置'
  ],
  'django-tdd': [
    '使用 pytest-django 编写测试',
    'TDD 工作流程',
    'Factory Boy 和 Faker',
    '测试覆盖率提升'
  ],
  'django-verification': [
    '运行数据库迁移',
    '代码 lint 检查',
    '测试套件执行',
    '部署前验证'
  ],

  // Laravel 生态
  'laravel-patterns': [
    'Laravel 项目架构',
    'Eloquent ORM 模式',
    '路由和中间件',
    '队列和任务调度'
  ],
  'laravel-plugin-discovery': [
    '发现和评估 Laravel 包',
    '包集成和配置',
    '版本兼容性检查'
  ],
  'laravel-security': [
    '认证和授权配置',
    '输入验证和净化',
    'SQL 注入防护',
    '安全最佳实践'
  ],
  'laravel-tdd': [
    'PHPUnit 测试编写',
    'Feature 和 Unit 测试',
    'Mock 和 Stub',
    '测试数据库管理'
  ],
  'laravel-verification': [
    '代码质量检查',
    '测试执行',
    '性能分析',
    '部署准备'
  ],

  // 测试与质量
  'tdd-workflow': [
    '编写失败的测试（RED）',
    '实现最小代码通过测试（GREEN）',
    '重构代码（REFACTOR）',
    '验证 80%+ 测试覆盖率'
  ],
  'verification-loop': [
    '代码质量检查',
    '自动化测试执行',
    '覆盖率报告生成',
    '问题修复验证'
  ],
  'security-review': [
    '安全漏洞扫描',
    'OWASP Top 10 检查',
    '依赖安全审计',
    '代码安全审查'
  ],
  'eval-harness': [
    '评估框架搭建',
    '测试用例设计',
    '性能基准测试',
    '结果分析和报告'
  ],
  'e2e-testing': [
    '编写 Playwright E2E 测试',
    '实现页面对象模型（POM）',
    '配置 CI/CD 集成',
    '处理不稳定的测试',
    '管理测试产物（截图、视频、日志）'
  ],

  // AI 与自动化
  'continuous-learning': [
    '[已弃用] 旧版学习系统',
    '请使用 continuous-learning-v2'
  ],
  'continuous-learning-v2': [
    '观察会话并学习模式',
    '创建原子化本能',
    '置信度评分系统',
    '本能进化为技能'
  ],
  'dmux-workflows': [
    '多代理并行编排',
    '任务分配和协调',
    '工作流自动化',
    '结果聚合和分析'
  ],
  'skill-creator': [
    '创建新技能',
    '修改和优化现有技能',
    '运行技能评估',
    '性能基准测试'
  ],
  'find-skills': [
    '搜索可用技能',
    '技能推荐',
    '技能库浏览',
    '技能评估和比较'
  ],

  // 投资与商业
  'investor-materials': [
    '制作商业计划书',
    '准备投资者演示',
    '财务模型构建',
    '投资条款清单'
  ],
  'investor-outreach': [
    '投资者关系管理',
    '路演准备',
    '沟通策略制定',
    '跟进和维护'
  ],

  // 媒体与文件处理
  'gpt-image': [
    '生成 AI 图像',
    '图像编辑和优化',
    '风格转换',
    '批量图像处理'
  ],
  'fal-ai-media': [
    'AI 媒体生成',
    '图像和视频处理',
    '模型训练和推理',
    '媒体优化'
  ],
  'video-editing': [
    '视频剪辑和拼接',
    '添加转场效果',
    '音频处理',
    '字幕添加'
  ],
  'ian-handdrawn-ppt': [
    '创建手绘风格演示文稿',
    '草图和线框图',
    '创意视觉设计',
    '故事板制作'
  ],
  'exam-prep': [
    '整合复习资料',
    '生成复习大纲',
    '创建练习题',
    '制作复习卡片'
  ],

  // 搜索与工具
  'search-first': [
    '先搜索再实现',
    '查找现有解决方案',
    '避免重复造轮子',
    '最佳实践参考'
  ],
  'strategic-compact': [
    '内容压缩和优化',
    '信息提炼',
    '简洁表达',
    '关键信息提取'
  ],
  'x-api': [
    'X API 集成',
    '推文发布和管理',
    '数据分析和洞察',
    '自动化营销'
  ],

  // 文件处理
  'docx': [
    '创建 Word 文档',
    '读取和解析文档',
    '文档格式转换',
    '批量文档处理'
  ],
  'pdf-extraction': [
    '提取 PDF 文本',
    '表格数据提取',
    '元数据读取',
    'PDF 转换'
  ],
  'pptx': [
    '创建演示文稿',
    '读取幻灯片内容',
    '修改和更新演示',
    '批量处理'
  ],
  'xlsx': [
    '创建 Excel 文件',
    '数据读取和分析',
    '公式和图表',
    '数据导入导出'
  ],

  // 创意与媒体
  'brand-voice': [
    '定义品牌声音和语调',
    '创建内容风格指南',
    '保持品牌一致性',
    '跨平台内容审核'
  ],
  'dashboard-builder': [
    '构建 Grafana 仪表盘',
    '创建 SigNoz 监控面板',
    '设计运维指标可视化',
    '优化仪表盘布局'
  ],
  'manim-video': [
    '创建技术概念动画解说',
    '制作数学公式动画',
    '绘制系统架构图动画',
    '产品功能演示动画'
  ],

  // 其他特殊用途
  'product-capability': [
    '将 PRD 转化为实现计划',
    '识别约束和不变量',
    '定义接口和边界',
    '标记未解决的决策'
  ],

  // AI 与代理
  'agent-harness-construction': ['构建代理框架', '设计代理工作流', '配置代理工具链', '优化代理性能'],
  'agent-introspection-debugging': ['工具调用或循环限制失败', '重复重试但无进展', '上下文增长或提示漂移导致输出质量下降', '文件系统或环境状态与预期不符', '可通过诊断和较小纠正操作恢复的工具故障'],
  'agent-sort': ['项目只需要 ECC 的子集，完整安装太嘈杂', '仓库技术栈已明确，但没人想手动筛选技能', '团队需要基于 grep 证据的可重复安装决策', '需要分离日常工作流界面和可搜索的库/参考界面', '仓库已偏离正确的语言、规则或钩子集，需要清理'],
  'agentic-engineering': ['设计代理工程架构', '构建自主开发工作流', '优化代理协作模式', '实现代理间通信'],
  'ai-first-engineering': ['采用 AI 优先开发方法', '设计 AI 辅助工作流', '优化 AI 代码生成', '集成 AI 工具链'],
  'ai-regression-testing': ['AI 代理修改了 API 路由或后端逻辑', '发现并修复了 bug，需要防止再次引入', '项目有沙箱/模拟模式可用于无数据库测试', '运行 /bug-check 或类似的代码审查命令', '存在多个代码路径（沙箱与生产、功能标志等）'],
  'android-clean-architecture': ['构建 Android 或 KMP 项目模块', '实现 UseCase、Repository 或 DataSource', '设计层间数据流（领域、数据、表示）', '使用 Koin 或 Hilt 设置依赖注入', '在分层架构中使用 Room、SQLDelight 或 Ktor'],
  'api-connector-builder': ['为此项目构建 Jira 连接器', '按照现有模式添加 Slack 提供者', '为此 API 创建新集成', '构建符合仓库连接器风格的插件'],
  'api-design': ['设计新的 API 端点', '审查现有 API 契约', '添加分页、过滤或排序', '实现 API 错误处理', '规划 API 版本策略'],
  'automation-audit-ops': ['用户询问"我有哪些自动化"、"哪些在运行"、"哪些出问题了"或"哪些重叠了"', '任务涉及定时任务、GitHub Actions、本地钩子、MCP 服务器、连接器、包装器或应用集成', '用户想知道从其他代理系统迁移了什么，以及还需要在 ECC 中重建什么', '工作区积累了多种做同一件事的方式，用户想要一个规范的通道'],
  'autonomous-loops': ['设置无需人工干预的自主开发工作流', '为问题选择正确的循环架构（简单与复杂）', '构建 CI/CD 风格的持续开发管道', '运行具有合并协调的并行代理', '实现跨循环迭代的上下文持久化'],
  'blueprint': ['将大型功能分解为多个具有清晰依赖顺序的 PR', '规划跨越多个会话的重构或迁移', '协调跨子代理的并行工作流', '任何上下文丢失会导致返工的任务'],
  'carrier-relationship-management': ['入职新承运商并审查安全、保险和资质', '运行年度或特定路线的 RFP 进行费率基准测试', '构建或更新承运商评分卡和绩效评估', '在运力紧张或承运商表现不佳时重新分配货物', '谈判费率上涨、燃油附加费或附加费 schedule'],
  'cisco-ios-patterns': ['在计划变更前审查 IOS 或 IOS-XE 配置', '选择只读 show 命令进行故障排除', '检查 ACL 通配符掩码和接口方向', '解释全局、接口、路由过程和线路配置模式', '验证变更已应用到运行配置并 intentional 保存'],
  'claude-devfleet': ['管理 Claude 开发舰队', '协调多个 Claude 实例', '优化舰队资源分配', '监控舰队性能'],
  'clickhouse-io': ['设计 ClickHouse 表 schema（MergeTree 引擎选择）', '编写分析查询（聚合、窗口函数、连接）', '优化查询性能（分区修剪、投影、物化视图）', '摄取大量数据（批量插入、Kafka 集成）', '从 PostgreSQL/MySQL 迁移到 ClickHouse 进行分析'],
  'code-tour': ['用户请求代码导览、入职导览、架构 walkthrough 或 PR 导览', '用户说"解释 X 如何工作"并想要可重用的引导式文档', '用户想要新工程师或审查者的入门路径', '任务更适合引导式序列而非平面摘要', '入职新维护者'],
  'compose-multiplatform-patterns': ['构建 Compose UI（Jetpack Compose 或 Compose Multiplatform）', '使用 ViewModel 和 Compose 状态管理 UI 状态', '在 KMP 或 Android 项目中实现导航', '设计可复用的 composable 和设计系统', '优化重组和渲染性能'],
  'configure-ecc': ['用户说"配置 ecc"、"安装 ecc"、"设置所有 claude code"或类似内容', '用户想要选择性地安装此项目的技能或规则', '用户想要验证或修复现有的 ECC 安装', '用户想要优化已安装的技能或规则以适应其项目'],
  'connections-optimizer': ['用户想要精简 X 关注列表', '用户想要重新平衡关注或连接的人', '用户说"清理我的网络"、"我应该取消关注谁"、"我应该关注谁"、"我应该重新连接谁"', '外联质量依赖于网络结构，而非仅仅是冷名单生成'],
  'content-hash-cache-pattern': ['实现内容哈希缓存', '优化缓存策略', '减少重复计算', '提高系统性能'],
  'cpp-coding-standards': ['遵循 C++ 编码规范', '应用现代 C++ 最佳实践', '审查 C++ 代码质量', '设置 C++ 项目结构'],
  'cpp-testing': ['编写 C++ 单元测试', '设置测试框架（Google Test、Catch2）', '实现测试覆盖率分析', '优化测试性能'],
  'csharp-testing': ['编写 C# 单元测试', '使用 xUnit、NUnit 或 MSTest', '实现测试覆盖率', '设置测试基础设施'],
  'customer-billing-ops': ['处理客户计费问题', '管理订阅和账单', '解决支付争议', '优化计费流程'],
  'customs-trade-compliance': ['处理海关合规问题', '管理贸易文档', '确保进出口合规', '优化清关流程'],
  'dart-flutter-patterns': ['开发 Flutter 应用', '实现 Dart 代码模式', '优化 Flutter 性能', '设计 Flutter UI'],
  'database-migrations': ['执行数据库迁移', '管理 schema 变更', '处理数据迁移', '验证迁移安全性'],
  'data-scraper-agent': ['抓取网站数据', '提取结构化信息', '处理动态加载内容', '管理抓取任务'],
  'defi-amm-security': ['审计 DeFi AMM 合约', '检查智能合约漏洞', '验证流动性池安全', '评估交易机制'],
  'deployment-patterns': ['设计部署策略', '实现 CI/CD 管道', '管理容器化部署', '优化发布流程'],
  'docker-patterns': ['编写 Dockerfile', '优化容器镜像', '管理多阶段构建', '处理容器编排'],
  'dotnet-patterns': ['开发 .NET 应用', '实现依赖注入', '优化性能', '设计 API'],
  'ecc-tools-cost-audit': ['审计 ECC 工具成本', '分析工具使用情况', '优化成本效益', '生成成本报告'],
  'email-ops': ['管理邮件运维', '自动化邮件处理', '优化邮件送达率', '处理邮件工作流'],
  'energy-procurement': ['管理能源采购', '优化能源成本', '处理供应商关系', '分析能源使用'],
  'enterprise-agent-ops': ['管理企业代理运维', '协调代理工作流', '监控代理性能', '优化资源分配'],
  'evm-token-decimals': ['处理 EVM Token 小数位', '转换 Token 精度', '处理 Token 金额', '优化 Token 计算'],
  'finance-billing-ops': ['管理财务计费', '处理发票和支付', '优化财务流程', '确保合规性'],
  'foundation-models-on-device': ['部署设备端基础模型', '优化模型推理', '管理模型资源', '处理模型更新'],
  'frontend-slides': ['创建前端幻灯片', '设计演示文稿', '实现交互式演示', '优化幻灯片性能'],
  'github-ops': ['管理 GitHub 运维', '自动化工作流', '处理 PR 和 Issues', '优化仓库管理'],
  'google-workspace-ops': ['管理 Google Workspace', '自动化文档处理', '优化协作流程', '处理权限管理'],
  'healthcare-phi-compliance': ['确保 PHI 合规性', '管理医疗数据隐私', '处理 HIPAA 要求', '审计数据访问'],
  'hipaa-compliance': ['确保 HIPAA 合规', '管理医疗数据安全', '处理患者隐私', '审计合规性'],
  'hookify-rules': ['配置 Hookify 规则', '自动化代码审查', '设置钩子工作流', '优化开发流程'],
  'homelab-network-setup': ['配置家庭实验室网络', '设置网络设备', '优化网络性能', '管理网络安全'],
  'inventory-demand-planning': ['管理库存需求规划', '预测需求趋势', '优化库存水平', '处理供应链'],
  'jira-integration': ['集成 Jira 工作流', '自动化任务管理', '同步项目数据', '优化开发流程'],
  'knowledge-ops': ['管理知识库', '组织文档内容', '优化知识共享', '处理文档更新'],
  'kotlin-coroutines-flows': ['使用 Kotlin 协程', '实现 Flow 模式', '处理异步操作', '优化并发性能'],
  'kotlin-exposed-patterns': ['使用 Kotlin Exposed ORM', '设计数据库 schema', '优化查询性能', '处理事务'],
  'kotlin-ktor-patterns': ['开发 Ktor 应用', '设计路由和端点', '处理中间件', '优化性能'],
  'kotlin-patterns': ['编写 Kotlin 代码', '遵循 Kotlin 惯用法', '优化 Kotlin 性能', '设计 Kotlin 架构'],
  'kotlin-testing': ['编写 Kotlin 测试', '使用测试框架', '实现测试覆盖率', '优化测试策略'],
  'lead-intelligence': ['分析潜在客户', '评估客户质量', '优化外联策略', '管理客户关系'],
  'liquid-glass-design': ['实现液态玻璃设计', '创建 iOS 26 风格 UI', '优化视觉效果', '处理动画和过渡'],
  'logistics-exception-management': ['处理物流异常', '管理异常工作流', '优化异常解决', '分析异常趋势'],
  'man-video': ['制作视频内容', '编辑视频素材', '添加特效和转场', '优化视频质量'],
  'mcp-server-patterns': ['开发 MCP 服务器', '设计工具集成', '优化服务器性能', '处理工具调用'],
  'messages-ops': ['管理消息运维', '处理消息队列', '优化消息传递', '监控消息状态'],
  'mysql-patterns': ['设计 MySQL 数据库', '优化查询性能', '管理数据库 schema', '处理数据迁移'],
  'nanoclaw-repl': ['使用 Nanoclaw REPL', '交互式代码执行', '调试和测试', '探索 API'],
  'netmiko-ssh-automation': ['使用 Netmiko 进行 SSH 自动化', '管理网络设备', '自动化配置管理', '处理设备连接'],
  'nestjs-patterns': ['开发 NestJS 应用', '设计模块和控制器', '实现依赖注入', '优化性能'],
  'network-bgp-diagnostics': ['诊断 BGP 问题', '分析路由表', '优化网络路由', '处理 BGP 邻居'],
  'network-config-validation': ['验证网络配置', '检查配置合规性', '优化网络设置', '处理配置变更'],
  'network-interface-health': ['监控网络接口健康', '诊断接口问题', '优化接口性能', '处理接口故障'],
  'nodejs-keccak256': ['实现 Keccak256 哈希', '处理哈希计算', '优化哈希性能', '集成加密功能'],
  'nutrient-document-processing': ['处理文档内容', '提取文档信息', '优化文档处理', '管理文档工作流'],
  'perl-patterns': ['编写 Perl 代码', '遵循 Perl 惯用法', '优化 Perl 性能', '设计 Perl 脚本'],
  'perl-security': ['确保 Perl 代码安全', '防止安全漏洞', '处理敏感数据', '审计代码安全'],
  'perl-testing': ['编写 Perl 测试', '使用 Test::More', '实现测试覆盖率', '优化测试策略'],
  'plankton-code-quality': ['检查代码质量', '分析代码指标', '优化代码结构', '处理技术债务'],
  'postgres-patterns': ['设计 PostgreSQL 数据库', '优化查询性能', '管理数据库 schema', '处理数据迁移'],
  'production-audit': ['审计生产环境', '检查系统健康', '优化性能指标', '处理生产问题'],
  'production-scheduling': ['管理生产调度', '优化生产计划', '处理资源分配', '监控生产进度'],
  'prompt-optimizer': ['优化提示词', '改进 AI 输出', '设计提示模板', '分析提示效果'],
  'quality-nonconformance': ['处理质量不符合项', '管理纠正措施', '分析质量问题', '优化质量流程'],
  'ralphinho-rfc-pipeline': ['处理 RFC 流程', '管理提案审查', '协调决策过程', '优化流程效率'],
  'regex-vs-llm-structured-text': ['比较正则表达式与 LLM', '处理结构化文本', '选择最佳方法', '优化文本处理'],
  'research-ops': ['管理研究运维', '组织研究数据', '优化研究流程', '处理研究文档'],
  'returns-reverse-logistics': ['处理退货流程', '管理逆向物流', '优化退货处理', '分析退货趋势'],
  'rust-patterns': ['编写 Rust 代码', '遵循 Rust 惯用法', '优化 Rust 性能', '设计 Rust 架构'],
  'rust-testing': ['编写 Rust 测试', '使用测试框架', '实现测试覆盖率', '优化测试策略'],
  'scientific-db-pubmed-database': ['查询 PubMed 数据库', '检索科学文献', '分析研究数据', '管理文献引用'],
  'scientific-thinking-literature-review': ['进行文献综述', '分析研究趋势', '评估研究质量', '整理研究发现'],
  'scientific-thinking-scholar-evaluation': ['评估学者影响力', '分析研究成果', '评价学术贡献', '管理学术关系'],
  'security-bounty-hunter': ['发现安全漏洞', '提交漏洞报告', '分析漏洞影响', '优化漏洞修复'],
  'security-scan': ['扫描安全漏洞', '分析安全风险', '生成安全报告', '优化安全配置'],
  'skill-stocktake': ['盘点技能库', '分析技能使用', '优化技能配置', '管理技能版本'],
  'social-graph-ranker': ['分析社交图谱', '计算关系权重', '优化排名算法', '管理社交网络'],
  'springboot-patterns': ['开发 Spring Boot 应用', '设计 REST API', '实现依赖注入', '优化性能'],
  'springboot-security': ['配置 Spring Boot 安全', '实现认证授权', '处理安全漏洞', '审计安全配置'],
  'springboot-tdd': ['使用 TDD 开发 Spring Boot', '编写单元测试', '实现测试覆盖率', '优化测试策略'],
  'springboot-verification': ['验证 Spring Boot 应用', '运行集成测试', '检查代码质量', '优化部署流程'],
  'swift-actor-persistence': ['实现 Swift Actor 持久化', '管理 Actor 状态', '处理并发访问', '优化性能'],
  'swift-concurrency-6-2': ['使用 Swift 6.2 并发', '实现异步操作', '处理并发任务', '优化并发性能'],
  'swift-protocol-di-testing': ['使用协议进行依赖注入', '编写可测试代码', '实现 Mock 对象', '优化测试策略'],
  'swiftui-patterns': ['开发 SwiftUI 应用', '设计视图和修饰符', '管理状态', '优化性能'],
  'terminal-ops': ['管理终端运维', '自动化命令执行', '处理终端会话', '优化终端体验'],
  'token-budget-advisor': ['管理 Token 预算', '优化 Token 使用', '分析成本效益', '规划资源分配'],
  'ui-demo': ['创建 UI 演示', '设计交互原型', '展示功能特性', '优化用户体验'],
  'ui-to-vue': ['将 UI 转换为 Vue', '实现 Vue 组件', '优化 Vue 性能', '处理状态管理'],
  'unified-notifications-ops': ['管理统一通知', '优化通知路由', '处理通知队列', '监控通知状态'],
  'videodb': ['管理视频数据库', '处理视频元数据', '优化视频存储', '分析视频内容'],
  'visa-doc-translate': ['翻译签证文档', '处理多语言内容', '确保翻译准确性', '管理文档格式'],
  'workspace-surface-audit': ['审计工作区表面', '检查界面一致性', '优化用户体验', '处理界面问题'],
  'llm-trading-agent-security': ['确保 LLM 交易代理安全', '管理交易风险', '处理敏感数据', '审计交易活动'],

  // 遗漏的 skills
  'continuous-agent-loop': ['设置持续代理循环', '协调代理间通信', '优化循环性能', '处理循环状态'],
  'cost-aware-llm-pipeline': ['管理 LLM 成本', '优化 token 使用', '分析成本效益', '规划资源预算'],
  'council': ['建立委员会决策系统', '协调多方意见', '优化决策流程', '管理投票机制'],
  'golang-patterns': ['编写 Go 代码', '遵循 Go 惯用法', '优化 Go 性能', '设计 Go 架构'],
  'golang-testing': ['编写 Go 测试', '使用 testing 包', '实现测试覆盖率', '优化测试策略'],
  'java-coding-standards': ['遵循 Java 编码规范', '应用现代 Java 最佳实践', '审查 Java 代码质量', '设置 Java 项目结构'],
  'jpa-patterns': ['使用 JPA 数据访问', '设计实体关系', '优化查询性能', '处理事务管理'],
  'project-flow-ops': ['管理项目流程', '协调任务执行', '优化工作流', '监控项目进度'],
  'remotion-video-creation': ['使用 Remotion 创建视频', '设计视频组件', '优化视频渲染', '处理视频导出'],
  'seo': ['优化搜索引擎排名', '分析关键词策略', '改进网站结构', '监控搜索表现'],
  'team-builder': ['构建高效团队', '协调团队协作', '优化团队结构', '管理团队沟通']
}

// 中文使用说明映射表
export const USAGE_CN: Record<string, string> = {
  // 内容创作类
  'article-writing': '当你需要撰写长篇内容时触发。提供主题、大纲或参考资料，Claude 会生成结构完整、风格一致的文章。支持从示例中学习特定写作风格。',
  'content-engine': '需要创建社交媒体内容时使用。指定平台（X、LinkedIn、YouTube 等）和内容主题，Claude 会生成平台原生的内容格式。',
  'crosspost': '将已有内容分发到多个平台时触发。Claude 会根据各平台特点调整内容格式和长度。',

  // 研究与分析类
  'deep-research': '需要深入研究某个主题时使用。Claude 会搜索多个来源，综合信息并生成带引用的研究报告。',
  'exa-search': '需要语义搜索时触发。比传统关键词搜索更智能，能理解搜索意图。',
  'market-research': '进行市场分析时使用。Claude 会收集市场数据、分析竞争对手、评估机会。',
  'iterative-retrieval': '复杂问题需要多轮搜索时触发。Claude 会逐步优化搜索策略，直到找到满意答案。',

  // 开发模式类
  'frontend-patterns': '开发 React/Next.js 前端时自动触发。提供组件设计、状态管理、性能优化等最佳实践指导。',
  'backend-patterns': '开发 Node.js 后端时触发。提供 API 设计、数据库优化、缓存策略等架构建议。',
  'coding-standards': '新项目启动或代码审查时触发。确保代码遵循一致的命名、格式和结构规范。',
  'python-patterns': '编写 Python 代码时触发。提供 Pythonic 的代码模式和最佳实践。',
  'python-testing': '编写 Python 测试时触发。提供 pytest 使用技巧和测试策略。',
  'fastapi-patterns': '开发 FastAPI 应用时触发。提供端点设计、依赖注入、异步处理等指导。',

  // Django 生态
  'django-patterns': '开发 Django 项目时触发。提供模型设计、REST API、ORM 优化等架构指导。',
  'django-security': '处理 Django 安全相关任务时触发。提供认证、授权、防护等安全最佳实践。',
  'django-tdd': '使用 TDD 开发 Django 应用时触发。提供测试编写、覆盖率提升等指导。',
  'django-verification': 'Django 项目部署前验证时触发。运行迁移、lint、测试等检查。',

  // Laravel 生态
  'laravel-patterns': '开发 Laravel 项目时触发。提供架构设计、Eloquent ORM、路由等最佳实践。',
  'laravel-plugin-discovery': '需要 Laravel 包时触发。帮助发现、评估和集成第三方包。',
  'laravel-security': '处理 Laravel 安全任务时触发。提供认证、验证、防护等安全指导。',
  'laravel-tdd': '使用 TDD 开发 Laravel 应用时触发。提供 PHPUnit 测试编写指导。',
  'laravel-verification': 'Laravel 项目部署前验证时触发。执行代码检查和测试验证。',

  // 测试与质量
  'tdd-workflow': '进行测试驱动开发时触发。指导 RED-GREEN-REFACTOR 循环，确保 80%+ 覆盖率。',
  'verification-loop': '代码提交前验证时触发。自动运行质量检查、测试和覆盖率报告。',
  'security-review': '安全审查时触发。扫描漏洞、检查 OWASP Top 10、审计依赖安全。',
  'eval-harness': '需要评估系统时触发。搭建评估框架、设计测试用例、分析结果。',

  // AI 与自动化
  'continuous-learning-v2': '希望 Claude 从会话中学习时触发。自动观察模式、创建本能、进化技能。',
  'dmux-workflows': '需要并行处理多个任务时触发。编排多个代理同时工作，提高效率。',
  'skill-creator': '创建或优化技能时触发。设计技能结构、编写规则、运行评估测试。',
  'find-skills': '寻找特定功能的技能时触发。搜索、推荐和评估可用技能。',

  // 投资与商业
  'investor-materials': '准备投资者材料时触发。创建商业计划书、演示文稿、财务模型。',
  'investor-outreach': '进行投资者外联时触发。制定沟通策略、准备路演、管理关系。',

  // 媒体与文件处理
  'gpt-image': '需要 AI 生成图像时触发。描述图像需求，Claude 调用 GPT Image 生成。',
  'fal-ai-media': '需要 AI 媒体处理时触发。图像生成、视频处理、模型推理等。',
  'video-editing': '编辑视频时触发。剪辑、拼接、添加效果、处理音频等。',
  'ian-handdrawn-ppt': '创建手绘风格演示时触发。适合创意展示、故事板、草图设计。',
  'exam-prep': '准备考试时触发。整合各种格式的复习资料，生成适合打印的复习文档。',

  // 搜索与工具
  'search-first': '开始新任务时自动触发。先搜索现有解决方案，避免重复工作。',
  'strategic-compact': '需要压缩内容时触发。提炼关键信息，生成简洁版本。',
  'x-api': '需要操作 X (Twitter) 时触发。发布推文、分析数据、自动化营销。',

  // 文件处理
  'docx': '处理 Word 文档时触发。创建、读取、转换 .docx 文件。',
  'pdf-extraction': '需要提取 PDF 内容时触发。提取文本、表格、元数据。',
  'pptx': '处理 PowerPoint 文件时触发。创建、读取、修改 .pptx 文件。',
  'xlsx': '处理 Excel 文件时触发。读取数据、分析内容、创建报表。',

  // 其他补充
  'continuous-learning': '[已弃用] 旧版学习系统，请使用 continuous-learning-v2。v2 提供基于本能的、项目隔离的学习功能。',
  'e2e-testing': '编写端到端测试时触发。使用 Playwright 框架，支持页面对象模型、CI/CD 集成和不稳定测试处理。',
  'manim-video': '需要创建技术动画解说时触发。使用 Manim 库制作数学公式、系统架构、产品功能的动画演示。',
  'product-capability': '需要将产品需求转化为技术方案时触发。分析 PRD，识别约束、接口和未解决决策，生成可实现的能力计划。',
  'brand-voice': '定义或维护品牌声音时触发。创建内容风格指南，确保跨平台内容的一致性和品牌识别度。',
  'dashboard-builder': '构建监控仪表盘时触发。以运维问题为导向，设计健康检查、性能指标、资源监控等面板。',
}

// 获取中文触发条件，如果没有则返回英文触发条件
export function getTriggersCN(id: string, fallback: string[]): string[] {
  return TRIGGERS_CN[id] || fallback
}

// 获取中文使用说明，如果没有则返回空字符串
export function getUsageCN(id: string): string {
  return USAGE_CN[id] || ''
}

// 获取中文描述，如果没有则返回英文描述
export function getDescriptionCN(id: string, fallback: string): string {
  return DESCRIPTION_CN[id] || fallback
}
