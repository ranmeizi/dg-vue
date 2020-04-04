import axios from './index'

export default {
  login({
    uname,
    psw
  }) {
    const url = 'v1/player/login'
    const data = {
      uname,
      psw
    }
    return axios.get(url, {
      data
    })
  },
  regist({
    uname,
    psw
  }) {
    const url = 'v1/player/regist'
    const data = {
      uname,
      psw
    }
    return axios.post(url, data)
  }
}