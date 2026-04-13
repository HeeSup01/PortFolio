import { Search, Users, Cpu, TrendingUp } from 'lucide-react';

const strengths = [
  {
    icon: Search,
    keyword: '근본 원인을 끝까지 파고드는 집요함',
    description:
      '문제가 생겼을 때 표면에서 멈추지 않습니다. 원인이 어디에 있는지 확신이 생길 때까지 공식 문서와 로그를 추적하고 테스트를 반복합니다. 임시방편이 아닌 구조적으로 재발하지 않는 해결책을 찾는 것이 저의 기준입니다.',
  },
  {
    icon: Cpu,
    keyword: '운영 안정성을 먼저 설계에 반영',
    description:
      '기능이 동작하는 것과 운영 환경에서 안정적으로 동작하는 것은 다른 문제라고 생각합니다. 재실행, 실패 복구, 데이터 일관성처럼 운영에서 반드시 마주치는 요소를 기능 구현보다 먼저 설계에 반영하는 시각을 갖고 있습니다.',
  },
  {
    icon: Users,
    keyword: '구현 전에 먼저 맞추고, 그다음 만든다',
    description:
      '개발을 시작하기 전에 팀 전체가 같은 그림을 보는 것이 가장 중요하다고 생각합니다. 구조와 방향을 미리 합의하는 과정이 불필요한 수정을 줄이고, 각자의 구현이 자연스럽게 맞물리게 만든다는 것을 팀 프로젝트를 통해 배웠습니다.',
  },
  {
    icon: TrendingUp,
    keyword: 'AI 도구를 함께 사고하는 협업 파트너로',
    description:
      'ChatGPT, Gemini, Claude, Cursor 각 AI의 강점을 이해하고 상황에 따라 선택해 활용합니다. 설계 방향이 고민될 때, 구현이 막힐 때, 선택지를 비교할 때 각각 다른 도구를 씁니다. 최종 판단은 항상 스스로 내리며, AI를 자동완성이 아닌 함께 사고하는 도구로 대합니다.',
  },
];

export function Engineering() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-gray-900">개발 철학</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            저를 표현하는 네 가지 키워드입니다
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {strengths.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.keyword} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 rounded-lg flex-shrink-0">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-3 text-gray-900">{item.keyword}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
