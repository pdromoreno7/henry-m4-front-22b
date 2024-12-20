import ProductDetail from "@/app/components/productDetail";
import React from "react";

function page({ params }: { params: { productID: string } }) {
  const { productID } = params;
  //   console.log("🚀 ~ page ~ productID:", productID);
  return (
    <div>
      <ProductDetail id={productID} />
    </div>
  );
}

export default page;
