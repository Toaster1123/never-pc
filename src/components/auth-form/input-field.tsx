import { X } from "lucide-react";

interface Props {
  label: string;
  type: "email" | "password";
  value: string;
  onChange: (v: string) => void;
  error?: string;
}

export const InputField: React.FC<Props> = ({
  label,
  type,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="flex flex-col mb-4 w-full">
      <label className="text-sm font-medium mb-1">{label}</label>
      <div className="flex relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full px-3 py-2 rounded-xl border 
          ${error ? "border-red-500 bg-red-50" : "border-gray-300 bg-gray-100"} 
          focus:outline-none focus:ring-2 focus:ring-blue-500 text-black`}
        />
        {value.length > 0 && (
          <X
            onClick={() => {
              onChange("");
            }}
            className="absolute right-2.5 top-2.5"
          />
        )}
      </div>

      <p className="text-red-600 text-sm min-h-[20px]">{error ? error : ""}</p>
    </div>
  );
};
