import request from '../utils/request'

export default {
  //生成订单
  creatOrder(courseId) {
    return request({
      url: `/orderService/creatOrder/${courseId}`,
      method: 'post'
    })
  },
  //查询订单信息
  getOrderInfo(orderNo){
    return request({
      url: `/orderService/getOrderInfo/${orderNo}`,
      method: 'post'
    })
  },
  //生成支付二维码
  creatNative(orderNo){
    return request({
      url: `orderService/creatNative/${orderNo}`,
      method: 'get'
    })
  },
  queryPayStatus(orderNo){
    return request({
      url: `orderService/queryPayStatus/${orderNo}`,
      method: 'get'
    })
  }
}
