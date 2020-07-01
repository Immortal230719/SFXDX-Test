export type MoveDetailedType = {
  moveId: number;
  name: string;
  power: number;
  generation: string;
  accuracy: number;
  damageClass: string;
  type: string;
  target: string;
  effects: string;
}


export const FETCH_DETAILED_MOVE_START = 'FETCH_DETAILED_MOVE_START';
type fetchDetailedMoveStart = {
  type: typeof FETCH_DETAILED_MOVE_START;
}

export const FETCH_DETAILED_MOVE_STOP = 'FETCH_DETAILED_MOVE_STOP';
type fetchDetailedMoveStop = {
  type: typeof FETCH_DETAILED_MOVE_STOP;
}

export const FETCH_DETAILED_MOVE_FILL = 'FETCH_DETAILED_MOVE_FILL';
export type fetchDetailedMoveFill = {
  type: typeof FETCH_DETAILED_MOVE_FILL;
  payload: MoveDetailedType;
}

export const FETCH_DETAILED_MOVE_ERROR = 'FETCH_DETAILED_MOVE_ERROR';
export type FetchDetailedMoveError = {
  type: typeof FETCH_DETAILED_MOVE_ERROR;
  error: true;
  payload: string;
};

export const FETCH_DETAILED_MOVE_ASYNC = 'FETCH_DETAILED_MOVE_ASYNC';
export type fetchDetailedMoveAsync = {
  type: typeof FETCH_DETAILED_MOVE_ASYNC;
  payload: string;
}

export type DetailedPokemonActionTypes=
  | fetchDetailedMoveStart
  | fetchDetailedMoveStop
  | fetchDetailedMoveFill
  | FetchDetailedMoveError
