export type TCategory = {
  _id: string;
  name: string;
  image: string;
  url: string;
};

export type TProduct = {
  _id: string;
  name: string;
  image: string;
  price: number;
  rating?: number;
  description?: string;
  features?: string[];
  categoryId?: string;
  isFlashSale?: boolean;
  isDeleted?: boolean
}