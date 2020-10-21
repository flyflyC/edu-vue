import request from '@/utils/request'
export default {
  //生成图表数据
  creatStaDate(day) {
    return request({
      url: `/staService/registerCount/${day}`,
      method: 'get'
    })
  },
  //获取统计数据
  showStaDate(searchObj) {
    return request({
      url: `/staService/showDate/${searchObj.type}/${searchObj.begin}/${searchObj.end}`,
      method: 'get'
    })
  },
}
