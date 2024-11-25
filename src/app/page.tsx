import Card from "./components/Card";
import { productsToPreLoad } from "./utils/dataMock";

export default function Home() {
  return (
    <div>
      <h1>hola!!</h1>
      {productsToPreLoad.map((product, index) => (
        <Card
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
