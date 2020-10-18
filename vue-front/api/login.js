import request from '../utils/request'

export default {
  //登录
  userLogin(user) {
    return request({
      url: `/ucenterService/login`,
      method: 'post',
      data: user
    })
  },
  //根据token获取用户信息
  getLoginUserInfo(){
    return request({
      url: `/ucenterService/getUserInfo`,
      method: 'get'
    })

  }
}
