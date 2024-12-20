import ProductDetail from "@/app/components/productDetail";

// Definir el tipo específico para los parámetros de la página
type PageParams = {
  productID: string;
};

// Definir el tipo de props para la página
type Props = {
  params: PageParams;
  searchParams: { [key: string]: string | string[] | undefined };
};

// Componente de página con tipos correctos
export default function Page({ params }: Props) {
  const { productID } = params;
  return (
    <div>
      <ProductDetail id={productID} />
    </div>
  );
}
