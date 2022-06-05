import type { NextApiRequest, NextApiResponse } from 'next';

import { db } from '../../../database';

import { Product } from '../../../models';
import { IProduct } from '../../../interfaces';

type Data = 
| { ok: boolean, message: string }
| { ok: boolean, product: IProduct };

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  
  switch (req.method) {
    case 'GET':
      return getProductsBySlug(req, res);
  
    default:
      return res.status(400).json({
        ok: false,
        message: 'Bad Request'
      });
  }
}

async function getProductsBySlug(req: NextApiRequest, res: NextApiResponse<Data>) {
  await db.connect();
  const {slug = ''} = req.query;
  const product = await Product.findOne({ slug });
  await db.disconnect();

  if(!product){
    return res.status(404).json({
      ok: false,
      message: 'Producto No encontrado'
    });
  }

  return res.status(202).json({
    ok: true,
    product
  });

};