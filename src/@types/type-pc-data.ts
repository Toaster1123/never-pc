export type TBigDescriptionItem = {
  component: string;
  description: string;
};

export type TProduct = {
  id: number;
  image: string;
  title: string;
  descriptions: string;
  price: number;
  size: number;
  details: TBigDescriptionItem[];
  type?: string;
  review: number;
};

export type TPcCategory = {
  id: number;
  name: string;
  products: TProduct[];
};
