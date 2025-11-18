export const formatPrice = (price: number) => {
  return price.toLocaleString('ru-RU', {
    style: 'decimal',
    useGrouping: true,
  });
};
