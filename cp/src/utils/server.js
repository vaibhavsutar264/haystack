import axios from 'axios'
import { BASE_URL, REQ_HEADERS } from '../config'

const server = axios.create({
   baseURL: BASE_URL,
   headers: REQ_HEADERS,
})
// server.interceptors.add(() => {

// })

export default server
