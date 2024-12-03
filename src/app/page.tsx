import CardProduct from "./components/Card";
import { productsToPreLoad } from "./utils/dataMock";

export default function Home() {
  return (
    <div className="flex gap-5 justify-center items-center flex-wrap my-10">
      {productsToPreLoad.map((product, index) => (
        <CardProduct
          key={index}
          name={product.name}
          price={product.price}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  );
}
