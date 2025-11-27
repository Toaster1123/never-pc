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
    <div className="w-full min-h-screen bg-neutral-900 flex items-center justify-center py-10 px-4">
      {!loading && allProducts.length > 0 ? (
        <div className="w-full max-w-5xl rounded-3xl border border-zinc-800 bg-gradient-to-br from-[#171821] via-[#101018] to-[#05060a] p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">
                прайс-лист
              </p>
              <h1 className="text-2xl font-semibold text-gray-100 mt-1">
                Актуальные цены
              </h1>
              <p className="text-sm text-zinc-400 mt-1">
                Все позиции каталога в одном списке. Обновление автоматически.
              </p>
            </div>
            <button
              onClick={handleDownload}
              className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-700 to-blue-700 text-white text-sm font-semibold hover:from-emerald-800 hover:to-blue-900 transition shadow-md"
            >
              Скачать .docx
            </button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-neutral-900/60">
            <Table
              aria-label="price-table"
              removeWrapper
              className="w-full text-gray-100"
            >
              <TableHeader className="bg-neutral-900/80">
                <TableColumn className="w-1/2 border-b border-zinc-800 text-left text-sm font-semibold text-zinc-300 px-4 py-3">
                  Название
                </TableColumn>
                <TableColumn className="w-1/4 border-b border-zinc-800 text-left text-sm font-semibold text-zinc-300 px-4 py-3">
                  Тип
                </TableColumn>
                <TableColumn className="w-1/4 border-b border-zinc-800 text-right text-sm font-semibold text-zinc-300 px-4 py-3">
                  Цена, ₽
                </TableColumn>
              </TableHeader>
              <TableBody>
                {allProducts.map((product) => (
                  <TableRow
                    key={product.id}
                    className="border-t border-zinc-800 hover:bg-neutral-800/60 transition"
                  >
                    <TableCell className="px-4 py-3 text-sm text-gray-100">
                      {product.title}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-sm text-zinc-300">
                      {product.type}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-sm text-emerald-400 text-right">
                      {product.price.toLocaleString("ru-RU")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      ) : (
        <TextSceleton className="w-1/3 h-14" />
      )}
    </div>
  );
};
