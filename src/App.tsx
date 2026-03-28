import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Engineering } from './components/Engineering';
import { Experience } from './components/Experience';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Engineering />
      <Experience />
      <footer className="py-8 border-t border-gray-200 text-center text-gray-400 text-sm">
        © 2026 조희섭. React & Tailwind CSS로 제작되었습니다.
      </footer>
    </div>
  );
}
