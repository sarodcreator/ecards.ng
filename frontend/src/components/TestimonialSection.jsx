export const TestimonialsSection = () => {
  
  return (
    <div className="box-border caret-transparent px-4">
      <div className="box-border caret-transparent flex flex-col justify-center max-w-none text-center w-full mx-auto py-8 md:max-w-[1140px] md:py-16">
        <p className="text-4xl font-medium box-border caret-transparent leading-[43.2px] min-h-[auto] min-w-[auto] mb-8 md:text-[47px] md:leading-[56.4px] md:mb-12">
          See how others celebrate with us
        </p>
        <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto]">
          <iframe
            title="Customer reviews powered by Trustpilot"
            src="https://widget.trustpilot.com/trustboxes/54ad5defc6454f065c28af8b/index.html?templateId=54ad5defc6454f065c28af8b&businessunitId=5d76b40315b6ca0001d8c8e0#locale=en-US&styleHeight=240px&styleWidth=100%25&stars=5&reviewLanguages=en"
            className="relative box-border caret-transparent h-60 align-baseline w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
