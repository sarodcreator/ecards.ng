import { NavbarLogo } from "@/components/shared/NavbarLogo";
import { DesktopNav } from "@/components/shared/DesktopNav";
import { SearchBar } from "@/components/shared/SearchBar";
import { NavActions } from "@/components/shared/NavActions";
import { MobileSearchOverlay } from "@/components/shared/MobileSearchOverlay";
import { MobileNav } from "@/components/shared/MobileNav";

export const Navbar = () => {
  return (
    <div className="sticky bg-white box-border caret-transparent min-h-[auto] min-w-[auto] w-full z-[600] top-0">
      <div className="text-sm font-medium bg-white box-border caret-transparent tracking-[0.7px] leading-[21px] mx-auto">
        <header className="bg-white box-border caret-transparent flex justify-between mt-0 mx-4 py-2 md:mt-3 md:mx-8 md:py-0">
          <NavbarLogo />
          <DesktopNav />
          <SearchBar />
          <NavActions />
          <MobileSearchOverlay />
        </header>
        <div className="fixed bg-zinc-800 box-border caret-transparent hidden flex-row-reverse opacity-30 z-[200] overflow-hidden top-[58px] bottom-0 inset-x-0"></div>
        <MobileNav />
      </div>
    </div>
  );
};
