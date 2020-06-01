import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { routes, MYROUTE } from 'core';
import { useSelector } from 'react-redux';
import { selectPagination } from 'reducers';

import { ScrollTopBtn, BackDrop } from 'components';

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
  const { backDrop } = useSelector(selectPagination);
  return (
    <>
      <BackDrop show={backDrop} />
      {renderRoutes(currentRoutes)}
      <ScrollTopBtn />
    </>
  );
};

export default Pages;
