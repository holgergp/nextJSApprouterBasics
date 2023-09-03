import { getProducts } from "@/app/server";

export default async function Products() {
  const products = await getProducts();
  return (
    <>
      <h3 className="text-2xl font-extrabold dark:text-white pb-2">
        Unsere Produkte
      </h3>
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
    </>
  );
}
