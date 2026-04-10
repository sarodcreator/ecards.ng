export const CategoryCard = ({
  href,
  imageUrl,
  imageAlt,
  label,
  cardClassName = "",
  innerDivClassName = "",
  labelClassName = "",
}) => {
  return (
    <a
      href={href}
      className={`relative text-emerald-500 block h-[254px] text-center w-full px-3 py-4 rounded-xl ${cardClassName}`}
    >
      <div
        className={`relative h-[184px] w-[126px] z-[2] mx-auto before:bg-zinc-400 before:block before:absolute before:rotate-[-4deg] before:z-[-1] before:left-[3px] before:right-2.5 before:-top-1 ${innerDivClassName}`}
      >
        <img
          alt={imageAlt}
          src={imageUrl}
          sizes="326px"
          className="relative h-[184px] w-[126px] max-w-full border border-gray-200 rounded"
        />
      </div>

      <div
        className={`text-zinc-800 text-sm font-semibold tracking-[0.7px] mt-4 ${labelClassName}`}
      >
        {label}
      </div>
    </a>
  );
};