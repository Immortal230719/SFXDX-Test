import reducer from './reducer';

export * from './actions';
export * from './interfaces';
export * from './types';

export type IReducer = ReturnType<typeof reducer>;
export default reducer;
