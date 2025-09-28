import toolsData from "../../toolsData";
import ToolBadge from "../common/ToolBadge";

function ToolSection() {
  return (
    <section className="flex flex-col gap-6 content-start">
      <h2 className="text-gray-800 text-[24px] font-semibold leading-[28px] font-[Baskerville]">
        Tools
      </h2>

      <div className="flex flex-row flex-wrap gap-2 content-start">
        {toolsData.map((tool, index) => (
          <ToolBadge key={index} {...tool} />
        ))}
      </div>
    </section>
  );
}

export default ToolSection;
