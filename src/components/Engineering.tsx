import { Search, User, MessageSquare, TrendingUp } from 'lucide-react';

const strengths = [
  {
    icon: Search,
    keyword: '끝까지 파고드는 집요함',
    description:
      '막히는 문제 앞에서 쉽게 포기하지 않습니다. 원인을 찾을 때까지 다양한 방법을 시도하며, 그 과정에서 문제 해결력과 학습 능력을 키워왔습니다.',
  },
  {
    icon: User,
    keyword: '사용자 중심 사고',
    description:
      '기능을 구현하기 전에 사용자가 어떻게 움직일지를 먼저 생각합니다. 단순한 기능 구현을 넘어 사용자 경험을 개선하는 개발자가 되는 것이 목표입니다.',
  },
  {
    icon: MessageSquare,
    keyword: '기획과 구현을 잇는 소통',
    description:
      '팀 프로젝트에서 기획 의도와 구현 결과 사이의 간극을 좁히는 역할을 해왔습니다. 먼저 화면을 공유하고 합의하는 방식으로 불필요한 수정을 줄였습니다.',
  },
  {
    icon: TrendingUp,
    keyword: '지속적 성장',
    description:
      '새로운 기술을 접하면 직접 프로젝트에 적용해보며 이해하려 노력합니다. 기술 변화가 빠른 개발 분야에서 꾸준히 성장하는 개발자가 되고자 합니다.',
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
