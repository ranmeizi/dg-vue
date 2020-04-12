import Vue from 'vue'
import Component from 'vue-class-component'

@Component
class index extends Vue {
  isCollapse = false
  handleOpen(key, keyPath) {
    console.log(key, keyPath);
  }
  handleClose(key, keyPath) {
    console.log(key, keyPath);
  }
  handelSelect(key) {
    this.$router.push(key)
  }
  render(h) {
    const { isCollapse } = this
    return <el-menu
      class="default-aside-menu"
      onOpen={this.handleOpen}
      onClose={this.handleClose}
      onSelect={this.handelSelect}
      collapse={isCollapse}
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">系统管理</span>
        </template>
        <el-menu-item index="/User">用户管理</el-menu-item>
        <el-menu-item index="/Group">角色管理</el-menu-item>
        <el-menu-item index="/Resource">权限管理</el-menu-item>
      </el-submenu>
      <i class={isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'} onClick={() => {
        this.isCollapse = !isCollapse
      }} />
    </el-menu>
  }
}

export default index
