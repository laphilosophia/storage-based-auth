const LOGIN = "LOGIN"
const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGOUT = "LOGOUT"

export const state = () => {
  return {
    isLoggedIn: process.browser ? localStorage.getItem('token') : false
  }
}

export const mutations = {
  [LOGIN]: (state) => {
    state.pending = true
  },
  [LOGIN_SUCCESS]: (state) => {
    state.isLoggedIn = true
    state.pending = false
  },
  [LOGOUT]: (state) => {
    state.isLoggedIn = false
  }
}

export const getters = {
  isLoggedIn: (state) => {
    return state.isLoggedIn
  }
}

export const actions = {
  login ({ state, commit, rootState }, creds) {
    commit(LOGIN)

    return new Promise(resolve => {
      setTimeout(() => {
        if (process.browser) {
          localStorage.setItem('token', Math.random().toString(36).substr(0, 36))
        }

        commit(LOGIN_SUCCESS)

        resolve()
      }, 1000)
    })
  },
  logout({ commit }) {
    if (process.browser) {
      localStorage.removeItem('token')
    }

    commit(LOGOUT)
  }
}