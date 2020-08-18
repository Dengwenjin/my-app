import request from '@/utils/request.js'

/**
 * 用户登录
 * @param {*} mobile 手机号
 * @param {*} code 验证码
 */
export const login = ({ mobile, code }) => {
  return request({
    method: 'post',
    url: '/app/v1_0/authorizations',
    data: {
      mobile,
      code
    }
  })
}
