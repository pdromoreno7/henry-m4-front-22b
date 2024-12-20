import { IProduct } from "@/interfaces";

const apiURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
export async function getProducts() {
  try {
    const res = await fetch(`${apiURL}/products`, {
      method: "GET",
      next: { revalidate: 3600 },
    });
    const products: IProduct[] = await res.json();
    return products;
  } catch (error) {
    throw new Error(error as string);
  }
}

export async function getProductById(id: string) {
  try {
    const products = await getProducts();
    const product = products.find((product) => product.id.toString() === id);
    if (!product) throw new Error("Product not found");
    return product;
  } catch (error) {
    throw new Error(error as string);
  }
}
