function ArticleCard({ title, description, link }) {
  return (
    <li
      className="relative flex flex-row gap-5 w-full flex-start items-center group cursor-pointer overflow-visible"
      onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
    >
      <div class="absolute -inset-4 z-0 hidden px-4 rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-purple-50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-xs"></div>

      <div className="relative flex flex-col content-start gap-4 w-full">
        <div className="relative flex flex-col content-start gap-2">
          <div className="relative flex items-center justify-between">
            <h3 className="text-gray-800 group-hover:text-purple-700 text-[18px] leading-[20px] font-semibold font-[Baskerville]">
              {title}
            </h3>
          </div>

          <p className="text-gray-600 text-[16px] leading-[24px] font-normal font-[Manrope] w-full">
            {description}
          </p>
        </div>
      </div>
    </li>
  );
}

export default ArticleCard;
