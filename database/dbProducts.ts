import { db } from '.';
import { Product } from '../models';
import { IProduct } from '../interfaces';

export const getProductBySlug = async (slug: string): Promise<IProduct | null> => {
  await db.connect();
  const product = await Product.findOne({slug}).lean();
  await db.disconnect();

  if(!product){
    return null;
  }

  return JSON.parse(JSON.stringify(product));
};

export const getAllProducts = async (): Promise<IProduct[]> => {
  await db.connect();
  const products = await Product.find().lean().select('title images price inStock slug -_id');
  await db.disconnect();

  return JSON.parse(JSON.stringify(products)) as IProduct[];
};

interface ProductSlug {
  slug: string
}

export const getAllProductsSlug = async (): Promise<ProductSlug[]> => {
  await db.connect();
  const slugs = await Product.find().lean().select('slug -_id');
  await db.disconnect();

  return slugs as ProductSlug[];
};

export const getProductsByTerm = async (param: string): Promise<IProduct[]> => {
  let q = param;
  q = q.toLowerCase();
  await db.connect(); 
  const products = await Product.find({
    $text: {
      $search: q
    }
  })
  .select('title images price inStock slug -_id')
  .lean();
  await db.disconnect();

  return JSON.parse(JSON.stringify(products));
};