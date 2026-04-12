import React from "react";

const FooterCategory = ({ title, links = [], wrapperClassName }) => {
  const renderLinks = () =>
    links.map((link) => (
      <a
        key={link.href}
        href={link.href}
        className="text-sm font-medium inline-flex items-center tracking-[0.7px] leading-[21px] md:text-xs md:tracking-[0.36px] md:leading-[18px]"
      >
        {link.label}
      </a>
    ));

  const Header = () => (
    <div>
      {/* Mobile Button */}
      <button className="flex justify-between items-center w-full py-3 md:hidden">
        <p className="text-zinc-800 text-sm font-semibold tracking-[0.7px] leading-[21px]">
          {title}
        </p>
        <img
          src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-58.svg"
          alt="Toggle"
          className="h-6 w-6"
        />
      </button>

      {/* Desktop Title */}
      <p className="hidden md:block text-sm font-semibold tracking-[0.7px] leading-[21px]">
        {title}
      </p>
    </div>
  );

  const Links = () => (
    <div className="hidden md:flex flex-col gap-3">
      {renderLinks()}
    </div>
  );

  const content = (
    <div className="flex flex-col border-b border-gray-200 md:border-none md:gap-5">
      <Header />
      <Links />
    </div>
  );

  return wrapperClassName ? (
    <div className={wrapperClassName}>{content}</div>
  ) : (
    content
  );
};

export default FooterCategory;