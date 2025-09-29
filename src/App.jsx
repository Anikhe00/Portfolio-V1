import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState, useMemo } from "react";

import Projects from "./components/layout/Projects";
import About from "./components/layout/About";
import ToolSection from "./components/layout/ToolSection";
import Articles from "./components/layout/Articles";
import Navigation from "./components/layout/Navigation";
import NavLink from "./components/common/NavLink";

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
    <div className="relative mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-[2.5rem] lg:gap-[0.5rem]">
        <Navigation sections={sections} active={active} />
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

      <nav className="fixed w-auto py-[0.875rem] px-[1.5em] z-50 bg-gray-200 rounded-[1.5rem] lg:hidden bottom-4 left-1/2 -translate-x-1/2 flex gap-[0.75rem] items-center justify-center shadow-gray-50">
        {sections.map((pageName) => (
          <NavLink
            key={pageName}
            pageName={pageName}
            isActive={active === pageName.toLowerCase()}
          />
        ))}
      </nav>
      <Analytics />
    </div>
  );
}

export default App;
