import { FC } from 'react';

import Main from 'pages/Main';

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
  ];
};
