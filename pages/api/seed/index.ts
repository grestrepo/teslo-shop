import type { NextApiRequest, NextApiResponse } from 'next';
import { db, seedDatabase } from '../../../database';
import { Product } from '../../../models';

type Data = {
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if(process.env.NODE_ENV === 'production'){
    res.status(400).json({ message: 'No tiene Acceso a esta api' });
  }

  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(seedDatabase.initialData.products);
  await db.disconnect();

  res.status(200).json({ message: 'Proceso Realizado correctamente' });
}