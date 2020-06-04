import { AnyAction } from 'redux';
import { PUT_SINGLE_MOVE } from './reducerTypes';
import { ISingleMove } from './interfaces';

const initialState: ISingleMove = {
  moveId: 0,
  name: '',
  power: 0,
  generation: '',
  accuracy: 0,
  damageClass: '',
  type: '',
  target: '',
  effects: '',
};

function reducer(
  state = initialState,
  { type, payload }: AnyAction
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
