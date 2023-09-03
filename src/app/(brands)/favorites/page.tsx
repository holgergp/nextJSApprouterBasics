import { getFavoriteBrands } from "@/shared/server";

export default async function Favorites() {
  const products = await getFavoriteBrands();
  return (
    <>
      <h3 className="text-2xl font-extrabold dark:text-white pb-2">
        Favoriten
      </h3>
      <ol>
        {products.map((p) => {
          return (
            <li key={p.id} className="flex">
              <div className="flex-initial w-6 ">{p.id}</div>
              <div className="flex-initial">{p.brand}</div>
            </li>
          );
        })}
      </ol>
    </>
  );
}
