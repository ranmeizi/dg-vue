import * as CryptoJS from 'crypto-js'

var key = CryptoJS.enc.Utf8.parse('a22086857d35dce5');
var iv = CryptoJS.enc.Utf8.parse("9b1e6cbf2973e3b1");

export function getAesPsw(psw) {
  return CryptoJS.AES.encrypt(psw, key, {
    mode: CryptoJS.mode.CBC,
    iv,
    padding: CryptoJS.pad.Pkcs7
  }).toString()
}