export const MobileAIPanel = () => {
  return (
    <div className="absolute bg-white border-b-zinc-800 border-l-zinc-800 border-r-zinc-800 border-t-gray-200 box-border caret-transparent hidden pt-4 pb-6 px-4 border-t bottom-0 inset-x-0">
      <p className="box-border caret-transparent text-center mb-2">
        Create a card with AI
      </p>
      <a
        href="#"
        className="text-base items-center bg-[linear-gradient(84deg,rgb(73,104,208)_0.2%,rgb(127,73,208)_32.02%,rgb(255,89,133)_91.4%)] box-border caret-transparent gap-x-2 flex h-12 justify-center leading-[48px] gap-y-2 w-full mb-3 px-4 rounded-[40px]"
      >
        <img
          src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-30.svg"
          alt="Icon"
          className="box-border caret-transparent h-6 w-6"
        />
        <span className="text-white box-border caret-transparent block mx-2">
          Magic card
        </span>
      </a>
      <div className="items-center box-border caret-transparent gap-x-1 flex flex-col gap-y-1">
        <span className="box-border caret-transparent block">
          Compose a beautiful message
        </span>
        <a
          href="/wishes-generator"
          className="items-center box-border caret-transparent gap-x-2 flex gap-y-2"
        >
          <img
            src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-31.svg"
            alt="Icon"
            className="box-border caret-transparent h-6 w-6"
          />
          <span className="bg-clip-text bg-[linear-gradient(85deg,rgb(73,104,208)_-16.26%,rgb(141,81,231)_19.11%,rgb(255,89,133)_85.15%)] box-border caret-transparent block">
            Magic wish
          </span>
        </a>
      </div>
    </div>
  );
};
