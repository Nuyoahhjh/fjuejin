<template>
  <header>
    <div class="w">
      <div class="row">
        <a href="/" class="logo col-sm-2">
          <img
            src="../assets/images/logo.svg"
            alt="稀土掘金"
            class="img-fluid"
          />
        </a>
        <div class="nav col-sm-5">
          <ul class="nav-list header-nav">
            <li><a href="/" class="text-primary">首页</a></li>
            <li><a href="javascript:;">沸点</a></li>
            <li><a href="javascript:;">课程</a></li>
            <li><a href="javascript:;">直播</a></li>
            <!-- <li><a href="javascript:;">资讯</a></li> -->
            <li><a href="javascript:;">活动</a></li>
            <!-- <li><a href="javascript:;">社区</a></li> -->
            <li><a href="javascript:;">商城</a></li>
            <li><a href="javascript:;">APP</a></li>
            <li><a href="javascript:;">插件</a></li>
            <li id="clear-border">
              <a href="https://juejin.cn/vip?utm_source=web_nav" target="_blank"
                ><img src="../assets/images/zoom.png" alt="" width="120"
              /></a>
            </li>
          </ul>
        </div>
        <div class="col-sm-4 nav-input input-group">
          <input class="mt-4 search" type="text" placeholder="搜索" />

          <span class="input-group-text mt-4"
            ><i class="fa fa-search fa-fw"></i
          ></span>
          <button class="btn">创作者中心</button>
          <div class="btn">
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- 头像通知 -->
    <div class="homepage">
      <span
        ><a href="https://juejin.cn/notification"
          ><i class="fa fa-bell" aria-hidden="true"></i></a
      ></span>
      <span
        ><a href="https://juejin.cn/user/2379807829800429"
          ><img
            src="https://p6-passport.byteacctimg.com/img/user-avatar/1baf3bf8c8bb878a3038582fc2f7284a~300x300.image"
            alt="" /></a
      ></span>
    </div>
    <div class="border_top">
      <div class="container gd" ref="nav">
        <ul class="nav-list clearfix">
          <li><a href="#" class="text-primary">综合</a></li>
          <li><a href="javascript:;">关注</a></li>
          <li><a href="javascript:;">前端</a></li>
          <li><a href="javascript:;">后端</a></li>
          <li class="widen"><a href="javascript:;">Android</a></li>
          <li><a href="javascript:;">ios</a></li>
          <li class="widen"><a href="javascript:;">人工智能</a></li>
          <li class="widen"><a href="javascript:;">开发工具</a></li>
          <li class="widen"><a href="javascript:;">代码人生</a></li>
          <li><a href="javascript:;">阅读</a></li>
          <li class="widen float-right"><a href="javascript:;">标签管理</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
@import "../assets/css/main.css";
@import "../assets/css/index.css";
@import "../assets/css/font-awesome-4.7.0/css/font-awesome.min.css";
</style>