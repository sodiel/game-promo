import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__container">
        <a href="#hero" className="header__logo">КиберДеревня</a>
        <button
          className="header__burger"
          aria-label="Открыть меню"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <a href="#features" onClick={() => setMenuOpen(false)}>Особенности</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Скриншоты</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Об игре</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
