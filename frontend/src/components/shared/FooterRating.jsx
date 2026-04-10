export const FooterRating = () => {
  return (
    <a
      href="https://www.trustpilot.com/review/greetingsisland.com"
      className="text-emerald-500 items-center bg-white box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4 mb-6 px-8 py-6 rounded-3xl md:gap-x-3 md:flex-row md:gap-y-3 md:px-6 md:py-4"
    >
      <div className="text-zinc-800 text-[21px] font-medium box-border caret-transparent leading-[29.4px] min-h-[auto] min-w-[auto]">
        <span className="box-border caret-transparent mr-3">Excellent</span>
        <span className="box-border caret-transparent">4.8</span>
      </div>
      <div className="text-zinc-800 box-border caret-transparent min-h-[auto] min-w-[auto] text-center">
        <img
          src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-56.svg"
          alt="Icon"
          className="box-border caret-transparent inline h-[23px] w-[121px] scale-125 md:transform-none"
        />
        <div className="box-border caret-transparent block ml-0 mt-2 md:inline md:ml-2">
          Based on{" "}
          <span className="text-sm font-semibold box-border caret-transparent tracking-[0.7px] leading-[21px]">
            1.5K+ reviews
          </span>
        </div>
      </div>
      <div className="text-zinc-800 box-border caret-transparent min-h-[auto] min-w-[auto]">
        <img
          src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-57.svg"
          alt="Icon"
          className="box-border caret-transparent inline h-[23px] w-[95px]"
        />
      </div>
    </a>
  );
};
