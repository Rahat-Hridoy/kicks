import React from "react";
import Cart from "@/app/cart/components/cart";
import { RelatedProducts } from "@/app/product/components/relatedProduct";

const page = () => {
  return (
    <main>
      <Cart />
      <RelatedProducts />
    </main>
  );
};

export default page;
