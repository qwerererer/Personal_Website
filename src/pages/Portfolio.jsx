const projects = [
  {
    title: '任务管理应用',
    description: '一个全栈任务管理应用，支持实时更新、拖拽看板看板和团队协作功能。',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    link: '#',
  },
  {
    title: '电商平台',
    description: '在线购物平台，包含商品搜索、购物车、支付集成和管理后台。',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    link: '#',
  },
  {
    title: '天气仪表盘',
    description: '显示实时天气预报、历史数据和交互式图表的天气仪表盘。',
    tags: ['React', 'D3.js', 'OpenWeather API'],
    link: '#',
  },
  {
    title: '个人作品网站',
    description: '使用 React 和 Vite 构建的个人作品集网站，支持响应式设计和流畅导航。',
    tags: ['React', 'Vite', 'React Router'],
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
