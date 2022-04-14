import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import removeHttp from '../helpers/removeHttp';

const useAxios = configObj => {
  const { axiosInstance, method } = configObj;

  const [id, setId] = useState(0);
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(0);
  const [url, setUrl] = useState('');

  const refetch = url => {
    setUrl(`/${removeHttp(url)}`);
    setReload(prev => prev + 1);
  };

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      console.log(url);
      try {
        const res = await axiosInstance[method.toLowerCase()](url, {
          signal: controller.signal,
        });
        setOriginalUrl(removeHttp(res.data.result.original_link));
        setShortenedUrl(res.data.result.short_link);
        setId(nanoid());
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

    // useEffect cleanup function
    return () => controller.abort();
  }, [reload]);

  return { id, originalUrl, shortenedUrl, error, isLoading, refetch };
};

export default useAxios;
