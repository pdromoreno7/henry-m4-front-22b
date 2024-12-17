import { getProducts } from "@/services/productServices";
import CardProduct from "./components/Card";
import Link from "next/link";
// import { productsToPreLoad } from "./utils/dataMock";

export default async function Home() {
  const products = await getProducts();
  return (
    <div className="flex gap-5 justify-center items-center flex-wrap my-10">
      {products.map((product, index) => (
        <Link key={index} href={`/product/${product.id.toString()}`}>
          <CardProduct
            key={index}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        </Link>
      ))}
    </div>
  );
}
