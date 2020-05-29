import { AnyAction } from 'redux';

import { IReducer } from './interfaces';
import * as types from './types';

const initialState: IReducer = {};

function reducer(state = initialState, action: AnyAction): IReducer {
  switch (action.type) {
    case types.CREATE_GRID:
      return {
        ...state,
        pokemons: 1,
      };
    default:
      return state;
  }
}

export default reducer;
