
import Link from "next/link";

import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { getProducts } from "@/shared/server";
import { Product } from "@/shared/types";

export const getStaticProps: GetStaticProps<{
  products: Product[];
}> = async () => {
  const products = await getProducts();
  return {
    props: {
      products,
    },
  };
};

export default function OldShop({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="p-5">
      <h2 className="text-3xl font-extrabold dark:text-white pb-2">Produkte</h2>
      <div>
        <Link
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href={"/"}
        >
          Zurück
        </Link>
      </div>
      <ol>
        {products.map((p) => {
          return (
            <li key={p.id} className="flex">
              <div className="flex-initial w-6 ">{p.id}</div>
              <div className="flex-initial">{p.description}</div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
