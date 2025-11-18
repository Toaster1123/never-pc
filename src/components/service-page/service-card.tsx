import { NotepadText } from 'lucide-react';
import { ModalButton } from '../modal-button';

interface ServiceCardProps {
  title: string;
  description: string;
  genitiveTitle: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, genitiveTitle }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 w-80">
      <div className="py-9">
        <NotepadText size={64} strokeWidth={1.3} />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <div className="flex-col flex justify-between h-full">
        <p className="text-gray-600 mt-2 text-center">{description}</p>
        <div className="mt-10 flex flex-col items-center">
          <p className=" text-center">Получить консультацию по {genitiveTitle}</p>
          <ModalButton buttons={['Обратный звонок']} />
        </div>
      </div>
    </div>
  );
};
