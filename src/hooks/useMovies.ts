import { useDispatch, useSelector } from "react-redux";
import { getMoviesAsync } from "../modules/movie";
import { RootState } from "../modules";
import { useEffect } from "react";

const useMovies = () => {
  const dispatch = useDispatch();
  const {
    movies: { data }
  } = useSelector((state: RootState) => state.movie);

  useEffect(() => {
    dispatch(getMoviesAsync.request());
  }, [dispatch]);

  return { ...data };
};

export default useMovies;
