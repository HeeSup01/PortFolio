import { Mail, MapPin, GitBranch } from 'lucide-react';
import { Button } from './ui/button';

export function Contact() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl mb-6 text-gray-900">연락하기</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          새로운 도전과 기회에 대해 듣는 것을 항상 환영합니다.
          궁금한 점이 있거나 함께 이야기 나누고 싶으시다면 언제든지 연락 주세요.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="inline-flex p-3 bg-blue-100 rounded-lg mb-4">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg mb-2 text-gray-900">이메일</h3>
            <a href="mailto:heesup9683@naver.com" className="text-blue-600 hover:text-blue-700">
              heesup9683@naver.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="inline-flex p-3 bg-blue-100 rounded-lg mb-4">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg mb-2 text-gray-900">위치</h3>
            <p className="text-gray-600">서울, 대한민국</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="inline-flex p-3 bg-blue-100 rounded-lg mb-4">
              <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <h3 className="text-lg mb-2 text-gray-900">GitHub</h3>
            <a href="https://github.com/HeeSup01" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
              github.com/HeeSup01
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:heesup9683@naver.com">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Mail className="mr-2 h-5 w-5" />
              이메일 보내기
            </Button>
          </a>
          <a href="https://github.com/HeeSup01" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-gray-300">
              <GitBranch className="mr-2 h-5 w-5" />
              GitHub 보기
            </Button>
          </a>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-gray-300 text-center text-gray-600">
        <p>© 2026 조희섭. React & Tailwind CSS로 제작되었습니다.</p>
      </footer>
    </section>
  );
}
