import ProductDetail from "@/app/components/productDetail";
import { NextPage } from "next";

interface ProductPageProps {
  params: {
    productID: string;
  };
}

const Page: NextPage<ProductPageProps> = ({ params }) => {
  const { productID } = params;
  return (
    <div>
      <ProductDetail id={productID} />
    </div>
  );
};

export default Page;
