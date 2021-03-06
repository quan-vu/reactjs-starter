import React, { Suspense, lazy } from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";


// By default, router "/" must be import, it can not use lazyload
import FrontLayout from 'src/components/Layout/FrontLayout';
import routes from 'src/routes';

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route>
          <FrontLayout>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                {routes.map((route) => (
                  <RouteWithSubRoutes key={route.key} {...route} />
                ))}
              </Switch>
            </Suspense>
          </FrontLayout>
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

