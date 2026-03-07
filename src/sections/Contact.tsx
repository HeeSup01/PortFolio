export function Contact() {
  const links = [
    { label: 'GitHub', href: 'https://github.com/your-username', external: true },
    { label: '이메일', href: 'mailto:your@email.com', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/your-profile', external: true }
  ];

  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>협업이나 문의가 있으시면 아래 링크로 연락해 주세요.</p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          marginTop: '1rem'
        }}
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              border: '1px solid #374151',
              color: '#f9fafb',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'border-color 0.2s, background 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#6b7280';
              e.currentTarget.style.background = 'rgba(31, 41, 55, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = '#374151';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
