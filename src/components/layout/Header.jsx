import ShakiratImage from "../../images/IQK_6032.jpg";

export default function Header() {
  return (
    <header className="flex flex-col items-start justify-between gap-[1rem] w-full h-auto py-0">
      <div className="flex flex-col items-start gap-[1rem]">
        <div className="w-full h-auto flex flex-col items-start gap-[1rem]">
          <img
            src={ShakiratImage}
            alt="Shakirat"
            className="object-cover object-top size-[5rem] rounded-[0.75rem]"
          />

          <div className="flex flex-col items-start gap-[0rem]">
            <h1 className="text-gray-800 text-[2rem] md:text-[2.25rem] lg:text-[2.25rem] font-bold leading-normal font-[Baskerville]">
              Shakirat Akanji
            </h1>
            <p className="text-[1rem] leading-normal font-normal text-gray-600 font-[Manrope]">
              Design Engineer and Healthtech Enthusiast
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
