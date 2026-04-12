export FooterCategoryLink = {
  href: string;
  label: string;
};

export type FooterCategoryProps = {
  title: string;
  links: FooterCategoryLink[];
  containerClassName?: string;
  wrapperClassName?: string;
};

export const FooterCategory = (props) => {
  const content = (
    <div className="box-border caret-transparent border-b-gray-200 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 gap-x-[normal] flex flex-col gap-y-[normal] border-b md:border-b-zinc-800 md:gap-x-5 md:gap-y-5 md:border-b-0">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
        <button className="text-black items-center bg-transparent caret-transparent flex flex-wrap justify-between text-center w-full px-0 py-3 md:hidden md:flex-nowrap">
          <p className="text-zinc-800 text-sm font-semibold box-border caret-transparent tracking-[0.7px] leading-[21px] min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
            {props.title}
          </p>
          <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] md:inline md:min-h-0 md:min-w-0">
            <img
              src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-58.svg"
              alt="Icon"
              className="box-border caret-transparent inline h-6 w-6"
            />
          </span>
          <span className="box-border caret-transparent hidden">
            <img
              src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-59.svg"
              alt="Icon"
              className="box-border caret-transparent inline h-6 w-6"
            />
          </span>
        </button>
        <p className="text-sm font-semibold box-border caret-transparent hidden tracking-[0.7px] leading-[21px] md:block">
          {props.title}
        </p>
      </div>
      <div className="box-border caret-transparent gap-x-3 hidden flex-col min-h-0 min-w-0 gap-y-3 md:flex md:min-h-[auto] md:min-w-[auto]">
        {props.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium items-center box-border caret-transparent inline-flex tracking-[0.7px] leading-[21px] min-h-0 min-w-0 md:text-xs md:flex md:tracking-[0.36px] md:leading-[18px] md:min-h-[auto] md:min-w-[auto]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );

  if (props.wrapperClassName) {
    return <div className={props.wrapperClassName}>{content}</div>;
  }

  return content;
};
