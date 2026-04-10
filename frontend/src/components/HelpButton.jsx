import React from 'react';

const HelpButton = () => {
  return (
    <div className="fixed text-sm items-center bg-white shadow-[rgba(0,0,0,0.1)_0px_1px_10px_0px] box-border caret-transparent flex h-[50px] justify-center leading-[21px] w-[50px] z-[1000] rounded-3xl right-2.5 bottom-2.5 md:h-11 md:w-[120px] md:right-5 md:bottom-[15px]">
      <label className="text-black box-border caret-transparent hidden h-6 min-h-0 min-w-0 text-center w-6 rounded-[15px] border-2 border-solid md:block md:h-auto md:min-h-[auto] md:min-w-[auto] md:text-left md:w-auto md:rounded-none md:border-0 md:border-none">
        Need Help?
      </label>
      <label className="text-black font-bold box-border caret-transparent block h-6 min-h-[auto] min-w-[auto] text-center w-6 rounded-[15px] border-2 border-solid md:hidden md:h-auto md:min-h-0 md:min-w-0 md:text-left md:w-auto md:rounded-none md:border-0 md:border-none">
        ?
      </label>
    </div>
  );
};

export default HelpButton;
