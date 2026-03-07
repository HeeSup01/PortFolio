import { Nav } from './components/Nav';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { TechStack } from './sections/TechStack';
import { Projects } from './sections/Projects';
import { EngineeringThinking } from './sections/EngineeringThinking';
import { Experience } from './sections/Experience';
import { Growth } from './sections/Growth';
import { Contact } from './sections/Contact';

function App() {
  return (
    <>
      <Nav />
      <main>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <EngineeringThinking />
      <Experience />
      <Growth />
      <Contact />
    </main>
    </>
  );
}

export default App;
