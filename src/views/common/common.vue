<template>
  <header>
    <!-- 快捷导航shortcut -->
    <div id="shortcut">
      <div class="wrapper">
        <ul>
          <li><span>请先登录</span></li>
          <li><span>免费注册</span></li>
          <li><span>我的订单</span></li>
          <li><span>在线客服</span></li>
          <li>
            <el-icon style="top: 4px"><i-ep-cellphone /></el-icon>
            <span> 手机版</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 网页头部 -->
    <div id="header">
      <div class="wrapper">
        <div class="navBar">
          <!-- 动画导航 -->
          <nav class="TwoNavs" :class="{ active: isTwoNavs }">
            <ul>
              <li><span>首页</span></li>
              <li><span>服装</span></li>
              <li><span>美食</span></li>
              <li><span>电器</span></li>
              <li><span>家居</span></li>
            </ul>
            <button class="icon" @click="isTwoNavs = !isTwoNavs">
              <div class="line line1"></div>
              <div class="line line2"></div>
            </button>
          </nav>

          <ul class="OneNavs">
            <li :class="{ navActive: active === 0 }"><span>首页</span></li>
            <li :class="{ navActive: active === 1 }"><span>服装</span></li>
            <li :class="{ navActive: active === 2 }"><span>美食</span></li>
            <li :class="{ navActive: active === 3 }"><span>电器</span></li>
            <li :class="{ navActive: active === 4 }"><span>家居</span></li>
          </ul>
          <div class="search" :class="{ active: isSearch }">
            <input type="text" class="input" placeholder="Search..." />
            <button class="btn" @click="isSearch = !isSearch">
              <el-icon><i-ep-search /></el-icon>
            </button>
          </div>
          <div class="car">
            <el-icon><i-ep-shopping-cart /></el-icon>
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <!-- 版权区域 -->
    <div id="footer">
      <div class="top wrapper">
        <ul>
          <li>
            <h3>客户服务</h3>
            <div class="left">
              <el-icon><i-ep-service /></el-icon>
              <span>客服</span>
            </div>
            <div class="right">
              <el-icon><i-ep-tickets /></el-icon>
              <span>反馈</span>
            </div>
          </li>
          <li>
            <h3>关于我们</h3>
            <div class="left">
              <el-icon><i-bi-wechat /></el-icon>
              <span>公众号</span>
            </div>
            <div class="right">
              <el-icon><i-bi-sina-weibo /></el-icon>
              <span>微博</span>
            </div>
          </li>
          <li>
            <h3>下载APP</h3>
            <div class="left">
              <el-icon><i-ep-service /></el-icon>
              <span>客服</span>
            </div>
            <div class="erweima">
              <p>二维码下载APP</p>
              <el-button type="success">立即下载</el-button>
            </div>
          </li>
          <li>
            <h3>服务热线</h3>
            <div>
              <p>400-0000-000</p>
              <span>周一至周日 8:00-18:00</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="bottom">
        <div class="wrapper">
          <div class="bottom_top">
            <ul>
              <li>
                <el-icon><i-ep-money /></el-icon>
                <span>价格亲民</span>
              </li>
              <li>
                <el-icon><i-ep-van /></el-icon>
                <span>物流快捷</span>
              </li>
              <li>
                <el-icon><i-ep-circle-check /></el-icon>
                <span>品质新鲜</span>
              </li>
            </ul>
          </div>
          <hr style="background-color: #434343; height: 1px; border: none" />
          <div class="bottom_bottom">
            <ul>
              <li>&nbsp;关于我们 |</li>
              <li>&nbsp;帮助中心 |</li>
              <li>&nbsp;售后服务 |</li>
              <li>&nbsp;配送与验收 |</li>
              <li>&nbsp;商务合作 |</li>
              <li>&nbsp;搜索推荐 |</li>
              <li>&nbsp;友情链接</li>
            </ul>
            <br />
            <p>CopyRight @ 阿泽</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {{ props.num }}
</template>

<script setup>
import { onMounted, reactive } from 'vue'
const active = ref('')
const isSearch = ref(true)
const isTwoNavs = ref(false)
const state = reactive({
  i: 0,
})
const { i } = toRefs(state)
let props = defineProps({
  num: { type: Number, default: 2 },
})
// let n = num
// console.log(n)
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
const handleScroll = () => {
  // 页面滚动距顶部距离
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  let scroll = scrollTop - i.value
  i.value = scrollTop
}
</script>

<style lang="less" scoped>
.wrapper {
  width: 1240px;
  margin: 0 auto;
  @media screen and (max-width: 980px) {
    width: 1700px;
  }
}
/* 快捷导航 */
#shortcut {
  @media screen and(max-width: 650px) {
    transform: translateY(-60px);
  }
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: #333333;
  height: 60px;
  line-height: 60px;
  transition: transform 0.3s;
  .wrapper {
    ul {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      color: #dcdcdc;
      margin: 0;
      :nth-child(6) {
        margin: 0;
        span {
          padding: 0;
          border: 0;
        }
      }
      li {
        cursor: pointer;
        margin-right: 20px;

        span {
          border-right: 1px solid #666666;
          font-size: 14px;
          padding-right: 20px;
        }
      }
    }
  }
}
/* 网页头部 */
#header {
  @media screen and(max-width: 650px) {
    top: 0;
  }
  z-index: 100;
  position: fixed;
  top: 60px;
  // padding: 20px 0;
  width: 100%;
  height: 130px;
  background-color: #fff;
  font-size: 16px;
  transition: top 0.3s;
  .navBar {
    display: flex;
    height: 130px;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    position: relative;
    .OneNavs {
      @media screen and(max-width: 650px) {
        transform: translateX(-1800px);
        opacity: 0;
      }
      transition: all 0.5s;
      display: flex;
      li {
        margin-right: 20px;
        font-size: 16px;
        cursor: pointer;
        span {
          &:hover {
            color: #25ba9b;
            border-bottom: 1px solid #25ba9b;
          }
        }
      }
    }
    .TwoNavs {
      @media screen and(max-width: 650px) {
        opacity: 1;
      }
      position: absolute;
      left: 5px;
      opacity: 0;
      padding: 20px;
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 3px;
      // box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      transition: width 0.6s linear;
      overflow-x: hidden;
      transition: all 0.8s;
      &.active {
        width: 800px;
        ul {
          width: 100%;
          li {
            opacity: 1;
            transform: rotateY(360deg);
          }
        }
        .icon .line1 {
          transform: rotate(-765deg) translateY(6px);
        }
        .icon .line2 {
          transform: rotate(765deg) translateY(-5.5px);
        }
      }
      ul {
        display: flex;
        width: 0;
        transition: width 0.6s linear;
        li {
          transform: rotateY(0deg);
          opacity: 0;
          font-size: 16px;
          transition: transform 0.6s linear, opacity 0.6s linear;
        }
        span {
          cursor: pointer;
          position: relative;
          color: #000;
          margin: 0 10px;
        }
      }
      .icon {
        background-color: #fff;
        border: 0;
        cursor: pointer;
        padding: 0;
        position: relative;
        height: 30px;
        width: 30px;
        &:focus {
          outline: 0;
        }
        .line {
          background-color: #5290f9;
          height: 3px;
          width: 30px;
          position: absolute;
          top: 10px;
          left: 5px;
          transition: transform 0.6s linear;
          @media screen and(max-width: 650px) {
            transform: rotate(-360deg);
          }
        }
        .line2 {
          @media screen and(max-width: 650px) {
            transform: rotate(360deg);
          }
          top: auto;
          bottom: 10px;
        }
      }
    }
    .search {
      position: relative;
      right: 0px;
      height: 50px;
      input {
        background-color: #fff;
        border: 0;
        border-bottom: solid 1px #000;
        font-size: 18px;
        padding: 15px;
        height: 50px;
        width: 50px;
        transition: width 0.3s ease;
        &::-webkit-input-placeholder {
          /* placeholder颜色  */
          color: #aab2bd;
          /* placeholder字体大小  */
          font-size: 18px;
          /* placeholder位置  */
          text-align: left;
        }
      }
      .btn {
        background-color: #fff;
        border: 0;
        cursor: pointer;
        font-size: 25px;
        position: absolute;
        top: -15px;
        left: 0;
        height: 100px;
        width: 100px;
        transition: transform 0.3s ease;
        .el-icon {
          font-size: 30px;
          @media screen and(max-width: 980px) {
            font-size: 50px;
          }
        }
      }
    }
    .btn:focus,
    .input:focus {
      outline: none;
    }
    .search.active .input {
      width: 350px;
    }
    .search.active .btn {
      transform: translateX(350px);
    }
    .car {
      position: relative;
      margin-right: -25px;
      font-size: 25px;
      .el-icon {
        cursor: pointer;
        font-size: 30px;
        @media screen and(max-width: 980px) {
          font-size: 50px;
        }
      }
      span {
        position: absolute;
        top: -5px;
        right: -15px;
        text-align: center;
        width: 20px;
        height: 15px;
        line-height: 15px;
        background-color: #e26237;
        font-size: 13px;
        border-radius: 7px;
        color: #fff;
      }
    }
  }
}

/* 网页底部 */
#footer {
  .top {
    padding-top: 79px;
    margin-bottom: 14px;
    ul {
      display: flex;
      justify-content: space-around;
      li {
        width: 320px;
        padding: 0 33px;
        h3 {
          color: #999999;
          text-align: center;
          font-size: 16px;
        }
        .left,
        .right {
          display: inline-block;
          width: 100px;
          min-height: 100px;
          border: 1px solid #eee;
          margin-top: 30px;
          margin-left: 15px;
          text-align: center;
          &:hover {
            transform: scale(1.2, 1.2);
            transition: all 0.3s;
            .el-icon {
              color: #27ba9b;
            }
            span {
              color: #999;
              font-size: 14px;
            }
          }
          .el-icon {
            margin-top: 22px;
            margin-left: 33px;
            display: block;
            font-size: 45px;
          }
          span {
            @media screen and (max-width: 980px) {
              display: none;
            }
            margin-left: 10px;
            font-size: 14px;
            color: #999999;
          }
        }
        .erweima {
          display: inline-block;
          margin-left: 10px;
          width: 116px;
          font-size: 14px;
          p {
            @media screen and (max-width: 980px) {
              display: none;
            }
            font-size: 14px;
          }
          button {
            width: 103px;
            height: 32px;
            font-size: 14px;
          }
        }
        &:nth-child(4) {
          text-align: center;
          p {
            margin-top: 20px;
            color: #666666;
            font-size: 22px;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          span {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1; //设置行数
            overflow: hidden;
            color: #999999;
            font-size: 15px;
          }
        }
      }
    }
  }
  .bottom {
    width: 100%;
    background-color: #333;
    padding-bottom: 50px;
    .bottom_top {
      ul {
        display: flex;
        justify-content: space-around;
        li {
          position: relative;
          // width: 300px;
          height: 160px;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          .el-icon {
            font-size: 60px;
          }
          span {
            margin-left: 10px;
            font-size: 28px;
          }
        }
      }
    }
    .bottom_bottom {
      padding-top: 30px;
      text-align: center;
      font-size: 14px;
      color: #999;
      li {
        display: inline-block;
        font-size: 14px;
        color: #999;
      }
    }
  }
}
</style>
