import { TPcCategory, TProduct } from "@/@types";
import { pcData } from "@/constants";

import { useEffect, useState } from "react";

export const useFetchProduct = (id: number) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<TProduct | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      const all: TProduct[] = pcData.flatMap((c) => c.products as TProduct[]);
      setProduct(all.find((p) => p.id === id) ?? null);
    } finally {
      setLoading(false);
    }
  }, [id]);

  return { loading, product };
};

export const useFetchProductList = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [pcFetchData, setPcFetchData] = useState<TPcCategory[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = pcData;
        setPcFetchData(data);
      } catch (error) {
        console.error("Error during fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, pcFetchData };
};
