import { NavItem } from "@/components/shared/NavItem";
import { NavLogoItem } from "@/components/shared/NavLogoItem";

export const DesktopNav = () => {
  return (
    <nav className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
      <ul className="items-center box-border caret-transparent flex justify-center z-[200] pl-0">
        <NavItem
          label=" Wedding "
          outerSpanClassName="items-center box-border caret-transparent flex p-3"
          innerSpanClassName="font-semibold box-border caret-transparent block min-h-0 min-w-0 px-2 md:min-h-[auto] md:min-w-[auto]"
        />
        <NavItem
          label="Birthday"
          innerSpanClassName="font-semibold box-border caret-transparent block min-h-0 min-w-0 px-2 md:min-h-[auto] md:min-w-[auto]"
        />
        <NavItem
          label=" Baby & Kids "
          innerSpanClassName="font-semibold box-border caret-transparent block min-h-0 min-w-0 px-2 md:min-h-[auto] md:min-w-[auto]"
        />
        <NavItem
          label=" Party "
          innerSpanClassName="font-semibold box-border caret-transparent block min-h-0 min-w-0 px-2 md:min-h-[auto] md:min-w-[auto]"
        />
        <NavItem
          label=" Greeting cards "
          innerSpanClassName="font-semibold box-border caret-transparent block min-h-0 min-w-0 px-2 md:min-h-[auto] md:min-w-[auto]"
        />
        <NavItem
          label="Trending"
          outerSpanClassName="font-semibold items-center box-border caret-transparent flex p-3"
          innerSpanClassName="box-border caret-transparent block min-h-0 min-w-0 px-2 md:min-h-[auto] md:min-w-[auto]"
        />
        <NavLogoItem />
      </ul>
    </nav>
  );
};
