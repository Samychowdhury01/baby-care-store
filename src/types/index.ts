export type TCategory = {
  _id: string;
  name: string;
  image?: string;
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
  categoryId?: TCategory;
  // categoryId?: string | TCategory,
  isFlashSale?: boolean;
  isDeleted?: boolean;
};

export type TSignUpInfo = {
  name: string;
  email : string;
  password : string;
}
export type TLoginInfo = {
  email : string;
  password : string;
}