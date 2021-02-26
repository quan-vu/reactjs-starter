import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



function TacosView({ routes }) {
    return (
      <div>
        <h2>Tacos</h2>
        <ul>
          {routes.map((route) => (
            <li key={route.key}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
  
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    );
  }

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  }
  
export default TacosView;
