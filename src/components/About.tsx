export function About() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl mb-12 text-gray-900">소개</h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-xl text-blue-600 mb-4">기술의 동작 원리를 탐구하는 개발자의 시작</h3>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                저는 문제를 해결하는 과정에서 즐거움을 느끼는 사람입니다.
              </p>
              <p>
                어릴 때부터 새로운 기술이나 프로그램을 접하면 단순히 사용하는 것에 그치지 않고,
                "왜 이렇게 동작할까?", "이 데이터는 어디서 오는 걸까?"라는 질문을 스스로 던지곤 했습니다.
                이러한 호기심은 자연스럽게 소프트웨어 개발 전반에 대한 관심으로 이어졌습니다.
              </p>
              <p>
                처음에는 사용자와 직접 맞닿는 화면을 만드는 것부터 시작했지만, 프로젝트를 거듭하면서
                서비스의 완성도는 눈에 보이는 기능만이 아니라
                <span className="text-gray-900"> 그것을 뒷받침하는 데이터 흐름과 시스템 구조</span>에도
                달려 있다는 것을 깨닫게 되었습니다.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-10">
            <h3 className="text-xl text-blue-600 mb-4">화면 너머의 시스템을 이해하는 개발자</h3>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                프로젝트를 거듭하면서 개발의 시야를 점차 넓혀왔습니다. 특정 기술이나 역할에
                스스로를 가두기보다, 서비스가 필요로 하는 곳에서 가장 적합한 기여를 할 수 있는
                개발자가 되고 싶다는 목표를 갖게 되었습니다.
              </p>
              <p>
                문제를 발견하고 끝까지 원인을 파고드는 과정 속에서 개발자로서의 즐거움과 성장의 가능성을
                확인할 수 있었고, 이러한 경험은
                <span className="text-gray-900"> 단순히 기능을 구현하는 개발자가 아니라 기술의 본질을
                이해하고 구조적으로 문제를 해결하는 개발자</span>로 성장하고 싶다는 목표를 갖게 해주었습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
