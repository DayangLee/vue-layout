<template>
  <div class="data-container">

    <div class="main_title">
      <span class="text">汉王蓝天大屏页面配置</span>
      <el-button type="warning" style="margin-right:20px;" @click="logout">退出</el-button>
      <el-button type="success" style="margin-right:80px;" @click="save">保存</el-button>
      <el-button type="primary" style="margin-right:5px;" @click="play">预览</el-button>
    </div>

    <div class="body">
      <div class="left">
        <el-tabs v-model="activeName" type="border-card" @tab-remove="removeTab">
          <el-tab-pane label="页面模板" name="first">
            <p class="modelItem" v-for="item in configList">
              <span @click.stop="addTab(item)" class="icon1">
                <icon-svg icon-class="bianji"></icon-svg>
              </span>
              {{item}}
              <span @click.stop="deleteConfig(item)" class="icon2">
                <icon-svg icon-class="shanchu"></icon-svg>
              </span>
            </p>
          </el-tab-pane>
          <el-tab-pane v-if="model.name" :label="model.name" :name="model.name" closable>
            {{model.content}}
          </el-tab-pane>
        </el-tabs>
        <el-button type="success" @click="dialogVisible = true">新建配置</el-button>
      </div>

      <div class="center">
        <el-row class="center_top">
          <el-col :lg="16" :md="16" class="element_buttons">
            <el-button @click="addElement('pic')">
              <icon-svg icon-class="tupian1"></icon-svg>
              图片
            </el-button>
            <el-button @click="addElement('text')">
              <icon-svg icon-class="wenben"></icon-svg>
              文本
            </el-button>
            <el-button @click="addElement('device')">
              <icon-svg icon-class="shebei"></icon-svg>
              设备数据
            </el-button>
            <el-button @click="addElement('weather')">
              <icon-svg icon-class="tianqi"></icon-svg>
              室外天气
            </el-button>
            <el-button @click="addElement('time')">
              <icon-svg icon-class="shijian"></icon-svg>
              北京时间
            </el-button>
          </el-col>
          <el-col :lg="8" :md="8" class="operate_buttons">
            <el-button-group style="float:right;">
              <el-button>上一层</el-button>
              <el-button>下一层</el-button>
              <el-button>删除</el-button>
            </el-button-group>
          </el-col>
        </el-row>

        <div id="preview_box"></div>
      </div>

      <div class="right">
        <div class="pic_editor editor" v-if="editor=='pic'">
          <p class="editor_title">图片</p>
          <div class="box box1">
            <a href="javascript:;" class="a-upload" @change="uploadPic">
              <input type="file" name="" id="uploadImage">上传图片
            </a>
            <img :src=" pic_ele.img " alt="(◕ᴥ◕)还没有上传图片哦">
          </div>
          <div class="box box2">
            <p class="box_title">样式</p>
            <div class="item">
              <p class="name">圆角</p>
              <div class="item_right">
                <el-slider v-model="pic_ele.radius" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">透明度</p>
              <div class="item_right">
                <el-slider v-model="pic_ele.opacity" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
          </div>
          <div class="box box3">
            <p class="box_title">位置</p>
            <div class="item">
              <p class="name">X轴</p>
              <div class="item_right">
                <el-slider v-model="pic_ele.x" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">Y轴</p>
              <div class="item_right">
                <el-slider v-model="pic_ele.y" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">层级</p>
              <div class="item_right">
                <el-slider v-model="pic_ele.z" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
          </div>
          <div class="box box4">
            <p class="box_title">大小</p>
            <div class="item">
              <p class="name">宽度</p>
              <div class="item_right">
                <el-slider v-model="pic_ele.w" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">高度</p>
              <div class="item_right">
                <el-slider v-model="pic_ele.h" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
          </div>
        </div>
        <div class="text_editor editor" v-else-if="editor=='text'">
          <p class="editor_title">文本</p>
          <div class="box box1">
            <el-input type="textarea" :rows="5" placeholder="请在此输入内容" v-model="text_ele.text" style="margin-bottom:10px;">
            </el-input>
          </div>
          <div class="box box2">
            <p class="box_title">样式</p>
            <div class="item">
              <p class="name">背景色</p>
              <div class="item_right">
                <span class="nobgColor" @click="noBgColor" style="margin-left:20px;">
                  <img src="../../assets/editor/forbidden.png" />
                </span>
                <colorPicker v-model="text_ele.bgc" style="margin-top:5px;margin-left:15px;"></colorPicker>
              </div>
            </div>
            <div class="item">
              <p class="name">边框颜色</p>
              <div class="item_right">
                <span class="nobgColor" @click="noBgColor" style="margin-left:20px;">
                  <img src="../../assets/editor/forbidden.png" />
                </span>
                <colorPicker v-model="text_ele.bc" style="margin-top:5px;margin-left:15px;"></colorPicker>
              </div>
            </div>
            <div class="item">
              <p class="name">圆角</p>
              <div class="item_right">
                <el-slider v-model="text_ele.radius" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">透明</p>
              <div class="item_right">
                <el-slider v-model="text_ele.opacity" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">边框宽度</p>
              <div class="item_right">
                <el-slider v-model="text_ele.bw" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
          </div>
          <div class="box box3">
            <p class="box_title">文字显示</p>
            <div class="item">
              <p class="name">颜色</p>
              <div class="item_right">
                <!-- <span class="nobgColor" @click="noBgColor" style="margin-left:20px;">
                                                          <img src="../../assets/editor/forbidden.png" />
                                                        </span> -->
                <colorPicker v-model="text_ele.color" style="margin-top:5px;margin-left:15px;"></colorPicker>
              </div>
            </div>
            <div class="item">
              <p class="name">大小</p>
              <div class="item_right">
                <el-slider v-model="text_ele.size" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">字体</p>
              <div class="item_right">
                <el-select v-model="text_ele.font" placeholder="请选择">
                  <el-option v-for="item in fontFamilyList" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="item">
              <p class="name">加粗</p>
              <div class="item_right">
                <el-select v-model="text_ele.bold" placeholder="请选择">
                  <el-option v-for="item in boldStyleList" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="item">
              <p class="name">对齐</p>
              <div class="item_right">
                <el-select v-model="text_ele.align" placeholder="请选择">
                  <el-option v-for="item in textAlignList" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="box box4">
            <p class="box_title">位置</p>
            <div class="item">
              <p class="name">X轴</p>
              <div class="item_right">
                <el-slider v-model="text_ele.x" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">Y轴</p>
              <div class="item_right">
                <el-slider v-model="text_ele.y" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">层级</p>
              <div class="item_right">
                <el-slider v-model="text_ele.z" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
          </div>
          <div class="box box5">
            <p class="box_title">大小</p>
            <div class="item">
              <p class="name">宽</p>
              <div class="item_right">
                <el-slider v-model="text_ele.w" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">高</p>
              <div class="item_right">
                <el-slider v-model="text_ele.h" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
          </div>
        </div>
        <div class="device_editor editor" v-else-if="editor=='device'">
          <p class="editor_title">设备数据</p>
          <div class="box box1">
            <div class="box1">
              <div class="item">
                <p class="name">设备名称</p>
                <div class="item_right">
                  <el-input v-model="dev_ele.name" placeholder="请输入内容"></el-input>
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
              <div class="item">
                <p class="name">时间格式</p>
                <div class="item_right">
                  <el-select v-model="dev_ele.timeFormat" :disabled="dev_ele.dataType==='updateTime'?false:true" placeholder="请选择">
                    <el-option v-for="item in timeFormatList" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
            </div>
          </div>
          <div class="box box2">
            <p class="box_title">数据类型</p>
            <el-radio-group v-model="dev_ele.dataType" style="margin-top:10px;width:90%;margin-left:10px;line-height:30px;">
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
          <div class="box box3">
            <p class="box_title">样式</p>
            <div class="item">
              <p class="name">背景色</p>
              <div class="item_right">
                <span class="nobgColor" @click="noBgColor" style="margin-left:20px;">
                  <img src="../../assets/editor/forbidden.png" />
                </span>
                <colorPicker v-model="dev_ele.bgc" style="margin-top:5px;margin-left:15px;"></colorPicker>
              </div>
            </div>
            <div class="item">
              <p class="name">边框颜色</p>
              <div class="item_right">
                <span class="nobgColor" @click="noBgColor" style="margin-left:20px;">
                  <img src="../../assets/editor/forbidden.png" />
                </span>
                <colorPicker v-model="dev_ele.bc" style="margin-top:5px;margin-left:15px;"></colorPicker>
              </div>
            </div>
            <div class="item">
              <p class="name">圆角</p>
              <div class="item_right">
                <el-slider v-model="dev_ele.radius" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">透明度</p>
              <div class="item_right">
                <el-slider v-model="dev_ele.opacity" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">边框宽度</p>
              <div class="item_right">
                <el-slider v-model="dev_ele.bw" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
          </div>
          <div class="box box4">
            <p class="box_title">文字显示</p>
            <div class="item">
              <p class="name">大小</p>
              <div class="item_right">
                <el-slider v-model="dev_ele.size" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">字体</p>
              <div class="item_right">
                <el-select v-model="dev_ele.font" placeholder="请选择">
                  <el-option v-for="item in fontFamilyList" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="item">
              <p class="name">加粗</p>
              <div class="item_right">
                <el-select v-model="dev_ele.bold" placeholder="请选择">
                  <el-option v-for="item in boldStyleList" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="item">
              <p class="name">对齐</p>
              <div class="item_right">
                <el-select v-model="dev_ele.align" placeholder="请选择">
                  <el-option v-for="item in textAlignList" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="box box5">
            <p class="box_title">位置</p>
            <div class="item">
              <p class="name">X轴</p>
              <div class="item_right">
                <el-slider v-model="dev_ele.x" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">Y轴</p>
              <div class="item_right">
                <el-slider v-model="dev_ele.y" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">层级</p>
              <div class="item_right">
                <el-slider v-model="dev_ele.z" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
          </div>
          <div class="box box6">
            <p class="box_title">大小</p>
            <div class="item">
              <p class="name">宽</p>
              <div class="item_right">
                <el-slider v-model="dev_ele.w" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">高</p>
              <div class="item_right">
                <el-slider v-model="dev_ele.h" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
          </div>
        </div>
        <div class="weather_editor editor" v-else-if="editor=='weather'">
          <p class="editor_title">室外天气</p>
          <div class="box box1">
            <div class="item">
              <p class="name">室外名称</p>
              <div class="item_right">
                <el-input v-model="weather_ele.name" placeholder="请输入内容"></el-input>
              </div>
            </div>
            <div class="item">
              <p class="name">城市选择</p>
              <div class="item_right">
                <el-select v-model="weather_ele.city" filterable remote placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading">
                  <el-option v-for="item in cityOption" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="item">
              <p class="name">时间格式</p>
              <div class="item_right">
                <el-select v-model="weather_ele.timeFormat" :disabled="weather_ele.dataType==='updateTime'?false:true" placeholder="请选择">
                  <el-option v-for="item in timeFormatList" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="box box2">
            <p class="box_title">数据类型</p>
            <el-radio-group v-model="weather_ele.dataType" style="margin-top:10px;width:90%;margin-left:10px;line-height:30px;">
              <el-radio label="pm2d5">PM2.5</el-radio>
              <el-radio label="temp">温度</el-radio>
              <el-radio label="hum">湿度</el-radio>
              <el-radio label="updateTime">更新时间</el-radio>
              <el-radio label="rank">污染等级</el-radio>
            </el-radio-group>
          </div>
          <div class="box box3">
            <p class="box_title">样式</p>
            <div class="item">
              <p class="name">背景色</p>
              <div class="item_right">
                <span class="nobgColor" @click="noBgColor" style="margin-left:20px;">
                  <img src="../../assets/editor/forbidden.png" />
                </span>
                <colorPicker v-model="weather_ele.bgc" style="margin-top:5px;margin-left:15px;"></colorPicker>
              </div>
            </div>
            <div class="item">
              <p class="name">边框颜色</p>
              <div class="item_right">
                <span class="nobgColor" @click="noBgColor" style="margin-left:20px;">
                  <img src="../../assets/editor/forbidden.png" />
                </span>
                <colorPicker v-model="weather_ele.bc" style="margin-top:5px;margin-left:15px;"></colorPicker>
              </div>
            </div>
            <div class="item">
              <p class="name">圆角</p>
              <div class="item_right">
                <el-slider v-model="weather_ele.radius" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">透明度</p>
              <div class="item_right">
                <el-slider v-model="weather_ele.opacity" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">边框宽度</p>
              <div class="item_right">
                <el-slider v-model="weather_ele.bw" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
          </div>
          <div class="box box4">
            <p class="box_title">文字显示</p>
            <div class="item">
              <p class="name">大小</p>
              <div class="item_right">
                <el-slider v-model="weather_ele.size" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">字体</p>
              <div class="item_right">
                <el-select v-model="weather_ele.font" placeholder="请选择">
                  <el-option v-for="item in fontFamilyList" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="item">
              <p class="name">加粗</p>
              <div class="item_right">
                <el-select v-model="weather_ele.bold" placeholder="请选择">
                  <el-option v-for="item in boldStyleList" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="item">
              <p class="name">对齐</p>
              <div class="item_right">
                <el-select v-model="weather_ele.align" placeholder="请选择">
                  <el-option v-for="item in textAlignList" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="box box5">
            <p class="box_title">位置</p>
            <div class="item">
              <p class="name">X轴</p>
              <div class="item_right">
                <el-slider v-model="weather_ele.x" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">Y轴</p>
              <div class="item_right">
                <el-slider v-model="weather_ele.y" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">层级</p>
              <div class="item_right">
                <el-slider v-model="weather_ele.z" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
          </div>
          <div class="box box6">
            <p class="box_title">大小</p>
            <div class="item">
              <p class="name">宽</p>
              <div class="item_right">
                <el-slider v-model="weather_ele.w" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
            <div class="item">
              <p class="name">高</p>
              <div class="item_right">
                <el-slider v-model="weather_ele.h" show-input :show-input-controls="false">
                </el-slider>
              </div>
            </div>
          </div>
        </div>
        <div class="time_editor editor" v-else>
          <p class="editor_title">北京时间</p>
        </div>
      </div>
    </div>

    <el-dialog :visible.sync="dialogVisible" class="dialog" size="tiny" :before-close="handleCloseDialog">
      <span slot="title" class="dialog-title">新建配置</span>
      <span>
        <el-form :model="newConfigForm" label-width="100px" class="newConfigForm">
          <el-form-item prop="name" label="配置名称" :rules="[
                                                                                                                    { required: true, message: '配置名称不能为空', trigger: 'blur' }
                                                                                                                  ]">
            <el-input v-model="newConfigForm.name"></el-input>
          </el-form-item>
          <el-form-item prop="model" label="模板选择" label-width="100px">
            <el-select v-model="newConfigForm.model">
              <el-option label="自定义" value="new"></el-option>
              <el-option label="modela" value="modela"></el-option>
              <el-option label="modelb" value="modelb"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false,newConfigForm.name = '',newConfigForm.model='user'">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import $ from 'jquery'
import { logout } from '@/api/login'
import colorPicker from '@/components/vue-color-picker/colorPicker'
const cityList = ['北京', '上海', '广州', '深圳', '南京']
const fontFamilyList = [{ value: '1', label: '宋体' }, { value: '2', label: '楷体' }, { value: '3', label: '黑体' }]
const boldStyleList = [{ value: false, label: '不加粗' }, { value: 200, label: '200' }, { value: 300, label: '300' }, { value: 400, label: '400' }, { value: 500, label: '500' }, { value: 600, label: '600' }, { value: 700, label: '700' }, { value: 800, label: '800' }, { value: 900, label: '900' }]
const textAlignList = [{ value: 1, label: '左对齐' }, { value: 2, label: '右对齐' }, { value: 3, label: '居中' }]
const timeFormatList = [{ value: 'yyyy年MM月dd日HH时mm分', label: 'yyyy年MM月dd日HH时mm分' }, { value: 'MM月dd日HH时mm分', label: 'MM月dd日HH时mm分' }, { value: 'yyyy/MM/dd HH:mm', label: 'yyyy/MM/dd HH:mm' }]
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
    timeFormatList: timeFormatList,
    textarea: '',
    dev_timeFormat: true,
    model: {
      name: null,
      content: null
    },
    configList: [],
    dialogVisible: false,
    newConfigForm: {
      name: '',
      model: 'new'
    },
    editor: 'pic',
    pic_ele: {
      img: '',
      x: 88,
      y: 10,
      z: 1,
      w: 100,
      h: 100,
      radius: 22,
      opacity: 33
    },
    text_ele: {
      x: 88,
      y: 10,
      z: 1,
      w: 100,
      h: 100,
      bc: 'white',
      bw: null,
      bgc: 'white',
      text: '',
      size: 25,
      color: 'black',
      font: '宋体',
      align: 1,
      bold: 400,
      radius: 22,
      opacity: 33
    },
    dev_ele: {
      name: null,
      x: 100,
      y: 200,
      w: 50,
      h: 50,
      z: 99,
      bgc: 'white',
      radius: 0,
      opacity: 100,
      bc: 'white',
      bw: 0,
      text: "{value}",
      size: 13,
      color: "black",
      font: "宋体",
      align: 1,
      bold: 400,
      dataType: "pm2d5",
      timeFormat: "yyyy年MM月dd日HH点mm分",
      frames: null
    },
    weather_ele: {
      name: null,
      x: 35,
      y: 51,
      w: 14,
      h: 7,
      z: 30,
      bgc: 'white',
      radius: 0,
      opacity: 100,
      bc: 'white',
      bw: 0,
      text: "",
      size: 5,
      color: 'black',
      font: "楷体",
      align: 2,
      bold: 600,
      city: "",
      dataType: "pm2d5",
      timeFormat: "yyyy年MM月dd日HH点mm分"
    }
  }),
  methods: {
    test(val) {
      if (val) {
        alert(val)
      } else {
        alert('test')
      }
    },
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
    addTab(targetName) {  // 点击编辑按钮，tab跳转至右侧指定配置文件元素列表
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
    deleteConfig(targetName) {
      let index = this.configList.indexOf(targetName);
      this.configList.remove(index)
    },
    addElement(val) {
      this.editor = val
    },
    save() {
      alert('save')
    },
    play() {
      let url = window.location.href
      let pathname = window.location.pathname
      let index = url.indexOf(pathname)
      url = url.substring(0, index) + '/preview'
      window.open(url)  // jump to preview page
    },
    handleCloseDialog(done) {
      this.newConfigForm.name = ''
      this.newConfigForm.model = 'new'
      done()
    },
    noBgColor() {
      alert('no bg color')
    },
    uploadPic(e) {
      console.log(e)
      //console.log(this)
      // $(".a-upload").on("change", "input[type='file']", function(e) {
      var filePath = e.path[0].value;
      //console.log(filePath);
      this.pic_ele.img = filePath
      //$('.pic_editor .box1 img').attr('src', filePath);
      var file = e.target.files[0]; //获取图片资源

      // 只选择图片文件
      if (!file.type.match('image.*')) {
        return false;
      }

      var reader = new FileReader();

      reader.readAsDataURL(file); // 读取文件
      //console.log(file);
      // 渲染文件
      reader.onload = function(arg) {
        //console.log(file);
        console.log(arg)
        var img = '<img class=' + file.name + ' src="' + arg.target.result + '" alt="preview"/>';
        // if (file.name.indexOf('.') == -1) {
        //   var img = '<img class=' + file.name + ' src="' + arg.target.result + '" alt="preview"/>';
        //   this.pic_ele.img = arg.target.result
        // } else {
        //   var img = '<img class=' + file.name.substring(0, file.name.indexOf('.')) + ' src="' + arg.target.result + '" alt="preview"/>';
        // }

        document.getElementById('preview_box').append(img)
        //$(".preview_box").empty().append(img);
        //$('.preview').empty().append(img);
      }

      // if (file.name.indexOf('.') == -1) {
      //   setCookie('image', file.name, 1);
      // } else {
      //   setCookie('image', file.name.substring(0, file.name.indexOf('.')), 1);
      // }

      // })
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
    this.configList = ['modela', 'modelb', 'modelc', 'hotel', '工厂', '学校']
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
  min-width: 1280px;
}

.main_title {
  font-size: 24px;
  width: 100%;
  min-width: 1280px;
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
  //background-color: #FFB6C1;
  width: 200px;
  height: 100%;
  float: left;
  .el-tabs {
    margin-top: 65px;
    height: calc(100% - 69px);

    .el-tabs__content {
      height: calc(100% - 150px);
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
  }
  .el-button {
    width: 160px;
    position: absolute;
    bottom: 20px;
    left: 20px;
  }
}




.center {
  //background-color: #00FFFF;
  width: calc(100% - 500px);
  height: 100%;
  float: left;
  .center_top {
    width: 98%; //background-color: yellow;
    margin-top: 64px;
    margin-left: 1%;
    padding: 5px 10px;
    background-color: #eef1f6;
    .element_buttons {
      padding: 10px 5px; //background-color: blue;
      .el-button {
        width: 100px;
        margin-left: 0;
        margin-right: 10px;
        margin-top: 10px;
      }
    }
    .operate_buttons {
      padding: 10px 5px;
      margin-top: 10px; //background-color: red;
    }
  }

  #preview_box {
    width: 98%;
    height: 0px;
    overflow: hidden;
    margin-left: 1%;
    margin-top: 20px;
    padding-bottom: 55.125%;
    border: 1px solid rgb(204, 204, 204);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
  }
}

.right {
  background-color: rgba(248, 248, 248, 1);
  width: 300px;
  height: calc(100% - 65px);
  float: right;
  margin-top: 65px;
  overflow-y: auto;
  .editor_title {
    font-size: 20px;
    width: 100%;
    text-align: center;
    padding-top: 7px;
    padding-bottom: 7px; //background-color: #eef1f6;
    background-color: rgba(204, 204, 204, 1);
  }
  .box {
    width: 100%;

    .box_title {
      width: 98%;
      margin: auto;
      text-align: center;
      background-color: white;
      padding: 4px 0;
      border: 1px solid #ddd;
    }
    .item {
      width: 100%;
      height: 50px;
      line-height: 50px;
      .name {
        font-weight: bold;
        float: left;
        width: 25%;
        height: 100%;
        padding-left: 7px;
      }
      .item_right {
        float: left;
        width: 70%;
        height: 100%;
        .el-input-number--small {
          width: 45px;
          margin-top: 10px;
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
    .el-radio {
      margin-left: 0;
      margin-right: 8px;
    }
  }
}

.pic_editor {
  .box1 {
    text-align: center;
    img {
      width: 90%;
      margin: 10px 0;
    }
    .a-upload {
      height: 30px;
      width: 90%;
      background: white;
      line-height: 30px;
      position: relative;
      cursor: pointer;
      color: rgba(0, 0, 0, .7);
      border-radius: 4px;
      overflow: hidden;
      display: inline-block; // *display: inline;
      // *zoom: 1;
      margin-top: 10px;
      text-align: center;
      font-size: 18px;
      border: 1px solid #ddd;
      text-decoration: none;
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
      cursor: pointer;
    }
  }
}



// 修复dialog内文字抖动问题
.el-dialog {
  transform: none;
  left: 0;
  position: relative;
  margin: 0 auto;
}

.dialog {
  .el-dialog__header {
    border-bottom: 1px solid #bfcbd9;
    padding-bottom: 15px;
  }
  .el-dialog__footer {
    border-top: 1px solid #bfcbd9;
    padding-top: 15px;
  }
  .dialog-title {
    font-size: 34px;
    font-weight: bold;
  }
  .newConfigForm {
    width: 80%;
    margin: 20px auto;
  }
}
</style>
