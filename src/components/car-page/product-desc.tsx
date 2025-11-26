import { formatPrice } from "@/lib";
import React from "react";
import { TextSceleton } from "../sceletons";
import { ModalButton } from "../modal-button";
import { TProduct } from "@/@types";
import { ProductDetailsTable } from "./product-details-table";

interface Props {
  loading: boolean;
  productItem: null | TProduct;
}

export const ProductDesc: React.FC<Props> = ({ loading, productItem }) => {
  return (
    <div className="w-full flex flex-col justify-between flex-grow px-2">
      {loading || !productItem ? (
        <div className="flex flex-col gap-6">
          <TextSceleton className="h-11 w-80" />
          <TextSceleton className="h-6 w-full" />
          <TextSceleton className="h-44 w-full" />
        </div>
      ) : (
        <div className="flex flex-col h-full justify-between">
          <div>
            <p className="font-bold text-3xl text-emerald-300 pb-3">
              {productItem.title}
            </p>
            <p className="text-gray-200 mb-4">{productItem.descriptions}</p>
            <ProductDetailsTable details={productItem.details} />
          </div>
          <div className="flex flex-col mt-16 text-2xl">
            {loading || !productItem ? (
              <TextSceleton className="w-40 h-7" />
            ) : (
              <div className="flex gap-2 items-center">
                <span className="text-gray-300">Цена:</span>
                <span className="font-semibold text-emerald-400">
                  {formatPrice(productItem.price)} ₽
                </span>
              </div>
            )}
            <div className="mt-5">
              <ModalButton buttons={["Купить", "В кредит"]} loading={loading} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
