export default function NavLink({ pageName, isActive }) {
  return (
    <a
      href={`#${pageName.toLowerCase()}`}
      className={`flex items-center justify-center gap-[0.5rem] group ${
        isActive ? "text-purple-700" : "text-gray-500"
      }`}
    >
      <span
        className={`lg:w-[2rem] group-hover:lg:w-[3rem] h-[0.063rem] motion-reduce:transition-none ${
          isActive
            ? "lg:w-[3rem] bg-purple-700"
            : "bg-gray-500 group-hover:bg-purple-700 group-hover:lg:w-[3rem]"
        }`}
      ></span>
      <span
        className={`text-[1rem] font-[Manrope] leading-norma ${
          isActive
            ? "text-purple-700"
            : "text-gray-500 group-hover:text-purple-700"
        }`}
      >
        {pageName}
      </span>
    </a>
  );
}
