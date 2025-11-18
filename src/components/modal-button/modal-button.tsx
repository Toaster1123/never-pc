import React, { useState } from 'react';
import { BuyModal } from '../buy-modal';

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
              className="animate-pulse w-24 h-11 rounded-md flex items-center justify-center bg-gray-300"
            />
          ))}
        </div>
      ) : (
        <div className="flex gap-4 pt-4 w-fit">
          {buttons.map((button, id) => (
            <button
              key={id}
              onClick={() => setOpenModal(true)}
              className="flex w-full items-center h-fit gap-2 px-3 py-2 justify-between border-2 border-black hover:bg-green-700 hover:text-white hover:border-transparent">
              <p className="whitespace-nowrap">{button}</p>
            </button>
          ))}

          {openModal && <BuyModal closeModal={() => setOpenModal(false)} />}
        </div>
      )}
    </div>
  );
};
