// Tools
import {
  StartFetchingDetailedPokemon,
  StopFetchingDetailedPokemon,
  FillDetailedPokemon,
  setFetchingDetailedPokemonError,
  FetchDetailedPokemonAsync,
} from '../../actions';

// Types
import { PokemonDetailedType } from '../../types';
// Workers
import { makeRequestWithSpinner } from '../../../../workers';

// API
import { api } from '../../../../API';

export function* fetchDetailedPokemon({ payload }:
  ReturnType<typeof FetchDetailedPokemonAsync>): Generator {
  const options = {
    fetcher: api.detailed.fetch,
    fetcherParam: payload,
    startFetching: StartFetchingDetailedPokemon,
    stopFetching: StopFetchingDetailedPokemon,
    fill: FillDetailedPokemon,
    setErrorAction: setFetchingDetailedPokemonError,
  };

  yield makeRequestWithSpinner<PokemonDetailedType>(options);
}
