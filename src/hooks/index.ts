import { useEffect, useState } from "react";
import { AxiosPromise, AxiosResponse } from "axios";
import { ICommonMovie } from "../types/types";

interface IArgs {
  (promiseCreator: { (): AxiosPromise }, deps: []): [
    boolean,
    AxiosResponse<IResults> | null,
    boolean
  ];
}

interface IResults {
  results: ICommonMovie[];
}

const usePromise: IArgs = (promiseCreator, deps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [resolved, setResolved] = useState<AxiosResponse | null>(null);
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
  }, deps);

  return [loading, resolved, error];
};

export default usePromise;
