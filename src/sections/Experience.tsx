export function Experience() {
  const items = [
    {
      period: 'YYYY.MM - YYYY.MM',
      title: '경력/활동 제목',
      description: '담당 업무, 성과, 사용 기술 등을 간단히 적습니다.'
    },
    {
      period: 'YYYY.MM - YYYY.MM',
      title: '경력/활동 제목',
      description: '인턴, 동아리, 스터디, 사이드 프로젝트 등 다양한 경험을 추가할 수 있습니다.'
    }
  ];

  return (
    <section id="experience">
      <h2>Experience</h2>
      <p>경력, 인턴, 동아리, 스터디 등 개발자로서의 활동 이력을 정리합니다.</p>
      <ul
        style={{
          listStyle: 'none',
          marginTop: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        {items.map((item, i) => (
          <li
            key={i}
            style={{
              padding: '1rem 1.1rem',
              borderRadius: '0.75rem',
              border: '1px solid #1f2937',
              background: 'rgba(15, 23, 42, 0.8)'
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
              <strong>{item.title}</strong>
              <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{item.period}</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#d1d5db' }}>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
