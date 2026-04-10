// export type NavItemProps = {
//   label: string;
//   outerSpanClassName?: string;
//   innerSpanClassName?: string;
// };

export const NavItem = (props) => {
  return (
    <li className="box-border caret-transparent min-h-0 min-w-0 pb-3 md:min-h-[auto] md:min-w-[auto]">
      <span
        className={
          props.outerSpanClassName ??
          "items-center box-border caret-transparent flex p-3"
        }
      >
        <span
          className={
            props.innerSpanClassName ??
            "box-border caret-transparent block min-h-0 min-w-0 px-2 md:min-h-[auto] md:min-w-[auto] font-semibold"
          }
        >
          {props.label}
        </span>
      </span>
    </li>
  );
};
