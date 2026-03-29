import React from "react";
import ProductDetail from "../components/[id]/productDetail";
import { RelatedProducts } from "../components/relatedProduct";
import axios from "axios";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  let product = null;

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${params.id}`,
    );
    product = response.data;
  } catch (error) {
    console.error("Error fetching product data:", error);
  }

  // If product is not found, you can return a not found UI or let ProductDetail handle it
  if (!product) {
    return <div className="text-center py-20 mt-20">Product not found.</div>;
  }

  return (
    <main>
      {/* We pass the full product data, you'll need to update ProductDetail to accept it */}
      <ProductDetail id={params.id} product={product} />
      <RelatedProducts />
    </main>
  );
}
