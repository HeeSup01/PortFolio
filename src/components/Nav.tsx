const SECTIONS = [
  { id: 'hero', label: 'Hero' },
  { id: 'about', label: 'About' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'engineering-thinking', label: 'Engineering' },
  { id: 'experience', label: 'Experience' },
  { id: 'growth', label: 'Growth' },
  { id: 'contact', label: 'Contact' }
] as const;

export function Nav() {
  return (
    <nav
      className="nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(5, 8, 22, 0.85)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(31, 41, 55, 0.6)'
      }}
    >
      <ul
        className="nav-list"
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem 1rem',
          justifyContent: 'flex-end',
          fontSize: '0.85rem'
        }}
      >
        {SECTIONS.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="nav-link"
              style={{
                color: '#d1d5db',
                textDecoration: 'none',
                padding: '0.35rem 0.5rem',
                borderRadius: '0.375rem'
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
