import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState, useMemo } from "react";
import Header from "./components/layout/Header";
import Projects from "./components/layout/Projects";
import About from "./components/layout/About";
import ToolSection from "./components/layout/ToolSection";
import Articles from "./components/layout/Articles";

function App() {
  const sections = useMemo(
    () => ["About", "Projects", "Tools", "Articles"],
    []
  );
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      sections.forEach((id) => {
        const section = document.getElementById(id.toLowerCase());
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = id.toLowerCase();
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <div className="flex flex-col mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans gap-[1rem] md:px-12 lg:px-60 md:py-16 lg:py-24">
      <Header />
      <main
        id="content"
        className="flex flex-col gap-[2.5rem] lg:gap-[4rem] items-start  w-full overflow-visible"
      >
        <About />
        <Projects />
        <ToolSection />
        <Articles />
      </main>
      <Analytics />
    </div>
  );
}

export default App;
