export default function Resume() {
  return (
    <div className="page resume">
      <h1>简历</h1>

      <section className="resume-section">
        <h2>教育背景</h2>
        <div className="resume-item">
          <div className="resume-item-header">
            <h3>计算机科学 学士</h3>
            <span className="date">2019 - 2023</span>
          </div>
          <p className="subtitle">大学名称</p>
          <p>主修课程：数据结构、算法、Web 开发、数据库系统</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>工作经历</h2>
        <div className="resume-item">
          <div className="resume-item-header">
            <h3>软件工程师</h3>
            <span className="date">2023 - 至今</span>
          </div>
          <p className="subtitle">公司名称</p>
          <ul>
            <li>开发和维护基于 React 的 Web 应用，服务日均 1 万+ 用户</li>
            <li>使用 Node.js 和 Express 设计 RESTful API</li>
            <li>与跨职能团队协作，按时交付功能</li>
          </ul>
        </div>
        <div className="resume-item">
          <div className="resume-item-header">
            <h3>前端开发实习生</h3>
            <span className="date">2022 - 2023</span>
          </div>
          <p className="subtitle">公司名称</p>
          <ul>
            <li>使用 React 和 Tailwind CSS 构建响应式 UI 组件</li>
            <li>通过代码分割和懒加载将页面加载性能提升 30%</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>技能</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>前端</h3>
            <p>React, Vue, JavaScript, TypeScript, HTML/CSS</p>
          </div>
          <div className="skill-category">
            <h3>后端</h3>
            <p>Node.js, Express, Python, PostgreSQL, MongoDB</p>
          </div>
          <div className="skill-category">
            <h3>工具</h3>
            <p>Git, Docker, AWS, Vite, Webpack</p>
          </div>
        </div>
      </section>
    </div>
  )
}
