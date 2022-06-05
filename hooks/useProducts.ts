import useSWR, { SWRConfiguration } from 'swr';
import { IProductsResponse } from '../interfaces';

export const useProducts = (url: string, config: SWRConfiguration = {}) => {
  const { data, error } = useSWR<IProductsResponse>(`/api${url}`, config);

  return {
    products: data?.products || [],
    isLoading: !error && !data,
    isError: error
  };
};