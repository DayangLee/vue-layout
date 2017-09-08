<template>
  <div class="data-container">

    <div class="title">
      <span class="text">汉王蓝天大屏页面配置</span>
      <el-button type="warning" style="margin-right:20px;" @click="logout">退出</el-button>
      <el-button type="success" style="margin-right:80px;" @click="save">保存</el-button>
      <el-button type="primary" style="margin-right:5px;" @click="play">预览</el-button>
    </div>

    <el-tabs type="border-card" class="tabs">
      <el-tab-pane>
        <span slot="label">
          <icon-svg icon-class="tupian1"></icon-svg>
          图片
        </span>
        <div class="pic_ele">
          <div class="box1">
            <div class="preview_box">
              <img src="../../assets/editor/img4.jpg">
            </div>
            <a href="javascript:;" class="a-upload">
              <input type="file" name="" id="uploadImage">更换图片
            </a>
          </div>
          <div class="box2">
            <div class="item">
              <p class="name">圆角</p>
              <div class="item_right">
                <el-slider v-model="radius" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">透明</p>
              <div class="item_right">
                <el-slider v-model="opacity" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
          </div>
          <div class="box3">
            <p>位置</p>
            <div class="item">
              <p class="name">X轴</p>
              <div class="item_right">
                <el-slider v-model="radius" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">Y轴</p>
              <div class="item_right">
                <el-slider v-model="opacity" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">层级</p>
              <div class="item_right">
                <el-slider v-model="opacity" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
          </div>
          <div class="box4">
            <p>大小</p>
            <div class="item">
              <p class="name">宽</p>
              <div class="item_right">
                <el-slider v-model="radius" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">高</p>
              <div class="item_right">
                <el-slider v-model="opacity" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane>
        <span slot="label">
          <icon-svg icon-class="wenben"></icon-svg>
          文本
        </span>
        <div class="text_ele">
          <div class="box1">
            <el-input type="textarea" :rows="7" placeholder="请输入内容" v-model="textarea">
            </el-input>
          </div>
          <div class="box2">
            <div class="item">
              <p class="name">背景色</p>
              <div class="item_right">
                <span class="nobgColor" @click="noBgColor" style="margin-left:20px;">
                  <img src="../../assets/editor/forbidden.png" />
                </span>
                <colorPicker v-model="color" style="margin-top:5px;margin-left:15px;"></colorPicker>
              </div>
            </div>
            <div class="item">
              <p class="name">圆角</p>
              <div class="item_right">
                <el-slider v-model="radius" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">透明</p>
              <div class="item_right">
                <el-slider v-model="opacity" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
          </div>
          <div class="box3">
            <div class="item">
              <p class="name">字号</p>
              <div class="item_right">
                <el-slider v-model="radius" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">字体</p>
              <div class="item_right">
                <el-select v-model="fontFamily" placeholder="请选择">
                  <el-option v-for="item in fontFamilyList" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="item">
              <p class="name">加粗</p>
              <div class="item_right">
                <el-select v-model="boldStyle" placeholder="请选择">
                  <el-option v-for="item in boldStyleList" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="item">
              <p class="name">对齐</p>
              <div class="item_right">
                <el-select v-model="textAlign" placeholder="请选择">
                  <el-option v-for="item in textAlignList" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="box4">
            <p>位置</p>
            <div class="item">
              <p class="name">X轴</p>
              <div class="item_right">
                <el-slider v-model="radius" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">Y轴</p>
              <div class="item_right">
                <el-slider v-model="opacity" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">层级</p>
              <div class="item_right">
                <el-slider v-model="opacity" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
          </div>
          <div class="box5">
            <p>大小</p>
            <div class="item">
              <p class="name">宽</p>
              <div class="item_right">
                <el-slider v-model="radius" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">高</p>
              <div class="item_right">
                <el-slider v-model="opacity" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane>
        <span slot="label">
          <icon-svg icon-class="shebei"></icon-svg>
          设备数据
        </span>
        <div class="device_ele">
          <div class="box1">
            <div class="item">
              <p class="name">设备名称</p>
              <div class="item_right">
                <el-input v-model="out_text" placeholder="请输入内容"></el-input>
              </div>
            </div>
            <div class="item">
              <p class="name">设备选择</p>
              <div class="item_right">
                <el-select v-model="city" filterable remote placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading">
                  <el-option v-for="item in cityOption" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="box2">
            <p>数据类型</p>
            <el-radio-group v-model="device_type" style="margin-top:10px;width:98%;line-height:30px;">
              <el-radio label="pm2d5">PM2.5</el-radio>
              <el-radio label="temp">温度</el-radio>
              <el-radio label="hum">湿度</el-radio>
              <el-radio label="ch2o">甲醛</el-radio>
              <el-radio label="co2">CO2</el-radio>
              <el-radio label="tvoc">TVOC</el-radio>
              <el-radio label="o3">臭氧</el-radio>
              <el-radio label="o2">氧气</el-radio>
              <el-radio label="noise">噪音</el-radio>
              <el-radio label="pressure">气压</el-radio>
              <el-radio label="updateTime">更新时间</el-radio>
              <el-radio label="rank">污染等级</el-radio>
            </el-radio-group>
          </div>
          <div class="box3">
            <div class="item">
              <p class="name">背景色</p>
              <div class="item_right">
                <span class="nobgColor" @click="noBgColor" style="margin-left:20px;">
                  <img src="../../assets/editor/forbidden.png" />
                </span>
                <colorPicker v-model="color" style="margin-top:5px;margin-left:15px;"></colorPicker>
              </div>
            </div>
            <div class="item">
              <p class="name">圆角</p>
              <div class="item_right">
                <el-slider v-model="radius" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">透明</p>
              <div class="item_right">
                <el-slider v-model="opacity" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
          </div>
          <div class="box4">
            <div class="item">
              <p class="name">字号</p>
              <div class="item_right">
                <el-slider v-model="radius" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">字体</p>
              <div class="item_right">
                <el-select v-model="fontFamily" placeholder="请选择">
                  <el-option v-for="item in fontFamilyList" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="item">
              <p class="name">加粗</p>
              <div class="item_right">
                <el-select v-model="boldStyle" placeholder="请选择">
                  <el-option v-for="item in boldStyleList" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="item">
              <p class="name">对齐</p>
              <div class="item_right">
                <el-select v-model="textAlign" placeholder="请选择">
                  <el-option v-for="item in textAlignList" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="box5">
            <p>位置</p>
            <div class="item">
              <p class="name">X轴</p>
              <div class="item_right">
                <el-slider v-model="radius" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">Y轴</p>
              <div class="item_right">
                <el-slider v-model="opacity" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">层级</p>
              <div class="item_right">
                <el-slider v-model="opacity" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
          </div>
          <div class="box6">
            <p>大小</p>
            <div class="item">
              <p class="name">宽</p>
              <div class="item_right">
                <el-slider v-model="radius" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">高</p>
              <div class="item_right">
                <el-slider v-model="opacity" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane>
        <span slot="label">
          <icon-svg icon-class="tianqi"></icon-svg>
          室外天气
        </span>
        <div class="weather_ele">
          <div class="box1">
            <div class="item">
              <p class="name">室外名称</p>
              <div class="item_right">
                <el-input v-model="out_text" placeholder="请输入内容"></el-input>
              </div>
            </div>
            <div class="item">
              <p class="name">城市选择</p>
              <div class="item_right">
                <el-select v-model="city" filterable remote placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading">
                  <el-option v-for="item in cityOption" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="box2">
            <p>数据类型</p>
            <el-radio-group v-model="weather_type" style="margin-top:10px;width:98%;line-height:30px;">
              <el-radio label="pm2d5">PM2.5</el-radio>
              <el-radio label="temp">温度</el-radio>
              <el-radio label="hum">湿度</el-radio>
              <el-radio label="updateTime">更新时间</el-radio>
              <el-radio label="rank">污染等级</el-radio>
            </el-radio-group>
          </div>
          <div class="box3">
            <div class="item">
              <p class="name">背景色</p>
              <div class="item_right">
                <span class="nobgColor" @click="noBgColor" style="margin-left:20px;">
                  <img src="../../assets/editor/forbidden.png" />
                </span>
                <colorPicker v-model="color" style="margin-top:5px;margin-left:15px;"></colorPicker>
              </div>
            </div>
            <div class="item">
              <p class="name">圆角</p>
              <div class="item_right">
                <el-slider v-model="radius" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">透明</p>
              <div class="item_right">
                <el-slider v-model="opacity" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
          </div>
          <div class="box4">
            <div class="item">
              <p class="name">字号</p>
              <div class="item_right">
                <el-slider v-model="radius" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">字体</p>
              <div class="item_right">
                <el-select v-model="fontFamily" placeholder="请选择">
                  <el-option v-for="item in fontFamilyList" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="item">
              <p class="name">加粗</p>
              <div class="item_right">
                <el-select v-model="boldStyle" placeholder="请选择">
                  <el-option v-for="item in boldStyleList" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="item">
              <p class="name">对齐</p>
              <div class="item_right">
                <el-select v-model="textAlign" placeholder="请选择">
                  <el-option v-for="item in textAlignList" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="box5">
            <p>位置</p>
            <div class="item">
              <p class="name">X轴</p>
              <div class="item_right">
                <el-slider v-model="radius" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">Y轴</p>
              <div class="item_right">
                <el-slider v-model="opacity" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">层级</p>
              <div class="item_right">
                <el-slider v-model="opacity" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
          </div>
          <div class="box6">
            <p>大小</p>
            <div class="item">
              <p class="name">宽</p>
              <div class="item_right">
                <el-slider v-model="radius" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">高</p>
              <div class="item_right">
                <el-slider v-model="opacity" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <icon-svg icon-class="shijian"></icon-svg>
          北京时间
        </span>
        北京时间元素
      </el-tab-pane>
    </el-tabs>

    
    <div class="body">
      <div class="left">
        <el-tabs v-model="activeName" type="border-card" @tab-remove="removeTab">
          <el-tab-pane label="页面模板" name="first">
            <el-button @click="addTab('modela')">modela</el-button>
            <el-button @click="addTab('modelb')">modelb</el-button>
            <el-button @click="addTab('modelc')">modelc</el-button>
            <el-button @click="addTab('modeld')">modeld</el-button>
            <el-button @click="addTab('hotel')">hotel</el-button>
            <el-button @click="addTab('工厂')">工厂</el-button>
            <el-button @click="addTab('学校')">学校</el-button>
          </el-tab-pane>
          <el-tab-pane v-if="model.name" :label="model.name" :name="model.name" closable>
            {{model.content}}
          </el-tab-pane>
        </el-tabs>
      </div>

      <div class="right">

        <div class="right_body">

        </div>
      </div>

    </div>
    <div class="clear"></div>

  </div>
</template>

<script>
import { logout } from '@/api/login'
import colorPicker from '@/components/vue-color-picker/colorPicker'
const cityList = ['北京', '上海', '广州', '深圳', '南京']
const fontFamilyList = [{ value: '宋体', label: '宋体' }, { value: '楷体', label: '楷体' }, { value: '黑体', label: '黑体' }]
const boldStyleList = [{ value: 'false', label: '不加粗' }, { value: '200', label: '200' }, { value: '300', label: '300' }, { value: '400', label: '400' }, { value: '500', label: '500' }, { value: '600', label: '600' }, { value: '700', label: '700' }, { value: '800', label: '800' }, { value: '900', label: '900' }]
const textAlignList = [{ value: 'left', label: '左对齐' }, { value: 'right', label: '右对齐' }, { value: 'center', label: '居中' }]
export default {
  components: { colorPicker },
  data: () => ({
    activeName: 'first',
    color: 'red',
    radius: 0,
    opacity: 0,
    out_text: '',
    city: '',
    hotCities: cityList,
    list: [],
    cityOption: [],
    loading: false,
    weather_type: '',
    device_type: '',
    fontFamily: '',
    boldStyle: '',
    textAlign: '',
    fontFamilyList: fontFamilyList,
    boldStyleList: boldStyleList,
    textAlignList: textAlignList,
    textarea: '',
    model: {
      name: null,
      content: null
    }
  }),
  methods: {
    logout() {
      return new Promise((resolve, reject) => {
        logout().then(response => {
          this.$router.push({ path: '/' })
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    addTab(targetName) {
      this.model.name = targetName
      this.model.content = targetName
      this.activeName = targetName;
    },
    removeTab(targetName) {
      this.activeName = 'first'
      this.model = {
        name: null,
        content: null
      }
    },
    addElement(val) {
      alert(val)
    },
    save() {
      alert('save')
    },
    play() {
      alert('play')
      window.open('http://www.baidu.com')
    },
    noBgColor() {
      alert('no bg color')
    },
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.cityOption = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.cityOption = [];
      }
    }
  },
  mounted() {
    this.list = this.hotCities.map(item => {
      return { value: item, label: item };
    })
    this.cityOption = this.hotCities.map(item => {
      return { value: item, label: item };
    })
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
* {
  margin: 0;
  padding: 0;
}

.clear {
  clear: both;
}


.box1,
.box2,
.box3,
.box4,
.box5,
.box6 {
  float: left;
}

.data-container {
  width: 100%;
  min-width: 1200px;

  .title {
    font-size: 24px;
    width: 100%;
    height: 64px;
    line-height: 64px;
    color: white;
    background-color: rgba(47, 50, 59, 1);
    .text {
      margin-left: 20px;
    }
    .el-button {
      float: right;
      margin-top: 14px;
    }
  }

  .tabs {
    width: 96%;
    margin: 20px auto;

    .el-tabs__content {
      height: 198px;
    }
  }
  .item {
    width: 100%;
    height: 50px;
    line-height: 50px;
    .name {
      font-weight: bold;
      float: left;
      width: 15%;
      height: 100%;
    }
    .item_right {
      float: left;
      width: 78%;
      height: 100%;
      .nobgColor:hover {
        cursor: pointer;
      }
      .el-input-number--small {
        width: 50px;
      }
      .el-slider__runway.show-input {
        line-height: 50px;
        width: 70%;
        margin-left: 0px;
        margin-top: 25px;
      }
      .el-slider__button-wrapper {
        top: -24px;
      }
    }
  }
  .pic_ele {
    .box1 {
      width: 20%;
      padding-right: 2%;
      border-right: 1px solid #d1dbe5;
      .preview_box {
        width: 100%;
        img {
          width: 100%;
          height: 120px;
        }
      }
      .a-upload {
        padding: 1px 10px;
        height: 30px;
        width: 100%;
        background: white;
        line-height: 30px;
        position: relative;
        cursor: pointer;
        color: rgba(0, 0, 0, .7);
        border-radius: 4px;
        overflow: hidden;
        display: inline-block;
        *display: inline;
        *zoom: 1;
        text-align: center;
        margin-top: 10px;
        text-align: center;
        font-size: 18px;
        border: 1px solid #ddd;
      }
      .a-upload input {
        position: absolute;
        height: 30px;
        line-height: 30px;
        font-size: 100px;
        right: 0;
        top: 0;
        opacity: 0;
        cursor: pointer
      }
      .a-upload:hover {
        color: #444;
        background: #eee;
        border-color: #ccc;
        text-decoration: none;
        cursor: pointer;
      }
    }
    .box2,
    .box3,
    .box4 {
      width: 23%;
      height: 168px;
      margin-left: 1%;
      padding-left: 20px;
      padding-right: 10px;
      border-right: 1px solid #d1dbe5;
      font-weight: bold;
    }
    .box4 {
      border: none;
    }
  }
  .text_ele {
    .box1,
    .box2,
    .box3,
    .box4,
    .box5 {
      height: 168px;
      padding-left: 15px;
      padding-right: 15px;
      border-right: 1px solid #d1dbe5;
      font-weight: bold;
    }
    .box1 {
      width: 20%;
      font-size: 30px;
    }
    .box2 {
      width: 20%;
      .name {
        width: 20%;
      }
      .item_right {
        width: 76%;
        .el-slider__runway.show-input {
          width: 60%;
        }
      }
    }
    .box3 {
      width: 20%;
      .item {
        height: 45px;
        line-height: 45px;
      }
      .name {
        width: 20%;
      }
      .item_right {
        width: 76%;
        .el-slider__runway.show-input {
          width: 60%;
        }
      }
    }
    .box4 {
      width: 20%;
    }
    .box5 {
      width: 18%;
      border-right: none;
    }
  }
  .device_ele,
  .weather_ele {
    .box1,
    .box2,
    .box3,
    .box4,
    .box5,
    .box6 {
      height: 168px;
      padding-left: 15px;
      border-right: 1px solid #d1dbe5;
      font-weight: bold;
    }
    .box1 {
      width: 15%;
      padding-left: 0px;
      .name {
        font-weight: bold;
        width: 40%;
      }
      .item_right {
        width: 56%;
        .el-select .el-input__inner {
          padding-right: 5px;
        }
      }
    }
    .box2 {
      width: 15%;
      .el-radio {
        margin-left: 0;
        margin-right: 8px;
      }
    }
    .box3 {
      width: 18%;
      .name {
        width: 23%;
      }
      .item_right {
        width: 70%;
        .el-slider__runway.show-input {
          width: 60%;
        }
      }
    }
    .box4 {
      width: 17%;
      .item {
        height: 45px;
        line-height: 45px;
      }
      .name {
        width: 22%;
      }
      .item_right {
        width: 70%;
        .el-slider__runway.show-input {
          width: 60%;
        }
      }
    }
    .box5 {
      width: 18%;
      .el-slider__runway.show-input {
        width: 60%;
        margin-left: 5%;
      }
    }
    .box6 {
      width: 17%;
      border-right: none;
      .el-slider__runway.show-input {
        width: 60%;
      }
    }
  }
  .body {
    margin-top: 30px;
    width: 96%;
    margin: 10px auto;
  }
  .left {
    width: 250px;
    float: left;
    .el-tabs {
      min-height: 500px;
    } // .el-button {
    //   width: 200px;
    //   margin: 10px 10px;
    // }
  }
  .right {
    margin-left: 200px;
    .right_header {
      padding-left: 20px;
    }
    .right_body {
      background-color: rgb(204, 204, 204);
      width: 80%;
      height: 0px;
      overflow: hidden;
      margin-left: 20%; // margin-top: 20px;
      padding-bottom: 48%;
    }
  } // .right {
  //   float: right;
  //   // background-color: rgb(204, 204, 204);
  //   // width: 1050px;
  //   // height: 590.625px;
  //   // overflow: hidden;
  //   // padding-bottom: 48%;
  //   .right_body {
  //     background-color: rgb(204, 204, 204);
  //     width: 80%;
  //     height: 0px;
  //     overflow: hidden;
  //     margin-left: 20%; // margin-top: 20px;
  //     padding-bottom: 48%;
  //   }
  // } // .right {
  //   width: 240px;
  //   height: 200px;
  //   float: right;
  //   background-color: blue;
  // }
}
</style>
