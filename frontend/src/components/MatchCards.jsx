import PropTypes from "prop-types";

const TextSection = ({ title, links = [] }) => (
  <div className="box-border caret-transparent flex flex-col h-auto max-w-[600px] order-2 w-[337.5px] mt-6 mb-8 px-4 md:h-[507px] md:order-1 md:w-[568px] md:my-0 md:px-12">
    <div className="w-full my-auto md:w-auto">
      <h3 className="text-[32px] font-medium leading-[41.6px] mb-6 md:text-4xl md:leading-[46.8px]">
        {title}
      </h3>

      <div className="flex flex-wrap gap-x-2 gap-y-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="flex justify-between items-center w-full pl-4 pr-2 py-2 rounded-3xl bg-zinc-100 md:w-[48%]"
          >
            <div className="font-medium">{link.text}</div>
            <div className={link.iconContainerClass}>
              <img src={link.iconSrc} alt="icon" className="h-5 w-5" />
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
);

const ImageSection = ({ images = [], iconSrc, iconClass, imageSideClass }) => (
  <div className={imageSideClass}>
    {images.map((image, index) =>
      image.containerClass ? (
        <div key={index} className={image.containerClass}>
          <img {...image} className={image.imgClass} />
        </div>
      ) : (
        <img key={index} {...image} className={image.imgClass} />
      )
    )}
    <img src={iconSrc} alt="icon" className={iconClass} />
  </div>
);

export const MatchCard = ({
  outerClass = "",
  innerClass = "",
  contentSideClass = "",
  imageSideClass = "",
  imageFirst = false,
  title,
  links,
  images,
  iconSrc,
  iconClass,
}) => {
  return (
    <div className={`flex ${outerClass}`}>
      <div className={`${innerClass} ${contentSideClass}`}>
        {imageFirst ? (
          <>
            <ImageSection
              images={images}
              iconSrc={iconSrc}
              iconClass={iconClass}
              imageSideClass={imageSideClass}
            />
            <TextSection title={title} links={links} />
          </>
        ) : (
          <>
            <TextSection title={title} links={links} />
            <ImageSection
              images={images}
              iconSrc={iconSrc}
              iconClass={iconClass}
              imageSideClass={imageSideClass}
            />
          </>
        )}
      </div>
    </div>
  );
};