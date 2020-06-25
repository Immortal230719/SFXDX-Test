import React, { FC, ReactElement, useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router';
import { useSelector } from 'react-redux';
// import { selectPagination } from 'reducers';

// import { ScrollTopBtn, BackDrop } from 'components';
// import { usePrevious } from 'utils';
import { routes, MYROUTE } from './routes';

const currentRoutes = routes();

const renderRoutes = (arrOfRoutes: MYROUTE[]): ReactElement => (
  <Switch>
    {arrOfRoutes.map(({ path, exact, component }: MYROUTE) => (
      <Route key={path} path={path} component={component} exact={exact} />
    ))}
    <Redirect to="/" />
  </Switch>
);

const Pages: FC = () => {
  // const location = useLocation();
  // const prevLocation = usePrevious(location);

  // useEffect(() => {
  //   if (prevLocation?.pathname !== location.pathname) {
  //     console.log(prevLocation?.pathname, location.pathname);
  //   }
  // }, [location.pathname, prevLocation]);

  // const { backDrop } = useSelector(selectPagination);
  return (
    <>
      {/* <BackDrop show={backDrop} /> */}
      {renderRoutes(currentRoutes)}
      {/* <ScrollTopBtn /> */}
    </>
  );
};

export default Pages;
