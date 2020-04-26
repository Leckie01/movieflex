import { useDispatch, useSelector } from "react-redux";
import { getDetailAsync } from "../modules/movie";
import { RootState } from "../modules";
import { useRouteMatch } from "react-router";
import { useEffect } from "react";

const useMovieDetail = () => {
  const {
    params: { id }
  } = useRouteMatch();
  const dispatch = useDispatch();
  const { detail } = useSelector((state: RootState) => state.movie);

  useEffect(() => {
    dispatch(getDetailAsync.request(id));
  }, [dispatch, id]);

  return { ...detail };
};

export default useMovieDetail;
