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
        <h1>你好，我是陈家辉</h1>
        <p className="tagline">C++ 开发工程师</p>
        <p className="bio">
          热衷于使用 C++ 构建高性能、可靠的系统与应用。
          对底层原理充满好奇，追求极致的代码质量与运行效率。
        </p>
        <div className="hero-actions">
          <Link to="/Personal_Website/resume" className="btn btn-primary">查看简历</Link>
          <Link to="/Personal_Website/portfolio" className="btn btn-secondary">我的作品</Link>
        </div>
      </section>
    </div>
  )
}
