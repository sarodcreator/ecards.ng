import React from "react";

export const NavItem = ({
  label,
  outerSpanClassName,
  innerSpanClassName,
}) => {
  return (
    <li className="pb-3 md:min-h-[auto] md:min-w-[auto]">
      <span
        className={
          outerSpanClassName ??
          "flex items-center p-3"
        }
      >
        <span
          className={
            innerSpanClassName ??
            "block px-2 font-semibold"
          }
        >
          {label}
        </span>
      </span>
    </li>
  );
};