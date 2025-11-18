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
    <div className="w-1/2 flex flex-col justify-between flex-grow">
      {loading || !productItem ? (
        <div className="flex flex-col gap-6">
          <TextSceleton className="h-11 w-80" />
          <TextSceleton className="h-6 w-full" />
          <TextSceleton className="h-44 w-full" />
        </div>
      ) : (
        <div className="flex flex-col h-full justify-between">
          <div className="">
            <p className="font-bold text-2xl pb-3">{productItem.title}</p>
            <p>{productItem.descriptions}</p>
            <ProductDetailsTable details={productItem.details} />
          </div>
          <div className="flex flex-col mt-16 text-xl">
            {loading || !productItem ? (
              <TextSceleton className="w-40 h-7" />
            ) : (
              <div className="flex gap-2">
                Цена:
                <p className="font-semibold mt-0.5">
                  {formatPrice(productItem.price)} ₽
                </p>
              </div>
            )}
            <ModalButton buttons={["Купить", "В кредит"]} loading={loading} />
          </div>
        </div>
      )}
    </div>
  );
};
