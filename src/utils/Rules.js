export function R_PSW(rule, value, callback) {
  const reg=new RegExp('.{8,}')
  if (!reg.test(value)) {
    callback(new Error('密码8位以上'))
  } else {
    callback()
  }
}

export function R_UNAME(rule, value, callback) {
  const reg=new RegExp('.{8,}')
  if (!reg.test(value)) {
    callback(new Error('用户名8位以上'))
  } else {
    callback()
  }
}

export function R_CHECKPSW(rule, value, callback) {
  if (value === '') {
    callback(new Error('请再次输入密码'));
  } else if (value !== this.ruleForm.psw) {
    callback(new Error('两次输入密码不一致!'));
  } else {
    callback();
  }
}
