<template>
  <!-- 图片轮播容器 -->
  <div class="c-slider" :style="{width: width + 'px', height: height + 'px'}">
    <div class="c-slide" v-for="image in images" :ref="image.key" :key="image.key">
      <vue-img-loader :src="image.src" :width="width" :height="height" transition="fade" />
    </div>
  </div>
</template>

<script>
import VueImgLoader from 'vue-img-loader'
import Animation from '@/core/Animation'
import { sliderAnimationDef } from '@/constants/animations'
import PAGES from '@/constants/pages'
import brazilChampion from '@/assets/images/bg3.png'
import worldCup1938 from '@/assets/images/bg22.jpg'
import worldCup2014 from '@/assets/images/findseed1.png'
import russiaBlueRed from '@/assets/images/last-bg.png'
import footballs from '@/assets/images/back.png'

export default {
  animation: null,

  props: {
    progress: {
      type: Number,
      default: 0
    }
  },

  components: {
    VueImgLoader
  },

  watch: {
    progress (value) {
      this.$options.animation.update(value)
    }
  },

  data () {
    return {
      width: PAGES.WIDTH,
      height: PAGES.HEIGHT,
      images: [
        { key: 'brazilChampion', src: brazilChampion },
        { key: 'worldCup1938', src: worldCup1938 },
        { key: 'worldCup2014', src: worldCup2014 },
        { key: 'russiaBlueRed', src: russiaBlueRed },
        { key: 'footballs', src: footballs }
      ]
    }
  },

  mounted () {
    const animation = new Animation(sliderAnimationDef)
    animation.onUpdate(this.updateHandler)
    this.$options.animation = animation

    animation.update(0)
    window.x = this
  },

  methods: {
    //更新图片透明度
    updateHandler (state) {
      Object.keys(state).forEach(key => {
        this.$refs[key][0].style.opacity = state[key]
      })
    }
  }
}
</script>

<style scoped>
.c-slider {
  position: relative;
  overflow: hidden;
}
.c-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
