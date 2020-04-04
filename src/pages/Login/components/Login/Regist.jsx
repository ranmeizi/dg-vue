import Vue from 'vue'
import Component from 'vue-class-component'
import { R_PSW, R_UNAME, R_CHECKPSW } from '@/utils/Rules'

@Component
class Regist extends Vue {
  ruleForm = {
    uname: '',
    psw: '',
    checkPsw: ''
  }
  rules = {
    uname: [
      { validator: R_UNAME.bind(this), trigger: 'blur' }
    ],
    psw: [
      { validator: R_PSW.bind(this), trigger: 'blur' }
    ],
    checkPsw: [
      { validator: R_CHECKPSW.bind(this), trigger: 'blur' }
    ]
  }

  submitForm(formName) {
    this.$refs[formName].validate((valid) => {
      if (!valid) {
        return false
      }
    });
  }
  resetForm(formName) {
    this.$refs[formName].resetFields();
  }
  render(h) {
    return <el-form props={{ model: this.ruleForm }} status-icon rules={this.rules} ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="uname">
        <el-input v-model={this.ruleForm.uname} autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="psw">
        <el-input type="password" v-model={this.ruleForm.psw} autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="重复密码" prop="checkPsw">
        <el-input type="password" v-model={this.ruleForm.checkPsw} autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" on-click={() => this.submitForm('ruleForm')}>注册</el-button>
        <el-button on-click={() => this.resetForm('ruleForm')}>重置</el-button>
      </el-form-item>
    </el-form>
  }
}

export default Regist
