import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { FetchDetailedMoveAsync } from '../actions';
import { DetailedMoveState } from '../reducer';
import { AppState } from '../../../init/rootReducer';

export const useFetchDetailedMove = ():
DetailedMoveState => {
  const { id }: { id: string } = useParams();
  const dispatch = useDispatch();
  const {
    data,
    isFetching,
    error,
  } = useSelector<AppState, DetailedMoveState>((state) => state.move);

  useEffect(() => {
    dispatch(FetchDetailedMoveAsync(id));
  }, [dispatch, id]);

  return {
    data,
    isFetching,
    error,
  };
};
