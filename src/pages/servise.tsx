import { ServiceCard } from "@/components";
import { services } from "@/constants";

export const Servise = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-900 flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-emerald-300 mb-8">
        Наши услуги
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            genitiveTitle={service.genitiveTitle}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};
