export const MagicCardBanner = () => {
  return (
    <div className="box-border caret-transparent mx-4">
      <div className="relative text-white items-center bg-[linear-gradient(80deg,rgb(73,104,208)_39.38%,rgb(141,81,231)_58.9%,rgb(255,89,133)_95.35%)] box-border caret-transparent flex flex-col-reverse max-w-[1172px] text-center overflow-hidden mb-7 mx-0 rounded-xl md:flex-row md:mx-auto">
        <div className="self-end aspect-[466_/_220] bg-[url('https://www.greetingsisland.com/images/theme/banners/magic-cards-desktop.png?auto=format,compress')] bg-no-repeat bg-contain box-border caret-transparent hidden shrink min-h-0 min-w-0 w-[280px] bg-bottom mx-5 md:block md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:w-[435.2px]"></div>
        <div className="items-center box-border caret-transparent flex flex-col grow justify-center min-h-[auto] min-w-[auto] p-4 md:py-0">
          <div className="text-[32px] font-medium box-border caret-transparent leading-[41.6px] min-h-[auto] min-w-[auto] mb-2 md:text-4xl md:leading-[46.8px]">
            Magic card
          </div>
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] mb-4">
            Describe your card and style, and AI does the rest.
          </div>
          <div className="text-zinc-800 font-medium items-center bg-white box-border caret-transparent flex h-12 justify-center leading-[48px] min-h-[auto] min-w-[auto] px-6 rounded-[40px]">
            Start Magic card
          </div>
        </div>
      </div>
    </div>
  );
};
