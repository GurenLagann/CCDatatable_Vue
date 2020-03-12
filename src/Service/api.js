import axios from 'axios'

export const Api = axios.create({
baseUrl: 'https://jsonplaceholder.typicode.com/posts',
})
