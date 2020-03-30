import Vue from 'vue'
import Component from 'vue-class-component'

@Component
class index extends Vue {
  ruleForm = {
    pass: '',
    checkPass: '',
    age: ''
  }
  rules = {
    pass: [
      { validator: validatePass.bind(this), trigger: 'blur' }
    ],
    checkPass: [
      { validator: validatePass2.bind(this), trigger: 'blur' }
    ],
    age: [
      { validator: checkAge.bind(this), trigger: 'blur' }
    ]
  }

  submitForm(formName) {
    this.$refs[formName].validate((valid) => {
      if (valid) {
        alert('submit!');
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }
  resetForm(formName) {
    this.$refs[formName].resetFields();
  }
  render(h) {
    return <el-form model={this.ruleForm} status-icon rules={this.rules} ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model={this.ruleForm.pass} autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model={this.ruleForm.checkPass} autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model={this.ruleForm.age}></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" on-click={() => this.submitForm('ruleForm')}>提交</el-button>
        <el-button on-click={() => this.resetForm('ruleForm')}>重置</el-button>
      </el-form-item>
    </el-form>
  }
}

export default index

var checkAge = function (rule, value, callback) {
  if (!value) {
    return callback(new Error('年龄不能为空'));
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('请输入数字值'));
    } else {
      if (value < 18) {
        callback(new Error('必须年满18岁'));
      } else {
        callback();
      }
    }
  }, 1000);
};
var validatePass = function (rule, value, callback) {
  if (value === '') {
    callback(new Error('请输入密码'));
  } else {
    if (this.ruleForm.checkPass !== '') {
      this.$refs.ruleForm.validateField('checkPass');
    }
    callback();
  }
};
var validatePass2 = function (rule, value, callback) {
  if (value === '') {
    callback(new Error('请再次输入密码'));
  } else if (value !== this.ruleForm.pass) {
    callback(new Error('两次输入密码不一致!'));
  } else {
    callback();
  }
};
