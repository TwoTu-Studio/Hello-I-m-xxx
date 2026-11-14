const projects = [
  {
    index: "01",
    name: "实时协同文档平台",
    role: "核心开发 · 前端负责人",
    period: "2024",
    description:
      "主导编辑器内核选型与协同方案设计，基于 CRDT 实现多人实时编辑，重构渲染管线解决长文档卡顿问题。",
    highlight: "首屏加载时间降低 62%",
    tags: ["React", "TypeScript", "CRDT", "WebSocket"],
    gradient: "from-emerald-400/20 via-teal-500/10 to-transparent",
  },
  {
    index: "02",
    name: "内部 AI 代码评审助手",
    role: "独立开发",
    period: "2023",
    description:
      "设计 diff 分片与上下文压缩策略，让模型在有限 token 内理解变更意图；通过规则引擎过滤低质量建议。",
    highlight: "评审平均耗时减少 40%",
    tags: ["Next.js", "LLM", "Node.js", "Prompt 工程"],
    gradient: "from-violet-400/20 via-fuchsia-500/10 to-transparent",
  },
  {
    index: "03",
    name: "电商订单中台重构",
    role: "后端开发",
    period: "2022 — 2023",
    description:
      "负责订单状态机抽象与消息队列解耦，推动核心链路灰度迁移，建立全链路监控与告警体系。",
    highlight: "大促零故障，接口 P99 降低 55%",
    tags: ["Go", "Kafka", "MySQL", "微服务"],
    gradient: "from-sky-400/20 via-blue-500/10 to-transparent",
  },
];

const experiences = [
  {
    company: "某互联网公司",
    title: "高级前端工程师",
    period: "2023 — 至今",
    achievement: "主导协同文档前端架构，支撑 20+ 团队日常协作",
  },
  {
    company: "某电商公司",
    title: "后端工程师",
    period: "2021 — 2023",
    achievement: "参与订单中台重构，核心接口 P99 耗时降低 55%",
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Go",
  "Tailwind CSS",
  "Three.js",
  "性能优化",
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
          <h1 className="text-[20vw] leading-[0.85] font-black tracking-tighter sm:text-[16vw] lg:text-[11rem]">
            XIAO
            <br />
            <span className="text-outline">HAO</span>
          </h1>
          <p className="mt-10 max-w-md text-base leading-relaxed text-zinc-400">
            小豪 · 全栈工程师
            <br />
            专注 Web 应用与 AI 工具，把复杂问题拆解成清晰的方案。
          </p>
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
              className="grid gap-4 border-t border-zinc-900 py-10 sm:grid-cols-[140px_1fr_1fr] sm:items-baseline"
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
        <a href="mailto:hi@example.com" className="group mt-8 block">
          <span className="text-[14vw] leading-none font-black tracking-tighter transition group-hover:text-acid sm:text-[10rem]">
            LET&apos;S
            <br />
            TALK
          </span>
        </a>
        <div className="mt-12 flex justify-center gap-8 text-sm text-zinc-400">
          <a href="mailto:hi@example.com" className="transition hover:text-acid">
            hi@example.com
          </a>
          <a href="https://github.com" className="transition hover:text-acid">
            GitHub
          </a>
        </div>
        <footer className="mt-24 text-xs text-zinc-600">
          © 2026 小豪 · 由 Hello! I&apos;m xxx 模板驱动
        </footer>
      </section>
    </main>
  );
}
