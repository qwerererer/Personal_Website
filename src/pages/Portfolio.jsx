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
    <div className="page portfolio">
      <h1>作品集</h1>
      <p className="page-subtitle">以下是我参与过的一些项目。</p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card-header">
              <div className="project-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <h3>{project.title}</h3>
            </div>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              查看项目 &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
