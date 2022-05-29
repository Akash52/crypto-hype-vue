import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.coincap.io/v2',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getCrypto: async () => {
    return await apiClient.get('/assets')
  },
}
