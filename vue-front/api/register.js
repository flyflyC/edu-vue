import request from '../utils/request'

export default {
  //获取手机验证码
  sendCode(phone) {
    return request({
      url: `/eduMsm/send/${phone}`,
      method: 'get'
    })
  },
  registerMember(params){
    return request({
      url: `/ucenterService/register`,
      method: 'post',
      data: params
    })

  }
}
