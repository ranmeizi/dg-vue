import axios from '../index'

export default {
  helloworld() {
    const url = 'api/ex/player/helloworld'
    return axios.get(url)
  }
}