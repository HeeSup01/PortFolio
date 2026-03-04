export function TechStack() {
  return (
    <section id="tech-stack">
      <h2>Tech Stack</h2>
      <p>주로 사용하는 기술과 관심 있게 보고 있는 도구들입니다.</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '0.75rem',
          marginTop: '1rem',
          fontSize: '0.9rem'
        }}
      >
        <div
          style={{
            padding: '0.9rem 1rem',
            borderRadius: '0.75rem',
            border: '1px solid #1f2937',
            background: 'rgba(15, 23, 42, 0.6)'
          }}
        >
          <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Frontend</strong>
          <span>React, TypeScript, JavaScript(ES6+), HTML5, CSS3</span>
        </div>
        <div
          style={{
            padding: '0.9rem 1rem',
            borderRadius: '0.75rem',
            border: '1px solid #1f2937',
            background: 'rgba(15, 23, 42, 0.6)'
          }}
        >
          <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Styling</strong>
          <span>Tailwind CSS, 반응형 레이아웃, Figma 연동</span>
        </div>
        <div
          style={{
            padding: '0.9rem 1rem',
            borderRadius: '0.75rem',
            border: '1px solid #1f2937',
            background: 'rgba(15, 23, 42, 0.6)'
          }}
        >
          <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Tooling & Workflow</strong>
          <span>Vite, Git/GitHub, GitHub Pages, Cursor</span>
        </div>
      </div>
    </section>
  );
}
