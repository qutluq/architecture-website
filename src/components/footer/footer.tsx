import Image from "next/image";
import { Contacts, SiteMap, SocialMedia } from "src/components/footer";

export const Footer = () => {
  return (
    <div className="grid grid-cols-1 justify-center gap-16 bg-gray-800 px-10 py-14 sm:grid-cols-2 lg:flex lg:flex-row lg:gap-20 xl:justify-between xs:px-32">
      <div className="h-36 w-36 min-w-fit">
        <Image width={120} height={120} src="/logo-white.svg" alt="Logo" />
      </div>

      <div className="block lg:hidden">
        <SocialMedia />
      </div>

      <SiteMap />
      <Contacts />
      <div className="hidden lg:block">
        <SocialMedia />
      </div>
    </div>
  );
};
