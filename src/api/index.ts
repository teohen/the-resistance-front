import axios from 'axios';

const host: string =  process.env.NEXT_PUBLIC_ENV === 'development' ? process.env.NEXT_PUBLIC_DEV_HOST : 'producao'
const port: string = process.env.NEXT_PUBLIC_ENV === 'development' ? process.env.NEXT_PUBLIC_DEV_PORT : '1'


const api = axios.create({
    baseURL: `http://${host}:${port}`
});


export default api;
