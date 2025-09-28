import articlesData from "../../articles";
import ArticleCard from "../common/ArticleCard";

function Articles() {
  return (
    <section className="flex flex-col gap-8 items-start h-auto scroll-mt-16 lg:scroll-mt-24">
      <h2 className="text-gray-800 text-[24px] font-semibold leading-[28px] font-[Baskerville]">
        Articles
      </h2>
      <ul className="w-full h-fit flex flex-col content-start gap-[2rem] lg:gap-[3rem] self-stretch">
        {articlesData.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </ul>
    </section>
  );
}
export default Articles;
