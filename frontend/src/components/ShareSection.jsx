export const ShareSection = (props) => {
  const { variant,title, subtitle, children } = props;

  if (variant === "text-center mb-12 md:mb-16") {
    return (
      <div className={`box-border caret-transparent ${variant}`}>
        <div className="box-border caret-transparent px-6">
          <h2 className="text-4xl font-medium box-border caret-transparent leading-[43.2px] mt-12 mb-4 md:text-[47px] md:leading-[56.4px] md:mt-9">
            {title}
          </h2>
          {subtitle && (<div className="box-border caret-transparent">{subtitle}</div>)}
        </div>
      </div>
    );
  }

  return (
    <div className={`box-border caret-transparent ${variant || ''}`}>
      {children}
    </div>
  );
};
