import { login, logout, getInfo } from '@/api/user'
import { send } from '@/api/form'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
    return {
        token: getToken(),
        name: '',
        enable: '',
        avatar: ''
    }
}

const state = getDefaultState()

const mutations = {
    RESET_STATE: (state) => {
        Object.assign(state, getDefaultState())
    },
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_ENABLE: (state, enable) => {
        state.enable = enable
        console.log("enable" + enable)
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    }
}

const actions = {
    //user login
    login ({ commit }, userInfo) {
        //解构赋值获取值
        const { username, password } = userInfo
        return new Promise((resolve, reject) => {
          login({ username: username.trim(), password: password }).then(response => {
            const { data } = response
            commit('SET_TOKEN', data.token) 
            setToken(data.token)
            resolve()
          }).catch(error => {
            reject(error)
          })
        })
      }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  