import { AppAction } from './interfaces';

import { IPagination } from './interfaces';
import { SET_CURRENT_PAGE } from './types';
import { PUT_PAGINATION, TOGGLE_BACKDROP } from 'sagas';

const initialState: IPagination = {
  count: 0,
  currentPage: 0,
  backDrop: false,
};

function reducer(
  state = initialState,
  { type, payload }: AppAction
): IPagination {
  switch (type) {
    case PUT_PAGINATION:
      return {
        ...state,
        ...payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    case TOGGLE_BACKDROP:
      return {
        ...state,
        backDrop: !state.backDrop,
      };
    default:
      return state;
  }
}

export default reducer;
