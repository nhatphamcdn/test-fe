import {
  setAuthInHeader
} from '../api'

const mutations = {
  LOGIN(state, info) {
    if (!info || !info.accessToken) return
    state.token = info.accessToken
    localStorage.setItem('token', info.accessToken)
    localStorage.setItem('user', JSON.stringify(info.user))
    setAuthInHeader(info.accessToken)
  },
  LOGOUT(state) {
    state.token = null
    delete localStorage.token
    delete localStorage.user
    setAuthInHeader(null)
  },
}

export default mutations
