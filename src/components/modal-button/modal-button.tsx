import React, { useState } from "react";
import { BuyModal } from "../buy-modal";

interface Props {
  buttons: string[];
  loading?: boolean;
}

export const ModalButton: React.FC<Props> = ({ loading = false, buttons }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      {loading ? (
        <div className="flex mt-2 gap-2">
          {[...Array(3)].map((_, id) => (
            <div
              key={id}
              className="animate-pulse w-24 h-11 rounded-lg flex items-center justify-center bg-zinc-800"
            />
          ))}
        </div>
      ) : (
        <div className="flex gap-4 pt-4 w-fit">
          {buttons.map((button, id) => (
            <button
              key={id}
              onClick={() => setOpenModal(true)}
              className="flex w-full items-center gap-2 px-4 py-3 font-semibold rounded-xl
                bg-gradient-to-r from-emerald-700 to-blue-700 text-gray-100
                border-0 shadow-md hover:from-emerald-900 hover:to-blue-900 hover:text-white transition"
            >
              <span className="whitespace-nowrap">{button}</span>
            </button>
          ))}
          {openModal && <BuyModal closeModal={() => setOpenModal(false)} />}
        </div>
      )}
    </div>
  );
};
