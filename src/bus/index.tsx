import React, { FC, ReactElement } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router';
import { routes, MYROUTE } from './routes';
import { ScrollTopBtn } from '../components';

const currentRoutes = routes();

const renderRoutes = (arrOfRoutes: MYROUTE[]): ReactElement => (
  <Switch>
    {arrOfRoutes.map(({ path, exact, component }: MYROUTE) => (
      <Route key={path} path={path} component={component} exact={exact} />
    ))}
    <Redirect to="/" />
  </Switch>
);

const Pages: FC = () => (
  <>
    {renderRoutes(currentRoutes)}
    <ScrollTopBtn />
  </>
);

export default Pages;
