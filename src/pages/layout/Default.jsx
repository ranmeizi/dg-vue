import Vue from 'vue'
import Component from 'vue-class-component'
import Aside from '@/components/DefaultLayout/Aside'

@Component
class index extends Vue {
  title = '首页'
  beforeUpdate() {
    this.title = this.$route?.meta?.title
  }

  goBack() {
    this.$router.go(-1)
  }
  render(h) {
    return <el-container class='default-layout'>
      <el-header class='default-header' style={{ height: '100px', background: 'red' }}>Header</el-header>
      <el-container style={{ height: 'calc(100vh - 100px)' }}>
        <el-aside class='default-aside' style={{ width: 'initial' }}>
          <Aside />
        </el-aside>
        <el-main class='default-view'>
          <el-page-header onBack={this.goBack} content={this.title} />
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  }
}

export default index
