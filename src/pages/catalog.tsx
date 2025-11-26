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
  console.log(pcFetchData);
  useEffect(() => {
    if (pcFetchData) {
      setcategoryList(pcFetchData.map((item) => item.name));
    }
  }, [loading, pcFetchData]);

  return (
    <div className="w-full flex flex-col mb-16">
      <div className="select-none py-2 flex gap-5 border-b border-neutral-500 px-20 mb-4 z-40">
        <div className="flex items-center gap-2">
          <p className="text-white">Тип товара:</p>
          <Selector
            selectedItem={selectedItem}
            setSelect={setSelectedItem}
            items={categoryList}
          />
        </div>
      </div>
      <div className="flex flex-col gap-14 px-4 md:px-20 mt-6">
        {loading || !pcFetchData ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {[...Array(12)].map((_, id) => (
              <div
                key={id}
                className="w-full h-80 bg-zinc-200 rounded-2xl animate-pulse"
              />
            ))}
          </div>
        ) : (
          sections.map((section) => (
            <div key={section.id} className="mb-16">
              <h2 className="text-3xl font-extrabold mb-8 text-emerald-700 text-left">
                {section.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
                {section.products.map((item, id) => (
                  <ProductItem {...item} key={id} />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
