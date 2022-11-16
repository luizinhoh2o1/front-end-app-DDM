import axios from 'axios';

const baseURL = "http://192.168.0.190:7188";

export default api = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});