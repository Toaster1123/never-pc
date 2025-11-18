import { z } from 'zod';

export const formBuySchema = z.object({
  firstName: z.string().min(2, { message: 'Введите имя' }),
  lastName: z.string().min(2, { message: 'Введите фамилию' }),
  email: z.string().email({ message: 'Введите корректную почту' }),
  phone: z.string().min(10, { message: 'Введите номер телефона' }),
  time: z.string().min(5, { message: 'Введите время' }),
});
export type TFormBuySchema = z.infer<typeof formBuySchema>;
