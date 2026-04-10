import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterSocial } from "@/sections/Footer/components/FooterSocial";
import { FooterLanguage } from "@/sections/Footer/components/FooterLanguage";

export const FooterBottom = () => {
  return (
    <div className="items-center box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] w-full md:flex-row md:justify-between">
      <div className="items-center box-border caret-transparent gap-x-6 flex flex-col justify-center min-h-[auto] min-w-[auto] gap-y-6 py-6 md:gap-x-8 md:flex-row md:justify-start md:gap-y-8">
        <FooterLogo />
        <FooterSocial />
      </div>
      <FooterLanguage />
    </div>
  );
};
