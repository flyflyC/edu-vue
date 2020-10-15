import request from '@/utils/request'
export default {
  // 根据课程ID查询章节小节
  getChapterVideo(courseId) {
    return request({
      url: `/eduService/chapter/getChapterVideo/${courseId}`,
      method: 'get',

    })
  },

  // 添加章节
  addChapter(eduChapter) {
    return request({
      url: `/eduService/chapter/addChapter/`,
      method: 'post',
      data: eduChapter
    })
  },
  // 根据ID查询章节
  getChapterId(chapterId) {
    return request({
      url: `/eduService/chapter/getChapterById/${chapterId}`,
      method: 'get',

    })
  },
  // 修改章节
  updateChapter(eduChapter) {
    return request({
      url: `/eduService/chapter/updateChapter/`,
      method: 'post',
      data: eduChapter
    })
  },
  // 删除章节
  deleteChapter(chapterId) {
    return request({
      url: `/eduService/chapter/deleteChapter/${chapterId}`,
      method: 'delete'
    })
  },
}
