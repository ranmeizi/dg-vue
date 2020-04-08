import axios from './index'

export default {
  login({
    uname,
    psw
  }) {
    const url = 'api/player/login'
    const params = {
      uname,
      psw
    }
    return axios.get(url, {
      params
    })
  },
  regist({
    uname,
    psw
  }) {
    const url = 'api/player/regist'
    const data = {
      uname,
      psw
    }
    return axios.post(url, data)
  }
}