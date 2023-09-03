"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default () => {
  const pathname = usePathname();
  const renderBackButton = pathname !== "/";
  return renderBackButton ? (
    <Link
      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      href={"/"}
    >
      Zurück
    </Link>
  ) : (
    <></>
  );
};
