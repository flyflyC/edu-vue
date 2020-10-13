# edu-vue在线教育平台前台
## vue-admin-edu 管理员后台
--------------------

### 使用vue-admin-template模板
管理员后台主要基于vue-admin-template模板的基础上进行开发
**开发日志**
- 2020-10-12

主要完成了：
1.讲师模块的后台功能
vue-admin-edu\src\views\edu\teacher——list：分页展示视图及条件查询

vue-admin-edu\src\views\edu\teacher——save：修改及添加视图

主要遇到问题，前后端跨域问题：解决后端controller接口添加@CrossOrigin注解，或者配置跨域配置类

初接触这个后台管理框架的一些其他问题，如一直不能登录进入：解决后端传的code是2000，前端判断值是20000，导致被拦截

- 2020-10-13

主要完成了：
1、讲师模块头像上传到阿里云对象存储oss服务器的界面

2、课程管理模块的上传excel添加课程功能

3、课程分级显示功能

vue-admin-edu\src\views\edu\subject——list：课程分级显示页面

vue-admin-edu\src\views\edu\subject——save：程管理模块的上传excel添加课程页面

主要遇到问题：

启动的昨天的服务和今天新开发的oss服务，两个端口（8001/8002）通过nginx配置访问分配（请求转发），配置过程由于9001端口号被占用，导致数据无法传送，nginx无法启动，一开始以为跨域问题，
后面经过不断查询资料，改了nginx的访问端口后解决

文件上传：由于前端和后端接口的一个单词不同，导致404，查了半天，后面看后台代码才发现
建议：后端接口最好复制粘贴到前端中

