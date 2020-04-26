import { useDispatch, useSelector } from "react-redux";
import { getDetailAsync } from "../modules/tv";
import { RootState } from "../modules";
import { useRouteMatch } from "react-router";
import { useEffect } from "react";

const useTVDetail = () => {
  const {
    params: { id }
  } = useRouteMatch();
  const dispatch = useDispatch();
  const { detail } = useSelector((state: RootState) => state.tv);

  useEffect(() => {
    dispatch(getDetailAsync.request(id));
  }, [dispatch, id]);

  return { ...detail };
};

export default useTVDetail;
