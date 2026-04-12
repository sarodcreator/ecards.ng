export const MobileNavItem = ({
  iconSrc,
  label,
  isTrending = false,
  sections = [],
  trendingCards = [],
  trendingLinks = [],
  bottomActions = [],
}) => {
  return (
    <li>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <img src={iconSrc} alt="icon" className="h-6 w-[25px] mr-2" />
          <span className="font-semibold">{label}</span>
        </div>

        <img
          src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-22.svg"
          alt="toggle"
          className="h-6 w-[25px]"
        />
      </div>

      {/* TRENDING MODE */}
      {isTrending ? (
        <div className="h-0 overflow-hidden mt-8">
          {/* Cards */}
          <ul className="flex gap-4 overflow-auto px-4">
            {trendingCards.map((card, index) => (
              <li key={index}>
                <a
                  href={card.href}
                  className="flex flex-col h-[340px] w-[252px]"
                >
                  <span
                    className={`flex items-center justify-center h-[292px] rounded-t-3xl ${card.bgColor}`}
                  >
                    <img
                      src={card.imageSrc}
                      title={card.imageTitle}
                      className="h-[228px] w-[154px] shadow-lg rounded"
                    />
                  </span>

                  <span className="bg-zinc-100 text-center text-base py-3 rounded-b-3xl">
                    {card.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Links */}
          <ul className="mt-8 px-4">
            {trendingLinks.map((link, index) => (
              <li key={index} className="mb-6">
                <a href={link.href} className="font-semibold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        /* NORMAL MENU MODE */
        <ul className="h-0 overflow-hidden pl-0">
          {sections.map((section, sectionIndex) => (
            <li key={sectionIndex} className="border-b pb-6 mx-4 mt-6">
              {/* Section title */}
              <div className="ml-8">
                {section.titleHref ? (
                  <a href={section.titleHref} className="font-semibold">
                    {section.title}
                  </a>
                ) : (
                  <span className="font-semibold">{section.title}</span>
                )}
              </div>

              {/* Section items */}
              <ul className="ml-8">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="mt-5">
                    {item.href ? (
                      <a href={item.href}>{item.label}</a>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}

          {/* Bottom actions */}
          {bottomActions.length > 0 && (
            <li className="mt-6">
              <ul>
                {bottomActions.map((action, index) => (
                  <li key={index} className={`ml-4 ${action.extraClass || ""}`}>
                    <a
                      href={action.href}
                      className="flex items-center bg-zinc-100 h-10 px-3 rounded-full font-semibold"
                    >
                      <img
                        src={action.iconSrc}
                        alt="icon"
                        className="h-6 w-[25px]"
                      />
                      <span className="mx-2">{action.label}</span>
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