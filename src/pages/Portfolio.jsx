const projects = [
  {
    title: '智能家居网关',
    description: '基于 ARM Linux 的智能家居网关，支持 Zigbee/Z-Wave 设备接入、数据采集与云端同步。',
    tags: ['C++', 'MQTT', 'Linux', 'Zigbee'],
    link: '#',
  },
  {
    title: '工业数据采集系统',
    description: '使用 C++ 开发的高性能工业数据采集系统，支持 Modbus/OPC UA 协议，实时处理万级数据点。',
    tags: ['C++17', 'Modbus', 'OPC UA', 'SQLite'],
    link: '#',
  },
  {
    title: '嵌入式 RTOS 任务调度器',
    description: '基于 FreeRTOS 实现的任务调度与内存管理组件，用于资源受限的 MCU 平台。',
    tags: ['C', 'FreeRTOS', 'STM32', 'I2C/SPI'],
    link: '#',
  },
  {
    title: '边缘计算推理框架',
    description: '在边缘设备上部署轻量级 AI 推理引擎，优化模型推理速度和内存占用。',
    tags: ['C++', 'TensorFlow Lite', 'ONNX', 'ARM Neon'],
    link: '#',
  },
]

export default function Portfolio() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-2">
        作品集
      </h1>
      <p className="font-body text-muted text-base mb-10">
        以下是我参与过的一些项目
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 md:p-8 rounded-[32px] shadow-extruded bg-bg
                        transition-all duration-300 ease-out
                        hover:shadow-extruded-hover hover:-translate-y-1
                        group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl shadow-inset-deep bg-bg flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg text-fg">{project.title}</h3>
            </div>

            <p className="font-body text-sm text-muted leading-relaxed mb-5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-4 py-1.5 rounded-xl font-body text-xs font-medium text-muted
                             shadow-inset-sm bg-bg"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-sm font-medium
                         text-accent no-underline
                         transition-all duration-300 ease-out
                         hover:text-accent-light
                         focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:outline-none
                         rounded-xl px-3 py-1.5 -ml-1.5"
            >
              查看项目
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
