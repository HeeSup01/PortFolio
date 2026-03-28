export function About() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl mb-12 text-gray-900">소개</h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-xl text-blue-600 mb-4">커뮤니케이션이 서비스의 완성도를 결정한다</h3>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                두 번의 팀 프로젝트를 거치며 커뮤니케이션이 코드 품질만큼 서비스 완성도에 직접적인 영향을
                미친다는 것을 몸으로 느꼈습니다.
              </p>
              <p>
                같은 프론트엔드 개발자와 협업할 때, Figma로 화면 설계를 먼저 합의하고 개발에 들어간 경우와
                그렇지 않은 경우는 결과가 달랐습니다. 사전에 충분히 논의하고 시작한 작업은
                <span className="text-gray-900"> 수정 횟수가 눈에 띄게 줄었고</span>, 각자의 구현이 자연스럽게
                맞물렸습니다. 반면 다른 역할군과 코드 단에서 엇갈렸을 때는 이미 상당한 작업이 쌓인 뒤였고,
                그것을 조율하는 데 예상보다 많은 비용이 들었습니다.
              </p>
              <p>
                이 경험이 저에게 남긴 것은 하나입니다. <span className="text-gray-900">먼저 맞추고, 그다음 만든다.</span>{' '}
                지금도 협업 전에 구조와 흐름을 팀원과 충분히 논의하는 것을 당연한 출발점으로 생각합니다.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-10">
            <h3 className="text-xl text-blue-600 mb-4">내가 불편하면, 사용자도 불편하다</h3>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                기능을 구현한 뒤 저는 항상 직접 사용해봅니다. 개발자의 눈이 아니라
                <span className="text-gray-900"> 처음 이 서비스를 접하는 사람의 눈</span>으로 모든 흐름을
                따라가면서, 어색하거나 불편한 부분을 찾아 고쳤습니다.
              </p>
              <p>
                이 습관은 "동작하면 끝"이 아니라 "쓰기 편해야 끝"이라는 기준을 만들어줬습니다.
                코드가 올바르게 작동하는 것과 사용자가 자연스럽게 쓸 수 있는 것은 다른 문제라는 것을,
                직접 반복해서 테스트하는 과정에서 배웠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
