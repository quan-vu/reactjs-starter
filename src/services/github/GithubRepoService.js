import axios from 'axios';
import { GITHUB_APIS } from './github.config'

export default {
    getGithubRepos: async function() {
        try {
            const repos = await axios.get(GITHUB_APIS.USER_REPOS).then((response) => {
                const repos = response.data;
                return repos;
            });
            return repos;
        } catch (error) {
            throw error;
        }
    }
}