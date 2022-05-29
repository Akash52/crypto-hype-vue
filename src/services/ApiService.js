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
<<<<<<< HEAD
  //make a request to the api & also handle errors

  getCrypto: async () => {
    return await apiClient.get('/assets').catch((error) => {
      console.error(error)
    })
=======
  getCrypto: async () => {
    return await apiClient.get('/assets')
>>>>>>> a458bc6e89bbc7c32c284fd9b5478d5ad453176d
  },
}
