import Projects from "./Projects"
import About from "./About";
import ToolSection from "./ToolSection";

function App() {
  return (
    <main className="flex flex-col gap-16 content-start flex-1">
      <About/>
      <Projects/>
      <ToolSection/>
    </main>
    
  )
}

export default App;