

import {
  Mesh, SphereGeometry, MeshPhongMaterial,
  SpriteMaterial, Sprite, Group,NearestFilter
} from 'three'

import { TextureLoader } from 'three'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

import { getTexture } from '@/utils/texture'
import { latlng2Xyz } from '@/utils/math'

// 创建自定义模型
export function createCustomBall(type) {
  return new Promise((resolve, reject) => {
    const loader = new FBXLoader();
    const group = new Group();
    const path = require('../../assets/myModel/Robot.fbx');
    loader.load(path, function (object) {
      object.scale.set(0.2, 0.2, 0.2); // 缩小模型

      group.add(object);
      resolve(group);
    }, undefined, reject);
  });
}

// 创建地球模型
export function createEarth(type) {
  if (type === 'custom') {
    return createCustomBall(type).then(group => {
      return group;
    });
  } else {
    const texture = getTexture(type === 'grey' ? 'earth' : 'earthGrey');
    
    const bumpMapNames = ['earthBump'];  //其他贴图名称
    const specularMapNames = ['earthSpec', 'earth1', 'earth2', 'earth3', 'earth4', 'earth5', 'earth6'];
    
    const bumpMap = getTexture(bumpMapNames);
    const specularMap = getTexture(specularMapNames);

    

    const earthGeometry = new SphereGeometry(5, 32, 32);
    const earthMaterial = new MeshPhongMaterial({
      map: texture,
      bumpMap: bumpMap,
      bumpScale: 0.15,
      specularMap: specularMap,
      // specular: 0xb5b5b5,
      shininess: 10,
      transparent: true
    });

    return new Mesh(earthGeometry, earthMaterial);
  }
}

// export function createEarth (type) {
//   return new Mesh(
//     new SphereGeometry(5, 32, 32),
//     new MeshPhongMaterial({
//       map: getTexture(type === 'grey' ? 'earth' : 'earthNight'),
//       bumpMap: getTexture('earthBump'),
//       bumpScale: 0.15,
//       specularMap: getTexture('earthSpec'),
//       specular: 0xb5b5b5,
//       shininess: 1,
//       transparent: true
//     })
//   )
// }

export function createCustomModel(type) {
  return new Promise((resolve, reject) => {
    const loader = new FBXLoader()
    const group = new Group()
    const path = require('../../assets/myModel/myRobot1.fbx')
    loader.load(path, function (object) {
      object.scale.set(0.08, 0.08, 0.08); // 例如将模型缩小

      group.add(object)
      resolve(group)
    }, undefined, reject)
  })
}
export function createFootball(type) {
  if (type === 'custom') {
    return createCustomModel(type).then(group => {
      return group
    })
  } else {
    return new Mesh(
      new SphereGeometry(5, 32, 32),
      new MeshPhongMaterial({
        map: getTexture(type === 'basic' ? 'footballBasic' : 'football1970'),
        shininess: 5,
        transparent: true
      })
    )
  }
}

// export function createFootball (type) {
//   return new Mesh(
//     new SphereGeometry(5, 32, 32),
//     new MeshPhongMaterial({
//       map: getTexture(type === 'basic' ? 'footballBasic' : 'football1970'),
//       shininess: 5,
//       transparent: true
//     })
//   )
// }


export function createFlagSprite (country, { scale = 2.5, sphereRadius = 7,opacity = 1 }) {
  const spriteMaterial = new SpriteMaterial({
    map: getTexture(country.flag),
    // color: 0xffffff
    transparent: true,
    opacity: opacity
  })

  // 禁用图像的模糊处理
  spriteMaterial.map.magFilter = NearestFilter;

  const sprite = new Sprite(spriteMaterial)
  const { x, y, z } = latlng2Xyz(country.location.lat, country.location.lng, sphereRadius)
  sprite.position.set(x, y, z)
  sprite.scale.set(country.key === 'switzerland' ? scale : scale * 3, scale * 3, scale)
  return sprite
}
