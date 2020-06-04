import { AnyAction } from 'redux';

import * as types from './reducerTypes';

// Page Main
export const setCurrentPage = (selectedPage: number): AnyAction => ({
  type: types.SET_CURRENT_PAGE,
  payload: selectedPage,
});
