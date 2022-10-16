import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { navigation } from "src/config/site";
import { classNames } from "src/utils";

export const Header = () => {
  const router = useRouter();

  return (
    <div className="min-h-full">
      <Disclosure as="nav">
        {({ open }) => {
          return (
            <>
              <div className="mx-auto flex h-28 w-full items-center justify-between px-10">
                <div className="h-20 w-1/3 sm:ml-10 lg:ml-20">
                  <Image width={80} height={80} src="/logo.svg" alt="Logo" />
                </div>
                <div className="hidden w-2/3 justify-start lg:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => {
                      const current = router.pathname === item.pathName;
                      return (
                        <a
                          key={item.name}
                          href={item.pathName}
                          className={classNames(
                            current
                              ? "border-y-2 border-black"
                              : "hover:bg-gray-700 hover:text-white",
                            "px-5 py-1 text-sm font-medium uppercase text-gray-700"
                          )}
                          aria-current={current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="-mr-2 flex lg:hidden">
                  {/* Mobile menu button */}
                  <span className="sr-only">Open main menu</span>
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>

              <Disclosure.Panel className="flex justify-end pr-5 lg:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => {
                    const current = router.pathname === item.pathName;
                    return (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.pathName}
                        className={classNames(
                          current
                            ? "bg-gray-500 text-white"
                            : "text-gray-700 hover:bg-gray-700 hover:text-white",
                          "block rounded-md px-5 py-2 text-base font-medium uppercase xs:w-60"
                        )}
                        aria-current={current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    );
                  })}
                </div>
              </Disclosure.Panel>
            </>
          );
        }}
      </Disclosure>
    </div>
  );
};
