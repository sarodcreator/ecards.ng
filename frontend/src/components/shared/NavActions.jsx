import { MobileMenuToggle } from "@/components/shared/MobileMenuToggle";
import { UserMenu } from "@/components/shared/UserMenu";
import { LoginButton } from "@/components/shared/LoginButton";
import { PremiumButton } from "@/components/shared/PremiumButton";
import MobileSearchToggle from "@/components/shared/MobileSearchToogle";

export const NavActions = () => {
  return (
    <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] md:items-start">
      <MobileMenuToggle />
      <UserMenu />
      <LoginButton />
      <PremiumButton />
      <MobileSearchToggle />
    </div>
  );
};
