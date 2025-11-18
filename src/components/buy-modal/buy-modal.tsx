import { cn } from '@/lib';
import React, { useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { formBuySchema, TFormBuySchema } from './shema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput } from './form-input';
import { Button } from '@headlessui/react';
import { useClickAway } from 'react-use';
import { X } from 'lucide-react';
import toast from 'react-hot-toast';

interface Props {
  closeModal: () => void;
  className?: string;
}

export const BuyModal: React.FC<Props> = ({ className, closeModal }) => {
  const form = useForm<TFormBuySchema>({
    resolver: zodResolver(formBuySchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      time: '',
    },
  });

  const onSubmit = async (data: TFormBuySchema) => {
    console.log(data);
    toast.success(`Ваша заявка принята! Мы свяжемся с вами в ${data.time}`);
    closeModal();
  };
  const clickRef = useRef<HTMLDivElement>(null);
  useClickAway(clickRef, closeModal);

  return (
    <div
      className={cn(
        'fixed inset-0 w-full h-full bg-black/55 flex items-center justify-center z-50',
        className,
      )}>
      <div ref={clickRef} className="bg-white rounded-xl relative">
        <FormProvider {...form}>
          <form
            className="sm:px-10 flex flex-col gap-5 px-5 py-6"
            onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex justify-between items-center">
              <div className="mr-2">
                <p className="font-bold text-2xl">Заказать обратный звонок</p>
                <p className="text-gray-400">
                  Укажите данные и мы свяжемся с вами в удобное для вас время
                </p>
              </div>
              <div onClick={closeModal} className="absolute right-4 top-4 cursor-pointer">
                <X />
              </div>
            </div>
            <FormInput name="firstName" label="Имя" className="w-full" required />
            <FormInput name="lastName" label="Фамилия" className="w-full" required />
            <FormInput name="email" label="E-Mail" required />
            <div className="flex justify-between gap-4">
              <FormInput name="phone" label="Телефон" className="w-full" required />
              <FormInput name="time" label="Время" className="w-full" required />
            </div>
            <Button
              disabled={form.formState.isSubmitting}
              className="h-12 text-base bg-black rounded-xl text-white cursor-pointer hover:bg-black/90"
              type="submit">
              Отправить
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
