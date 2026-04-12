export const ShareFeature = (props) => {
  const { iconSrc, title, description } = props;
  return (
    <div className="box-border caret-transparent max-w-[380px] min-h-[auto] min-w-[auto] text-center w-full md:max-w-none md:w-[33.33%]">
      <img
        src={iconSrc}
        alt="Icon"
        className="box-border caret-transparent inline h-[41px] w-[41px]"
      />
      <div className="text-[21px] font-medium box-border caret-transparent leading-[29.4px] mt-6 mb-4">
        {title}
      </div>
      <div className="box-border caret-transparent">{description}</div>
    </div>
  );
};
