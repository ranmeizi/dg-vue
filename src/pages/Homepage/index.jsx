import Vue from 'vue'
import Component from 'vue-class-component'
import API from '@/services/ex/API'

@Component
class index extends Vue {
  homepage = 'hahaha'
  mounted() {
    // 请求ex需要token的接口
    API.helloworld().then(res => {
      this.homepage = res.data.data.name
    })
  }
  render(h) {
    return <div>{this.homepage}</div>
  }
}

export default index
