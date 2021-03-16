import React from 'react';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";

function BuilderPage({ routes }) {

    return (
      <div>
        <h2>Builder</h2>
        
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
  
export default BuilderPage;
