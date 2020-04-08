import Vue from 'vue'
import Component from 'vue-class-component'
import { R_PSW, R_UNAME } from '@/utils/Rules'
import { getAesPsw } from '../../Auth'
import API from '@/services/API'

@Component
class Login extends Vue {
  ruleForm = {
    uname: '',
    psw: ''
  }
  rules = {
    uname: [
      { validator: R_UNAME.bind(this), trigger: 'blur' }
    ],
    psw: [
      { validator: R_PSW.bind(this), trigger: 'blur' }
    ]
  }

  submitForm(formName) {
    this.$refs[formName].validate((valid) => {
      if (!valid) {
        return false;
      }
    });
    let { uname, psw } = this.ruleForm
    psw = getAesPsw(psw)
    API.login({
      uname,
      psw
    }).then(res => {
      if (res.data.success) {
        this.$message.success(res.data.msg);
        // 保存uinfo和token
        const { token, uinfo } = res.data.data
        localStorage.setItem('token', token)
        localStorage.setItem('uinfo', JSON.stringify(uinfo))
        // 跳转
        this.$router.push('/')
      } else {
        this.$message.error(res.data.msg);
      }
    })
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
      <el-form-item>
        <el-button type="primary" on-click={() => this.submitForm('ruleForm')}>登录</el-button>
        <el-button on-click={() => this.resetForm('ruleForm')}>重置</el-button>
      </el-form-item>
    </el-form>
  }
}

export default Login
