import { NotepadText } from "lucide-react";
import { ModalButton } from "../modal-button";

interface ServiceCardProps {
  title: string;
  description: string;
  genitiveTitle: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  genitiveTitle,
}) => {
  return (
    <div
      className="flex flex-col items-center bg-gradient-to-br from-[#171821] via-[#111118] to-[#0b0c12]
      rounded-2xl shadow-xl border border-zinc-800/80 p-6 md:p-7 w-full max-w-sm mx-auto"
    >
      <div className="py-6 flex items-center justify-center">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-400/40">
          <NotepadText
            size={34}
            strokeWidth={1.6}
            className="text-emerald-300"
          />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-100 text-center mb-2">
        {title}
      </h3>

      <div className="flex flex-col justify-between h-full w-full">
        <p className="text-gray-300 mt-1 text-center text-sm md:text-base">
          {description}
        </p>

        <div className="mt-8 flex flex-col items-center gap-3">
          <p className="text-gray-200 text-center text-sm md:text-base">
            Получить консультацию по {genitiveTitle}
          </p>
          <ModalButton buttons={["Обратный звонок"]} />
        </div>
      </div>
    </div>
  );
};
