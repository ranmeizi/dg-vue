const Config = {

}

//方便运行时态对配置修改
if (window && window.MYCONFIG) {
  Object.assign(Config, window.MYCONFIG)
}

export default Config