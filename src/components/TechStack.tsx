import {
  ReactIcon, TypeScriptIcon, FlutterIcon, FirebaseIcon, GitIcon, FigmaIcon,
  CppIcon, PythonIcon, SpringIcon, PostgreSQLIcon, MongoDBIcon, GraphQLIcon,
  DockerIcon, AirflowIcon, GrafanaIcon, NodeJsIcon, FastAPIIcon, NotionIcon,
} from '../lib/tech-icons';

const frontend = [
  { name: 'React', icon: <ReactIcon /> },
  { name: 'React Native', icon: <ReactIcon /> },
  { name: 'Flutter', icon: <FlutterIcon /> },
  { name: 'TypeScript', icon: <TypeScriptIcon /> },
];

const backend = [
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'FastAPI', icon: <FastAPIIcon /> },
  { name: 'Spring', icon: <SpringIcon /> },
  { name: 'Node.js', icon: <NodeJsIcon /> },
  { name: 'C++', icon: <CppIcon /> },
];

const data = [
  { name: 'PostgreSQL', icon: <PostgreSQLIcon /> },
  { name: 'MongoDB', icon: <MongoDBIcon /> },
  { name: 'Firebase', icon: <FirebaseIcon /> },
  { name: 'Apache Airflow', icon: <AirflowIcon /> },
  { name: 'Docker', icon: <DockerIcon /> },
  { name: 'Grafana', icon: <GrafanaIcon /> },
  { name: 'GraphQL', icon: <GraphQLIcon /> },
];

const tools = [
  { name: 'Git', icon: <GitIcon /> },
  { name: 'Figma', icon: <FigmaIcon /> },
  { name: 'Notion', icon: <NotionIcon /> },
];

function TechGroup({ color, label, items }: { color: string; label: string; items: { name: string; icon: JSX.Element }[] }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <span className={`w-2 h-2 rounded-full inline-block ${color}`} />
        <h3 className="text-lg text-gray-900">{label}</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {items.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg border border-gray-200 shadow-sm"
          >
            <span className="flex-shrink-0">{tech.icon}</span>
            <span className="text-gray-800 text-sm font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl mb-14 text-gray-900 text-center">기술 스택</h2>
        <div className="space-y-12">
          <TechGroup color="bg-blue-600" label="프론트엔드 · 모바일" items={frontend} />
          <TechGroup color="bg-indigo-500" label="백엔드" items={backend} />
          <TechGroup color="bg-violet-500" label="데이터 · 인프라" items={data} />
          <TechGroup color="bg-gray-400" label="협업 · 도구" items={tools} />
        </div>
      </div>
    </section>
  );
}
