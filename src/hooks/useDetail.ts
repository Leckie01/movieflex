import { useDispatch, useSelector } from "react-redux";
import { getDetailAsync as getMovieDetailAsync } from "../modules/movie";
import { getDetailAsync as getTVDetailAsync } from "../modules/tv";
import { RootState } from "../modules";

const useDetail = (type: "movie" | "tv", id: number) => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state[type]);

  if (type === "movie") {
    dispatch(getMovieDetailAsync.request(id));
  } else {
    dispatch(getTVDetailAsync.request(id));
  }

  return { state };
};

export default useDetail;
