import React, { useState } from "react";
import { BuyModal } from "../buy-modal";
import { useNavigate } from "react-router-dom";
import { addToCart } from "@/db/service";
import { TProduct } from "@/@types";
import { CheckCircle2, X } from "lucide-react";

interface Props {
  buttons: string[];
  product?: TProduct;
  loading?: boolean;
}

export const ModalButton: React.FC<Props> = ({
  loading = false,
  buttons,
  product,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [animateToast, setAnimateToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => setAnimateToast(true), 50);
    setTimeout(() => setAnimateToast(false), 2450);
    setTimeout(() => setShowToast(false), 2800);
  };
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    if (!product) return;
    const result = await addToCart(product);

    if (result.error) {
      return navigate("/auth", { replace: true });
    }

    handleShowToast();
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <>
      <div>
        {loading ? (
          <div className="flex mt-2 gap-2">
            {[...Array(3)].map((_, id) => (
              <div
                key={id}
                className="animate-pulse w-24 h-11 rounded-lg bg-zinc-800"
              />
            ))}
          </div>
        ) : (
          <div className="flex gap-4 pt-4 w-fit">
            {buttons.map((button, id) => {
              const isCart = button === "В корзину";

              return (
                <button
                  key={id}
                  onClick={() =>
                    isCart ? handleAddToCart() : setOpenModal(true)
                  }
                  className="px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-blue-700 text-white hover:from-emerald-900 hover:to-blue-900 transition shadow-md"
                >
                  {button}
                </button>
              );
            })}

            {openModal && <BuyModal closeModal={() => setOpenModal(false)} />}
          </div>
        )}
      </div>

      {showToast && (
        <div className="fixed bottom-6 right-6 z-50">
          <div
            className={`flex items-center gap-3 rounded-2xl border border-emerald-500/40 bg-neutral-900/95 px-4 py-3 shadow-2xl
        transform transition-all duration-300 ease-in-out
        ${
          animateToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600/20">
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            </div>
            <div className="text-sm">
              <p className="text-gray-100 font-medium">
                Товар добавлен в корзину
              </p>
              <p className="text-xs text-zinc-400">
                Вы можете оформить заказ в разделе «Корзина».
              </p>
            </div>
            <button
              className="ml-1 text-zinc-500 hover:text-zinc-300 transition"
              onClick={() => setAnimateToast(false)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
