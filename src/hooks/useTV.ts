import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { useEffect } from "react";
import { getTVAsync } from "../modules/tv";

const useTV = () => {
  const dispatch = useDispatch();
  const {
    tv: { data }
  } = useSelector((state: RootState) => state.tv);

  useEffect(() => {
    dispatch(getTVAsync.request());
  }, [dispatch]);

  return { ...data };
};

export default useTV;
