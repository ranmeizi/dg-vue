import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    propGroupId: String //角色id
  }
})
class index extends Vue {
  groupData = {
    id: '',
    group: '',
    description: '',
    created_at: null,
    updated_at: null
  }
  rules = {
    group: [
      { required: true, message: '请输入角色名称', trigger: 'blur' },
      { max: 20, message: '长度20个字符以内', trigger: 'blur' }
    ],
    description: [
      { max: 200, message: '长度200个字符以内', trigger: 'blur' }
    ]
  }
  roleData = []
  mounted() {
    // 新建没有groupId,编辑时有ID去获取数据
    this.propGroupId && this.getGroupData()
    // 获取权限数据
    this.getRoleData()
  }
  // 获取角色数据
  getGroupData() {

  }
  // 获取权限数据
  getRoleData() {

  }
  onSubmit() {

  }
  render(h) {
    return <div class='flex-column'>
      {/* 表单 */}
      <div class='flex-row'>
        {/* form */}
        <el-form props={{ model: this.groupData }} status-icon rules={this.rules} ref="GroupForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="角色名称" prop="group">
            <el-input v-model={this.groupData.group}></el-input>
          </el-form-item>
          <el-form-item label="角色描述" prop="description">
            <el-input type="textarea" v-model={this.groupData.description}></el-input>
          </el-form-item>
        </el-form>
        {/* tree */}
      </div>
      {/* 按钮组 */}
      <div>
        <el-button type="primary">保存</el-button>
        <el-button>取消</el-button>
      </div>
    </div>
  }
}

export default index
