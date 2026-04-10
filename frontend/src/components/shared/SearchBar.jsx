export const SearchBar = () => {
  return (
    <div className="box-border caret-transparent hidden basis-[0%] grow justify-center pb-[17px]">
      <form className="relative items-stretch box-border caret-transparent flex-wrap max-w-[648px] w-full">
        <button
          type="submit"
          className="absolute text-black font-normal bg-transparent bg-[url('https://static.greetingsisland.com/images/theme/search-icon-dark.svg')] bg-no-repeat caret-transparent block h-[30px] tracking-[normal] text-center w-[30px] z-[1] bg-center left-1.5 top-[5px]"
        ></button>
        <div className="absolute box-border caret-transparent hidden z-10 -ml-px right-4 top-2">
          <img
            src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-6.svg"
            alt="Icon"
            className="box-border caret-transparent inline h-4 w-4"
          />
        </div>
        <div className="relative box-border caret-transparent flex justify-center -ml-px">
          <input
            type="text"
            name="term"
            placeholder="Search designs"
            className="appearance-none text-neutral-500 text-base font-normal box-border caret-transparent block h-10 tracking-[normal] leading-6 max-w-full text-start text-nowrap align-top w-full border border-emerald-500 pl-11 pr-2.5 py-[5px] rounded-[80px] border-solid after:accent-auto after:border-b-neutral-500 after:border-t-neutral-500 after:box-border after:caret-transparent after:text-neutral-500 after:inline-block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:text-nowrap after:visible after:border-t-4 after:border-x-transparent after:border-x-4 after:border-separate after:font-generalsans"
          />
          <div className="absolute bg-white shadow-none box-border caret-transparent hidden w-full border-zinc-800 pt-4 px-0 rounded-none border-0 border-none left-0 top-[45px] md:shadow-[rgba(32,40,45,0.12)_0px_16px_32px_-12px] md:border md:border-gray-200 md:px-1 md:rounded-[20px] md:border-solid">
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent mx-0 my-3 md:mt-0 md:mb-6 md:mx-2">
                <div className="text-neutral-500 text-xs font-semibold box-border caret-transparent hidden tracking-[0.6px] leading-[18px] pt-2 pb-4">
                  Recent
                </div>
                <ul className="box-border caret-transparent list-item pl-0">
                  <div className="box-border caret-transparent"></div>
                </ul>
              </div>
              <div className="box-border caret-transparent mx-0 my-3 md:mx-2 md:my-6">
                <div className="text-neutral-500 text-xs font-semibold box-border caret-transparent tracking-[0.6px] leading-[18px] pt-2 pb-4">
                  Popular categories
                </div>
                <div className="box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2">
                  <a
                    href="/invitations/baby-shower"
                    className="font-semibold items-center bg-zinc-100 box-border caret-transparent flex h-10 justify-center leading-10 px-3 rounded-[40px]"
                  >
                    <span className="box-border caret-transparent block mx-2">
                      Baby shower
                    </span>
                  </a>
                  <a
                    href="/invitations/birthday"
                    className="font-semibold items-center bg-zinc-100 box-border caret-transparent flex h-10 justify-center leading-10 px-3 rounded-[40px]"
                  >
                    <span className="box-border caret-transparent block mx-2">
                      Birthday
                    </span>
                  </a>
                  <a
                    href="/invitations/wedding"
                    className="font-semibold items-center bg-zinc-100 box-border caret-transparent flex h-10 justify-center leading-10 px-3 rounded-[40px]"
                  >
                    <span className="box-border caret-transparent block mx-2">
                      Wedding
                    </span>
                  </a>
                  <a
                    href="/invitations/party"
                    className="font-semibold items-center bg-zinc-100 box-border caret-transparent flex h-10 justify-center leading-10 px-3 rounded-[40px]"
                  >
                    <span className="box-border caret-transparent block mx-2">
                      Party
                    </span>
                  </a>
                  <a
                    href="/invitations/upload-your-own"
                    className="font-semibold items-center bg-zinc-100 box-border caret-transparent flex h-10 justify-center leading-10 px-3 rounded-[40px]"
                  >
                    <span className="box-border caret-transparent block mx-2">
                      Upload your own
                    </span>
                  </a>
                  <a
                    href="/cards/thank-you"
                    className="font-semibold items-center bg-zinc-100 box-border caret-transparent flex h-10 justify-center leading-10 px-3 rounded-[40px]"
                  >
                    <span className="box-border caret-transparent block mx-2">
                      Thank you cards
                    </span>
                  </a>
                  <a
                    href="/cards/events-and-occasions/new-baby"
                    className="font-semibold items-center bg-zinc-100 box-border caret-transparent flex h-10 justify-center leading-10 px-3 rounded-[40px]"
                  >
                    <span className="box-border caret-transparent block mx-2">
                      New baby cards
                    </span>
                  </a>
                  <a
                    href="/cards/birthday"
                    className="font-semibold items-center bg-zinc-100 box-border caret-transparent flex h-10 justify-center leading-10 px-3 rounded-[40px]"
                  >
                    <span className="box-border caret-transparent block mx-2">
                      Birthday cards
                    </span>
                  </a>
                  <a
                    href="/cards/holidays/valentines-day"
                    className="font-semibold items-center bg-zinc-100 box-border caret-transparent flex h-10 justify-center leading-10 px-3 rounded-[40px]"
                  >
                    <span className="box-border caret-transparent block mx-2">
                      Valentines day cards
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent hidden">
              <ul className="bg-white box-border caret-transparent list-item pl-0">
                <div className="box-border caret-transparent"></div>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
