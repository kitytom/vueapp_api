import axios from 'axios'
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:5500' : 'http://127.0.0.1:5500'
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.token = localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'

export default axios

// export function get (url, params) {
//   return instant.get(url, {
//     params
//   })
// }

// export function post (url, data) {
//   return instant.post(url, data)
// }

// export function del (url) {
//   return instant.delete(url)
// }
