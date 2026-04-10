export const MobileSearchOverlay = () => {
  return (
    <div className="fixed bg-white box-border caret-transparent hidden top-0 inset-x-0">
      <a className="absolute font-normal box-border caret-transparent block tracking-[0.4px] z-[1] p-4 right-0">
        Cancel
      </a>
      <form className="font-normal box-border caret-transparent tracking-[0.4px] px-4 py-2">
        <button
          type="submit"
          className="absolute text-black caret-transparent block tracking-[normal] text-center"
        ></button>
        <div className="absolute box-border caret-transparent hidden z-10 right-[100px] top-[15px] md:right-4 md:top-2">
          <img
            src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-6.svg"
            alt="Icon"
            className="box-border caret-transparent inline h-4 w-4"
          />
        </div>
        <div className="relative box-border caret-transparent">
          <input
            type="text"
            name="term"
            placeholder="Search designs"
            className="appearance-none text-neutral-500 box-border caret-transparent h-10 tracking-[normal] max-w-full text-start text-nowrap align-top w-full border border-stone-300 mb-0.5 px-2.5 py-[5px] rounded-[5px] border-solid after:accent-auto after:border-b-neutral-500 after:border-t-neutral-500 after:box-border after:caret-transparent after:text-neutral-500 after:inline-block after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21px] after:list-outside after:list-none after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:text-nowrap after:visible after:border-t-4 after:border-x-transparent after:border-x-4 after:border-separate after:font-generalsans"
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
                    className="font-semibold items-center bg-zinc-100 box-border caret-transparent flex h-10 justify-center tracking-[0.7px] leading-10 px-3 rounded-[40px]"
                  >
                    <span className="box-border caret-transparent block mx-2">
                      Baby shower
                    </span>
                  </a>
                  <a
                    href="/invitations/birthday"
                    className="font-semibold items-center bg-zinc-100 box-border caret-transparent flex h-10 justify-center tracking-[0.7px] leading-10 px-3 rounded-[40px]"
                  >
                    <span className="box-border caret-transparent block mx-2">
                      Birthday
                    </span>
                  </a>
                  <a
                    href="/invitations/wedding"
                    className="font-semibold items-center bg-zinc-100 box-border caret-transparent flex h-10 justify-center tracking-[0.7px] leading-10 px-3 rounded-[40px]"
                  >
                    <span className="box-border caret-transparent block mx-2">
                      Wedding
                    </span>
                  </a>
                  <a
                    href="/invitations/party"
                    className="font-semibold items-center bg-zinc-100 box-border caret-transparent flex h-10 justify-center tracking-[0.7px] leading-10 px-3 rounded-[40px]"
                  >
                    <span className="box-border caret-transparent block mx-2">
                      Party
                    </span>
                  </a>
                  <a
                    href="/invitations/upload-your-own"
                    className="font-semibold items-center bg-zinc-100 box-border caret-transparent flex h-10 justify-center tracking-[0.7px] leading-10 px-3 rounded-[40px]"
                  >
                    <span className="box-border caret-transparent block mx-2">
                      Upload your own
                    </span>
                  </a>
                  <a
                    href="/cards/thank-you"
                    className="font-semibold items-center bg-zinc-100 box-border caret-transparent flex h-10 justify-center tracking-[0.7px] leading-10 px-3 rounded-[40px]"
                  >
                    <span className="box-border caret-transparent block mx-2">
                      Thank you cards
                    </span>
                  </a>
                  <a
                    href="/cards/events-and-occasions/new-baby"
                    className="font-semibold items-center bg-zinc-100 box-border caret-transparent flex h-10 justify-center tracking-[0.7px] leading-10 px-3 rounded-[40px]"
                  >
                    <span className="box-border caret-transparent block mx-2">
                      New baby cards
                    </span>
                  </a>
                  <a
                    href="/cards/birthday"
                    className="font-semibold items-center bg-zinc-100 box-border caret-transparent flex h-10 justify-center tracking-[0.7px] leading-10 px-3 rounded-[40px]"
                  >
                    <span className="box-border caret-transparent block mx-2">
                      Birthday cards
                    </span>
                  </a>
                  <a
                    href="/cards/holidays/valentines-day"
                    className="font-semibold items-center bg-zinc-100 box-border caret-transparent flex h-10 justify-center tracking-[0.7px] leading-10 px-3 rounded-[40px]"
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
      <hr className="box-border caret-transparent opacity-25" />
    </div>
  );
};
