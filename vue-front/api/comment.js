import request from '../utils/request'

export default {

  getPageList(page, limit, courseId) {
    return request({
      url: `/eduService/comment/pageComment/${page}/${limit}/${courseId}`,
      method: 'get',
      //params: {courseId}
    })
  },

  addComment(comment) {

    return request({
      url: `/eduService/comment/addComment`,
      method: 'post',
      data: comment
    })
  }
}
