import { useEffect, useState } from "react";
import { AxiosPromise, AxiosResponse } from "axios";

const usePromise = <S>(
  promiseCreator: { (): AxiosPromise },
  deps: []
): [boolean, AxiosResponse<S> | null, boolean] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [resolved, setResolved] = useState<AxiosResponse<S> | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    process();
  }, [promiseCreator, deps]);

  return [loading, resolved, error];
};

export default usePromise;
