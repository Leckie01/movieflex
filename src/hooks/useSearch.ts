import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchAllAsync } from "../modules/search";
import { RootState } from "../modules";

const useSearch = () => {
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.search);

  const onChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value: term },
    } = e;
    dispatch(searchAllAsync.request(term));
  };

  return { onChangeHandler, search };
};

export default useSearch;
