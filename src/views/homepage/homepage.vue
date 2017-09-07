<template>
  <div class="data-container">

    <div class="title">
      <span class="text">汉王蓝天大屏页面配置</span>
      <el-button type="warning" style="margin-right:20px;" @click="logout">退出</el-button>
      <el-button type="success" style="margin-right:80px;" @click="save">保存</el-button>
      <el-button type="primary" style="margin-right:5px;" @click="play">预览</el-button>
    </div>

    <div class="body">
      <div class="left">
        <el-tabs v-model="activeName" type="border-card" @tab-remove="removeTab">
          <el-tab-pane label="页面模板" name="first">
            <p class="modelItem">
              <icon-svg icon-class="bianji" class="icon1" @click="addTab('modela')"></icon-svg>
              modela
              <icon-svg icon-class="shanchu" class="icon2"></icon-svg>
            </p>
            <!-- <el-button @click="addTab('modela')">modela</el-button>
            <el-button @click="addTab('modelb')">modelb</el-button>
            <el-button @click="addTab('modelc')">modelc</el-button>
            <el-button @click="addTab('modeld')">modeld</el-button>
            <el-button @click="addTab('hotel')">hotel</el-button>
            <el-button @click="addTab('工厂')">工厂</el-button>
            <el-button @click="addTab('学校')">学校</el-button> -->
          </el-tab-pane>
          <el-tab-pane v-if="model.name" :label="model.name" :name="model.name" closable>
            {{model.content}}
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="center"></div>
      <div class="right"></div>
    </div>
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
      console.log(targetName)
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

.data-container {
  width: 100%;
  min-width: 960px;
}

.title {
  font-size: 24px;
  width: 100%;
  height: 64px;
  line-height: 64px;
  color: white;
  background-color: rgba(47, 50, 59, 1);
  position: absolute;
  .text {
    margin-left: 20px;
  }
  .el-button {
    float: right;
    margin-top: 14px;
  }
}

.body {
  width: 100%;
  height: 100vh;
}

.left {
  background-color: #FFB6C1;
  width: 200px;
  height: 100%;
  float: left;
  .el-tabs {
    margin-top: 66px;
    height: calc(100% - 70px);

    .el-tabs__content {
      height: calc(100% - 150px);
      // background-color: #FFDEAD;
      overflow-y: auto;
    }

    .modelItem {
      width: 80%;
      margin: 10px auto;
      text-align: center;
      border: 1px solid #c4c4c4;
      border-radius: 4px;
      padding: 10px 15px;
      font-size: 22px;
      svg-icon {
        width: 1.5em;
        height: 1.5em;
      }
    }
    .icon1 {
      float: left;
    }
  }
  .icon2 {
    float: right;
  }
  .icon1,
  .icon2 {
    &:hover {
      cursor: pointer;
      color: #20a0ff;
    }
  } // .el-button {
  //   width: 80%;
  //   margin: 10px auto;
  // }
}




.center {
  background-color: #00FFFF;
  width: calc(100% - 500px);
  height: 100%;
  float: left;
}

.right {
  background-color: #FFDEAD;
  width: 300px;
  height: 100%;
  float: right;
}
</style>
