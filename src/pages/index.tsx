import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { routes, MYROUTE } from 'core';

const currentRoutes = routes();

const renderRoutes = (arrOfRoutes: MYROUTE[]) => {
  return (
    <Switch>
      {arrOfRoutes.map(({ path, exact, component }: MYROUTE) => {
        return (
          <Route key={path} path={path} component={component} exact={exact} />
        );
      })}
      <Redirect to="/" />
    </Switch>
  );
};

const Pages: FC = () => {
  return <>{renderRoutes(currentRoutes)}</>;
};

export default Pages;
