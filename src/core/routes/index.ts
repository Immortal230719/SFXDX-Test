import { FC } from 'react';

import Main from 'pages/Main';
import PokemonDetailed from 'pages/PokemonDetailed';

export interface MYROUTE {
  path: string;
  component: FC;
  exact: boolean;
}

export const routes = (): MYROUTE[] => {
  return [
    {
      path: '/',
      component: Main,
      exact: true,
    },
    {
      path: '/pokemon/:name',
      component: PokemonDetailed,
      exact: false,
    },
  ];
};
