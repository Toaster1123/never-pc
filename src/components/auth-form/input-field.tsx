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
  const hasError = Boolean(error);

  return (
    <div className="flex flex-col mb-4 w-full">
      <label className="text-sm font-medium mb-1 text-gray-200">{label}</label>
      <div className="flex relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full px-3 py-2 rounded-xl border bg-neutral-900 text-gray-100 placeholder-gray-500
          focus:outline-none focus:ring-2 focus:ring-emerald-500
          ${hasError ? "border-red-500" : "border-zinc-700"}`}
        />
        {value.length > 0 && (
          <X
            onClick={() => {
              onChange("");
            }}
            className="absolute right-2.5 top-2.5 h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-200"
          />
        )}
      </div>

      <p className="text-red-500 text-sm min-h-[20px]">{error ? error : ""}</p>
    </div>
  );
};
