import React from "react";

export const MatchCard = (props) => {
  const textSection = (
    <div
      className={`box-border caret-transparent flex flex-col h-auto max-w-[600px] min-h-[auto] min-w-[auto] order-2 w-[337.5px] mt-6 mb-8 px-4 md:h-[507px] md:max-w-none md:order-1 md:w-[568px] md:my-0 md:px-12`}
    >
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] w-full my-auto md:w-auto">
        <h3 className="text-[32px] font-medium box-border caret-transparent leading-[41.6px] mb-6 md:text-4xl md:leading-[46.8px]">
          {props.title}
        </h3>
        <div className="box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2">
          {props.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="items-center bg-zinc-100 box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full pl-4 pr-2 py-2 rounded-3xl md:w-[48%]"
            >
              <div className="font-medium box-border caret-transparent min-h-[auto] min-w-[auto]">
                {link.text}
              </div>
              <div className={link.iconContainerClass}>
                <img
                  src={link.iconSrc}
                  alt="Icon"
                  className="box-border caret-transparent h-5 w-5"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  const imageSection = (
    <div className={props.imageSideClass}>
      {props.images.map((image, index) =>
        image.containerClass ? (
          <div key={index} className={image.containerClass}>
            <img
              alt={image.alt}
              src={image.src}
              sizes={image.sizes}
              className={image.imgClass}
            />
          </div>
        ) : (
          <img
            key={index}
            alt={image.alt}
            src={image.src}
            sizes={image.sizes}
            className={image.imgClass}
          />
        )
      )}
      <img src={props.iconSrc} alt="Icon" className={props.iconClass} />
    </div>
  );

  return (
    <div className={`box-border caret-transparent flex ${props.outerClass}`}>
      <div className={`${props.innerClass} ${props.contentSideClass}`}>
        {props.imageFirst ? (
          <>
            {imageSection}
            {textSection}
          </>
        ) : (
          <>
            {textSection}
            {imageSection}
          </>
        )}
      </div>
    </div>
  );
};