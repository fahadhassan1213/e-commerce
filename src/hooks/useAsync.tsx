import { useState, useCallback } from 'react';

export const enum AsyncState {
  INITIAL,
  PENDING,
  SUCCESS,
  ERROR,
}

export const useAsync = <T, P, E = string>(
  asyncOperation: (params: P) => Promise<T>
) => {
  const [status, setStatus] = useState<AsyncState>(AsyncState.INITIAL);
  const [error, setError] = useState<E | null>(null);
  const [data, setData] = useState<T | null>(null);

  const execute = useCallback(
    async (params: P) => {
      setStatus(AsyncState.PENDING);
      setError(null);
      setData(null);
      try {
        const response = await asyncOperation(params);

        setStatus(AsyncState.SUCCESS);
        setData(response);

        return response;
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.toString() as E);
        } else {
          setError('Error' as E);
        }
        setStatus(AsyncState.ERROR);
        throw err;
      }
    },
    [asyncOperation]
  );

  return {
    status,
    data,
    error,
    execute,
    loading: status === AsyncState.PENDING,
  };
};
