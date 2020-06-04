import { AnyAction } from 'redux';
import {
  SET_CURRENT_PAGE,
  PUT_PAGINATION,
  TOGGLE_BACKDROP,
} from './reducerTypes';
import { IPagination } from './interfaces';

const initialState: IPagination = {
  count: 0,
  currentPage: 0,
  backDrop: false,
};

function reducer(
  state = initialState,
  { type, payload }: AnyAction
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
        backDrop: payload,
      };
    default:
      return state;
  }
}

export default reducer;
