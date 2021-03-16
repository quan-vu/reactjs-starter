import React, { Suspense, lazy } from "react";
import {
  Switch,
  Route,
  Link,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
// By default, router "/" must be import, it can not use lazyload
import routes from 'src/routes';
import { appState } from 'src/states/appState';

import FrontLayout from 'src/components/Layout/FrontLayout';
import DashboardLayout from 'src/components/Layout/DashboardLayout';

export default function App() {

  let location = useLocation();
  let isAdminSite = useRouteMatch("/admin/*");

  const [appConfig, setAppConfig] = useRecoilState(appState);
  
  console.log("appConfig:", appConfig);
  console.log("location:", location);
  console.log("isAdminSite:", isAdminSite);
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route>
          { location.pathname === '/'
          // appConfig.defaultLayout === 'Dashboard'
            ? 
            <FrontLayout>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  {routes.map((route) => (
                    <RouteWithSubRoutes key={route.key} {...route} />
                  ))}
                </Switch>
              </Suspense>
            </FrontLayout>
            :
            <DashboardLayout>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  {routes.map((route) => (
                    <RouteWithSubRoutes key={route.key} {...route} />
                  ))}
                </Switch>
              </Suspense>
            </DashboardLayout>
          }
        </Route>
      </Switch>
    </Suspense>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => (
        <>
          <route.component
            {...props}
            layout={route.layout}
            routes={route.routes}
          />
        </>
      )}
    />
  );
}

