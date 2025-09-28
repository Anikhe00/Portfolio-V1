import Button from "./Button";
import { LinkIcon } from "./Icons";

function ArticleCard({ title, description, link }) {
  return (
    <li className="flex flex-row gap-5 w-full flex-start items-center group cursor-pointer">
      <div className="flex flex-col content-start gap-4 w-full">
        <div className="flex flex-col content-start gap-2">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-800 group-hover:text-purple-700 text-[18px] leading-[20px] font-semibold font-[Baskerville]">
              {title}
            </h3>

            <Button
              icon={LinkIcon}
              label="Open article"
              onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
            />
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
