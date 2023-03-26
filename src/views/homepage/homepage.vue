<template>
  <my-common :num="hotScollTop">
    <!-- 网页主体 -->
    <!-- bnner轮播图 -->
    <div class="banner wrapper">
      <div class="block text-center" m="t-4">
        <el-carousel trigger="click">
          <el-carousel-item v-for="item in banner" :key="item.id">
            <img :src="item.url" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <!-- 新鲜好物 -->
    <div class="goods wrapper">
      <div class="goods_hd">
        <h2>新鲜好物<span>新鲜出炉 品质靠谱</span></h2>
        <div>查看全部 ></div>
      </div>
      <div class="goods_bd">
        <ul>
          <li>
            <img src="./uploads/banner_1.png" alt="" />
            <div>
              <h3>睿米无线吸尘器F8</h3>
              <span>￥<b>899</b></span>
            </div>
            <span class="new_goods">新品</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 人气推荐 -->
    <div class="tuijian wrapper">
      <div class="tuijian_hd">
        <h2>人气推荐<span>人气爆款 不容错过</span></h2>
      </div>
      <div class="tuijian_bd">
        <ul>
          <li>
            <img src="./uploads/popular_1.jpg" alt="" />
            <div>
              <h3>特惠推荐</h3>
              <span>我猜得到 你的需要</span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 热门品牌 -->
    <div class="hot" ref="hot">
      <div class="wrapper">
        <div class="hot_hd">
          <h3>热门品牌<span>国际经典 品质保证</span></h3>
        </div>
        <div class="hot_bd">
          <ul>
            <li v-for="item in hotData" :key="item.id">
              <img :src="item.url" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- tab栏 -->
    <div class="shengxian wrapper">
      <div class="shengxian_hd">
        <span>生鲜</span>
        <div class="tabs" @click="documentTabs">
          <span :data-i="index" v-for="(item, index) in tab" :key="index" :class="select == index ? 'active' : ''">{{
            item
          }}</span>
        </div>
        <div class="more">查看全部 ></div>
      </div>
      <div class="shengxian_bd">
        <div class="left">
          <img src="./uploads/clothes_goods_cover.jpg" alt="" />
        </div>
        <div class="right">
          <ul>
            <li v-for="item in tabCount" :key="item.id">
              <div class="tabImg">
                <img :src="item.imgUrl" alt="" />
              </div>
              <div>
                <p>{{ item.title }}</p>
                <p>{{ item.name }}</p>
                <span
                  >￥<b>{{ item.price }}</b></span
                >
              </div>
              <div class="more">
                <p>找相似</p>
                <div></div>
                <span>更多宝贝 ></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 最新专题 -->
    <div class="new">
      <div class="wrapper">
        <div class="new_hd">
          <h3>最新专题</h3>
          <div>查看全部 ></div>
        </div>
        <div class="new_bd">
          <ul>
            <li>
              <div class="pic">
                <img src="./uploads/topic_goods_1.jpg" alt="" />
                <div class="hide">
                  <h3>吃这些美食才不算辜负自己</h3>
                  <h5>餐厨起居洗护好物</h5>
                  <span>￥<b>29.9</b>起</span>
                </div>
                <div class="mask"></div>
              </div>
              <div class="txt">
                <span>
                  <el-icon style="top: 5px"><i-bi-heart /></el-icon>1200</span
                >
                <span>
                  <el-icon style="top: 3px"><i-ep-view /></el-icon>1800</span
                >
                <span>
                  <el-icon style="top: 3px"><i-ep-chat-dot-square /></el-icon>246
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 网页主体结束 -->
  </my-common>
</template>

<script setup>
import MyCommon from '@/views/common/common.vue'
import { onMounted, reactive, ref, toRefs } from 'vue'
const state = reactive({
  tabCount: [
    {
      name: '生鲜',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 1,
    },
    {
      name: '生鲜',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 2,
    },
    {
      name: '生鲜',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 3,
    },
    {
      name: '生鲜',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 4,
    },
    {
      name: '生鲜',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 5,
    },
    {
      name: '生鲜',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 6,
    },
    {
      name: '火锅食材',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 7,
    },
    {
      name: '海鲜年货',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 8,
    },
  ],
  shengxian: [
    {
      name: '生鲜',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 1,
    },
    {
      name: '生鲜',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 2,
    },
    {
      name: '生鲜',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 3,
    },
    {
      name: '生鲜',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 4,
    },
    {
      name: '生鲜',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 5,
    },
    {
      name: '生鲜',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 6,
    },
    {
      name: '火锅食材',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 7,
    },
    {
      name: '海鲜年货',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 8,
    },
  ],
  fushi: [
    {
      name: '服饰',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 1,
    },
    {
      name: '服饰',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 2,
    },
    {
      name: '生鲜',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 3,
    },
    {
      name: '生鲜',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 4,
    },
    {
      name: '生鲜',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 5,
    },
    {
      name: '生鲜',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 6,
    },
    {
      name: '火锅食材',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 7,
    },
    {
      name: '海鲜年货',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 8,
    },
  ],
  canchu: [
    {
      name: '餐厨',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 1,
    },
    {
      name: '餐厨',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 2,
    },
    {
      name: '餐厨',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 3,
    },
    {
      name: '生鲜',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 4,
    },
    {
      name: '生鲜',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 5,
    },
    {
      name: '生鲜',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 6,
    },
    {
      name: '火锅食材',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 7,
    },
    {
      name: '海鲜年货',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 8,
    },
  ],
  jvjia: [
    {
      name: '居家',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '居家',
      price: '56',
      id: 1,
    },
    {
      name: '居s家',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 2,
    },
    {
      name: '生鲜',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 3,
    },
    {
      name: '生鲜',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 4,
    },
    {
      name: '生鲜',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 5,
    },
    {
      name: '生鲜',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 6,
    },
    {
      name: '火锅食材',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 7,
    },
    {
      name: '海鲜年货',
      imgUrl: 'http://127.0.0.1:5173/src/views/homepage/uploads/fresh_goods_1.jpg',
      title: '三文鱼',
      price: '56',
      id: 8,
    },
  ],
})
let { tabCount, shengxian, fushi, canchu, jvjia } = toRefs(state)
let hotScollTop = ref(0)
const hot = ref()
const banner = reactive([
  { url: 'https://edu.metastudy.vip/mt/images/mxmt13-banner.jpg', id: 1 },
  { url: 'http://127.0.0.1:5173/src/views/homepage/uploads/kitchen_goods_1.jpg', id: 2 },
  { url: '', id: 3 },
  { url: '', id: 4 },
])
const hotData = reactive([
  { url: 'https://edu.metastudy.vip/mt/images/mxmt13-banner.jpg', id: 1 },
  { url: 'http://127.0.0.1:5173/src/views/homepage/uploads/kitchen_goods_1.jpg', id: 2 },
  { url: 'http://127.0.0.1:5173/src/views/homepage/uploads/kitchen_goods_1.jpg', id: 3 },
  { url: 'http://127.0.0.1:5173/src/views/homepage/uploads/kitchen_goods_1.jpg', id: 4 },
  { url: 'http://127.0.0.1:5173/src/views/homepage/uploads/kitchen_goods_1.jpg', id: 5 },
  { url: 'https://edu.metastudy.vip/mt/images/mxmt13-banner.jpg', id: 6 },
  { url: 'http://127.0.0.1:5173/src/views/homepage/uploads/kitchen_goods_1.jpg', id: 7 },
  { url: 'http://127.0.0.1:5173/src/views/homepage/uploads/kitchen_goods_1.jpg', id: 8 },
  { url: 'http://127.0.0.1:5173/src/views/homepage/uploads/kitchen_goods_1.jpg', id: 9 },
  { url: 'http://127.0.0.1:5173/src/views/homepage/uploads/kitchen_goods_1.jpg', id: 10 },
])
const tab = reactive(['生鲜', '服饰', '餐厨', '居家'])
let select = ref('0')
const emit = defineEmits(['fn'])
onMounted(() => {
  hotScollTop.value = hot.value.getBoundingClientRect().top
  console.log(hotScollTop.value)
})
// tab栏切换
const documentTabs = e => {
  if (e.target.tagName === 'SPAN') {
    if (e.target.dataset.i === '0') {
      tabCount.value = shengxian.value
      select = e.target.dataset.i
    } else if (e.target.dataset.i === '1') {
      tabCount.value = fushi.value
      select = e.target.dataset.i
    } else if (e.target.dataset.i === '2') {
      tabCount.value = canchu.value
      select = e.target.dataset.i
    } else if (e.target.dataset.i === '3') {
      tabCount.value = jvjia.value
      select = e.target.dataset.i
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  width: 1240px;
  margin: 0 auto;
  transition: all 0.2s;

  @media screen and (max-width: 980px) {
    width: 1700px;
  }
}

/* banner */
.banner {
  @media screen and(max-width: 650px) {
    margin-top: 130px;
  }
  margin-top: 190px;
  overflow: hidden;
  position: relative;
  :deep(.el-carousel__container) {
    height: 500px;
  }
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
  .demonstration {
    color: var(--el-text-color-secondary);
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
// goods
.goods {
  overflow: hidden;
  .goods_hd {
    position: relative;
    height: 115px;
    line-height: 115px;

    h2 {
      font-size: 29px;
      font-weight: normal;
      span {
        margin-left: 35px;
        font-size: 16px;
        color: #999;
      }
    }
    div {
      font-size: 16px;
      color: #999;
      position: absolute;
      cursor: pointer;
      top: 0;
      right: 0;
    }
  }
  .goods_bd {
    ul {
      li:nth-child(4n) {
        margin: 0;
      }
      li {
        position: relative;
        float: left;
        margin-right: 8px;
        margin-bottom: 8px;
        width: 304px;
        // height: 405px;
        background-color: #f0f9f4;
        text-align: center;
        img {
          width: 100%;
          height: 305px;
          object-fit: cover;
          cursor: pointer;
        }
        div {
          margin-top: 10px;
          h3 {
            display: -webkit-box;
            // 多行文本溢出显示省略号
            -webkit-box-orient: vertical;
            //设置行数
            -webkit-line-clamp: 1;
            overflow: hidden;
            font-size: 20px;
            font-weight: normal;
          }
          span {
            font-size: 17px;
            color: #9a2e1f;
            b {
              font-size: 22px;
            }
          }
        }
        .new_goods {
          padding-top: 7px;
          position: absolute;
          top: 17px;
          left: 18px;
          width: 28px;
          height: 51px;
          border-radius: 5px;
          line-height: 18px;
          font-weight: 700;
          font-size: 18px;
          text-align: center;
          border: 2px solid #27ba9b;
          color: #27ba9b;
        }
      }
    }
  }
}
// 人气推荐
.tuijian {
  overflow: hidden;
  margin-bottom: 55px;
  .tuijian_hd {
    height: 115px;
    line-height: 115px;
    h2 {
      font-size: 29px;
      font-weight: normal;
      span {
        margin-left: 35px;
        font-size: 16px;
        color: #999;
      }
    }
  }
  .tuijian_bd {
    li:nth-child(4n) {
      margin: 0;
    }
    ul {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      li {
        margin-right: 8px;
        margin-bottom: 8px;
        width: 304px;
        text-align: center;
        img {
          width: 100%;
          height: 305px;
          object-fit: cover;
          cursor: pointer;
        }
        div {
          margin-top: 22px;
          h3 {
            font-size: 21px;
            font-weight: normal;
          }
          span {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1; //设置行数
            overflow: hidden;
            font-size: 16px;
            color: #999999;
          }
        }
      }
    }
  }
}
// 热门品牌
@keyframes rolling {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}
.hot {
  background-color: #f5f5f5;
  height: 465px;
  .hot_hd {
    position: relative;
    height: 115px;
    line-height: 115px;
    h3 {
      font-size: 29px;
      font-weight: normal;
      span {
        margin-left: 35px;
        font-size: 16px;
        color: #999;
      }
    }
  }
  .hot_bd {
    width: 1240px;
    height: 306px;
    margin: 0 auto;
    overflow: hidden;
    ul {
      width: 2480px;
      animation: rolling 9s linear infinite;
      &:hover {
        animation-play-state: paused;
      }
      li {
        float: left;
        padding-right: 4px;

        img {
          object-fit: cover;
          width: 244px;
          height: 306px;
        }
      }
    }
  }
}

// tab栏
.shengxian {
  margin-bottom: 34px;
  margin-top: 34px;
  .shengxian_hd {
    height: 44px;
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-bottom: 20px;
    span {
      flex: 1;
      font-size: 29px;
    }
    .tabs {
      span {
        width: 46px;
        height: 20px;
        padding: 2px 7px;
        margin-right: 13px;
        font-size: 16px;
        cursor: pointer;
      }
      .active {
        background-color: #27ba9b;
        color: #fefbfc;
      }
    }
    .more {
      margin-left: 60px;
      color: #999999;
    }
  }
  .shengxian_bd {
    display: flex;
    justify-content: space-between;
    .left {
      img {
        width: 240px;
        height: 100%;
        object-fit: cover;
      }
    }
    .right {
      font-size: 16px;
      ul {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        li {
          position: relative;
          padding: 0 15px 0 15px;
          margin-bottom: 3px;
          margin-right: 20px;
          display: flex;
          flex-direction: column;
          min-height: 304px;
          cursor: pointer;
          &:hover {
            .more {
              opacity: 1;
            }
          }
          .tabImg {
            width: 200px;
            height: 184px;
            text-align: center;
            img {
              width: 184px;
              height: 184px;
              object-fit: cover;
            }
          }
          div {
            font-size: 16px;
            // height: 87px;
            text-align: left;
            p {
              width: 100px;
              // 设置不换行
              white-space: nowrap;
              overflow: hidden;
              // 溢出显示省略号
              text-overflow: ellipsis;
            }
            span {
              font-size: 14px;
              color: #9a2e1f;
              b {
                font-size: 20px;
              }
            }
          }
          .more {
            font-size: 18px;
            transition: all 0.8s;
            opacity: 0;
            position: absolute;
            left: 0;
            bottom: 0px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 240px;
            min-height: 84px;
            background-color: #27ba9b;
            p {
              color: #fff;
            }
            div {
              width: 180px;
              height: 2px;
              background-color: #a9dbcc;
            }
            span {
              font-size: 13px;
              color: #fff;
            }
          }
        }
      }
    }
  }
}

// 最新专题
.new {
  background-color: #f5f5f5;
  padding-bottom: 30px;
  .new_hd {
    display: flex;
    align-items: center;
    height: 115px;
    h3 {
      flex: 1;
      font-size: 29px;
      font-weight: normal;
    }
    div {
      font-size: 16px;
      color: #999;
      cursor: pointer;
    }
  }
  .new_bd {
    ul {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin-top: 10px;
      li {
        width: 404px;
        min-height: 356px;
        margin-right: 8px;
        position: relative;
        cursor: pointer;
        .pic {
          position: relative;
          overflow: hidden;
          &:hover {
            .hide {
              bottom: 15px;
              opacity: 1;
            }
            .mask {
              opacity: 1;
            }
            img {
              transform: scale(1.1);
            }
          }
          img {
            // 消除图片下面的一点margin
            display: block;
            transition: all 0.6s;
            width: 100%;
            height: 288px;
            object-fit: cover;
          }
          .hide {
            opacity: 0;
            position: absolute;
            bottom: -100px;
            right: 0;
            width: 404px;
            // height: 68px;
            z-index: 1;
            transition: all 0.5s;
            h3 {
              font-size: 20px;
              color: #fff;
              margin-left: 10px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
            }
            h5 {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
              margin-left: 20px;
              margin-bottom: 60px;
              color: #999;
              font-size: 16px;
            }
            span {
              line-height: 27px;
              text-align: center;
              position: absolute;
              bottom: 15px;
              right: 20px;
              background-color: #fff;
              color: #9a2e1f;
              font-size: 14px;
            }
          }
          .mask {
            transition: all 0.6s;
            position: absolute;
            top: 0;
            left: 0;
            background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
            opacity: 0;
            width: 404px;
            height: 288px;
          }
        }
        .txt {
          min-height: 67px;
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          span {
            i {
              font-size: large;
            }
            font-size: 14px;
            margin-left: 10px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1; //设置行数
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>
