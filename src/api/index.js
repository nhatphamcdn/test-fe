import axios from 'axios'
import router from '../router'

const DOMAIN = 'http://66.42.54.241:3030/api'
const UNAUTHORIZED = 401
const onUnauthorized = () => {
  router.push('/login')
}

const request = (method, url, data) => {
  return axios({
      method,
      url: DOMAIN + url,
      data
    }).then(result => result.data)
    .catch(result => {
      const {
        status
      } = result.response
      if (status === UNAUTHORIZED) onUnauthorized()
      throw result.response
    })
}

export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null;
}

// 인증 API
export const auth = {
  login(email, password) {
    return request('post', '/auth/sign-in', {
      email,
      password
    })
  }
}
