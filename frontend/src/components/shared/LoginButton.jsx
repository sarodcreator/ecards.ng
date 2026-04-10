export const LoginButton = () => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] mr-3">
      <div className="font-semibold items-center bg-zinc-100 box-border caret-transparent hidden h-10 justify-center leading-10 px-3 rounded-[40px] md:block">
        Log in
      </div>
      <div className="box-border caret-transparent block md:hidden">
        <img
          src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-16.svg"
          alt="Icon"
          className="relative bg-no-repeat box-border caret-transparent inline-block h-10 w-10 mr-[5px] top-0"
        />
      </div>
    </div>
  );
};
