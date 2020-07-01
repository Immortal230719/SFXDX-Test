import { FC } from 'react';

import { Pokemons } from '../pokemons';
import { PokemonDetailed } from '../PokemonDetailed';
import { MoveDetailed } from '../MoveDetailed';

export type MYROUTE = {
  path: string;
  component: FC;
  exact: boolean;
}

export const routes = (): Array<MYROUTE> => [
  {
    path: '/',
    component: Pokemons,
    exact: true,
  },
  {
    path: '/pokemon/:detailed',
    component: PokemonDetailed,
    exact: false,
  },
  {
    path: '/moves/:id',
    component: MoveDetailed,
    exact: false,
  },
];
