import Projects from "./components/layout/Projects";
import About from "./components/layout/About";
import ToolSection from "./components/layout/ToolSection";
import Articles from "./components/layout/Articles";
import Navigation from "./components/layout/Navigation";

function App() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-[2.5rem] lg:gap-[0.5rem]">
        <Navigation />
        <main
          id="content"
          className="flex flex-col gap-[2.5rem] lg:gap-[4rem] items-start lg:py-[4rem] w-full lg:w-[60%] overflow-visible"
        >
          <About />
          <Projects />
          <ToolSection />
          <Articles />
        </main>
      </div>
    </div>
  );
}

export default App;
