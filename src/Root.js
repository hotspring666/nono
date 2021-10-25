import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, HashRouter, withRouter, useLocation } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { hot, setConfig } from 'react-hot-loader';
import store from './common/store';
import routeConfig from './common/routeConfig';
import { SnackbarProvider } from 'notistack';
import history from './common/history';
// import { initializePriceCache } from './features/web3/fetchPrice'

setConfig({
  logLevel: 'debug',
});

function renderRouteConfigV3(routes, contextPath) {
  // Resolve route config object in React Router v3.
  const children = []; // children component list

  const renderRoute = (item, routeContextPath) => {
    let newContextPath;
    if (/^\//.test(item.path)) {
      newContextPath = item.path;
    } else {
      newContextPath = `${routeContextPath}/${item.path}`;
    }
    newContextPath = newContextPath.replace(/\/+/g, '/');
    if (item.component && item.childRoutes) {
      const childRoutes = renderRouteConfigV3(item.childRoutes, newContextPath);
      children.push(<Route style={{ width: '80%' }} key={newContextPath} render={props => <item.component {...props}>{childRoutes}</item.component>} path={newContextPath} />);
    } else if (item.component) {
      children.push(<Route key={newContextPath} component={item.component} path={newContextPath} exact />);
    } else if (item.childRoutes) {
      item.childRoutes.forEach(r => renderRoute(r, newContextPath));
    }
  };

  routes.forEach(item => renderRoute(item, contextPath));

  // Use Switch so that only the first matched route is rendered.
  return <Switch>{children}</Switch>;
}

function _ScrollToTop(props) {
  const { pathname, search } = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(search);
    const y = params.get('y')
    if (y) {
      window.scrollTo(0, y);
    } else {
      window.scrollTo(0, 0);
    }

  }, [pathname]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

function Root() {
  const children = renderRouteConfigV3(routeConfig, '/');
  // initializePriceCache()
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <HashRouter>
          <SnackbarProvider>
            <ScrollToTop>
              {children}
            </ScrollToTop>
          </SnackbarProvider>
        </HashRouter>
      </ConnectedRouter>
    </Provider>
  );
}

export default hot(module)(Root);