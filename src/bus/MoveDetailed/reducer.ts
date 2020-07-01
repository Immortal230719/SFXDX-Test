import {
  FETCH_DETAILED_MOVE_START,
  FETCH_DETAILED_MOVE_STOP,
  FETCH_DETAILED_MOVE_FILL,
  FETCH_DETAILED_MOVE_ERROR,
  DetailedPokemonActionTypes,
  MoveDetailedType,
} from './types';

export type DetailedMoveState = {
  data: MoveDetailedType;
  isFetching: boolean;
  error: boolean;
}

const initialState: DetailedMoveState = {
  data: {
    moveId: 0,
    name: '',
    power: 0,
    generation: '',
    accuracy: 0,
    damageClass: '',
    type: '',
    target: '',
    effects: '',
  },
  isFetching: false,
  error: false,
};

export const detailedMoveReducer = (
  state = initialState,
  action: DetailedPokemonActionTypes,
): DetailedMoveState => {
  switch (action.type) {
    case FETCH_DETAILED_MOVE_START:
      return { ...state, isFetching: true, error: false };
    case FETCH_DETAILED_MOVE_FILL:
      return {
        ...state,
        data: { ...action.payload },
        isFetching: false,
        error: false,
      };
    case FETCH_DETAILED_MOVE_STOP:
      return { ...state, isFetching: false };
    case FETCH_DETAILED_MOVE_ERROR:
      return {
        ...state,
        error: Boolean(action.payload),
      };
    default:
      return state;
  }
};
