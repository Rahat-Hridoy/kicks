import React from "react";
import ProductDetail from "@/app/product/components/productDetail";
import { RelatedProducts } from "./components/relatedProduct";

const page = () => {
  return (
    <main>
      <ProductDetail />
      <RelatedProducts />
    </main>
  );
};

export default page;
