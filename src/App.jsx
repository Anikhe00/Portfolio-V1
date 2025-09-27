import Projects from "./components/layout/Projects";
import About from "./components/layout/About";
import ToolSection from "./components/layout/ToolSection";

function App() {
  return (
    <main className="flex flex-row gap-16 content-start flex-1 px-[7.5rem] py-[4rem]">
      <section className="flex flex-col gap-16 content-start flex-1">
        <About />
        <Projects />
        <ToolSection />
      </section>
    </main>
  );
}

export default App;
