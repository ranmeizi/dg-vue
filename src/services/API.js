import axios from './index'

export default {
  getToken({
    uname,
    psw
  }) {
    const url = '/token'
    const options = {
      data: {
        uname,
        psw
      }
    }
    return axios.get(url, options)
  }
}