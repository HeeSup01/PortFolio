import { useState } from 'react';
import { GitBranch, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  ReactIcon, TypeScriptIcon, FlutterIcon, DartIcon, FirebaseIcon,
  FastAPIIcon, PythonIcon, PostgreSQLIcon, DockerIcon, AirflowIcon,
  GrafanaIcon, FigmaIcon, OpenAIIcon,
} from '../lib/tech-icons';

import dashboard from '../assets/01_dashboard_full.png';
import grafana from '../assets/08_grafana_dashboard.jpeg';
import yamlDsl from '../assets/09_dsl_yaml_config.jpeg';
import etlLog from '../assets/10_etl_execution_log.jpeg';
import todobestVideo from '../assets/ToDoBest.mp4';
import aiDiaryVideo from '../assets/Ai감정다이어리_시연.mp4';

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
  'OpenAI API': <OpenAIIcon size={16} />,
};

type Screenshot = { src: string; caption: string };

const projects: {
  title: string;
  subtitle: string;
  period: string;
  type: string;
  role: string;
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl: string;
  video?: string;
  screenshots?: Screenshot[];
}[] = [
  {
    title: 'ToDoBest',
    subtitle: '경험치 기반 목표관리 애플리케이션',
    period: '2024.04 ~ 2024.11',
    type: '5인 팀 프로젝트',
    role: '프론트엔드 전반 · Firebase 데이터 설계 · 백엔드 로직 전담',
    description:
      '앱의 전반적인 프론트엔드 화면을 설계·구현하고, 각 화면에 필요한 Firebase Firestore 데이터 구조와 백엔드 로직을 함께 작성했습니다. 단순히 화면을 그리는 데 그치지 않고, 데이터가 어떤 컬렉션 구조로 저장되고 어떤 시점에 읽히고 갱신되는지를 직접 설계하며 화면과 데이터가 맞물리는 전체 흐름을 책임졌습니다.',
    highlights: [
      '5개 게시판(자유·목표공유·팁·멘토링·홍보)에 게시글 CRUD·댓글·답글·좋아요·이미지 첨부·스크랩 구현',
      '게시글 삭제 시 Firestore 하위 컬렉션(댓글·답글)이 남는 문제를 계단식 삭제 로직으로 해결',
      'Firestore 복합 인덱스 직접 생성으로 다중 필드 정렬 버그 해소 · 17개 파일 구조 개선',
    ],
    tags: ['Flutter', 'Dart', 'Firebase', 'Figma'],
    githubUrl: 'https://github.com/Six-Tail/ToDoBest',
    video: todobestVideo,
  },
  {
    title: 'AI 감정 다이어리',
    subtitle: '음성 기반 AI 일기 생성 애플리케이션',
    period: '2025.03 ~ 2025.11',
    type: '4인 팀 프로젝트',
    role: 'React Native 프론트엔드 전담 · Figma UI 설계 · 음성 인식 모듈 · 감정 통계 시각화',
    description:
      '앱의 전체 화면 구조를 설계하고 Context API로 전역 상태 관리 구조를 잡았습니다. STT 라이브러리로 음성 인식 모듈을 구현하고, AsyncStorage와 NetInfo를 활용해 오프라인 데이터가 네트워크 복구 시 자동으로 서버에 동기화되는 훅을 개발했습니다. 이후 UI/UX 전면 개편과 감정 통계 페이지 구현을 주도했습니다.',
    highlights: [
      'Android STT 10초 강제 종료 문제를 플랫폼 정책 수준까지 추적해 부분 인식 결과 누적 방식으로 해결',
      'Chart Kit · SVG로 일별·주간 감정 차트 등 감정 통계 컴포넌트 15개 신규 구현',
      '기능 개발 전 화면 구성을 팀 전체와 먼저 합의하는 방식을 제안해 기획-구현 간 간극 해소',
    ],
    tags: ['React Native', 'TypeScript', 'FastAPI', 'Python', 'Firebase', 'OpenAI API', 'PostgreSQL'],
    githubUrl: 'https://github.com/junwon515/ai-diary-app',
    video: aiDiaryVideo,
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
    screenshots: [
      { src: dashboard, caption: '실시간 파이프라인 모니터링 대시보드' },
      { src: grafana, caption: 'Grafana 연동 — 실행 현황 시계열 시각화' },
      { src: yamlDsl, caption: 'YAML DSL — 선언적 파이프라인 정의' },
      { src: etlLog, caption: 'ETL 실행 로그 — Extract → Transform → Load 각 단계별 행 수 변화, 적재 테이블, 실행 결과를 순서대로 출력' },
    ],
  },
];

function ProjectCard({ project }: { project: typeof projects[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* 항상 보이는 헤더 영역 */}
      <button
        className="w-full text-left p-8 hover:bg-gray-50 transition-colors"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 flex-wrap mb-1">
              <h3 className="text-2xl text-gray-900">{project.title}</h3>
              <span className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-xs">
                {project.type}
              </span>
              <span className="text-sm text-gray-400">{project.period}</span>
            </div>
            <p className="text-blue-600 mb-3">{project.subtitle}</p>
            {/* 기술 태그 */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm border border-blue-100"
                >
                  {ICON_MAP[tag] && <span className="flex-shrink-0">{ICON_MAP[tag]}</span>}
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <ChevronDown
            className={`h-5 w-5 text-gray-400 flex-shrink-0 mt-1 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
        </div>
      </button>

      {/* 펼쳐지는 상세 영역 */}
      {open && (
        <div className="px-8 pb-8 border-t border-gray-100">
          <div className="pt-6 space-y-5">
            {/* 담당 역할 */}
            <div className="flex items-start gap-2 text-sm text-gray-500">
              <span className="font-medium text-gray-400 flex-shrink-0">담당</span>
              <span>{project.role}</span>
            </div>

            <p className="text-gray-600 leading-relaxed">{project.description}</p>

            {/* 핵심 내용 */}
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5 flex-shrink-0">▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* 시연 영상 */}
            {project.video && (
              <video
                src={project.video}
                controls
                className="w-full rounded-md border border-gray-200"
              />
            )}

            {/* 스크린샷 갤러리 */}
            {project.screenshots && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {project.screenshots.map((shot, i) => (
                  <figure key={i} className="m-0">
                    <img
                      src={shot.src}
                      alt={shot.caption}
                      className="w-full rounded-md border border-gray-200 object-cover"
                    />
                    <figcaption className="mt-1 text-xs text-gray-400 leading-snug">
                      {shot.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}

            {/* GitHub 버튼 */}
            <div className="pt-2">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="border-gray-300">
                  <GitBranch className="mr-2 h-4 w-4" />
                  코드 보기
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl mb-12 text-gray-900 text-center">주요 프로젝트</h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
