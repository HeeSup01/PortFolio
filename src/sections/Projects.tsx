export function Projects() {
  const projects = [
    {
      name: '포트폴리오 원페이지 웹',
      period: '2025',
      description:
        'React와 Vite를 기반으로 설계·개발·배포 전 과정을 경험하기 위해 만든 원페이지 포트폴리오입니다.',
      tech: ['React', 'TypeScript', 'Vite', 'GitHub Pages'],
      role: '개인 프로젝트 · 기획/디자인/개발/배포 전담'
    },
    {
      name: '프로젝트 이름 예시',
      period: 'YYYY.MM - YYYY.MM',
      description:
        '여기에 실제로 수행했던 주요 프로젝트를 한 줄로 요약해 적을 수 있습니다. (간단한 문제/성과 중심).',
      tech: ['React', 'API 연동', '상태 관리'],
      role: '프론트엔드 개발'
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>대표 프로젝트를 통해 어떤 문제를 어떻게 풀었는지, 사용한 기술과 역할을 함께 보여줍니다.</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1rem',
          marginTop: '1rem',
          fontSize: '0.9rem'
        }}
      >
        {projects.map((project) => (
          <article
            key={project.name}
            style={{
              borderRadius: '0.75rem',
              border: '1px solid #1f2937',
              background: 'rgba(15, 23, 42, 0.8)',
              padding: '1rem 1.1rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.35rem'
              }}
            >
              <strong>{project.name}</strong>
              <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{project.period}</span>
            </div>
            <p style={{ marginBottom: '0.5rem' }}>{project.description}</p>
            <p style={{ marginBottom: '0.5rem', fontSize: '0.8rem', color: '#9ca3af' }}>{project.role}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', fontSize: '0.8rem' }}>
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: '0.25rem 0.6rem',
                    borderRadius: '999px',
                    border: '1px solid #374151'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
