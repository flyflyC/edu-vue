<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- /课程列表 开始 -->
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">全部课程</span>
        </h2>
      </header>
      <section class="c-sort-box">
        <section class="c-s-dl">
          <dl>
            <dt>
              <span class="c-999 fsize14">课程类别</span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li>
                  <a title="全部" href="#" @click="gotoPage(1)">全部</a>
                </li>
                <li v-for="(subjectOne,index) in subjectNestedList" :key="index" :class="{active:oneIndex==index}">
                  <a :title="subjectOne.title" href="#" @click="seacherOne(subjectOne.id,index)" >{{subjectOne.title}}</a>
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>
              <span class="c-999 fsize14"></span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li v-for="(subjectTwo,index) in subSubjectList" :key="index" :class="{active:twoIndex==index}">
                  <a title="subjectTwo.title" href="#" @click="seacherTwo(subjectTwo.id,index)">{{subjectTwo.title}}</a>
                </li>

              </ul>
            </dd>
          </dl>
          <div class="clear"></div>
        </section>
        <div class="js-wrap">
          <section class="fr">
            <span class="c-ccc">
              <i class="c-master f-fM">1</i>/
              <i class="c-666 f-fM">1</i>
            </span>
          </section>
          <section class="fl">
            <ol class="js-tap clearfix">
              <li :class="{'current bg-orange':buyCountSort!=''}">
                <a title="销量" href="javascript:void(0);" @click="searchBuyCount()">销量
                  <span :class="{hide:buyCountSort==''}">↓</span>
                </a>
              </li>
              <li :class="{'current bg-orange':gmtCreateSort!=''}">
                <a title="最新" href="javascript:void(0);" @click="searchGmtCreate()">最新
                  <span :class="{hide:gmtCreateSort==''}">↓</span>
                </a>
              </li>
              <li :class="{'current bg-orange':priceSort!=''}">
                <a title="价格" href="javascript:void(0);" @click="searchPrice()">价格&nbsp;
                  <span :class="{hide:priceSort==''}">↓</span>
                </a>
              </li>
            </ol>
          </section>
        </div>
        <div class="mt40">
          <!-- /无数据提示 开始-->
          <section class="no-data-wrap" v-if="data.total==0">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>
          </section>
          <!-- /无数据提示 结束-->
          <article class="comm-course-list" v-if="data.total>0">
            <ul class="of" id="bna">
              <li v-for="course in data.courses" :key="course.id">
                <div class="cc-l-wrap">
                  <section class="course-img">
                    <img :src="course.cover" class="img-responsive" :alt="course.title">
                    <div class="cc-mask">
                      <a :href="'/course/'+course.id" title="开始学习" class="comm-btn c-btn-1">开始学习</a>
                    </div>
                  </section>
                  <h3 class="hLh30 txtOf mt10">
                    <a :href="'/course/'+course.id" :title="course.title" class="course-title fsize18 c-333">{{course.title}}</a>
                  </h3>
                  <section class="mt10 hLh20 of">
                    <span class="fr jgTag bg-green">
                      <i class="c-fff fsize12 f-fA">{{ course.price===0?'免费':course.price }}</i>
                    </span>
                    <span class="fl jgAttr c-ccc f-fA">
                      <i class="c-999 f-fA">9634人学习</i>
                      |
                      <i class="c-999 f-fA">9634评论</i>
                    </span>
                  </section>
                </div>
              </li>
            </ul>
            <div class="clear"></div>
          </article>
        </div>
        <!-- 公共分页 开始 -->
        <div>
          <div class="paging">
            <a class="undisable" title>首</a>
            <a id="backpage" class="undisable" href="#" title>&lt;</a>
            <a href="#" title class="current undisable">1</a>
            <a href="#" title>2</a>
            <a id="nextpage" href="#" title>&gt;</a>
            <a href="#" title>末</a>
            <div class="clear"></div>
          </div>
        </div>
        <!-- 公共分页 结束 -->
      </section>
    </section>
    <!-- /课程列表 结束 -->
  </div>
</template>
<script>
  import courseApi from '../../api/course'
  export default {
    data(){
      return{
        page:1, //当前页
        data:{},  //课程列表
        subjectNestedList: [], // 一级分类列表
        subSubjectList: [], // 二级分类列表

        searchObj: {}, // 查询表单对象

        oneIndex:-1,
        twoIndex:-1,
        buyCountSort:"",
        gmtCreateSort:"",
        priceSort:""
      }
    },
    created() {
      this.initCourse()
      this.initSubject()
    },
    methods:{
      //课程显示
      initCourse(){
        courseApi.pageCoursePage(1,8,this.searchObj)
        .then(res=>{
          this.data = res.data.data
        })
      },
      //查询所有一级分类
      initSubject(){
        courseApi.getSubjectInfo()
        .then(res=>{
          this.subjectNestedList = res.data.data.list
          console.log(this.subjectNestedList)
        })
      },
      //分页切换
      gotoPage(page){
        courseApi.pageCoursePage(page,8,this.searchObj)
        .then(res=>{
          this.data = res.data.data
        })
      },
      //点击一级分类展示二级分类
      seacherOne(id,index){
        //把传递index值赋值给oneIndex,为了active样式生效
        this.oneIndex = index

        this.twoIndex = -1
        this.searchObj.subjectId = ""
        this.subSubjectList = []
       //点击一级分类，展示一级分类的所有课程
        this.searchObj.subjectParentId=id
        //点击一级分类查询
        this.gotoPage(1)
        //用点击的一级分类的id和所有一级id做比较，取出相同id的一级分类的二级分类
        for (let i=0;i<this.subjectNestedList.length;i++){
          //获取每一个一级分类
          var subjectOne = this.subjectNestedList[i]
          //console.log(subjectOne.title)
          if (id===subjectOne.id){

            this.subSubjectList=subjectOne.children
            //console.log(subjectOne.children.title)
          }
        }
      },
      //点击一级分类展示二级分类
      seacherTwo(id,index){
        //把index赋值,为了样式生效
        this.twoIndex = index
        //把二级分类点击id值，赋值给searchObj
        this.searchObj.subjectId = id
        //点击某个二级分类进行条件查询
        this.gotoPage(1)
      },
      //销量
      searchBuyCount(){
        this.buyCountSort="1"
        this.gmtCreateSort=""
        this.priceSort= ""

        //把值赋值到searchObj
        this.searchObj.buyCountSort = this.buyCountSort
        this.searchObj.gmtCreateSort = this.gmtCreateSort;
        this.searchObj.priceSort = this.priceSort;

        //调用方法查询
        this.gotoPage(1)
      },
      //最新
      searchGmtCreate(){
        this.buyCountSort=""
        this.gmtCreateSort="1"
        this.priceSort= ""

        //把值赋值到searchObj
        this.searchObj.buyCountSort = this.buyCountSort
        this.searchObj.gmtCreateSort = this.gmtCreateSort;
        this.searchObj.priceSort = this.priceSort;

        //调用方法查询
        this.gotoPage(1)
      },
      //价格
      searchPrice(){
        this.buyCountSort=""
        this.gmtCreateSort=""
        this.priceSort= "1"

        //把值赋值到searchObj
        this.searchObj.buyCountSort = this.buyCountSort
        this.searchObj.gmtCreateSort = this.gmtCreateSort;
        this.searchObj.priceSort = this.priceSort;

        //调用方法查询
        this.gotoPage(1)
      }
    }

  };
</script>
<style scoped>
  .active {
    background: #bdbdbd;
  }
  .hide {
    display: none;
  }
  .show {
    display: block;
  }
</style>
