import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center gap-12 md:gap-20 py-10 md:py-20">
        <div className="flex-1 order-2 md:order-1">
          <div className="w-16 h-1 bg-accent rounded-full mb-6" />

          <h1 className="font-display font-extrabold text-5xl md:text-7xl tracking-tight text-fg leading-[1.1] mb-4">
            你好，我是
            <br />
            陈家辉
          </h1>

          <p className="font-body text-lg md:text-xl text-muted font-medium mb-2">
            C++ 开发工程师
          </p>

          <p className="font-body text-base text-muted leading-relaxed max-w-lg mb-8">
            热衷于使用 C++ 构建高性能、可靠的系统与应用。
            对底层原理充满好奇，追求极致的代码质量与运行效率。
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/Personal_Website/resume"
              className="inline-block px-8 py-3 rounded-2xl font-body font-medium text-sm
                         tracking-wide uppercase no-underline
                         bg-accent text-white
                         shadow-extruded
                         transition-all duration-300 ease-out
                         hover:shadow-extruded-hover hover:-translate-y-1
                         active:translate-y-0.5 active:shadow-inset-sm
                         focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:outline-none"
            >
              查看简历
            </Link>
            <Link
              to="/Personal_Website/portfolio"
              className="inline-block px-8 py-3 rounded-2xl font-body font-medium text-sm
                         tracking-wide uppercase no-underline
                         bg-bg text-fg
                         shadow-extruded
                         transition-all duration-300 ease-out
                         hover:shadow-extruded-hover hover:-translate-y-1
                         active:translate-y-0.5 active:shadow-inset-sm
                         focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:outline-none"
            >
              我的作品
            </Link>
          </div>
        </div>

        <div className="flex-1 order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-[32px] shadow-extruded bg-bg animate-float" />

            <div className="absolute inset-4 rounded-[28px] shadow-inset-deep bg-bg" />

            <div className="absolute inset-8 rounded-2xl shadow-extruded-sm bg-bg flex items-center justify-center">
              <svg viewBox="0 0 100 100" width="80" height="80" className="text-accent">
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                <circle cx="50" cy="38" r="14" fill="currentColor" opacity="0.8" />
                <ellipse cx="50" cy="68" rx="22" ry="16" fill="currentColor" opacity="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
