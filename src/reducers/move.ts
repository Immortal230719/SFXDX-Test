import { AppAction } from './interfaces';

import { ISingleMove } from './interfaces';
import { PUT_SINGLE_MOVE } from 'sagas';

const initialState: ISingleMove = {
  moveId: 0,
  name: '',
  power: 0,
  generation: '',
  accuracy: 0,
  damageClass: '',
  type: '',
  target: '',
  entries: [],
};

function reducer(
  state = initialState,
  { type, payload }: AppAction
): ISingleMove {
  switch (type) {
    case PUT_SINGLE_MOVE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}

export default reducer;
