import axios from 'axios';
import { GITHUB_APIS } from './github.config'


async function getGithubRepos() {
    try {
        const response = await axios.get(GITHUB_APIS.USER_REPOS);
        if (response.status !== 200 && !response.data){
            return null;
        }
        return response.data;
    } catch (error) {
        throw error;
    }
}

const GithubRepoService = {
    getGithubRepos,
}

export default GithubRepoService;
