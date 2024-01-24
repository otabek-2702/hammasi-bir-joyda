import type { IProduct } from '@/constants/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

type typeData = IProduct[] | string[];

// type typeEndPoint = 'products/'

// : { data: typeData, isLoading: boolean, error: string | unknown, refetch: () => void } 

const useFetch = <T>(endpoint: string, queryParams: object = {}) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const options = {
    method: 'GET',
    url: `https://fakestoreapi.com/${endpoint}`,
    params: { ...queryParams },
  };

  const fetchData = async (options: any) => {
    setIsLoading(true);
    try {
      const response: any = await axios.request(options);

      if (response.status !== 200) {
        throw new Error(`Server bilan xatolik yuz berdi, ${response.statusText}`);
      }

      setData(response.data);
      setError('');
    } catch (error: any) {
      setError(error?.message ?? 'could not get error from server');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(options);
  }, []);

  const refetch = () => fetchData(options)

  return { data, isLoading, error, refetch };
};

export default useFetch;
