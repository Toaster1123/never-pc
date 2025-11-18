// src/components/ProductItem.tsx
import { TProduct } from "@/@types";
import { formatPrice } from "@/lib";
import { Link } from "react-router-dom";

export const ProductItem: React.FC<TProduct> = ({
  id,
  title,
  image,
  price,
  size,
  descriptions,
}) => {
  return (
    <div className="w-72 border rounded-lg p-3 flex flex-col hover:shadow-2xl duration-300 bg-white">
      <Link to={`/product/${id}`}>
        <div className="h-56 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              No image
            </div>
          )}
        </div>
      </Link>
      <div className="pt-2">
        <h5 className="font-medium line-clamp-2">{title}</h5>
        <div className="font-semibold text-lg mt-1">
          от {formatPrice(price)} ₽
        </div>
        <p className="text-gray-700 leading-5 mt-1 line-clamp-2">
          {descriptions[0]} ...
        </p>
        <div
          className="mt-2 text-2xl flex items-center gap-1 text-amber-400"
          aria-label={`Мощность: ${size} из 5`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>{i < size ? "★" : "☆"}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
