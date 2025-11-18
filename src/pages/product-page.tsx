import { ProductDesc, ProductPageImage, TextSceleton } from "@/components";
import { useFetchProduct } from "@/hooks";
import { ArrowRight, CircleChevronLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export const ProductPage = () => {
  const { id } = useParams();

  const { product, loading } = useFetchProduct(Number(id));

  if (!product && !loading) {
    return <div className="">Такой страницы не существует 😅</div>;
  }
  console.log(product);
  return (
    <div className="w-full">
      <Link to="/catalog">
        <div className="flex w-fit ml-6 text-black py-2 rounded-xl px-4 my-6 transition-all items-center gap-2 text-xl cursor-pointer">
          <CircleChevronLeft size={28} />
          Каталог
        </div>
      </Link>
      <div className="flex px-10 gap-16">
        <div className="w-1/2 flex flex-col  items-center">
          <ProductPageImage
            loading={loading}
            image={product ? product.image : ""}
          />
        </div>
        <ProductDesc productItem={product} loading={loading} />
      </div>
      <div className="flex w-full gap-10 px-10 my-20 justify-center ">
        <div className="flex max-w-1/3 items-center flex-col gap-y-5">
          {loading ? (
            <>
              <TextSceleton className="h-9 w-80" />
              <TextSceleton className="h-9 w-80" />
            </>
          ) : (
            <>
              <p className="text-3xl font-bold">Рассрочка</p>
              <p className="text-xl text-center">
                Вы так же можете ознакомится с нашей программой рассрочки,
                которая поможет вам сэкономить на автомобиле
              </p>
            </>
          )}

          <Link to={`/servise`}>
            <button className="flex text-black items-center gap-2 px-3 py-2 justify-between border-2 border-black hover:bg-green-700 hover:text-white hover:border-transparent">
              <p className="whitespace-nowrap">Подробнее</p>
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
        <div className="flex max-w-1/3 items-center flex-col gap-y-5">
          {loading ? (
            <>
              <TextSceleton className="h-9 w-80" />
              <TextSceleton className="h-9 w-80" />
            </>
          ) : (
            <>
              <p className="text-3xl font-bold ">Услуги</p>
              <p className="text-xl text-center">
                Если вы хотите узнать про условия гарантии, Тех. обслуживание,
                то вы можете ознакомиться с нашими услугами
              </p>
            </>
          )}

          <Link to={`/servise`}>
            <button className="flex text-black items-center gap-2 px-3 py-2 justify-between border-2 border-black hover:bg-green-700 hover:text-white hover:border-transparent">
              <p className="whitespace-nowrap">Подробнее</p>
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
