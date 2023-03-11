import { useState, useEffect } from 'react';
import appConfig from '../data/Config';
import Severity from '../enums/Severity';
import PageError from '../types/PageError';
import Response from '../types/Response';
import generateID from '../utils/generateID';

export const useFetch = <T> (url: string) :[Response<T> | null, PageError | null, Boolean] => {
  const [response, setResponse] = useState<Response<T> | null>(null);
  const [error, setError] = useState<PageError | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const urlUsable = url.startsWith("http") ? url : appConfig.apiBaseUrl + url;
      try {
        const res = await fetch(urlUsable);
        const json = await res.json();
        setResponse({ status: res.status, message: res.statusText, data: json as T });
      } catch (error) {
        setError({ id: generateID(), status: 500, message: (error as Error).message, severity: Severity.ERROR, url: urlUsable  });
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return [response, error, isLoading];
};