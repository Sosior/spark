import { parse } from 'query-string'
import COUNTRIES from './countries'

import fifaLogo from '@/assets/images/logos/logo_fifa.png'
import worldCupTrophy from '@/assets/images/1_1.png'
import julesRimetTrophy from '@/assets/images/1_2.png'
import songCover from '@/assets/images/isyou.jpg'
import worldWarII from '@/assets/images/bg2.png'

// const showAuthor = parse(window.location.search).showAuthor === 'true'
const showAuthor = true
const WIDTH = window.innerWidth
const HEIGHT = 812

const margin = WIDTH * 0.1
const width = WIDTH * 0.8

const DEFINITIONS = [{
  width: `${WIDTH}px`,
  height: `${HEIGHT}px`,
  position: 'relative',
  displayObjects: [{
    text: 'SPARK',
    position: 'absolute',
    top: '90px',
    left: `${margin}px`,
    color: '#fff',
    fontSize: '36px',
    fontWeight: 'bold'
  }, {
    text: 'IFLYTEK',
    position: 'absolute',
    top: '124px',
    left: `${margin}px`,
    color: '#fff',
    fontSize: '48px',
    fontWeight: 'bold'
  }, {
    text: '讯飞星火',
    position: 'absolute',
    color: '#fff',
    top: '180px',
    right: `${margin}px`,
    fontSize: '21px',
    fontWeight: 'bold'
  }, {
    text: 'by sosior',
    position: 'absolute',
    color: 'rgba(255,255,255,.6)',
    top: '220px',
    left: `${margin}px`,
    right: `${margin}px`,
    textAlign: 'right',
    opacity: showAuthor ? 1 : 0
  }]
}, {
  width: `${WIDTH}px`,
  height: `${HEIGHT}px`,
  position: 'relative',
  displayObjects: [{
    position: 'absolute',
    backgroundColor: '#fff',
    backgroundImage: `url(${fifaLogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    color: '#fff',
    top: '40px',
    left: `${margin}px`,
    width: '220px',
    height: '110px'
  }, {
    text: '科大讯飞股份有限公司成立于 1999 年，是亚太地区知名的智能语音和人工智能上市企业。自成立以来，一直从事智能语音、计算机视觉、自然语言处理、认知智能等人工智能核心技术研究并保持国际前沿水平。科大讯飞积极推动人工智能源头核心技术研发和产业化落地，致力于“让机器能听会说，能理解会思考，用人工智能建设美好世界”。',
    position: 'absolute',
    color: '#fff',
    top: '165px',
    left: `${margin}px`,
    right: `${margin}px`
  }]
}, {
  width: `${WIDTH}px`,
  height: `${HEIGHT}px`,
  position: 'relative',
  displayObjects: [{
    position: 'absolute',
    backgroundColor: '#fff',
    backgroundImage: `url(${worldWarII})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    top: '40px',
    left: `${margin}px`,
    right: `${margin}px`,
    width: `${width}px`,
    height: `${width / 3 * 2}px`
  }, {
    text: '通过你的创意，无论是一张海报、一条视频、一段种草文案，还是全套完整的推广策划，让你身边的人了解讯飞星火 APP 能够轻松解决这些“刚需”，并下载使用讯飞星火 APP。AI 无处不在，万物皆可 AI 的时代已然到来！科大讯飞邀请 Z 世代释放最有创造力的大脑，积极使用讯飞星火 APP，主动探索，让自己成为“掌握了 AI的新人类”。',
    position: 'absolute',
    color: '#fff',
    top: `${40 + width / 3 * 2 + 15}px`,
    left: `${margin}px`,
    right: `${margin}px`
  }]
}, {
  width: `${WIDTH}px`,
  height: `${HEIGHT}px`,
  position: 'relative',
  displayObjects: [{
    // text: '至今，世界杯一共在 17 个国家举办过：' + Object.values(COUNTRIES).map(c => c.name).join('，') + '。',
    text:'星火助手，深入场景解决刚需问题，成千上万的智能助手，让每一个场景，都能找到开箱即用的大模型应用',
    position: 'absolute',
    color: '#fff',
    top: '40px',
    left: `${margin}px`,
    right: `${margin}px`
  }]
}, {
  width: `${WIDTH}px`,
  height: `${HEIGHT}px`,
  position: 'relative',
  displayObjects: [{
    position: 'absolute',
    backgroundColor: '#fff',
    backgroundImage: `url(${julesRimetTrophy})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    top: '40px',
    left: `${margin}px`,
    width: `${width / 2}px`,
    height: `${width * 7 / 10}px`
  }, {
    position: 'absolute',
    backgroundColor: '#fff',
    backgroundImage: `url(${worldCupTrophy})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    top: '40px',
    left: `${margin + width / 2}px`,
    width: `${width / 2}px`,
    height: `${width * 7 / 10}px`
  }, {
    text: '作为首个基于全国产算力平台“飞星一号”训练的全民开放大模型，讯飞星火V3.5实现了文本生成、语言理解、知识问答、逻辑推理、数学能力、代码能力、多模态能力等七大核心能力的全面提升。对标国际领先，在语言理解、数学能力已超过GPT-4 Turbo，代码达到GPT-4 Turbo 96%，多模态理解达到GPT-4V 91%，再次将国产大模型推向新高度。',
    position: 'absolute',
    color: '#fff',
    top: `${40 + width * 7 / 10 + 15}px`,
    left: `${margin}px`,
    right: `${margin}px`
  }]
}, {
  width: `${WIDTH}px`,
  height: `${HEIGHT}px`,
  position: 'relative',
  displayObjects: [{
    text: '星火大模型API具备强大的语义理解、文本生成、情感分析等能力，可广泛应用于智能客服、内容创作、舆情监控等多个领域。API具有高度的可定制性和扩展性，用户可以根据自己的需求灵活调整模型参数，实现个性化的应用。',
    position: 'absolute',
    color: '#000000',
    top: '40px',
    left: `${margin}px`,
    right: `${margin}px`
  }]
}, {
  width: `${WIDTH}px`,
  height: `${HEIGHT}px`,
  position: 'relative',
  displayObjects: [{
    text: '在科技强国的征途中，我们肩并肩，共同奋斗。每一个创新，每一次突破，都凝聚着我们的智慧和汗水。让我们携手前行，为科技强国的梦想不懈努力！',
    position: 'absolute',
    color: '#fff',
    top: '40px',
    left: `${margin}px`,
    right: `${margin}px`
  }]
}, {
  width: `${WIDTH}px`,
  height: `${HEIGHT}px`,
  position: 'relative',
  displayObjects: [{
    text: '有人说，世界上有两种通用的语言，一种是科技，一种是心声，而讯飞星火让两者达到了完美的统一。（以下内容请打开声音）',
    position: 'absolute',
    color: '#fff',
    top: '40px',
    left: `${margin}px`,
    right: `${margin}px`
  }]
}, {
  width: `${WIDTH}px`,
  height: `${HEIGHT}px`,
  position: 'relative',
  displayObjects: [{
    position: 'absolute',
    backgroundColor: '#fff',
    backgroundImage: `url(${songCover})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    color: '#fff',
    top: '40px',
    left: `${(WIDTH - 300) / 2}px`,
    width: '300px',
    height: '300px',
    border: '4px solid #fff',
    boxSizing: 'border-box',
    borderRadius: '50%',
    animation: 'rotate 20s linear infinite'
  }, {
    text: '在科技强国的征途中，我们肩并肩，共同奋斗。每一个创新，每一次突破，都凝聚着我们的智慧和汗水。让我们携手前行，为科技强国的梦想不懈努力！',
    position: 'absolute',
    color: '#fff',
    top: '355px',
    left: `${margin}px`,
    right: `${margin}px`
  }]
}, {
  width: `${WIDTH}px`,
  height: `${HEIGHT}px`,
  position: 'relative',
  displayObjects: [{
    text: '欢迎加入讯飞星火，与我们共同开启智能语言的新篇章！我们致力于科技创新，期待你的加入，一同探索语音识别的无限可能，共创美好未来！',
    position: 'absolute',
    color: '#000000',
    bottom: '100px',
    left: `${margin}px`,
    right: `${margin}px`
  }]
}]

export default {
  WIDTH: 375,
  HEIGHT: 667,
  SCROLL_PAGE_HEIGHT: HEIGHT,
  DEFINITIONS
}
