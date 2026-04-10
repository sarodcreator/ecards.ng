export type CategoryCardProps = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  label: string;
  cardClassName: string;
  innerDivClassName?: string;
  labelClassName?: string;
};

export const CategoryCard = (props: CategoryCardProps) => {
  return (
    <a
      href={props.href}
      className={`relative text-emerald-500 box-border caret-transparent block h-[254px] min-h-[auto] min-w-[auto] text-center w-full px-3 py-4 rounded-xl ${props.cardClassName}`}
    >
      <div
        className={`relative box-border caret-transparent h-[184px] w-[126px] z-[2] mx-auto before:accent-auto before:bg-zinc-400 before:bg-no-repeat before:box-border before:caret-transparent before:text-emerald-500 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-2.5 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:rotate-[-4.000001701562398deg] before:visible before:z-[-1] before:rounded-tr before:border-separate before:left-[3px] before:right-2.5 before:-top-1 before:font-generalsans${props.innerDivClassName ? ` ${props.innerDivClassName}` : ""}`}
      >
        <img
          alt={props.imageAlt}
          src={props.imageUrl}
          sizes="326px"
          className="relative text-transparent text-[0px] box-border inline h-[184px] leading-[0px] max-w-full w-[126px] z-[2] border border-gray-200 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
        />
      </div>
      <div
        className={`text-zinc-800 text-sm font-semibold box-border caret-transparent tracking-[0.7px] leading-[21px] mt-4${props.labelClassName ? ` ${props.labelClassName}` : ""}`}
      >
        {props.label}
      </div>
    </a>
  );
};
