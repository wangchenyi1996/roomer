<template>
  <div class="station">
    <div class="station-left u-f u-f-sbc">
      <div class="station-title">
        <div>旅行驿站</div>
        <div>世界青年欢乐旅行驿站</div>
      </div>
      <img src="../../assets/imgs/home/arrow-right.png" alt="更多" width="20" height="20" />
    </div>
    <div class="box u-f">
      <div class="item u-f u-f-c">
        <div class="u-f">
          <img src="../../assets/imgs/home/room/s1.png" alt="驿站" class="img" />
          <div class="station-small u-f u-f-c">
            <img src="../../assets/imgs/home/room/s2.png" />
            <img src="../../assets/imgs/home/room/s3.png" />
          </div>
        </div>
        <div class="info-desc">
          <ul class="title-desc u-f u-f-sbc">
            <li class="big-title">武汉大陆坊自如驿</li>
            <li style="margin-right:8px">
              <span style="font-size:16px;color:#FC9721;font-weight:500;">￥133</span>
              <span style="font-size:13px;color:#FC9721;">/床起</span>
            </li>
          </ul>
          <div class="where-desc">百年建筑 银行之驿</div>
          <div class="comment-desc">
            <img
              src="../../assets/imgs/home/wjx.png"
              width="11"
              height="11"
              v-for="(item,index) in 5"
              :key="index"
            />
            <span style="color:#919191;display:inline-block;margin-left:10px;">127条评论</span>
          </div>
          <ul class="labels u-f">
            <li class="label-item">赏樱首选</li>
            <li class="label-item">民国风情</li>
            <li class="label-item">音乐社交</li>
          </ul>
        </div>
      </div>
      <div class="item u-f u-f-c">
        <div class="u-f">
          <img src="../../assets/imgs/home/room/ss1.png" alt="驿站" class="img" />
          <div class="station-small u-f u-f-c">
            <img src="../../assets/imgs/home/room/ss2.png" />
            <img src="../../assets/imgs/home/room/ss3.png" />
          </div>
        </div>
        <div class="info-desc">
          <ul class="title-desc u-f u-f-sbc">
            <li class="big-title">北京三里屯团结自如驿</li>
            <li style="margin-right:8px">
              <span style="font-size:16px;color:#FC9721;font-weight:500;">￥198</span>
              <span style="font-size:13px;color:#FC9721;">/床起</span>
            </li>
          </ul>
          <div class="where-desc">霓虹三里 团结之驿</div>
          <div class="comment-desc">
            <img
              src="../../assets/imgs/home/wjx.png"
              width="11"
              height="11"
              v-for="(item,index) in 3"
              :key="index"
            />
            <span style="color:#919191;display:inline-block;margin-left:10px;">1328条评论</span>
          </div>
          <ul class="labels u-f">
            <li class="label-item">两周年庆</li>
            <li class="label-item">开业有礼</li>
            <li class="label-item">健身房</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Station"
};
</script>

<style lang="scss" scoped>
.station {
  margin-top: 20px;
  width: 100%;
  .box {
    margin-top: 13px;
    width: 100%;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .item {
      width: 92%;
      height: 100%;
      // height: 180px;
      flex-shrink: 0;
      .img {
        width: 65%;
        height: 100%;
      }
      .station-small {
        margin-left: 2%;
        width: 35%;
        height: 100%;
        box-sizing: border-box;
        :first-child {
          margin-bottom: 6%;
        }
        > img {
          width: 92%;
        }
      }
      .info-desc {
        .title-desc {
          margin-top: 15px;
          margin-bottom: 10px;
          .big-title {
            font-size: 16px;
            color: $big-color;
            font-weight: bold;
          }
        }
        .where-desc {
          color: #000;
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 7px;
        }
        .labels {
          margin-top: 10px;
          .label-item {
            background: $bgcolor;
            height: 30px;
            line-height: 30px;
            width: 80px;
            margin-right: 10px;
            border-radius: 8px;
            text-align: center;
            font-size: 13px;
            color: $littlesc;
          }
        }
      }
    }
  }
  .station-left {
    .station-title {
      > :first-child {
        font-size: $big-fz;
        color: $big-color;
        font-weight: bold;
        margin-bottom: 10px;
      }
      :last-child {
        font-size: $base-fz;
        color: $littlesc;
      }
    }
  }
}
</style>
