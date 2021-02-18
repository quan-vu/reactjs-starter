import React, { Fragment, Suspense, lazy } from 'react';
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Pace from "./shared/components/Pace";

// State
import { useSetRecoilState } from 'recoil';
import { userState } from './states/userState';

// Components
// import List from './components/List';
// import withListLoading from './components/withListLoading';

// services
import GithubRepoService from './services/github/GithubRepoService';


const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const TopicPage = lazy(() => import("./pages/TopicPage"));


function App() {

  const setUser = useSetRecoilState(userState);

  React.useEffect(() => {
    getProfile();
    getGithubRepos();
  }, []);

  const getProfile = () => {
    const fakeUser = {
      id: 1,
      fullname: "User 1",
      avatar: "https://avatars.githubusercontent.com/u/46224928?s=460&u=d42fda2f2329da92494d01c8dda613c5887f0309&v=4"
    }
    setUser(fakeUser);
  }

  const getGithubRepos = async () => {
    const repos = await GithubRepoService.getGithubRepos();
    console.log(repos);
  }

  return (
      <Router>
        <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Pace color={theme.palette.primary.light} />

        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          </div>

        <Suspense fallback={<Fragment />}>
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/topics">
              <TopicPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
          </Suspense>
        </MuiThemeProvider>
      </Router>
  );
}

export default App;