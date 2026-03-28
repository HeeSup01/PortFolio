import { Mail, MapPin, GitBranch } from 'lucide-react';
import { Button } from './ui/button';

export function Contact() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl mb-6 text-gray-900">연락하기</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          새로운 프로젝트와 기회에 대해 듣는 것을 항상 환영합니다.
          질문이 있거나 단순히 인사를 하고 싶으시다면 언제든지 연락 주세요!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="inline-flex p-3 bg-blue-100 rounded-lg mb-4">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg mb-2 text-gray-900">이메일</h3>
            <a href="mailto:minjun.kim@example.com" className="text-blue-600 hover:text-blue-700">
              minjun.kim@example.com
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
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <h3 className="text-lg mb-2 text-gray-900">LinkedIn</h3>
            <a href="#" className="text-blue-600 hover:text-blue-700">
              /in/minjunkim
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Mail className="mr-2 h-5 w-5" />
            이메일 보내기
          </Button>
          <Button size="lg" variant="outline" className="border-gray-300">
            <GitBranch className="mr-2 h-5 w-5" />
            GitHub 보기
          </Button>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-gray-300 text-center text-gray-600">
        <p>© 2026 김민준. React & Tailwind CSS로 제작되었습니다.</p>
      </footer>
    </section>
  );
}
