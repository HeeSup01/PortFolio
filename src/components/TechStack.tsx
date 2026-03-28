import {
  ReactIcon, TypeScriptIcon, FlutterIcon, FirebaseIcon, GitIcon, FigmaIcon,
  CppIcon, PythonIcon, SpringIcon, PostgreSQLIcon, MongoDBIcon, GraphQLIcon,
  DockerIcon, AirflowIcon, GrafanaIcon, NodeJsIcon,
} from '../lib/tech-icons';

const primary = [
  { name: 'React', icon: <ReactIcon /> },
  { name: 'React Native', icon: <ReactIcon /> },
  { name: 'Flutter', icon: <FlutterIcon /> },
  { name: 'Firebase', icon: <FirebaseIcon /> },
  { name: 'TypeScript', icon: <TypeScriptIcon /> },
  { name: 'Git', icon: <GitIcon /> },
  { name: 'Figma', icon: <FigmaIcon /> },
];

const secondary = [
  { name: 'C++', icon: <CppIcon /> },
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'Spring', icon: <SpringIcon /> },
  { name: 'PostgreSQL', icon: <PostgreSQLIcon /> },
  { name: 'MongoDB', icon: <MongoDBIcon /> },
  { name: 'GraphQL', icon: <GraphQLIcon /> },
  { name: 'Docker', icon: <DockerIcon /> },
  { name: 'Airflow', icon: <AirflowIcon /> },
  { name: 'Grafana', icon: <GrafanaIcon /> },
  { name: 'Node.js', icon: <NodeJsIcon /> },
];

export function TechStack() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl mb-14 text-gray-900 text-center">기술 스택</h2>

        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
              <h3 className="text-lg text-gray-900">주로 사용</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {primary.map((tech) => (
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

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-gray-400 inline-block" />
              <h3 className="text-lg text-gray-500">써본 경험 있음</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {secondary.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg border border-gray-200 opacity-70"
                >
                  <span className="flex-shrink-0">{tech.icon}</span>
                  <span className="text-gray-500 text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
