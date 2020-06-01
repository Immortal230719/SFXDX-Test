import { AppAction } from 'reducers';

import * as types from './types';

// Page Main
export const setCurrentPage = (selectedPage: number): AppAction => ({
  type: types.SET_CURRENT_PAGE,
  payload: selectedPage,
});
