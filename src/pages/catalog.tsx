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
      <div className="select-none py-2 flex gap-5 border-b px-20 mb-4 z-40">
        {/* <div className="text-2xl">Категории</div> */}
        <div className="flex items-center gap-2">
          <p>Тип товара:</p>
          <Selector
            selectedItem={selectedItem}
            setSelect={setSelectedItem}
            items={categoryList}
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 px-20">
        {loading || !pcFetchData
          ? [...Array(15)].map((_, id) => (
              <div key={id} className="w-72 h-80">
                <div className="w-full h-56 rounded-xl bg-gray-300 animate-pulse" />
                <div className="w-full mt-2 h-7 rounded-md bg-gray-300 animate-pulse" />
                <div className="w-full mt-2 h-9 rounded-md bg-gray-300 animate-pulse" />
              </div>
            ))
          : sections.map((section) => (
              <div className="flex flex-col w-full mb-20" key={section.id}>
                <h2 className="text-3xl font-semibold mb-4">{section.name}</h2>
                <div className="flex flex-wrap gap-6">
                  {section.products.map((item, id) => (
                    <ProductItem
                      key={id}
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      details={item.details}
                      descriptions={item.descriptions}
                      size={item.size}
                      type={item.type}
                    />
                  ))}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
