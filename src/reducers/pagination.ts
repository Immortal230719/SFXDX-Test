import { AppAction } from './interfaces';

import { IPagination } from './interfaces';
import { PUT_PAGINATION } from 'sagas';

const initialState: IPagination = {
  count: 0,
  next: '',
  previous: null,
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
    default:
      return state;
  }
}

export default reducer;
