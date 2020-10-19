import request from '../utils/request'

export default {
  //获取多条件查询课程分页列表
  pageCoursePage(current,limit,courseObj) {
    return request({
      url: `/eduService/courseFront/pageCourseCondition/${current}/${limit}`,
      method: 'post',
      data: courseObj
    })
  },
  //获取课程分类信息
  getSubjectInfo() {
    return request({
      url: `/eduService/eduSubject/getAllSubject`,
      method: 'get'
    })
  },
  //通过小节id获取视频id
  getVideoById(id){
    return request({
      url: `/eduService/video/getVideoById/${id}`,
      method: 'get'
    })
  },
  //获取课程详情
  getCourseInfo(id){
    return request({
      url: `/eduService/courseFront/getCourseInfo/${id}`,
      method: 'get'
    })
  }
}
