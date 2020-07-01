import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { FetchDetailedPokemonAsync } from '../actions';
import { DetailedPokemonState } from '../reducer';
import { AppState } from '../../../init/rootReducer';

type useDetailedPokemonCustomHookType = {
  detailed: string;
  isImages: boolean;
  replacementImages: string[];
}

const replacementImages = [...Array(1)].map(() => `https://avatars.dicebear.com/api/gridy/pokemon${Math.random()}.svg`);

export const useFetchDetailedPokemon = ():
DetailedPokemonState & useDetailedPokemonCustomHookType => {
  const { detailed }: { detailed: string } = useParams();
  const dispatch = useDispatch();
  const {
    data,
    isFetching,
    error,
  } = useSelector<AppState, DetailedPokemonState>((state) => state.detailed);

  const isImages = Boolean(data.images.length);

  useEffect(() => {
    if (data.name === '' || detailed !== data.name) {
      dispatch(FetchDetailedPokemonAsync(detailed));
    }
  }, [dispatch, data.name, detailed]);

  return {
    data,
    isFetching,
    error,
    detailed,
    isImages,
    replacementImages,
  };
};
