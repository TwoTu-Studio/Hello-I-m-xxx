const projects = [
  {
    index: "01",
    name: "智能健康管理与居家安全监测系统",
    role: "后端开发 · IoT 模块负责人",
    period: "2025.10 — 至今",
    description:
      "参与健康服务聚合与 IoT 安全监测建设：接入多家健康服务供应商并屏蔽接口差异，完善远程问诊呼叫链路日志与转呼兜底逻辑，搭建健康数据底座，并负责智能手环、跌倒检测等设备接入与紧急呼救联动。",
    highlight: "远程问诊呼叫成功率 75% → 98%",
    tags: ["Go", "MySQL", "Elasticsearch", "WebSocket", "IoT", "大模型"],
    gradient: "from-emerald-400/20 via-teal-500/10 to-transparent",
  },
  {
    index: "02",
    name: "轻量化运营交易履约系统",
    role: "后端开发 · 核心交易链路",
    period: "2025.12 — 至今",
    description:
      "负责小度端完整购物链路与多商户支付结算改造，参与 trade-service 统一交易模块设计，将 Web、小度、子女、居民四端重复的交易逻辑收敛到统一服务，并通过 Hook 扩展机制适配多类目与新旧运营模式。",
    highlight: "四端交易逻辑收敛为统一服务",
    tags: ["Go", "MySQL", "Redis", "微信支付收付通", "AI Agent"],
    gradient: "from-violet-400/20 via-fuchsia-500/10 to-transparent",
  },
  {
    index: "03",
    name: "老人端娱乐内容与互动服务建设",
    role: "后端开发",
    period: "2025.08 — 2025.12",
    description:
      "参与内容互动与实时激励系统建设：基于大模型与 MCP 实现内容自动化供给，负责社交广场与积分任务模块升级，并通过 WebSocket 将直播奖励从离线结算改造为实时激励模式。",
    highlight: "终端活跃率提升约 20%",
    tags: ["Go", "Redis", "WebSocket", "大模型 / MCP"],
    gradient: "from-sky-400/20 via-blue-500/10 to-transparent",
  },
];

const experiences = [
  {
    company: "百度",
    title: "后端开发工程师",
    period: "2025.07 — 至今",
    achievement:
      "负责养老业务核心系统后端研发，覆盖智能运营、交易履约、健康管理与 AI Agent 应用建设",
  },
  {
    company: "字节跳动",
    title: "测试开发工程师（实习）",
    period: "2024.06 — 2024.10",
    achievement:
      "参与抖音电商内容治理平台质量保障，基于接口日志与队列数据建设自动化测试能力",
  },
];

const skills = [
  "Go",
  "Gin / Go-zero",
  "MySQL",
  "Redis",
  "Elasticsearch",
  "Kafka",
  "AI Agent / MCP",
  "WebSocket",
];

export default function Home() {
  return (
    <main className="bg-ink text-zinc-100">
      {/* 顶部导航 */}
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span className="text-lg font-bold tracking-tight">XH.</span>
          <nav className="flex gap-8 text-xs tracking-widest text-zinc-400 uppercase">
            <a href="#projects" className="transition hover:text-white">
              项目
            </a>
            <a href="#experience" className="transition hover:text-white">
              经历
            </a>
            <a href="#contact" className="transition hover:text-white">
              联系
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <div className="hero-backdrop absolute inset-0" />
        <div className="relative z-10 flex flex-col items-center px-6 py-32 text-center">
          <p className="mb-8 flex items-center gap-2 text-xs tracking-[0.3em] text-zinc-400 uppercase">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-acid" />
            Hello! I&apos;m · 开放机会中
          </p>
          <h1 className="text-[18vw] leading-[0.85] font-black tracking-tighter sm:text-[14vw] lg:text-[10rem]">
            XUHAO
            <br />
            <span className="text-outline">ZHOU</span>
          </h1>
          <p className="mt-10 max-w-md text-sm leading-relaxed text-zinc-400">
            周旭豪 · 后端开发工程师 / AI 开发工程师
            <br />
            全栈开发工程师（学习中…）
          </p>
          <p className="mt-8 text-2xl font-medium tracking-tight text-zinc-200">
            Imagine. Navigate. Forge. Persist.
          </p>
          <p className="mt-3 text-xs tracking-[0.4em] text-zinc-500">— INFP</p>
        </div>
        <div className="absolute bottom-8 z-10 text-[10px] tracking-[0.4em] text-zinc-500 uppercase">
          Scroll to explore ↓
        </div>
      </section>

      {/* 代表项目 */}
      <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-32">
        <p className="text-xs tracking-[0.3em] text-acid uppercase">
          Selected Works
        </p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          代表项目
        </h2>
        <div className="mt-20 flex flex-col gap-32">
          {projects.map((project, i) => (
            <article
              key={project.name}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div
                className={`group relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br ${project.gradient} ring-1 ring-zinc-800`}
              >
                <span className="absolute top-6 left-6 text-xs tracking-widest text-zinc-500">
                  {project.period}
                </span>
                <span className="absolute right-6 bottom-0 text-[10rem] leading-none font-black tracking-tighter text-zinc-100/10">
                  {project.index}
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-medium text-zinc-300/60">
                    项目视觉 · 第二阶段接入
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sm text-acid">{project.role}</p>
                <h3 className="mt-3 text-3xl font-bold tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-5 leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                <p className="mt-6 text-2xl font-bold tracking-tight text-zinc-100">
                  {project.highlight}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 技能 */}
      <section className="border-y border-zinc-900 py-20">
        <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-center gap-x-10 gap-y-6 px-6">
          {skills.map((skill, i) => (
            <span
              key={skill}
              className={`text-4xl font-black tracking-tight sm:text-5xl ${
                i % 2 === 0 ? "text-zinc-100" : "text-outline"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* 工作经历 */}
      <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-32">
        <p className="text-xs tracking-[0.3em] text-acid uppercase">Career</p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          工作经历
        </h2>
        <div className="mt-16">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="grid gap-4 border-t border-zinc-900 py-10 sm:grid-cols-[160px_1fr_1fr] sm:items-baseline"
            >
              <span className="text-sm text-zinc-500">{exp.period}</span>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  {exp.company}
                </h3>
                <p className="mt-1 text-sm text-acid">{exp.title}</p>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">
                {exp.achievement}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 联系方式 */}
      <section id="contact" className="scroll-mt-20 px-6 pt-32 pb-20 text-center">
        <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase">
          What&apos;s next
        </p>
        <a href="mailto:zhou_xuhao_huda@163.com" className="group mt-8 block">
          <span className="text-[14vw] leading-none font-black tracking-tighter transition group-hover:text-acid sm:text-[10rem]">
            LET&apos;S
            <br />
            TALK
          </span>
        </a>
        <div className="mt-12 text-sm text-zinc-400">
          <a
            href="mailto:zhou_xuhao_huda@163.com"
            className="transition hover:text-acid"
          >
            zhou_xuhao_huda@163.com
          </a>
        </div>
        <footer className="mt-24 text-xs text-zinc-600">
          © 2026 周旭豪 · 由 Hello! I&apos;m xxx 模板驱动
        </footer>
      </section>
    </main>
  );
}
