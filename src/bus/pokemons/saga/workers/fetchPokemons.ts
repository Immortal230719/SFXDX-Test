// Tools
import {
  StartFetchingPokemons,
  StopFetchingPokemons,
  fillPokemons,
  setFetchingPokemonsError,
  FetchPokemonsAsync,
} from '../../actions';

// Types
import { PokemonsType } from '../../types';
// Workers
import { makeRequestWithSpinner } from '../../../../workers';

// API
import { api } from '../../../../API';

export function* fetchPokemons({ payload }: ReturnType<typeof FetchPokemonsAsync>): Generator {
  const options = {
    fetcher: api.pokemons.fetch,
    fetcherParam: payload,
    startFetching: StartFetchingPokemons,
    stopFetching: StopFetchingPokemons,
    fill: fillPokemons,
    setErrorAction: setFetchingPokemonsError,
  };

  yield makeRequestWithSpinner<PokemonsType>(options);
}
