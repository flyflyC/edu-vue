import request from '@/utils/request'
export default {
  //2 课程列表（树形分级展示）
  getAllSubjectList(current,limit,teacherQuery) {
    return request({
      url: `/teacher/eduSubject/getAllSubject`,
      method: 'get',
    })
  }

}
