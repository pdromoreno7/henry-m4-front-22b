import ProductDetail from "@/app/components/productDetail";

interface PageProps {
  params: Promise<{
    productID: string[];
  }>;
}

async function page({ params }: PageProps) {
  const { productID } = await params;
  //   console.log("🚀 ~ page ~ productID:", productID);
  return (
    <div>
      <ProductDetail id={productID[0]} />
    </div>
  );
}

export default page;
