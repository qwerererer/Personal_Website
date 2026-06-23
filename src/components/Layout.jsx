import { NavLink } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-brand">陈嘉辉</div>
        <div className="nav-links">
          <NavLink to="/Personal_Website/" end>首页</NavLink>
          <NavLink to="/Personal_Website/resume">简历</NavLink>
          <NavLink to="/Personal_Website/portfolio">作品集</NavLink>
        </div>
      </nav>
      <main className="main-content">{children}</main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} 陈嘉辉. 版权所有.</p>
      </footer>
    </div>
  )
}
