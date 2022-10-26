import axios from '../utils/axios'

export function getnewgoods () {
  return axios.get('/api/getnewgoods')
}
