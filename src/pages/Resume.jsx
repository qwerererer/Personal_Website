export default function Resume() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-2">
        简历
      </h1>
      <p className="font-body text-muted text-base mb-10">
        教育背景 · 工作经历 · 专业技能
      </p>

      <section className="mb-14">
        <h2 className="font-display font-bold text-xl tracking-tight text-fg mb-6 flex items-center gap-3">
          <span className="inline-block w-8 h-[2px] bg-accent rounded-full" />
          教育背景
        </h2>

        <div className="p-6 md:p-8 rounded-[32px] shadow-extruded bg-bg
                        transition-all duration-300 ease-out
                        hover:shadow-extruded-hover hover:-translate-y-0.5">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
            <h3 className="font-display font-bold text-lg text-fg">
              计算机科学与技术 学士
            </h3>
            <span className="font-body text-xs text-muted tracking-wide uppercase">
              2019 - 2023
            </span>
          </div>
          <p className="font-body text-sm text-muted italic mb-3">大学名称</p>
          <p className="font-body text-sm text-muted">
            主修课程：数据结构与算法、操作系统、计算机网络、数据库系统
          </p>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="font-display font-bold text-xl tracking-tight text-fg mb-6 flex items-center gap-3">
          <span className="inline-block w-8 h-[2px] bg-accent rounded-full" />
          工作经历
        </h2>

        <div className="flex flex-col gap-6">
          {[
            {
              title: 'C++ 开发工程师',
              date: '2023 - 至今',
              subtitle: '公司名称',
              items: [
                '使用 C++17/20 开发高性能后端服务，QPS 提升 40%',
                '设计并实现分布式任务调度系统，支持百万级并发任务',
                '优化内存管理，减少内存泄漏和碎片，降低 GC 停顿',
              ],
            },
            {
              title: 'C++ 开发实习生',
              date: '2022 - 2023',
              subtitle: '公司名称',
              items: [
                '参与内核模块开发，使用 C++ 实现 IPC 通信组件',
                '编写单元测试和性能基准测试，覆盖率达 85% 以上',
              ],
            },
          ].map((job) => (
            <div
              key={job.title}
              className="p-6 md:p-8 rounded-[32px] shadow-extruded bg-bg
                          transition-all duration-300 ease-out
                          hover:shadow-extruded-hover hover:-translate-y-0.5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display font-bold text-lg text-fg">{job.title}</h3>
                <span className="font-body text-xs text-muted tracking-wide uppercase">{job.date}</span>
              </div>
              <p className="font-body text-sm text-muted italic mb-3">{job.subtitle}</p>
              <ul className="font-body text-sm text-muted space-y-1.5 pl-4">
                {job.items.map((item) => (
                  <li key={item} className="list-disc marker:text-accent">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display font-bold text-xl tracking-tight text-fg mb-6 flex items-center gap-3">
          <span className="inline-block w-8 h-[2px] bg-accent rounded-full" />
          技能
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: '语言', content: 'C/C++, Python, Java, JavaScript' },
            { title: '技术领域', content: '多线程编程, 网络编程, 内存管理, 性能调优' },
            { title: '工具', content: 'Git, CMake, GDB, Valgrind, Docker, Linux' },
          ].map((skill) => (
            <div
              key={skill.title}
              className="p-6 rounded-[32px] shadow-extruded bg-bg text-center
                          transition-all duration-300 ease-out
                          hover:shadow-extruded-hover hover:-translate-y-0.5"
            >
              <h3 className="font-display font-bold text-sm tracking-wide uppercase text-accent mb-2">
                {skill.title}
              </h3>
              <p className="font-body text-sm text-muted">{skill.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
