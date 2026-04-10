export type NavSubItem = {
  label: string;
  href?: string;
};

export type NavSection = {
  title: string;
  titleHref?: string;
  items: NavSubItem[];
};

export type TrendingCard = {
  href: string;
  bgColor: string;
  imageSrc: string;
  imageTitle: string;
  label: string;
};

export type TrendingLink = {
  href: string;
  label: string;
};

export type BottomAction = {
  href: string;
  iconSrc: string;
  label: string;
  extraClass?: string;
};

export type MobileNavItemProps = {
  iconSrc: string;
  label: string;
  // If true, renders the "Trending" layout with cards and links instead of sections
  isTrending?: boolean;
  sections?: NavSection[];
  trendingCards?: TrendingCard[];
  trendingLinks?: TrendingLink[];
  bottomActions?: BottomAction[];
};

export const MobileNavItem = (props: MobileNavItemProps) => {
  const {
    iconSrc,
    label,
    isTrending = false,
    sections = [],
    trendingCards = [],
    trendingLinks = [],
    bottomActions = [],
  } = props;

  return (
    <li className="box-border caret-transparent">
      <div className="items-center box-border caret-transparent flex justify-between px-4 py-3">
        <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto]">
          <img
            src={iconSrc}
            alt="Icon"
            className="box-border caret-transparent h-6 w-[25px] mr-2"
          />
          <span className="font-semibold box-border caret-transparent block min-h-[auto] min-w-[auto]">
            {label}
          </span>
        </div>
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
          <img
            src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-22.svg"
            alt="Icon"
            className="box-border caret-transparent inline h-6 w-[25px]"
          />
        </div>
      </div>

      {isTrending ? (
        <div className="box-border caret-transparent h-0 overflow-hidden mt-8">
          <ul className="box-border caret-transparent gap-x-4 flex gap-y-4 overflow-auto px-4">
            {trendingCards.map((card, index) => (
              <li
                key={index}
                className="box-border caret-transparent min-h-[auto] min-w-[auto]"
              >
                <a
                  href={card.href}
                  className="box-border caret-transparent flex flex-col h-[340px] w-[252px]"
                >
                  <span
                    className={`items-center ${card.bgColor} box-border caret-transparent flex h-[292px] justify-center min-h-[auto] min-w-[auto] rounded-t-3xl`}
                  >
                    <img
                      title={card.imageTitle}
                      src={card.imageSrc}
                      className="text-transparent text-[0px] shadow-[rgba(32,40,45,0.12)_0px_16px_32px_-12px] box-border h-[228px] leading-[0px] max-w-full min-h-[auto] min-w-[auto] w-[154px] rounded-bl rounded-br rounded-tl rounded-tr"
                    />
                  </span>
                  <span className="text-base bg-zinc-100 box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] text-center pl-4 pr-3 py-3 rounded-b-3xl">
                    {card.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <ul className="box-border caret-transparent list-item mt-8 px-4">
            {trendingLinks.map((link, index) => (
              <li key={index} className="box-border caret-transparent mb-6">
                <a
                  href={link.href}
                  className="font-semibold box-border caret-transparent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul className="box-border caret-transparent list-item h-0 overflow-hidden pl-0">
          {sections.map((section, sectionIndex) => (
            <li
              key={sectionIndex}
              className="border-b-gray-200 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col mt-6 mx-4 pb-6 border-b"
            >
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] ml-8">
                {section.titleHref ? (
                  <a
                    href={section.titleHref}
                    className="font-semibold box-border caret-transparent"
                  >
                    {section.title}
                  </a>
                ) : (
                  <a className="font-semibold box-border caret-transparent">
                    {section.title}
                  </a>
                )}
              </div>
              <ul className="box-border caret-transparent list-item min-h-[auto] min-w-[auto] ml-8 pl-0">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="box-border caret-transparent mt-5"
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="box-border caret-transparent"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <a className="box-border caret-transparent">
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}

          {bottomActions.length > 0 && (
            <li className="box-border caret-transparent mt-6">
              <ul className="box-border caret-transparent list-item pl-0">
                {bottomActions.map((action, index) => (
                  <li
                    key={index}
                    className={`box-border caret-transparent ml-4 ${action.extraClass ?? ""}`}
                  >
                    <a
                      href={action.href}
                      className="font-semibold items-center bg-zinc-100 box-border caret-transparent inline-flex h-10 justify-center leading-10 px-3 rounded-[40px]"
                    >
                      <img
                        src={action.iconSrc}
                        alt="Icon"
                        className="box-border caret-transparent h-6 w-[25px]"
                      />
                      <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] mx-2">
                        {action.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          )}
        </ul>
      )}
    </li>
  );
};
