export const FooterCopyright = () => {
  return (
    <div className="box-border caret-transparent gap-x-4 flex flex-col justify-normal min-h-[auto] min-w-[auto] gap-y-4 py-6 md:flex-row md:justify-center md:pb-10">
      <div className="items-center box-border caret-transparent flex flex-wrap justify-center min-h-[auto] min-w-[auto] md:flex-nowrap">
        <span className="text-neutral-500 text-xs font-medium box-border caret-transparent block tracking-[0.36px] leading-[18px] min-h-[auto] min-w-[auto] text-center md:text-sm md:font-normal md:tracking-[0.4px] md:leading-[21px]">
          ©Greetings Island 2026. All rights reserved.
        </span>
      </div>
      <div className="items-center box-border caret-transparent gap-x-4 flex flex-wrap justify-center min-h-[auto] min-w-[auto] gap-y-4 md:flex-nowrap">
        <a
          href="/privacy?culture=en"
          className="text-neutral-500 text-xs font-medium box-border caret-transparent block tracking-[0.36px] leading-[18px] min-h-[auto] min-w-[auto] md:text-sm md:font-normal md:tracking-[0.4px] md:leading-[21px]"
        >
          Privacy policy
        </a>
        <a
          href="/terms?culture=en"
          className="text-neutral-500 text-xs font-medium box-border caret-transparent block tracking-[0.36px] leading-[18px] min-h-[auto] min-w-[auto] md:text-sm md:font-normal md:tracking-[0.4px] md:leading-[21px]"
        >
          Terms of use
        </a>
      </div>
      <div className="items-center box-border caret-transparent gap-x-4 flex flex-wrap justify-center min-h-[auto] min-w-[auto] gap-y-4 md:flex-nowrap">
        <a className="text-neutral-500 text-xs font-medium box-border caret-transparent block tracking-[0.36px] leading-[18px] min-h-[auto] min-w-[auto] md:text-sm md:font-normal md:tracking-[0.4px] md:leading-[21px]">
          Your Privacy Choices
        </a>
        <a
          href="/sitemap"
          className="text-neutral-500 text-xs font-medium box-border caret-transparent block tracking-[0.36px] leading-[18px] min-h-[auto] min-w-[auto] md:text-sm md:font-normal md:tracking-[0.4px] md:leading-[21px]"
        >
          Site map
        </a>
      </div>
    </div>
  );
};
