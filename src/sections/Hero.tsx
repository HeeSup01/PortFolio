export function Hero() {
  return (
    <section id="hero">
      <h1>프론트엔드 개발자 홍길동입니다.</h1>
      <p>
        React 기반의 웹 서비스 개발을 좋아하고, UI 구조 설계와 사용자 경험 개선에 관심이 많은
        프론트엔드 개발자입니다.
      </p>
      <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <span
          style={{
            padding: '0.4rem 0.9rem',
            borderRadius: '999px',
            background: 'rgba(59, 130, 246, 0.16)',
            color: '#93c5fd',
            fontSize: '0.85rem'
          }}
        >
          React · TypeScript
        </span>
        <span
          style={{
            padding: '0.4rem 0.9rem',
            borderRadius: '999px',
            background: 'rgba(16, 185, 129, 0.16)',
            color: '#6ee7b7',
            fontSize: '0.85rem'
          }}
        >
          컴포넌트 설계
        </span>
        <span
          style={{
            padding: '0.4rem 0.9rem',
            borderRadius: '999px',
            background: 'rgba(248, 250, 252, 0.06)',
            color: '#e5e7eb',
            fontSize: '0.85rem'
          }}
        >
          구조적으로 사고하는 개발자
        </span>
      </div>
    </section>
  );
}
