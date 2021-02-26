import React, { Suspense, lazy } from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import css from './App.scss';

// By default, router "/" must be import, it can not use lazyload
import Layout from './shared/components/Layouts';


// Lazy load component
const SandwichesView = lazy(() => import("./views/SandwichesView"));
const TacosView = lazy(() => import("./views/TacosView"));
const TacosBusView = lazy(() => import("./views/TacosBusView"));
const TacosCartView = lazy(() => import("./views/TacosCartView"));
const TopicsView = lazy(() => import("./views/TopicsView"));
const HomeView = lazy(() => import("./views/HomeView"));

const SamplePage = lazy(() => import("./pages/SamplePage"));

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routes = [
  {
    path: "/",
    name: "Home",
    key: "ROOT",
    exact: true,
    layout: true,
    component: HomeView
  },
  {
    path: "/sandwiches",
    name: "Sandwiches",
    key: "SANDWICHES",
    exact: true,
    layout: true,
    component: SandwichesView
  },
  {
    path: "/tacos",
    name: "Tacos (demo nested static routes)",
    key: "TACOS",
    exact: false,
    layout: true,
    component: TacosView,
    routes: [
      {
        path: "/tacos/bus",
        name: "Bus",
        key: "TACOS_BUS",
        component: TacosBusView
      },
      {
        path: "/tacos/cart",
        name: "Cart",
        key: "TACOS_CART",
        component: TacosCartView
      }
    ]
  },
  {
    path: "/topics",
    name: "Topics  (demo nested routes with params :topicId)",
    key: "TOPICS",
    exact: false,
    layout: true,
    component: TopicsView,
  },
  {
    path: "/samples",
    name: "Samples",
    key: "SAMPLES",
    exact: false,
    layout: true,
    component: SamplePage,
  },  
];

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route>
          <Layout>
            <ul className={css.AppMenu}>
              {routes.map((route) => (
                <li key={route.key}>
                  <Link to={route.path}>{route.name}</Link>
                </li>
              ))}
            </ul>

            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                {routes.map((route) => (
                  <RouteWithSubRoutes key={route.key} {...route} />
                ))}
              </Switch>
            </Suspense>
          </Layout>
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

