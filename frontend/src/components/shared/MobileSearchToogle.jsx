const MobileSearchToggle = () => {
  return (
    <div className="box-border caret-transparent block min-h-[auto] min-w-[auto] md:hidden md:min-h-0 md:min-w-0">
      <div className="box-border caret-transparent">
        <img
          src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-17.svg"
          alt="Icon"
          className="box-border caret-transparent inline h-6 w-[25px]"
        />
      </div>
      <div className="box-border caret-transparent hidden">
        <img
          src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-18.svg"
          alt="Icon"
          className="box-border caret-transparent inline h-6 w-[25px]"
        />
      </div>
    </div>
  );
};

export default MobileSearchToggle;