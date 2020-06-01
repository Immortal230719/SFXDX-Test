import { AppAction } from './interfaces';

import { IPagination } from './interfaces';
import { SET_CURRENT_PAGE } from './types';
import { PUT_PAGINATION } from 'sagas';

const initialState: IPagination = {
  count: 0,
  currentPage: 0,
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
    default:
      return state;
  }
}

export default reducer;
