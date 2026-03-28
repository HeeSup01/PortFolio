import { GitBranch } from 'lucide-react';
import { Button } from './ui/button';
import {
  ReactIcon, TypeScriptIcon, FlutterIcon, DartIcon, FirebaseIcon,
  FastAPIIcon, PythonIcon, PostgreSQLIcon, DockerIcon, AirflowIcon,
  GrafanaIcon, FigmaIcon,
} from '../lib/tech-icons';

const ICON_MAP: Record<string, JSX.Element> = {
  Flutter: <FlutterIcon size={16} />,
  Dart: <DartIcon size={16} />,
  Firebase: <FirebaseIcon size={16} />,
  Figma: <FigmaIcon size={16} />,
  'React Native': <ReactIcon size={16} />,
  TypeScript: <TypeScriptIcon size={16} />,
  FastAPI: <FastAPIIcon size={16} />,
  Python: <PythonIcon size={16} />,
  React: <ReactIcon size={16} />,
  'Apache Airflow': <AirflowIcon size={16} />,
  PostgreSQL: <PostgreSQLIcon size={16} />,
  Docker: <DockerIcon size={16} />,
  Grafana: <GrafanaIcon size={16} />,
};

const projects = [
  {
    title: 'ToDoBest',
    subtitle: '경험치 기반 목표관리 애플리케이션',
    period: '2024.04 ~ 2024.11',
    type: '5인 팀 프로젝트',
    role: 'PM · 캘린더 기능 · 랭킹/미션 시스템 · 프론트엔드 · 백엔드 연동',
    description:
      '목표를 달성하면 경험치를 획득하고 레벨이 상승하는 성장 시스템 기반의 목표관리 앱입니다. 게시판 기능과 무한 스크롤 기반 단계적 로딩을 적용해 초기 로딩 시간을 약 40% 단축했습니다.',
    highlights: [
      '경험치·레벨 시스템으로 사용자의 지속적 참여 유도',
      '무한 스크롤 단계적 로딩으로 초기 로딩 40% 단축',
      'UI 먼저 반영 후 서버 동기화 방식으로 좋아요 데이터 불일치 해결',
    ],
    tags: ['Flutter', 'Dart', 'Firebase', 'Figma'],
    githubUrl: 'https://github.com/Six-Tail/ToDoBest',
  },
  {
    title: 'AI 감정 다이어리',
    subtitle: '음성 기반 AI 일기 생성 애플리케이션',
    period: '2025.03 ~ 2025.11',
    type: '4인 팀 프로젝트',
    role: 'Figma UI 설계 · React Native 프론트엔드 전담 (8개 화면 · 21개 컴포넌트)',
    description:
      '사용자의 음성 기록을 AI가 분석해 감정이 담긴 일기를 자동으로 생성하는 모바일 앱입니다. 음성 → 텍스트 → AI 일기 생성 → 감정 수치화까지의 전 흐름을 React Native로 구현했습니다.',
    highlights: [
      'Android STT 10초 강제 종료 문제를 부분 인식 결과 누적 방식으로 해결',
      '8개 화면 · 21개 재사용 컴포넌트 직접 구현',
      'Figma 선 합의 방식 도입으로 기획-구현 간 간극 해소',
    ],
    tags: ['React Native', 'TypeScript', 'FastAPI', 'Python', 'Firebase'],
    githubUrl: 'https://github.com/junwon515/ai-diary-app',
  },
  {
    title: 'PipeSight',
    subtitle: 'YAML DSL 기반 ETL 파이프라인 모니터링 대시보드',
    period: '2026.01 ~ 2026.03',
    type: '개인 프로젝트',
    role: '풀스택 전담 — 백엔드 · 프론트엔드 · ETL 파이프라인 · 인프라',
    description:
      'YAML 파일 하나로 데이터 수집·정제·적재 규칙을 정의하고, Airflow가 자동 실행하며, React 대시보드에서 실시간 모니터링하는 설정 기반 데이터 파이프라인 플랫폼입니다.',
    highlights: [
      'execution_date 기준 멱등성 패턴으로 파이프라인 재실행 데이터 중복 해결',
      'YAML DSL 직접 설계로 설정과 로직을 완전 분리',
      'PostgreSQL 3계층 구조(DL → DW → Mart)로 데이터 안정성 확보',
    ],
    tags: ['React', 'TypeScript', 'FastAPI', 'Python', 'Apache Airflow', 'PostgreSQL', 'Docker', 'Grafana'],
    githubUrl: 'https://github.com/HeeSup01/PipeSight',
  },
];

export function Projects() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl mb-12 text-gray-900 text-center">주요 프로젝트</h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-8">
                {/* 헤더 */}
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-2xl text-gray-900">{project.title}</h3>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-xs">
                      {project.type}
                    </span>
                    <span className="text-sm text-gray-400">{project.period}</span>
                  </div>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="border-gray-300 flex-shrink-0">
                      <GitBranch className="mr-2 h-4 w-4" />
                      코드 보기
                    </Button>
                  </a>
                </div>

                <p className="text-blue-600 mb-3">{project.subtitle}</p>

                {/* 담당 역할 */}
                <div className="flex items-start gap-2 mb-5 text-sm text-gray-500">
                  <span className="font-medium text-gray-400 flex-shrink-0">담당</span>
                  <span>{project.role}</span>
                </div>

                <p className="text-gray-600 mb-5 leading-relaxed">{project.description}</p>

                {/* 핵심 내용 */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5 flex-shrink-0">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* 기술 태그 (아이콘 포함) */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm border border-blue-100"
                    >
                      {ICON_MAP[tag] && (
                        <span className="flex-shrink-0">{ICON_MAP[tag]}</span>
                      )}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
