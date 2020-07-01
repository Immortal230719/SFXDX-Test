import {
  FETCH_DETAILED_MOVE_START,
  FETCH_DETAILED_MOVE_STOP,
  FETCH_DETAILED_MOVE_FILL,
  FETCH_DETAILED_MOVE_ASYNC,
  FETCH_DETAILED_MOVE_ERROR,
  fetchDetailedMoveAsync,
  fetchDetailedMoveFill,
  DetailedPokemonActionTypes,
  FetchDetailedMoveError,
  MoveDetailedType,
} from './types';

export function StartFetchingDetailedMove(): DetailedPokemonActionTypes {
  return {
    type: FETCH_DETAILED_MOVE_START,
  };
}

export function StopFetchingDetailedMove(): DetailedPokemonActionTypes {
  return {
    type: FETCH_DETAILED_MOVE_STOP,
  };
}

export function setFetchingDetailedMoveError(payload: string): FetchDetailedMoveError {
  return {
    type: FETCH_DETAILED_MOVE_ERROR,
    error: true,
    payload,
  };
}

export function FillDetailedMove(data: MoveDetailedType): fetchDetailedMoveFill {
  return {
    type: FETCH_DETAILED_MOVE_FILL,
    payload: data,
  };
}


export function FetchDetailedMoveAsync(name: string): fetchDetailedMoveAsync {
  return {
    type: FETCH_DETAILED_MOVE_ASYNC,
    payload: name,
  };
}
