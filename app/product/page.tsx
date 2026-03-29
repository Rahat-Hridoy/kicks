import React from "react";
import ProductDetail from "@/app/product/components/[id]/productDetail";
import { RelatedProducts } from "./components/relatedProduct";

const page = () => {
  return (
    <main>
      <ProductDetail id="" />
      <RelatedProducts />
    </main>
  );
};

export default page;
