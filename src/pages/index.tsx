import React, { FC, useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router';
import { routes, MYROUTE } from 'core';
import { useSelector } from 'react-redux';
import { selectPagination } from 'reducers';

import { ScrollTopBtn, BackDrop } from 'components';
import { usePrevious } from 'utils';

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
  const location = useLocation();
  const prevLocation = usePrevious(location);

  useEffect(() => {
    if (prevLocation?.pathname !== location.pathname) {
      console.log(prevLocation?.pathname, location.pathname);
    }
  }, [location.pathname, prevLocation]);

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
