<template>
  <div>
    <Header />
    <div
      class="content_box"
      ref="scrollTop"
      @scroll="scroll"
      :style="{ height: `${contentHeight}px` }"
    >
      <div class="nav-list-bottom">
        <div class="container">
          <div
            class="row index mt-1"
            :style="{
              height: `${itemHeight * this.listAll.length}px`,
              position: 'relative',
            }"
          >
            <div
              class="col-sm-8 list-container list-group"
              :style="{ position: 'absolute', top: `${top}px` }"
            >
              <!-- <div><span>推荐|最新|热榜</span></div> -->
              <!-- 渲染数据 -->
              <li
                class="list-group-item"
                v-for="(item, index) in showList"
                :key="index"
              >
                <router-link
                  :to="{
                    name: 'Article',
                    params: {
                      code: item.id,
                    },
                  }"
                >
                  <div class="meta-container">
                    <span class="user-message"> {{ item.author }} </span>
                    <saan>|</saan>
                    <saan class="date"> {{ item.date }}</saan>
                  </div>
                  <p class="infobox">
                    <a href="#" target="_blank" class="title">{{
                      item.title
                    }}</a>
                    <a href="#">{{ item.text }}</a>
                  </p>
                </router-link>
              </li>
            </div>
            <div class="col-sm-4 index-aside">
              <div class="aside-top rounded">点亮你在社区的每一天</div>
              <div class="asidee-banner">
                <img
                  src="../assets/images/aside_banner.png"
                  alt=""
                  class="img-fluid rounded"
                />
              </div>

              <div class="aside-footer">
                <ul class="more-list">
                  <li class="item">
                    <a href="javascript:;" target="_blank">用户协议</a>
                  </li>
                  <li class="item">
                    <a href="javascript:;" target="_blank"> 营业执照 </a>
                  </li>
                  <li class="item">
                    <a href="javascript:;" target="_blank">隐私政策</a>
                  </li>
                  <li class="item">
                    <a href="javascript:;" target="_blank">关于我们</a>
                  </li>
                </ul>
                <ul class="more-list">
                  <li class="item">
                    <a st:name="sitemap" href="javascript:;" target="_blank"
                      >站点地图</a
                    >
                  </li>
                  <li class="item">
                    <a st:name="guideLink" href="javascript:;" target="_blank">
                      使用指南
                    </a>
                  </li>
                  <li class="item">
                    <a href="javascript:;" target="_blank" rel="">友情链接</a>
                  </li>
                  <li class="item">
                    <a href="javascript:;" target="_blank" rel=""> 更多文章 </a>
                  </li>
                </ul>
                <ul class="more-list">
                  <li class="item">
                    <a href="javascript:;" target="_blank">
                      京ICP备18012699号-3
                    </a>
                  </li>
                </ul>
                <ul class="more-list">
                  <li class="item">
                    <a href="javascript:;" target="_blank"
                      ><img
                        src="../assets/images/gongan.png"
                        alt="police"
                        style="vertical-align: middle"
                      />
                      渝公网安备xxxxxxxxxxxxx号
                    </a>
                  </li>
                  <li class="item">
                    <span>版权所有：xxxxxxxxxxxxx有限公司</span>
                  </li>
                  <li class="item">
                    <span>公司地址：xxxxxxxxxxxxxxxxxxxxxxxxxx</span>
                  </li>
                  <li class="item"><span>公司座机：xxxxxxxxxxxxx</span></li>
                  <li class="item">
                    <span>
                      举报邮箱：
                      <a href="javascript:;">xxxxxxxxxxxxx</a></span
                    >
                  </li>
                </ul>
                <ul class="more-list">
                  <li class="item"><a>©2022 稀土掘金</a></li>
                </ul>
                <ul class="more-list">
                  <li class="item weibo">
                    <img
                      src="../assets/images/weibo.png"
                      alt="微博"
                      class="icon"
                    />
                  </li>
                  <li class="item wechat">
                    <img
                      src="../assets/images/wechat.png"
                      alt="微信"
                      class="icon"
                    />
                  </li>
                </ul>

                <!--悬浮广告条-->
                <aside>
                  <aside class="aside-adv" ref="adv">
                    <div>
                      <img src="../assets/images/gg.png" />
                    </div>
                  </aside>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "Home",
  components: { Header },
  data() {
    return {
      listAll: [], //所有数据
      showList: [], //可视区域显示的数据
      contentHeight: 1080, //可视区域高度
      itemHeight: 141, //每条数据所占高度
      showNum: 0, //可是区域显示的最大条数
      top: 0, //偏移量
      scrollTop: 0, //卷起的高度
      startIndex: 0, //可视区域第一条数据的索引
      endIndex: 0, //可视区域最后一条数据后面那条数据的的索引，因为后面要用slice(start,end)方法取需要的数据，但是slice规定end对应数据不包含在里面
    };
  },
  methods: {
    getList() {
      console.log("请求数据了");
      this.$axios
        .post("/api/list", {
          Teamnumber: "71744",
        })
        .then((response) => {
          if (response.data.status == 200) {
            this.listAll = response.data.results.reverse();
            this.delHtmlTag();
            //让showList在挂载时有值
            this.getShowList();
          }
        });
    },
    //计算可视区域数据
    getShowList() {
      this.showNum = Math.ceil(this.contentHeight / this.itemHeight); //可视区域最多出现的数据条数，值是小数的话往上取整，因为极端情况是第一条和最后一条都只显示一部分
      this.startIndex = Math.floor(this.scrollTop / this.itemHeight); //可视区域第一条数据的索引
      this.endIndex = this.startIndex + this.showNum; //可视区域最后一条数据的后面那条数据的索引
      this.showList = this.listAll.slice(this.startIndex, this.endIndex); //可视区域显示的数据，即最后要渲染的数据。实际的数据索引是从this.startIndex到this.endIndex-1
      const offsetY = this.scrollTop - (this.scrollTop % this.itemHeight); //在这需要获得一个可以被itemHeight整除的数来作为item的偏移量，这样随机滑动时第一条数据都是完整显示的
      this.top = offsetY;

      //如果大于页面高度，则让广告显示
      if (this.scrollTop > 680) {
        this.$refs.adv.style.display = "block";
      } else {
        this.$refs.adv.style.display = "none";
      }
    },
    //监听滚动事件，实时计算scrollTop
    scroll() {
      this.scrollTop = this.$refs.scrollTop.scrollTop;
      this.getShowList();
    },
    //过滤html标签
    delHtmlTag() {
      for (let i in this.listAll) {
        this.listAll[i].text = this.listAll[i].text
          .replace(/<[^>]+>/g, "")
          .slice(0, 80);
        this.listAll[i].date = this.listAll[i].date.slice(0, 16);
      }
    },
  },
  mounted() {
    this.getList();
    this.scroll();
  },
};
</script>

<style scoped>
@import "../assets/css/main.css";
@import "../assets/css/index.css";
@import "../assets/css/font-awesome-4.7.0/css/font-awesome.min.css";
.content_box {
  overflow-y: scroll;
}
</style>