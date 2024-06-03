import { BoxGeometry, MeshPhongMaterial, Mesh, Object3D } from 'three'
import BaseStage3D from '@/core/Stage3D'
import { createMymodel, createEarth, createFootball, createFlagSprite } from './creation'
import COUNTRIES from '@/constants/countries'

class Stage3D extends BaseStage3D {
  constructor (props) {
    super(props)
    window.stage = this
    this.autoRotate = true
  }

  onInitialized () {
    this.objects = {}

    this.createSphereGroup()
    this.createEarth()
    this.createFootballBasic()
    this.createFootball1970()
    
    // this.replaceModel()
    
  }

  createSphereGroup () {
    const group = new Object3D()
    this.objects.sphere = group
    this.scene.add(group)
  }
  
  createEarth () {
    const earth = createEarth()
    // const earthGrey = createEarth('grey')
    const earthGrey = createEarth('grey')
    earth.name = 'earth'
    earthGrey.name = 'earthGrey'

    const flagGroup = new Object3D()
    flagGroup.name = 'flags'
    Object.values(COUNTRIES).forEach(CTRY => {
      flagGroup.add(createFlagSprite(CTRY, {}))
    })

    this.objects.sphere.add(flagGroup)
    this.objects.sphere.add(earth)
    this.objects.sphere.add(earthGrey)

    this.objects.earth = earth
    this.objects.earthGrey = earthGrey
    this.objects.flag = flagGroup
  }

  replaceModel() {
    createEarth('custom').then(newEarth => {
    newEarth.name = 'earthCustom'; // 设置新模型的名称

    // 替换现有地球模型
    const existingEarth = this.objects.earth; // 获取现有地球模型
    this.objects.sphere.remove(existingEarth); // 从场景中移除现有地球模型
    this.objects.sphere.add(newEarth); // 将新模型添加到场景中

    this.objects.earth = newEarth; // 更新对象属性中的地球模型
  }).catch(error => {
    console.error('Error loading custom model:', error);
  });
  }

  // createFootballBasic () {
  //   const football = createFootball('custom') // 使用您自定义的模型
  //   football.name = 'footballBasic'          // 设置模型的名称
  //   this.objects.sphere.add(football)
  //   this.objects.footballBasic = football    // 将模型添加到对象列表中
  // }

  // 确保将自定义模型正确创建为 THREE.Object3D 实例
  createFootballBasic () {
    createFootball('custom').then(football => {
      football.name = 'footballBasic'
      this.objects.sphere.add(football)
      this.objects.footballBasic = football
    }).catch(error => {
      console.error('加载自定义模型错误:', error)
    })
  }

  createFootball1970 () {
    const football = createFootball('1970')
    football.name = 'football1970'
    this.objects.sphere.add(football)
    this.objects.football1970 = football
  }

  updateObject (objectKey, state) {
    // assign default values
    state = Object.assign({}, { opacity: 1, px: 0, py: 0, pz: 0, rx: 0, ry: 0, rz: 0, scale: 1 }, state)

    const obj = this.objects[objectKey]
    if (!obj) {
      console.warn(`Stage3D updateObject('${objectKey}') does not exit`)
      return
    }

    if (objectKey === 'flag') {
      obj.children.forEach(c => c.material.opacity = state.opacity)
    } else {
      obj.position.set(state.px, state.py, state.pz)
      obj.rotation.set(state.rx, state.ry, state.rz)
      obj.scale.set(state.scale, state.scale, state.scale)

      obj.material && (obj.material.opacity = state.opacity)
    }
  }

  render () {
    super.render()
    if (this.autoRotate && this.objects && this.objects.spheres) {
      this.objects.sphere.rotation.y += 0.0008
    }
  }
}

export default Stage3D
