import React from 'react';

export function EngineeringThinking() {
  return (
    <section id="engineering-thinking">
      <h2>Engineering Thinking</h2>
      <p>하나의 문제를 어떻게 정의하고, 어떤 선택지를 검토해 어떤 방식으로 해결했는지를 구조적으로 정리합니다.</p>
      <div style={{ marginTop: '1rem', fontSize: '0.9rem', display: 'grid', gap: '0.6rem' }}>
        <div>
          <strong>1. Problem · 문제 정의</strong>
          <p style={{ marginTop: '0.25rem' }}>
            사용자가 포트폴리오를 볼 때 &quot;이 사람이 무엇을 잘하는지&quot;를 빠르게 이해하지 못하는
            문제가 있었습니다. 정보가 흩어져 있어, 정체성·기술·프로젝트·성장 방         향이 한눈에 들어오지
            않았습니다.
          </p>
        </div>
        <div>
          <strong>2. Approach · 접근 방식</strong>
          <p style={{ marginTop: '0.25rem' }}>
            Hero → About → Tech Stack → Projects → Engineering Thinking → Experience → Growth → Contact 순으로,
            스크롤 흐름만 따라가도 자연스럽게 개발자로서의 스토리가 보이도록 구조를 설계했습니다.
          </p>
        </div>
        <div>
          <strong>3. Solution · 해결</strong>
          <p style={{ marginTop: '0.25rem' }}>
            Figma로 먼저 정보 구조와 레이아웃을 설계한 뒤, React 컴포넌트로 섹션 단위 구현을 진행했습니다.
            GitHub Pages로 배포하여 실제로 접근 가능한 형태로 결과물을 제공했습니다.
          </p>
        </div>
        <div>
          <strong>4. Retrospective · 회고</strong>
          <p style={{ marginTop: '0.25rem' }}>
            이후에도 프로젝트가 추가되거나 기술 스택이 바뀌더라도, 섹션 단위로 내용을 교체할 수 있도록
            구조를 단순하게 유지했습니다. 다음 단계에서는 애니메이션과 인터랙션을 추가하되, 정보 전달을
            해치지 않는 선에서 점진적으로 개선할 계획입니다.
          </p>
        </div>
      </div>
    </section>
  );
}
