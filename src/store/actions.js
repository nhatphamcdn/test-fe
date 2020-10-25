import * as api from '../api'

const actions = {
  LOGIN({
    commit
  }, {
    email,
    password
  }) {
    return api.auth.login(email, password)
      .then(({
        accessToken,
        user
      }) => commit('LOGIN', {
        accessToken,
        user
      }))
  },
}

export default actions
