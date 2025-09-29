import ShakiratImage from "../../images/IQK_6032.jpg";
import Button from "../common/Button";
import socialAccountData from "../../socialMediaData";
import NavLink from "../common/NavLink";

export default function Navigation() {
  return (
    <header className="flex flex-col items-start justify-between gap-[1rem] w-full lg:w-[40%] h-auto py-0 md:py-0 lg:py-[4rem] lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between ">
      <div className="flex flex-col items-start gap-[2rem]">
        <div className="w-full h-auto flex flex-col items-start gap-[1rem]">
          <img
            src={ShakiratImage}
            alt="Shakirat"
            className="object-cover object-top w-[6.5rem] h-[6.5rem] rounded-[0.75rem]"
          />

          <div className="flex flex-col items-start gap-[0rem]">
            <h1 className="text-gray-800 text-[2.25rem] md:text-[2.25rem] lg:text-[2.25rem] font-bold leading-normal font-[Baskerville]">
              Shakirat Akanji
            </h1>
            <p className="text-[1.125rem] leading-normal font-normal text-gray-600 font-[Manrope]">
              Design Engineer
            </p>
          </div>
        </div>

        <nav className="hidden lg:flex flex-col gap-[0.75rem] items-start justify-start">
          <NavLink pageName="About" />
          <NavLink pageName="Projects" />
          <NavLink pageName="Tools" />
          <NavLink pageName="Articles" />
        </nav>
      </div>

      <div className="flex flex-row gap-[1rem] items-center justify-center">
        {socialAccountData.map((account, index) => (
          <Button
            key={index}
            icon={account.icon}
            label={account.name}
            link={account.link}
          />
        ))}
      </div>
    </header>
  );
}
