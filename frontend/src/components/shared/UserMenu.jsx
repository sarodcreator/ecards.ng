export const UserMenu = () => {
  return (
    <div className="bg-white box-border caret-transparent hidden mr-2">
      <div className="static box-border caret-transparent md:relative">
        <div className="relative box-border caret-transparent">
          <img
            src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/image-1.gif"
            className="text-transparent font-bold aspect-[auto_160_/_160] box-border hidden h-10 leading-[30px] max-w-full text-center w-10 rounded-[100%]"
          />
          <span className="text-white font-bold bg-emerald-500 box-border caret-transparent inline-block h-10 leading-10 text-center w-10 rounded-[100%]"></span>
          <img
            src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-8.svg"
            alt="Icon"
            className="absolute box-border caret-transparent hidden mr-2 rounded-[40px] left-7 top-0"
          />
        </div>
        <div className="absolute box-border caret-transparent hidden min-w-[200px] z-[300] top-14 bottom-0 inset-x-0 md:left-auto md:inset-y-auto">
          <ul className="bg-white shadow-none box-border caret-transparent list-item border-zinc-800 mt-0 p-8 rounded-t-none rounded-b-3xl border-0 border-none md:shadow-[rgba(48,51,48,0.04)_0px_10px_40px_-12px] md:border md:border-gray-200 md:mt-5 md:rounded-t-3xl md:border-solid">
            <li className="box-border caret-transparent list-item md:hidden">
              <a className="font-semibold box-border caret-transparent block leading-[30px] text-nowrap py-3">
                <img
                  src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-9.svg"
                  alt="Icon"
                  className="relative box-border caret-transparent inline-block h-[26px] text-nowrap w-[26px] mr-2 -top-px"
                />
                <span className="text-violet-500 box-border caret-transparent text-nowrap">
                  Go Premium
                </span>
              </a>
            </li>
            <li className="box-border caret-transparent">
              <a
                href="/members/favorites"
                className="font-semibold box-border caret-transparent block leading-[30px] text-nowrap py-3"
              >
                <img
                  src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-10.svg"
                  alt="Icon"
                  className="relative box-border caret-transparent inline-block h-[26px] text-nowrap w-[26px] mr-2 -top-px"
                />
                <span className="box-border caret-transparent text-nowrap">
                  {" "}
                  My favorites
                </span>
              </a>
            </li>
            <li className="box-border caret-transparent">
              <a
                href="/members/saved"
                className="font-semibold box-border caret-transparent block leading-[30px] text-nowrap py-3"
              >
                <img
                  src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-11.svg"
                  alt="Icon"
                  className="relative box-border caret-transparent inline-block h-[26px] text-nowrap w-[26px] mr-2 -top-px"
                />
                <span className="box-border caret-transparent text-nowrap">
                  Saved drafts
                </span>
              </a>
            </li>
            <li className="box-border caret-transparent">
              <a
                href="/members/myevents"
                className="font-semibold box-border caret-transparent block leading-[30px] text-nowrap py-3"
              >
                <img
                  src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-12.svg"
                  alt="Icon"
                  className="relative box-border caret-transparent inline-block h-[26px] text-nowrap w-[26px] mr-2 -top-px"
                />
                <span className="box-border caret-transparent text-nowrap">
                  {" "}
                  My events
                </span>
              </a>
            </li>
            <li className="box-border caret-transparent">
              <a
                href="/members/purchases"
                className="font-semibold box-border caret-transparent block leading-[30px] text-nowrap py-3"
              >
                <img
                  src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-13.svg"
                  alt="Icon"
                  className="relative box-border caret-transparent inline-block h-[26px] text-nowrap w-[26px] mr-2 -top-px"
                />
                <span className="box-border caret-transparent text-nowrap">
                  {" "}
                  Purchases
                </span>
              </a>
            </li>
            <li className="box-border caret-transparent">
              <a
                href="/members/account/settings"
                className="font-semibold box-border caret-transparent block leading-[30px] text-nowrap py-3"
              >
                <img
                  src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-14.svg"
                  alt="Icon"
                  className="relative box-border caret-transparent inline-block h-[26px] text-nowrap w-[26px] mr-2 -top-px"
                />
                <span className="box-border caret-transparent text-nowrap">
                  {" "}
                  Settings
                </span>
              </a>
            </li>
            <li className="box-border caret-transparent">
              <a className="font-semibold box-border caret-transparent block leading-[30px] text-nowrap py-3">
                <img
                  src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-15.svg"
                  alt="Icon"
                  className="relative box-border caret-transparent inline-block h-[26px] text-nowrap w-[26px] mr-2 -top-px"
                />
                <span className="box-border caret-transparent text-nowrap">
                  {" "}
                  Log out
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
