import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api', // your Laravel backend URL
    withCredentials: true,
});

export const login = (data: { email: string; password: string }) => api.post('/login', data);
export const register = (data: { name: string; email: string; password: string }) => api.post('/register', data);

export default api;
