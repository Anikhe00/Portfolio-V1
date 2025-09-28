function About() {
  return (
    <section
      id="about"
      className="flex flex-col gap-[1rem] md:gap-[1.5rem] lg:gap-[1.5rem] scroll-mt-16 lg:scroll-mt-24"
    >
      <h2 className="text-gray-800 text-[1.25rem] md:text-[1.5rem] lg:text-[1.5rem] font-semibold leading-normal font-[Baskerville]">
        About
      </h2>

      <div className="flex flex-col gap-4">
        <p className="text-gray-600 text-[1rem] leading-[1.5rem] font-normal font-[Manrope]">
          I'm a Design Engineer passionate about creating thoughtful, inclusive
          digital experiences that blend design and code. I focus on building
          clean, accessible interfaces that solve real problems and feel
          effortless to use.
        </p>

        <p className="text-gray-600 text-[1rem] leading-[1.5rem] font-normal font-[Manrope]">
          Over the past three years, I've worked across HealthTech, FinTech,
          SaaS, and EdTech industries, designing user-friendly workflows,
          building design systems, and coding with HTML, CSS, Tailwind, and
          JavaScript. Lately, I'm also learning React to level up my frontend
          skills.
        </p>

        <p className="text-gray-600 text-[1rem] leading-[1.5rem] font-normal font-[Manrope]">
          Outside of work, I love doodling in Procreate, watching medical
          dramas, geeking over F1 cars, and spending time in prayer and
          reflection.
        </p>
      </div>
    </section>
  );
}

export default About;
