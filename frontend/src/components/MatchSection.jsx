import React from 'react';

export const MatchSection = (props) => {
  const { variant, headingText, cards } = props;
  if (variant === "heading") {
    return (
      <h2 className="text-4xl font-medium box-border caret-transparent leading-[43.2px] text-center pt-6 md:text-[47px] md:leading-[56.4px] md:pt-12">
        {headingText ?? "Find your perfect match"}
      </h2>
    );
  }

  return (
    <div className="box-border caret-transparent mt-24 mx-4 md:mx-0">
      {cards &&
        cards.map((card, index) => (
          <div
            key={index}
            className="box-border caret-transparent flex justify-center"
          >
            {card}
          </div>
        ))}
    </div>
  );
};
