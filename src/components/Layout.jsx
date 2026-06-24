import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-xl px-6 md:px-10 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <NavLink
            to="/Personal_Website/"
            end
            className="font-display font-extrabold text-xl tracking-tight text-fg no-underline"
          >
            陈家辉
          </NavLink>

          <button
            className="md:hidden w-12 h-12 flex items-center justify-center rounded-2xl
                       shadow-extruded-sm bg-bg text-fg
                       transition-all duration-300 ease-out
                       hover:shadow-extruded-hover active:shadow-inset-sm
                       focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:outline-none
                       cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {[
              { to: '/Personal_Website/', label: '首页', end: true },
              { to: '/Personal_Website/resume', label: '简历' },
              { to: '/Personal_Website/portfolio', label: '作品集' },
            ].map(({ to, label, end }) => (
              <NavLink
                key={label}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `font-body font-medium text-sm tracking-wide uppercase no-underline transition-colors duration-300
                   ${isActive ? 'text-accent' : 'text-muted hover:text-fg'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 p-6 rounded-[32px] shadow-extruded bg-bg flex flex-col gap-4">
            {[
              { to: '/Personal_Website/', label: '首页', end: true },
              { to: '/Personal_Website/resume', label: '简历' },
              { to: '/Personal_Website/portfolio', label: '作品集' },
            ].map(({ to, label, end }) => (
              <NavLink
                key={label}
                to={to}
                end={end}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `font-body font-medium text-sm tracking-wide uppercase no-underline transition-colors duration-300
                   ${isActive ? 'text-accent' : 'text-muted hover:text-fg'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-1 max-w-7xl w-full mx-auto px-6 md:px-10 py-10 md:py-16">
        {children}
      </main>

      <footer className="text-center py-6 px-6">
        <p className="font-body text-xs text-muted tracking-wide">
          &copy; {new Date().getFullYear()} 陈家辉. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
