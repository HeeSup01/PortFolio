export function Growth() {
  const goals = [
    {
      title: '단기 목표',
      items: ['실무에서 사용하는 상태 관리 패턴 익히기', '테스트 코드 작성 경험 쌓기']
    },
    {
      title: '장기 목표',
      items: ['사용자 경험을 고려한 설계 역량 강화', '오픈소스 기여 경험']
    }
  ];

  return (
    <section id="growth">
      <h2>Growth</h2>
      <p>앞으로 어떤 방향으로 성장하고 싶은지, 어떤 것을 배우고 있는지 보여줍니다.</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1rem',
          marginTop: '1rem'
        }}
      >
        {goals.map((goal) => (
          <div
            key={goal.title}
            style={{
              padding: '1rem 1.1rem',
              borderRadius: '0.75rem',
              border: '1px solid #1f2937',
              background: 'rgba(15, 23, 42, 0.8)'
            }}
          >
            <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{goal.title}</h3>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', color: '#d1d5db' }}>
              {goal.items.map((item, i) => (
                <li key={i} style={{ marginBottom: '0.25rem' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
