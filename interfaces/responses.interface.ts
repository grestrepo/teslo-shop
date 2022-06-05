import { IProduct } from "./products.interface";

export interface IProductsResponse {
  ok: boolean,
  products: IProduct[]
}

export interface IProductResponse {
  ok: boolean,
  product: IProduct
}