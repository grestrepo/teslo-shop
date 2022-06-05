import type { NextApiRequest, NextApiResponse } from 'next';

import { db, SHOP_CONSTANTS } from '../../../database';
import { Product } from '../../../models';
import { IProduct } from '../../../interfaces';

type Data = { ok: boolean, message?: string, products?: IProduct[] };

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  switch (req.method) {
    case 'GET':
      return getProducts(req, res);
    default:
      return res.status(400).json({
        ok: false,
        message: 'Bad request'
      });
  }

}

const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { gender='all' } = req.query;

  let condition = {};

  if(gender !== 'all' && SHOP_CONSTANTS.validGenders.includes(`${gender}`)){
    condition = {gender};
  }

  await db.connect();
  const products = await Product.find(condition).select('title images price inStock slug -_id');
  await db.disconnect();

  return res.status(200).json({
    ok: true,
    products
  });
};