export const CookieBanner = () => {
  return (
    <div className="box-border caret-transparent">
      <div
        role="dialog"
        aria-label="Cookie consent dialog"
        className="fixed text-black text-sm items-center bg-white shadow-[rgba(0,0,0,0.35)_1px_2px_8px_0px] box-border caret-transparent flex flex-col justify-around leading-[21px] max-h-[85%] w-full z-[999997] overflow-auto p-[15px] bottom-0 inset-x-0 font-open_sans md:pl-[50px] md:pr-[60px] md:py-3"
      >
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
          <div className="absolute items-start box-border caret-transparent flex justify-end right-[15px] top-[15px]">
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto]"></div>
          </div>
          <div className="box-border caret-transparent flex flex-col justify-between w-full md:flex-row">
            <div className="box-border caret-transparent flex flex-col justify-center max-w-full min-h-[auto] min-w-[auto] w-full md:max-w-[65%] md:w-auto">
              <div className="text-lg font-semibold box-border caret-transparent tracking-[0.4px] leading-[23.4px] min-h-[auto] min-w-[auto] z-[999998] mr-[50px] mb-[9px] pt-[7px]">
                This website uses cookies
              </div>
              <div className="text-xs box-border caret-transparent tracking-[0.3px] leading-[19.8px] min-h-[auto] min-w-[auto]">
                <span className="box-border caret-transparent">
                  We use cookies to personalise content, ads and to analyse our
                  traffic. We also share information about your use of our site
                  with our advertising and analytics partners who may combine it
                  with other information that you’ve provided to them or that
                  they’ve collected from your use of their services.
                </span>
                <a
                  aria-label="Privacy Policy, opens a new window"
                  href="https://www.greetingsisland.com/privacy"
                  className="text-white box-border caret-transparent"
                >
                  Privacy Policy
                </a>
              </div>
              <div
                role="button"
                className="text-emerald-700 font-bold box-border caret-transparent min-h-[auto] min-w-[auto] uppercase mb-3"
              >
                <span className="box-border caret-transparent">
                  Show all partners
                </span>
                <span className="box-border caret-transparent">(1702) →</span>
              </div>
              <div
                role="button"
                className="text-xs font-bold box-border caret-transparent tracking-[0.4px] leading-[18px] min-h-[auto] min-w-[auto] uppercase mb-[3px] py-0.5"
              >
                <div className="box-border caret-transparent inline opacity-85">
                  <img
                    src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-69.svg"
                    alt="Icon"
                    className="relative box-border caret-transparent inline h-[15px] align-baseline w-[15px] mr-[5px] top-[3px]"
                  />
                  <span className="box-border caret-transparent">
                    Show details
                  </span>
                  <span className="box-border caret-transparent hidden">
                    Hide details
                  </span>
                </div>
              </div>
            </div>
            <div className="items-center box-border caret-transparent flex flex-col max-w-full min-h-[auto] min-w-[33%] w-full md:flex-row md:max-w-none md:w-auto">
              <div className="font-bold box-border caret-transparent flex flex-col flex-wrap justify-center min-h-[auto] min-w-[auto] w-full md:flex-nowrap">
                <div
                  role="button"
                  className="text-white text-xs bg-emerald-700 box-border caret-transparent hidden grow tracking-[0.4px] leading-[38.4px] max-w-full min-w-[103px] text-center uppercase text-nowrap mx-[7px] my-[5px] px-[17px] rounded-[20px] md:max-w-none"
                >
                  Save &amp; Close
                </div>
                <div
                  role="button"
                  className="text-white text-xs bg-emerald-700 box-border caret-transparent grow tracking-[0.4px] leading-[38.4px] max-w-full min-h-[auto] min-w-[103px] text-center uppercase text-nowrap w-full mt-[5px] mb-2 mx-[7px] px-[17px] md:max-w-none"
                >
                  Accept all
                </div>
                <div
                  role="button"
                  className="text-xs box-border caret-transparent grow tracking-[0.4px] leading-9 max-w-full min-h-[auto] min-w-[103px] text-center underline uppercase text-nowrap w-full border mt-[5px] mb-2 mx-[7px] px-[17px] border-solid border-white md:max-w-none"
                >
                  Decline all
                </div>
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent w-full">
            <div className="box-border caret-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
