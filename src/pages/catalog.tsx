import { ProductItem, Selector } from "@/components";
import { useFetchProductList } from "@/hooks";
import { useEffect, useMemo, useState } from "react";

export const Catalog = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [categoryList, setcategoryList] = useState<string[]>([
    "ПК",
    "Комплектующие",
  ]);
  const { loading, pcFetchData } = useFetchProductList();

  const sections = useMemo(() => {
    if (loading || !pcFetchData) return [];
    if (selectedItem === null) return pcFetchData;
    return pcFetchData.filter((s) => s.name === selectedItem);
  }, [loading, pcFetchData, selectedItem]);

  useEffect(() => {
    if (pcFetchData) {
      setcategoryList(pcFetchData.map((item) => item.name));
    }
  }, [pcFetchData]);

  return (
    <div className="w-full flex flex-col mb-16">
      <div className="select-none py-4 flex gap-5 border-b border-neutral-700 px-4 md:px-20 mb-6 z-40">
        <div className="flex items-center gap-3">
          <p className="text-white text-sm md:text-base">Тип товара:</p>
          <Selector
            selectedItem={selectedItem}
            setSelect={setSelectedItem}
            items={categoryList}
          />
        </div>
      </div>

      <div className="flex flex-col gap-10 px-4 md:px-16 mt-2">
        {loading || !pcFetchData ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(12)].map((_, id) => (
              <div
                key={id}
                className="h-80 bg-zinc-800 rounded-2xl animate-pulse"
              />
            ))}
          </div>
        ) : (
          sections.map((section) => (
            <section key={section.id} className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-emerald-300">
                {section.name}
              </h2>
              <div className="flex flex-wrap space-x-6 space-y-12">
                {section.products.map((item) => (
                  <div key={item.id} className="flex">
                    <ProductItem {...item} />
                  </div>
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </div>
  );
};
