function GitHubIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function NaverIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-400 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="max-w-4xl w-full text-center relative z-10">
        <div className="mb-10">
          <div className="inline-block mb-4">
            <span className="px-4 py-1.5 bg-white/10 text-blue-100 text-sm rounded-full border border-white/20">
              소프트웨어 개발자
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl mb-5 text-white font-light tracking-wide">
            조희섭
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            기술의 동작 원리를 탐구하고, 문제를 구조적으로 해결하는 개발자입니다
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://github.com/HeeSup01"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 transition-all text-sm backdrop-blur-sm"
          >
            <GitHubIcon />
            <span>github.com/HeeSup01</span>
          </a>
          <a
            href="mailto:heesup9683@naver.com"
            className="flex items-center gap-2.5 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 transition-all text-sm backdrop-blur-sm"
          >
            <span className="text-[#03C75A]">
              <NaverIcon />
            </span>
            <span>heesup9683@naver.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
