export function About() {
  return (
    <section id="about">
      <h2>About</h2>
      <p>
        사용자가 &quot;무엇을 할 수 있는 사람인지&quot; 한 번에 이해할 수 있는, 구조적인
        포트폴리오를 만드는 것을 목표로 하고 있습니다. 단순히 화면을 만드는 것을 넘어, 정보
        구조와 흐름을 설계하는 것에 가치를 둡니다.
      </p>
      <p style={{ marginTop: '0.75rem' }}>
        React와 TypeScript를 중심으로 컴포넌트 단위로 사고하고, 재사용 가능한 인터페이스를
        설계하는 것을 좋아합니다. 기능을 구현할 때는 &quot;왜 이렇게 설계했는가&quot;를 설명할 수
        있는 코드를 지향합니다.
      </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginTop: '1rem',
          fontSize: '0.85rem'
        }}
      >
        <span style={{ padding: '0.35rem 0.8rem', borderRadius: '999px', border: '1px solid #4b5563' }}>
          정보 구조 설계
        </span>
        <span style={{ padding: '0.35rem 0.8rem', borderRadius: '999px', border: '1px solid #4b5563' }}>
          컴포넌트 기반 개발
        </span>
        <span style={{ padding: '0.35rem 0.8rem', borderRadius: '999px', border: '1px solid #4b5563' }}>
          사용자 경험 중심 사고
        </span>
      </div>
    </section>
  );
}
