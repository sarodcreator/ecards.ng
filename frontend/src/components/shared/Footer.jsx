import { FooterNewsletter } from "@/components/shared/FooterNewsletter";

export const Footer = () => {
  return (
    <footer className="items-center bg-zinc-100 box-border caret-transparent flex flex-wrap justify-center min-h-[auto] min-w-[auto] px-4 rounded-t-3xl md:flex-nowrap md:px-16 md:rounded-t-[48px]">
      <FooterNewsletter />
    </footer>
  );
};
