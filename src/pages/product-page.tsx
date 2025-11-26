import { ProductDesc, ProductPageImage, TextSceleton } from "@/components";
import { useFetchProduct } from "@/hooks";
import { ArrowRight, CircleChevronLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export const ProductPage = () => {
  const { id } = useParams();
  const { product, loading } = useFetchProduct(Number(id));

  if (!product && !loading) {
    return (
      <div className="text-center text-gray-200 py-24 bg-neutral-900">
        Такой страницы не существует 😅
      </div>
    );
  }

  return (
    <div className="w-full bg-neutral-900 text-gray-100 min-h-screen">
      <Link to="/catalog">
        <div
          className="flex w-fit ml-8 my-8 px-6 py-3 items-center gap-2 text-xl cursor-pointer
          rounded-xl bg-gradient-to-r from-blue-900 to-blue-700 text-white font-semibold shadow-md hover:from-blue-800 hover:to-blue-900 transition"
        >
          <CircleChevronLeft size={28} />
          Каталог
        </div>
      </Link>

      <div
        className="flex flex-col md:flex-row gap-14 px-8 py-12 mx-auto max-w-[1400px]
  bg-gradient-to-br from-[#171821] via-[#111118] to-[#0b0c12]
  rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.9)]
  border border-zinc-800/80"
      >
        <div className="md:w-[55%] w-full flex flex-col items-center pb-8">
          <div className="w-full flex justify-center">
            <ProductPageImage
              loading={loading}
              image={product ? product.image : ""}
            />
          </div>
        </div>
        <div className="md:w-[45%] w-full flex flex-col justify-center px-8">
          <ProductDesc productItem={product} loading={loading} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-10 px-8 py-12 mt-12 max-w-[1100px] mx-auto justify-center">
        <div className="flex flex-col items-center gap-y-5 w-full md:max-w-[500px] bg-gradient-to-br from-emerald-700 to-emerald-400 rounded-2xl p-8 shadow-lg border border-zinc-800/50 relative transition">
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-300/20 rounded-full blur-2xl z-0" />
          {loading ? (
            <>
              <TextSceleton className="h-9 w-80" />
              <TextSceleton className="h-9 w-80" />
            </>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-white drop-shadow">
                Рассрочка
              </h3>
              <p className="text-lg text-center text-gray-100 drop-shadow">
                Воспользуйтесь нашей программой рассрочки — покупайте выгодно и
                удобно.
              </p>
            </>
          )}
          <Link to="/servise" className="mt-3 w-full z-10">
            <button
              className="flex items-center justify-center gap-2 px-4 py-3 w-full
              bg-neutral-900/80 border border-emerald-300 rounded-xl font-semibold text-emerald-300
              shadow-md hover:bg-emerald-900 hover:text-white hover:border-emerald-400 transition"
            >
              <span className="whitespace-nowrap">Подробнее</span>
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-y-5 w-full md:max-w-[500px] bg-gradient-to-br from-blue-700 to-blue-400 rounded-2xl p-8 shadow-lg border border-zinc-800/50 relative transition">
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-300/20 rounded-full blur-2xl z-0" />
          {loading ? (
            <>
              <TextSceleton className="h-9 w-80" />
              <TextSceleton className="h-9 w-80" />
            </>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-white drop-shadow">
                Услуги
              </h3>
              <p className="text-lg text-center text-gray-100 drop-shadow">
                Гарантии, тех. обслуживание, поддержка 24/7: выберите услугу,
                которая подходит именно вам.
              </p>
            </>
          )}
          <Link to="/servise" className="mt-3 w-full z-10">
            <button
              className="flex items-center justify-center gap-2 px-4 py-3 w-full
              bg-neutral-900/80 border border-blue-300 rounded-xl font-semibold text-blue-300
              shadow-md hover:bg-blue-900 hover:text-white hover:border-blue-400 transition"
            >
              <span className="whitespace-nowrap">Подробнее</span>
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
