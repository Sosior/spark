
```
fifa
├─ .babelrc
├─ .git
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ master
│  │     └─ remotes
│  │        └─ origin
│  │           └─ HEAD
│  ├─ objects
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-ecd0d517536a3841b05f0aa70e59d9358e8e0eae.idx
│  │     └─ pack-ecd0d517536a3841b05f0aa70e59d9358e8e0eae.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ master
│     ├─ remotes
│     │  └─ origin
│     │     └─ HEAD
│     └─ tags
├─ .gitignore
├─ .postcssrc.js
├─ build
│  ├─ build.js
│  ├─ check-versions.js
│  ├─ logo.png
│  ├─ utils.js
│  ├─ vue-loader.conf.js
│  ├─ webpack.base.conf.js
│  ├─ webpack.dev.conf.js
│  ├─ webpack.prod.conf.js
│  └─ webpack.test.conf.js
├─ config
│  ├─ dev.env.js
│  ├─ index.js
│  ├─ prod.env.js
│  └─ test.env.js
├─ docs
│  ├─ index.html
│  └─ static
│     ├─ css
│     │  ├─ app.4fa8d1c0d898f3af2b3719b95b4d027b.css
│     │  └─ app.4fa8d1c0d898f3af2b3719b95b4d027b.css.map
│     ├─ fonts
│     │  └─ russia.b2d27c8.ttf
│     ├─ img
│     │  ├─ bg_2018_fifa_world_cup_blue.fbf5245.jpg
│     │  ├─ earth.ed5178c.jpg
│     │  ├─ earth_bump.55b3930.jpg
│     │  ├─ earth_grey.d244d11.jpg
│     │  ├─ earth_spec.ccc0ba6.jpg
│     │  ├─ football_1970.b948446.jpg
│     │  ├─ football_basic.a0fd285.png
│     │  ├─ logo_2018_fifa_world_cup.b73d791.png
│     │  ├─ logo_fifa.71aa18e.png
│     │  ├─ pic_2018_russia_blue_red.9c36760.jpg
│     │  ├─ pic_champion.9f6b337.jpg
│     │  ├─ pic_footballs.f442be6.jpg
│     │  ├─ pic_jules_rimet_trophy.24abc5a.jpg
│     │  ├─ pic_song_cover.3ac17f4.jpg
│     │  ├─ pic_world_cup_1938.496b49b.jpg
│     │  ├─ pic_world_cup_2014.a6bfd77.jpg
│     │  ├─ pic_world_cup_trophy.7b5d0a0.jpg
│     │  └─ pic_world_war_ii_1943.1f3de0b.jpg
│     ├─ js
│     │  ├─ app.0321b165a07b9ab45e12.js
│     │  ├─ app.0321b165a07b9ab45e12.js.map
│     │  ├─ manifest.3ad1d5771e9b13dbdad2.js
│     │  ├─ manifest.3ad1d5771e9b13dbdad2.js.map
│     │  ├─ vendor.6234dae0ee2d83caf0d1.js
│     │  └─ vendor.6234dae0ee2d83caf0d1.js.map
│     └─ media
│        └─ la_copa_de_la_vida.d3f0d9d.mp3
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  ├─ fonts
│  │  │  └─ russia.ttf
│  │  ├─ images
│  │  │  ├─ bg_2018_fifa_world_cup_blue.jpg
│  │  │  ├─ bg_blue_preview.png
│  │  │  ├─ flags
│  │  │  │  ├─ argentina.png
│  │  │  │  ├─ brazil.png
│  │  │  │  ├─ chile.png
│  │  │  │  ├─ england.png
│  │  │  │  ├─ france.png
│  │  │  │  ├─ germany.png
│  │  │  │  ├─ italy.png
│  │  │  │  ├─ japan.png
│  │  │  │  ├─ mexico.png
│  │  │  │  ├─ russia.png
│  │  │  │  ├─ southafrica.png
│  │  │  │  ├─ southkorea.png
│  │  │  │  ├─ spain.png
│  │  │  │  ├─ sweden.png
│  │  │  │  ├─ switzerland.png
│  │  │  │  ├─ unitedstate.png
│  │  │  │  └─ uruguay.png
│  │  │  ├─ icons
│  │  │  │  └─ arrow_down.png
│  │  │  ├─ logos
│  │  │  │  ├─ logo_2018_fifa_world_cup.png
│  │  │  │  ├─ logo_fifa.png
│  │  │  │  └─ logo_fifa1.png
│  │  │  ├─ pic_2018_russia_blue_red.jpg
│  │  │  ├─ pic_champion.jpg
│  │  │  ├─ pic_footballs.jpg
│  │  │  ├─ pic_jules_rimet_trophy.jpg
│  │  │  ├─ pic_song_cover.jpg
│  │  │  ├─ pic_world_cup_1938.jpg
│  │  │  ├─ pic_world_cup_2014.jpg
│  │  │  ├─ pic_world_cup_2018_trophy.jpg
│  │  │  ├─ pic_world_cup_trophy.jpg
│  │  │  ├─ pic_world_war_ii_1943.jpg
│  │  │  └─ textures
│  │  │     ├─ earth.jpg
│  │  │     ├─ earth4_night.jpg
│  │  │     ├─ earth_bump.jpg
│  │  │     ├─ earth_grey.jpg
│  │  │     ├─ earth_spec.jpg
│  │  │     ├─ football_1970.jpg
│  │  │     ├─ football_2006.jpg
│  │  │     └─ football_basic.png
│  │  ├─ sounds
│  │  │  └─ la_copa_de_la_vida.mp3
│  │  └─ videos
│  │     └─ world_cup_songs_ricky_martin_shakira.mp4
│  ├─ components
│  │  ├─ controlled-3d-scene
│  │  │  ├─ Controlled3DScene.vue
│  │  │  ├─ creation.js
│  │  │  └─ Stage3D.js
│  │  ├─ ControlledAudio.vue
│  │  ├─ ControlledSlider.vue
│  │  ├─ scroll-page
│  │  │  └─ ScrollPage.vue
│  │  └─ View.vue
│  ├─ constants
│  │  ├─ animations.js
│  │  ├─ countries.js
│  │  ├─ images.js
│  │  └─ pages.js
│  ├─ core
│  │  ├─ Animation.js
│  │  └─ Stage3D.js
│  ├─ main.js
│  ├─ utils
│  │  ├─ func.js
│  │  ├─ math.js
│  │  └─ texture.js
│  ├─ views
│  │  ├─ ControlledContent.vue
│  │  └─ Loading.vue
│  └─ wx.js
├─ static
│  └─ .gitkeep
└─ test
   └─ unit
      ├─ .eslintrc
      ├─ index.js
      ├─ karma.conf.js
      └─ specs
         └─ HelloWorld.spec.js

```