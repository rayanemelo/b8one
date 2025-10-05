"use client";

import { useEffect, useState } from "react";

const PRODUCTS_API = "https://dummyjson.com/products";

export function useProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchProducts = async () => {
    try {
      const response = await fetch(PRODUCTS_API);
      const data: ResponseProduct = await response.json();
      setProducts(data.products.slice(0, 6));
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, isLoading };
}
