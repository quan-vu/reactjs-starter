import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { getAccessToken } from '../api/auth';
import Layout from '../containers/Layouts';

const Dashboard = lazy(() => import('../containers/Dashboard'));
const Login = lazy(() => import('../containers/Authentication/Login'));

//
export const ROUTES = [
  {
    path: '/login',
    key: 'LOGIN',
    exact: true,
    // midleware: [],
    layout: false,
    component: (props) => <Login {...props} />,
  },
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    // midleware: ['auth'],
    layout: true,
    component: Dashboard,
  },
];

/**
 * @param {string} key Ex: LOGIN
 * @return {string} path Ex: /login
 */
export function getPath(key) {
  try {
    const routes = [];

    ROUTES.forEach((item) => {
      if (item?.routes) {
        item.routes.forEach((subItem) => routes.push(subItem));
      } else {
        routes.push(item);
      }
    });

    const route = ROUTES.find((item) => item.key === key);

    return route.path;
  } catch (error) {
    return '404';
  }
}

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
function RouteWithSubRoutes(route) {
  const location = useLocation();
  const token = getAccessToken();

  if (route?.midleware && Array.isArray(route.midleware)) {
    /**
     * Middleware Authentication
     */
    if (route.midleware.includes('auth') && !token) {
      return <Redirect to={getPath('LOGIN')} />;
    }

    /**
     * Auto redirect to ROOT nếu có token, khi truy cập vào Login Page
     */
    if (token && getPath('LOGIN') === location.pathname) {
      return <Redirect to={getPath('ROOT')} />;
    }
  }

  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => (
        <route.component
          {...props}
          layout={route.layout}
          routes={route.routes}
        />
      )}
    />
  );
}

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export function RenderRoutes({ routes }) {
  const routesWithLayout = routes.filter((item) => item.layout);
  const routesWithoutLayout = routes.filter((item) => !item.layout);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {/* ROUTE NONE LAYOUT */}
        {routesWithoutLayout.map((route) => (
          <RouteWithSubRoutes key={route.key} {...route} />
        ))}

        {/* ROUTE WITH LAYOUT */}
        <Route>
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                {routesWithLayout.map((route) => (
                  <RouteWithSubRoutes key={route.key} {...route} />
                ))}
              </Switch>
            </Suspense>
          </Layout>
        </Route>

        <Route component={() => <h1>Not Found!</h1>} />
      </Switch>
    </Suspense>
  );
}
