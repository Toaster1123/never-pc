import brandAcer from "@/assets/brands/acer.png";
import brandAerocool from "@/assets/brands/aerocool.jpg";
import brandAmd from "@/assets/brands/amd.jpg";
import brandApple from "@/assets/brands/apple.png";
import brandAsus from "@/assets/brands/asus.jpg";
import brandGiga from "@/assets/brands/gigabyte.jpg";
import brandHonor from "@/assets/brands/honor.jpg";
import brandHp from "@/assets/brands/hp.png";
import brandIntel from "@/assets/brands/intel.png";
import brandLenovo from "@/assets/brands/lenovo.png";
import brandLg from "@/assets/brands/lg.png";
import brandMi from "@/assets/brands/mi.png";
import brandMsi from "@/assets/brands/msi.jpg";
import brandNvidia from "@/assets/brands/nvidia.jpg";
import brandPalit from "@/assets/brands/palit.jpg";
import brandRazer from "@/assets/brands/razer.jpg";
import brandSumsung from "@/assets/brands/sumsung.png";
import brandWd from "@/assets/brands/wd.png";

const brands = [
  brandAcer,
  brandAerocool,
  brandAmd,
  brandApple,
  brandAsus,
  brandGiga,
  brandHonor,
  brandHp,
  brandIntel,
  brandLenovo,
  brandLg,
  brandMi,
  brandMsi,
  brandNvidia,
  brandPalit,
  brandRazer,
  brandSumsung,
  brandWd,
];
export const Brands = () => {
  return (
    <section className="py-12">
      <h2 className="text-center text-3xl font-semibold mb-8 text-gray-100">
        Работаем с брендами
      </h2>
      <div className="overflow-hidden w-full relative">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-12 items-center animate-marquee">
          {brands.map((src, i) => (
            <div key={i} className="h-28 bg-white">
              <img
                src={src}
                alt="brand"
                className="w-full h-full object-contain"
              />
            </div>
          ))}
          {brands.map((src, i) => (
            <div key={i} className="h-28">
              <img
                src={src}
                alt="brand"
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
        <style>{`
      .animate-marquee {
        display: flex;
        width: max-content;
        animation: marquee-x ${brands.length * 5}s linear infinite;
      }
      @keyframes marquee-x {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `}</style>
      </div>
    </section>
  );
};
