import * as CryptoJS from 'crypto-js'
import API from '@/services/API'

var key = CryptoJS.enc.Utf8.parse('a22086857d35dce5');
var iv = CryptoJS.enc.Utf8.parse("9b1e6cbf2973e3b1");

export function doLogin({ uname, psw }) {
  let encryptPsw = CryptoJS.AES.encrypt(psw, key, {
    mode: CryptoJS.mode.CBC,
    iv,
    padding: CryptoJS.pad.Pkcs7
  }).toString()
  API.login({
    uname, psw: encryptPsw
  })
}
