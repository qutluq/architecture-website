import { useRouter } from "next/router";
import { navigation } from "src/config/site";
import { classNames } from "src/utils";

export const SiteMap = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-5 capitalize text-gray-200">
      <span className="mb-3">information</span>

      {navigation.map((item) => {
        const current = router.pathname === item.pathName;

        return (
          <a
            key={item.name}
            href={item.pathName}
            className={classNames(
              current ? "text-gray-400" : "hover:bg-gray-700 hover:text-white",
              ""
            )}
            aria-current={current ? "page" : undefined}
          >
            {item.name}
          </a>
        );
      })}
    </div>
  );
};
