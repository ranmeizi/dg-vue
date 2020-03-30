import { Tabs, TabPane } from 'element-ui';

export default {
  data: () => ({
    uname: '',
    paw: ''
  }),
  render(h) {
    return <Tabs type="border-card">
      <TabPane label="登录">登录</TabPane>
      <TabPane label="注册">注册</TabPane>
    </Tabs>
  }
}