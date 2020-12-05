import axios from 'axios'
import { BASE_URL, AUTH_API_CONFIG, LOGIN_API_CONFIG } from './config'

export default {
    
    getUserList: async function() {
        try {
            const response = await axios.get(BASE_URL+'/api/users', AUTH_API_CONFIG);
            return response;
        } catch (error) {
            throw error;
        }
    },

    getUser: async function(id) {
        try {
            const response = await axios.get(BASE_URL+'/api/users'+id, AUTH_API_CONFIG);
            return response;
        } catch (error) {
            throw error;
        }
    }

}