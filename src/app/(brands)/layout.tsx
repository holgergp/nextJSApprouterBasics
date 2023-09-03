import { PropsWithChildren } from "react";

export default ({ children }: PropsWithChildren) => {
  return (
    <div className="">
      <h2 className="text-3xl font-extrabold dark:text-white pb-2">
        Produktbereich
      </h2>

      <>{children}</>
    </div>
  );
};
