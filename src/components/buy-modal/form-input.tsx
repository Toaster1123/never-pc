import { useFormContext } from "react-hook-form";
import { ClearButton } from "./clear-button";
import { ErrorText } from "./error-text";
import { Input } from "../ui";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: React.FC<Props> = ({
  className,
  name,
  label,
  required,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  const onClickClear = () => {
    setValue(name, "", { shouldValidate: true });
  };

  return (
    <div className={className}>
      {label && (
        <p className="font-medium mb-1 text-gray-200">
          {label} {required && <span className="text-red-400">*</span>}
        </p>
      )}
      <div className="relative">
        <Input
          className="h-12 text-md border border-zinc-700 bg-neutral-900 text-gray-100 placeholder-gray-500 rounded-xl transition"
          {...register(name)}
          {...props}
          placeholder={label}
        />
        {value && <ClearButton onClick={onClickClear} />}
      </div>
      {errorText && <ErrorText text={errorText} className="mt-2" />}
    </div>
  );
};
