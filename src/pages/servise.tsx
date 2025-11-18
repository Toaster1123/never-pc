import { ServiceCard } from '@/components';
import { services } from '@/constants';

export const Servise = () => {
  return (
    <div className="flex w-full h-full flex-col items-center py-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Наши услуги</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
