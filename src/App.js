import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

// State
import { useSetRecoilState } from 'recoil';
import { userState } from './states/userState';

// Components
// import List from './components/List';
// import withListLoading from './components/withListLoading';

// services
import GithubRepoService from './services/github/GithubRepoService';

// pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TopicPage from './pages/TopicPage';


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
        </div>
      </Router>
  );
}

export default App;