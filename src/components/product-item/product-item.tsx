import { TProduct } from "@/@types";
import { formatPrice } from "@/lib";
import { Link } from "react-router-dom";

function declensionReview(count: number) {
  count = Math.abs(count) % 100;
  const lastDigit = count % 10;
  if (count > 10 && count < 20) return "отзывов";
  if (lastDigit > 1 && lastDigit < 5) return "отзыва";
  if (lastDigit === 1) return "отзыв";
  return "отзывов";
}

export const ProductItem: React.FC<TProduct> = ({
  id,
  title,
  image,
  price,
  size,
  review,
}) => {
  return (
    <Link
      to={`/product/${id}`}
      className="block hover:-translate-y-1 duration-200"
    >
      <div className="w-full max-w-[330px] min-h-[520px] h-[520px] bg-neutral-900 border border-zinc-700 shadow-md rounded-3xl p-6 flex flex-col gap-4 transition hover:shadow-2xl cursor-pointer">
        <div className="h-52 aspect-video rounded-2xl bg-zinc-800 flex items-center justify-center overflow-hidden mb-2">
          {image ? (
            <img
              src={image}
              alt={title}
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <span className="text-gray-400">Нет изображения</span>
          )}
        </div>
        <h4 className="font-bold text-xl text-gray-100 mb-1 line-clamp-2">
          {title}
        </h4>
        <div className="font-extrabold text-2xl text-emerald-400">
          {formatPrice(price)} ₽
        </div>
        <div className="flex space-x-2 items-center">
          <div
            className="flex gap-1 text-yellow-400 text-lg"
            aria-label={`Мощность: ${size} из 5`}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>{i < size ? "★" : "☆"}</span>
            ))}
          </div>
          <span className="text-zinc-400 text-md">
            {review} {declensionReview(review)}
          </span>
        </div>
        <div className="flex-grow" />
        <button className="mt-4 w-full py-3 rounded-xl font-bold bg-gradient-to-r from-emerald-700 to-blue-700 text-white shadow hover:from-emerald-900 hover:to-blue-900 transition">
          К товару
        </button>
      </div>
    </Link>
  );
};
