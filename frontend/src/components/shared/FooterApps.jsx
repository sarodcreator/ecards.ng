export const FooterApps = () => {
  return (
    <div className="box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] gap-y-2 py-2">
      <a
        href="https://itunes.apple.com/us/app/greetings-island-card-maker/id1329922018"
        className="text-emerald-500 box-border caret-transparent block h-10 min-h-[auto] min-w-[auto] md:h-8"
      >
        <img
          src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/AppStore_badge.png"
          className="text-transparent text-[0px] aspect-[auto_96_/_32] box-border inline leading-[0px] max-w-full w-24"
        />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.greetingsisland.sam"
        className="text-emerald-500 box-border caret-transparent block h-10 min-h-[auto] min-w-[auto] md:h-8"
      >
        <img
          src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/Google_Play_badge.png"
          className="text-transparent text-[0px] aspect-[auto_108_/_32] box-border inline leading-[0px] max-w-full w-[108px]"
        />
      </a>
    </div>
  );
};
