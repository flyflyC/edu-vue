import request from '@/utils/request'
export default {
  //删除阿里云上的视频
  deleteAliyunvod(id){
    return request({
      url: `/eduVod/video/removeAliyunVideo/${id}`,
      method: 'delete'
    })
  },

  // 添加小节
  addVideo(eduVideo) {
    return request({
      url: `/eduService/video/addVideo/`,
      method: 'post',
      data: eduVideo
    })
  },
  // 根据ID查询小节
  getVideoId(videoId) {
    return request({
      url: `/eduService/video/getVideoById/${videoId}`,
      method: 'get',

    })
  },
  // 修改小节
  updateVideo(eduVideo) {
    return request({
      url: `/eduService/video/updateVideo/`,
      method: 'post',
      data: eduVideo
    })
  },
  // 删除小节
  deleteVideo(videoId) {
    return request({
      url: `/eduService/video/deleteVideo/${videoId}`,
      method: 'delete'
    })
  },
}
