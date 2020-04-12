import Vue from 'vue'
import Component from 'vue-class-component'
import GroupEdit from './edit'

@Component
class index extends Vue {
  searchInput = ''
  groups = groups
  groupId = ''
  dialogVisible = false

  handleClose() {
    this.$confirm('确认关闭？')
      .then(() => {
        this.dialogVisible = false
      })
  }
  open(groupId = '') {
    this.groupId = groupId
    this.dialogVisible = true
  }
  render(h) {
    return <div>
      {/* 筛选/交互按钮 */}
      <el-row type='flex' justify='space-between'>
        <el-col span={6}>
          <el-input placeholder="请输入内容" v-model={this.searchInput} class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col span={2}>
          <el-button type="success" onClick={() => { this.open() }}>新增用户</el-button>
        </el-col>
      </el-row>
      {/* 卡片 */}
      <div class='flex-row'>
        {
          this.groups.map(item => <el-card body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" />
            <div style="padding: 14px;">
              <span>{item.name}</span>
              <div class="bottom clearfix">
                <time class="time">{item.description}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>)
        }
      </div>
      <el-dialog
        title="提示"
        destroy-on-close
        on={{ 'update:dialogVisible': this.dialogVisible }}
        visible={this.dialogVisible}
        width="30%"
        before-close={this.handleClose}
      >
        <GroupEdit groupId={this.groupId} />
      </el-dialog>
    </div>
  }
}

export default index

const groups = [{
  gid: 'sssss',
  name: '管理员',
  description: '管理员用户'
}, {
  gid: 'sssss1',
  name: '测试用户1',
  description: '测试用户1'
}]