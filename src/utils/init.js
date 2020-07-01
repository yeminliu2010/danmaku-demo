import '@/style/style.css';

Object.assign = Object.assign || function(target) {
  if (target == null) { throw new Error('target cannot be null'); }

  let i = 0, key, src;
  const len = arguments.length;
  while (++i < len) {
    src = arguments[i];
    if (src != null) {
      for (key in src) {
        if (Object.prototype.hasOwnProperty.call(src, key)) { target[key] = src[key]; }
      }
    }
  }

  return target;
};

const messages = [
  '坚决同时打赢疫情防控和经济社会发展“两大战役”',
  '国际社会高度评价中国为全球抗疫作出贡献',
  '五粮液斥资25亿跨界造车，车标似酒杯售价不超8万',
  '蔚来中国项目完成注资，今年已累计完成超百亿融资',
  '老iPhone降速 苹果同意赔偿美国用户最多5亿美元',
  '四门轿跑设计 比亚迪旗舰车"汉"车长近5米',
  '虎牙创始人古丰加盟，百度直播跃进',
  '印度宣布禁用59款中国应用，包括TikTok和微信',
  '特斯拉德国厂三月底动工 马斯克将出席奠基仪式',
  '特斯拉车主反映，中国本土制造生产的特斯拉Model3采用的控制器硬件代码与实际的环保信息随车清单不一致',
  '特斯拉电池缺陷被曝隐瞒8年!品控问题"埋下"隐患',
  '一颗小行星预计5月初飞掠地球 735万千米外与地球交会',
  '比特币挖矿耗电惊人：每年耗电量等于智利全国耗电量',
  '广州又出台新政刺激车市复苏，新能源车可获1万元补贴',
  '《哥斯拉大战金刚》试映会好评不断！',
  '《神奇女侠1984》编剧确认：《神奇女侠3》故事线将设定于现代',
  '教育部：全国义务教育阶段辍学人数下降近99%',
  '哈哈哈哈哈',
  '呵呵呵',
  '嘻嘻'
];

export default function init(danmaku, container) {
  for (let i = 0; i < 500; i++) {
    danmaku.add({
      msg: messages[parseInt(Math.random() * messages.length)],
      fontSize: Math.floor(Math.random() * 20) + 20
    });
  }

  let width = container.offsetWidth;
  let height = container.offsetHeight;
  window.addEventListener('resize', function() {
    if (container.offsetWidth !== width || container.offsetHeight !== height) {
      danmaku.resize();
      width = container.offsetWidth;
      height = container.offsetHeight;
    }
  }, false);
}
