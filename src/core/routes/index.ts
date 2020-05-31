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
      path: '/pokemon/:pokemoname',
      component: PokemonDetailed,
      exact: false,
    },
    {
      path: '/moves/:id',
      component: PokemonDetailed,
      exact: false,
    },
  ];
};
