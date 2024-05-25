<template>
  <!-- 容器组件 -->
  <page-view center-type="cover">
    <!-- 背景图像 -->
    <div class="c-fixed z0">
      <vue-img-loader :src="backgroundImage" :preview="backgroundImagePreview" :width="width" :height="height" transition="fade" />
    </div>

    <!-- 滑块 -->
    <div class="c-fixed z1">
      <controlled-slider :progress="progress" />
    </div>

    <!-- 3D场景 -->
    <div class="c-fixed z2">
      <controlled-3d-scene :progress="progress" />
    </div>

    <!-- 音频 -->
    <controlled-audio :progress="progress" />

    <!-- 滚动指示器 -->
    <div class="c-scrollIndicator">
      <transition name="fade">
        <img src="@/assets/images/icons/arrow_down.png" v-if="progress === 0" />
      </transition>
    </div>
  </page-view>
</template>

<script>
//导入组件
import PageView from '@/components/View'
import VueImgLoader from 'vue-img-loader'
import ControlledSlider from '@/components/ControlledSlider'
import Controlled3DScene from '@/components/controlled-3d-scene/Controlled3DScene'
import ControlledAudio from '@/components/ControlledAudio'
//导入常量
import IMAGES from '@/constants/images'
import PAGES from '@/constants/pages'

export default {
  props: {
    //控制页面进度
    progress: {
      type: Number,
      default: 0
    }
  },

  components: {
    PageView,
    VueImgLoader,
    ControlledAudio,
    ControlledSlider,
    'controlled-3d-scene': Controlled3DScene
  },

  data () {
    return {
      //初始化页面数据
      width: PAGES.WIDTH,
      height: PAGES.HEIGHT,
      backgroundImagePreview: IMAGES.bluePreviewBg,
      backgroundImage: IMAGES.russiaBlueBg
    }
  }
}
</script>

<style>
.c-fixed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* 控制子组件的层叠顺序 */
.z0 {
  z-index: 0;
}
.z1 {
  z-index: 1;
}
.z2 {
  z-index: 2;
}
.z3 {
  z-index: 3;
}
.z4 {
  z-index: 4;
}

/* 底部中央的滚动指示器 */
.c-scrollIndicator {
  position: fixed;
  bottom: 10px;
  left: 0;
  width: 100%;
  text-align: center;
  opacity: .8;
  z-index: 10;
  pointer-events: none;
}
.c-scrollIndicator img {
  width: 32px;
}
</style>
