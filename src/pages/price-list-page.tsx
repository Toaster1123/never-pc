import priceListUrl from "@/assets/docx/price_list.docx?url";
import { TextSceleton } from "@/components";
import { useFetchProductList } from "@/hooks";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  type?: string;
}

export const PriceListPage = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const { pcFetchData, loading } = useFetchProductList();

  const handleDownload = () => {
    const fileUrl = priceListUrl;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "price_list.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (!pcFetchData || pcFetchData.length === 0) return;

    const products: Product[] = [];
    pcFetchData.forEach((category) => {
      category.products.forEach((product) => {
        products.push({
          id: product.id,
          title: product.title,
          price: product.price,
          type: product.type ?? category.name,
        });
      });
    });

    setAllProducts(products);
  }, [pcFetchData, loading]);

  return (
    <div className="flex items-center justify-center py-10 w-full">
      {!loading && allProducts.length > 0 ? (
        <div className="w-full max-w-4xl">
          <Table aria-label="price-table" className="border w-full">
            <TableHeader className="text-start">
              <TableColumn className="w-44 border-b">Название</TableColumn>
              <TableColumn className="w-44 border-b">Тип</TableColumn>
              <TableColumn className="w-44 border-b">Цена ₽</TableColumn>
            </TableHeader>
            <TableBody>
              {allProducts.map((product, id) => (
                <TableRow className="not-last:border-b" key={id}>
                  <TableCell className="border-r">{product.title}</TableCell>
                  <TableCell className="border-r">{product.type}</TableCell>
                  <TableCell className="border-r">
                    {product.price.toLocaleString("ru-RU")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-5 flex w-full justify-end">
            <button
              onClick={handleDownload}
              className="py-2 px-4 bg-lime-600/80 text-white hover:bg-lime-600/60"
            >
              Скачать
            </button>
          </div>
        </div>
      ) : (
        <TextSceleton className="w-1/3 h-full" />
      )}
    </div>
  );
};
