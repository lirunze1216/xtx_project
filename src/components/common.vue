<template>
  <div class="banner">
    <div class="wrapper">
      <div class="daohang">
        <ul>
          <li class="active">
            <img src="./uploads/banner_1.png" alt="" width="1240px" height="500px" />
          </li>
          <li>
            <a href="#"><img src="./uploads/banner_2.png" alt="" width="1240px" height="500px" /></a>
          </li>
          <li>
            <a href="#"><img class="lazy" src="./uploads/banner_3.png" alt="" width="1240px" height="500px" /></a>
          </li>
          <li>
            <a href="#"><img class="lazy" src="./uploads/banner_4.jpg" alt="" width="1240px" height="500px" /></a>
          </li>
          <li>
            <a href="#"><img src="./uploads/banner_5.jpg" alt="" width="1240px" height="500px" /></a>
          </li>
        </ul>
      </div>
      <!-- 测导航 -->
      <div class="aside">
        <ul>
          <li>
            <a href="#">生鲜<span>水果 蔬菜</span><i class="iconfont icon-jiantouyou"></i></a>
          </li>
          <li>
            <a href="#">美食<span>面点 干果</span><i class="iconfont icon-jiantouyou"></i></a>
          </li>
          <li>
            <a href="#">餐厨<span>数码 产品</span><i class="iconfont icon-jiantouyou"></i></a>
          </li>
          <li>
            <a href="#">电器<span>床品 四件套 被枕</span><i class="iconfont icon-jiantouyou"></i></a>
          </li>
          <li>
            <a href="#">居家<span>奶粉 玩具 辅食</span><i class="iconfont icon-jiantouyou"></i></a>
          </li>
          <li>
            <a href="#">洗护<span>洗发 洗护 美妆</span><i class="iconfont icon-jiantouyou"></i></a>
          </li>
          <li>
            <a href="#">孕婴<span>奶粉 玩具</span><i class="iconfont icon-jiantouyou"></i></a>
          </li>
          <li>
            <a href="#">服饰<span>女装 男装</span><i class="iconfont icon-jiantouyou"></i></a>
          </li>
          <li>
            <a href="#">杂货<span>户外 图书</span><i class="iconfont icon-jiantouyou"></i></a>
          </li>
          <li>
            <a href="#">品牌<span>品牌 制造</span><i class="iconfont icon-jiantouyou"></i></a>
          </li>
        </ul>
      </div>
      <span href="#" class="prev"><i class="iconfont icon-jiantouzuo"></i></span>
      <span href="#" class="next"><i class="iconfont icon-jiantouyou"></i></span>
      <!-- 下方小圆点 -->
      <ol>
        <li class="current"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="less" scoped>
.ss {
  height: 2165px;
}
.wrapper {
  width: 1240px;
  margin: 0 auto;
}
/* 快捷导航 */
#shortcut {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 52px;
  background-color: #333333;
  line-height: 52px;
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
  z-index: 100;
  position: fixed;
  top: 52px;
  // padding: 20px 0;
  width: 100%;
  height: 70px;
  background-color: #fff;
  transition: all 0.5s;
  .navBar {
    display: flex;
    .navs {
      display: flex;
      flex: 4;
      justify-content: space-between;
      li {
        line-height: 70px;
        cursor: pointer;
        &:hover span {
          color: #25ba9b;
          border-bottom: 1px solid #25ba9b;
        }
      }
    }
    .search {
      flex: 1;
      margin-left: 30px;
      border-bottom: 2px solid #e7e7e7;
      position: relative;
      height: 51px;
      line-height: 51px;
      .el-icon {
        position: absolute;
        left: 10px;
        bottom: 8px;
      }
      input {
        position: absolute;
        bottom: 7px;
        left: 35px;
        width: 155px;
        border: 0;
        outline: none;
        &::placeholder {
          color: #ccc;
          font-size: 14px;
        }
      }
    }
    .car {
      flex: 1;
      position: relative;
      .el-icon {
        position: absolute;
        bottom: 25px;
        left: 15px;
        cursor: pointer;
      }
      span {
        position: absolute;
        bottom: 40px;
        left: 35px;
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
  height: 645px;
  .top {
    ul {
      display: flex;
      justify-content: space-around;
      li {
        width: 300px;
        padding: 0 33px;
        h3 {
          color: #999999;
          text-align: center;
          font-size: 16px;
        }
        .left,
        .right {
          display: inline-block;
          width: 93px;
          height: 93px;
          border: 1px solid #eee;
          margin-top: 30px;
          margin-left: 15px;
          text-align: center;
          p {
            font-size: 14px;
          }
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
            font-size: 29px;
            // color: #666;
          }
          span {
            font-size: 14px;
            color: #999999;
          }
          p {
            color: #999999;
          }
        }
        &:nth-child(3) {
          .right {
            border: none;
            p {
              font-size: 14px;
            }
          }
        }
        &:nth-child(4) {
          text-align: center;
          p {
            margin-top: 35px;
            color: #666666;
            font-size: 22px;
          }
          span {
            color: #999999;
            font-size: 15px;
          }
        }
      }
    }
  }
  .bottom {
    width: 100%;
    height: 375px;
    background-color: #333;
    .bottom_top {
      ul {
        display: flex;
        justify-content: space-between;
        li {
          position: relative;
          width: 300px;
          height: 160px;
          line-height: 175px;
          text-align: center;
          color: #fff;
          .el-icon {
            position: absolute;
            left: 68px;
            top: 59px;
            font-size: 60px;
          }
          span {
            position: absolute;
            right: 55px;
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
