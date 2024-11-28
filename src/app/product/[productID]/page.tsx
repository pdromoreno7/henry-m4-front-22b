import React from "react";

function page({ params }: { params: { productID: string } }) {
  const { productID } = params;
  //   console.log("🚀 ~ page ~ productID:", productID);
  return (
    <div>
      Product page
      <h1>Product {productID}</h1>
    </div>
  );
}

export default page;
