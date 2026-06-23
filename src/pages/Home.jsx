import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page home">
      <section className="hero">
        <div className="avatar">
          <svg viewBox="0 0 100 100" width="120" height="120">
            <circle cx="50" cy="50" r="48" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="2" />
            <circle cx="50" cy="38" r="14" fill="#4f46e5" />
            <ellipse cx="50" cy="68" rx="22" ry="16" fill="#4f46e5" />
          </svg>
        </div>
        <h1>你好，我是陈嘉辉</h1>
        <p className="tagline">全栈开发者 &amp; 创意思考者</p>
        <p className="bio">
          我热衷于使用现代技术构建优雅、易用的 Web 应用。
          追求简洁的代码、出色的设计和愉悦的用户体验。
        </p>
        <div className="hero-actions">
          <Link to="/personal_-website/resume" className="btn btn-primary">查看简历</Link>
          <Link to="/personal_-website/portfolio" className="btn btn-secondary">我的作品</Link>
        </div>
      </section>
    </div>
  )
}
