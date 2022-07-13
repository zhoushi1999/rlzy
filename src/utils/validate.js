/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername (str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}
/**
 *
 * @param {验证手机号，可以多个使用写在这里} mobile
 * @returns
 */
export function valiMobile (mobile) {
  const reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
  return reg.test(mobile)
}
