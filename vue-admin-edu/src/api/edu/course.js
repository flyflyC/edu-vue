import request from '@/utils/request'
export default {
  // 添加课程信息
  addCourseInfo(courseInfo) {
    return request({
      url: `/eduService/course/addCourseInfo`,
      method: 'post',
      data: courseInfo
    })
  },
  //查询所有讲师
  getListTeacher() {
    return request({
      url: `/teacher/findAll`,
      method: 'get',
    })
  },
  //根据课程id查询课程信息
  getCourseInfoById(courseId) {
    return request({
      url: `/eduService/course/getCourseInfo/${courseId}`,
      method: 'get',
    })
  },
  //修改课程信息
  updateCourseInfo(courseInfo) {
    return request({
      url: `/eduService/course/updateCourseInfo`,
      method: 'post',
      data: courseInfo
    })
  },

}
