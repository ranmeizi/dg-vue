import Vue from 'vue'
import Component from 'vue-class-component'
import { Tabs, TabPane } from 'element-ui'
import Login from './Login'
import Regist from './Regist'

@Component
class index extends Vue {
  render(h) {
    return <Tabs type="border-card">
      <TabPane label="登录"><Login /></TabPane>
      <TabPane label="注册"><Regist /></TabPane>
    </Tabs>
  }
}

export default index
