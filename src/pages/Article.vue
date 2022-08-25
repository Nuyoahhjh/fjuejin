<template>
  <div>
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
                <a
                  href="https://juejin.cn/vip?utm_source=web_nav"
                  target="_blank"
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
    </header>

    <div class="container">
      <div class="row mt-3" v-if="flag">
        <div class="col-sm-9 article">
          <!-- 文章详情内容 -->
          <h1 class="article-title mt-5">{{ articles[0].title }}</h1>
          <div class="author-info-block row">
            <div class="col-sm-1">
              <img
                src="https://pan.ithejunhao.fun/index.php?user/publicLink&fid=9638lu5BYJbmiQSCFmk4WAKgf24xIOfq_zwD6ZyRVOkY6_iqbtwEnHemf_f70llxe7jwycH1Z9JvRVRonXLXeBfbK2ie-ADqLpaWt_zrgc0Y_y-ub1D1lVGPz88DyC0lRg3FHTAdoR8&file_name=/mmexport1636456458053.png"
                alt=""
                class="img-fluid"
                style="border-radius: 20px"
              />
            </div>

            <div class="col-sm-9 author-info-box">
              <div class="author-name">
                <a
                  href="https://ithejunhao.fun"
                  target="_blank"
                  rel=""
                  class="username"
                  ><span class="name" style="max-width: 128px">
                    {{ articles[0].author }}
                  </span>
                  <span blank="true" class="rank"
                    ><img
                      src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-3.7938ebc.png"
                      alt="lv-3"
                      title="创作等级"
                      width="35px"
                  /></span>
                </a>
              </div>
              <div class="meta-box">
                <time
                  :title="`${articles[0].date.slice(
                    0,
                    16
                  )} GMT+0800 (中国标准时间)`"
                  class="time"
                >
                  {{ articles[0].date.slice(0, 16) }}
                </time>
                <span class="views-count"> ·&nbsp;&nbsp;阅读 999+ </span>
                <!---->
              </div>
              <!---->
            </div>
            <div class="col-sm-2">
              <button class="btn follow-button">
                <span class="text">+关注</span>
              </button>
            </div>
          </div>
          <div
            v-html="articles[0].text"
            class="lead mt-5"
            ref="html_text"
          ></div>
        </div>
        <div class="col-sm-3 article-aside-display">
          <div class="article-aside-top rounded">
            <div class="aside-top-upper">
              <a href="https://ithejunhao.fun" target="_blank" class="row">
                <div class="col-sm-4">
                  <img
                    src="https://pan.ithejunhao.fun/index.php?user/publicLink&fid=9638lu5BYJbmiQSCFmk4WAKgf24xIOfq_zwD6ZyRVOkY6_iqbtwEnHemf_f70llxe7jwycH1Z9JvRVRonXLXeBfbK2ie-ADqLpaWt_zrgc0Y_y-ub1D1lVGPz88DyC0lRg3FHTAdoR8&file_name=/mmexport1636456458053.png"
                    alt="ithejunhao"
                    style="border-radius: 200px"
                    class="img-fluid"
                  />
                </div>
                <div class="info-box col-sm-8">
                  <a href="#" class="username"
                    ><span class="name" style="max-width: 128px">
                      {{ articles[0].author }}
                    </span>
                    <span blank="true" class="rank"
                      ><img
                        src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-3.7938ebc.png"
                        alt="lv-3"
                        title="创作等级"
                        width="40px"
                    /></span>
                  </a>
                </div>
              </a>
            </div>
            <div class="item mt-3">
              <!-- 点赞图标 -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="26"
                viewBox="0 0 25 26"
                class="zan"
              >
                <g fill="none" fill-rule="evenodd" transform="translate(0 .57)">
                  <ellipse
                    cx="12.5"
                    cy="12.57"
                    fill="#E1EFFF"
                    rx="12.5"
                    ry="12.57"
                  ></ellipse>
                  <path
                    fill="#7BB9FF"
                    d="M8.596 11.238V19H7.033C6.463 19 6 18.465 6 17.807v-5.282c0-.685.483-1.287 1.033-1.287h1.563zm4.275-4.156A1.284 1.284 0 0 1 14.156 6c.885.016 1.412.722 1.595 1.07.334.638.343 1.687.114 2.361-.207.61-.687 1.412-.687 1.412h3.596c.38 0 .733.178.969.488.239.317.318.728.21 1.102l-1.628 5.645a1.245 1.245 0 0 1-1.192.922h-7.068v-7.889c1.624-.336 2.623-2.866 2.806-4.029z"
                  ></path>
                </g>
              </svg>
              &nbsp;<span class="content"
                >获得点赞<span class="count">&nbsp;999</span></span
              >
            </div>
            <div class="item">
              <!-- 阅读图标 -->
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                class="icon stat-view-icon"
              >
                <g fill="none" fill-rule="evenodd">
                  <circle cx="12.5" cy="12.5" r="12.5" fill="#E1EFFF"></circle>
                  <path
                    fill="#7BB9FF"
                    d="M4 12.5S6.917 7 12.75 7s8.75 5.5 8.75 5.5-2.917 5.5-8.75 5.5S4 12.5 4 12.5zm8.75 2.292c1.208 0 2.188-1.026 2.188-2.292 0-1.266-.98-2.292-2.188-2.292-1.208 0-2.188 1.026-2.188 2.292 0 1.266.98 2.292 2.188 2.292z"
                  ></path>
                </g>
              </svg>
              &nbsp;<span class="content"
                >文章被阅读<span class="count">&nbsp;9k</span></span
              >
            </div>
            <!---->
          </div>
          <div class="aside-app rounded">
            <div class="row">
              <div class="col-sm-4">
                <img
                  src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/article.9d13ff7.png"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div class="col-sm-8">
                <div class="headline">下载稀土掘金APP</div>
                <div class="desc">帮助开发者成长的社区</div>
              </div>
            </div>
          </div>
          <div class="asidee-banner mt-3">
            <img
              src="../assets/images/article_gg.png"
              alt=""
              class="img-fluid rounded"
            />
          </div>
          <!-- 目录 -->
          <div class="sticky-block-box mt-3 rounded" ref="catalogue">
            <nav class="article-catalog">
              <div class="catalog-title">目录</div>
              <div class="catalog-body">
                <ul class="catalog-list" v-show="h2s.length != 1">
                  <!-- 遍历h2标签 -->
                  <li class="item" v-for="(item, index) in h2s" :key="index">
                    <a :href="`#title-2-${index + 1}`">{{ item }}</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <!-- 左侧按钮 -->
      <div class="article-suspended-panel">
        <div badge="99" class="panel-btn with-badge">
          <i class="fa fa-thumbs-up" aria-hidden="true"></i>
        </div>
        <div badge="9" class="panel-btn with-badge">
          <i class="fa fa-commenting" aria-hidden="true"></i>
        </div>
        <div class="panel-btn">
          <i class="fa fa-star" aria-hidden="true"></i>
        </div>
        <div badge="52" class="panel-btn with-badge">
          <i class="fa fa-share" aria-hidden="true"></i>
        </div>
        <div class="divider"></div>
        <div class="panel-btn">
          <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
        </div>
        <div class="panel-btn">
          <i class="fa fa-arrows-alt" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "Article",
  components: { Header },
  data() {
    return {
      articles: [],
      flag: false, //用于解决异步产生的问题
      scrollTop: "",
      h2s: [], //标题 目录
      addclassflag: true,
      catalogue: "", //目录标签
    };
  },
  methods: {
    HandleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (this.scrollTop > 500) {
        if (this.addclassflag && this.$refs.catalogue != "") {
          this.catalogue.className += " change";
          this.addclassflag = false;
        }
      } else {
        this.catalogue.classList.remove("change");
        this.addclassflag = true;
      }

      //Toc 滚动高亮
      this.HandleScroll2();
    },
    HandleScroll2() {
      //得到滚动条的位置
      var topScroll = document.documentElement.scrollTop;

      var h2s = document.querySelectorAll("h2");
      //获取各个瞄点对应位置
      var maodian_blank = document.querySelectorAll(".item a");
      var h2sTOP = [h2s.length];
      for (let i = 0; i < h2s.length; i++) {
        h2sTOP[i] = h2s[i].offsetTop;
      }

      for (let i = 0; i < h2s.length - 1; i++) {
        if (topScroll >= h2sTOP[i] && topScroll < h2sTOP[i + 1]) {
          maodian_blank[i].style.color = "#007fff";
        } else {
          maodian_blank[i].style.color = "#333";
        }
      }
    },
    setclass() {
      setTimeout(() => {
        //获取标签的innerText值
        let h2 = document.querySelectorAll("h2");
        let h2s = [h2.length];
        for (let i = 0; i < h2.length; i++) {
          h2s[i] = h2[i].innerText;
        }
        this.h2s = h2s;

        let code = document.querySelectorAll("code");
        let pre = document.querySelectorAll("pre");
        for (let i = 0; i < code.length; i++) {
          code[i].style = "color:#e83e8c";
        }
        for (let i = 0; i < pre.length; i++) {
          pre[i].style.backgroundColor = "#2b2b2b";
        }
      }, 100);
    },
  },
  mounted() {
    this.$axios
      .get("/api/list/article", {
        params: {
          id: this.$route.params.code,
        },
      })
      .then((res) => {
        if (res.data.status == 200) {
          this.articles = res.data.results;
          this.flag = true;
          this.setclass();
        }
      });
    //使用定时器防止异步获取不到元素
    setTimeout(() => {
      this.catalogue = this.$refs.catalogue;
    }, 100);
    window.addEventListener("scroll", this.HandleScroll);
  },
};
</script>

<style scoped>
@import "../assets/css/article.css";
@import "../assets/css/font-awesome-4.7.0/css/font-awesome.min.css";
</style>>
