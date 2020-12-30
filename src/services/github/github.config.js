// Github APi Endpoints
const githubUser = process.env.REACT_APP_GITHUB_USER || 'quan-vu'

export const GITHUB_APIS = {
    USER_REPOS: `https://api.github.com/users/${githubUser}/repos`
};

export const GITHUB_CONFIG = {}