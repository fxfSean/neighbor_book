
var history = [];
var list = [{
  thumb: "http://bookbk.img.ireader.com/group6/M00/2B/40/CmQUOFcMhEqEEAjkAAAAAK6-S2Y545843650.jpg",
  name: "在细雨中呼喊",
  author: "余华",
  price: "38",
  descriptions: "《在细雨中呼喊》重新拾掇了那些碎碎叨叨的回忆……作者运用其清新的文笔，使其笔下的人物跃然纸上，营造出一种既荒诞可笑又令人心碎的特殊意境，这种意境与人物一道随着作者的描写悄然渗入心底。《在细雨中呼喊》是二十世纪九十年代的经典文本，是余华的第一部长篇力作。小说描述了一位江南少年的成长经历和心灵历程。《在细雨中呼喊》的结构来自于对时间的感受，确切地说是对记忆中的时间的感受，叙述者 天马行空地在过去、现在和将来这三个时间维度里自由穿行，将忆记的碎片 穿插、结集、拼嵌完整。这个故事本身具有普遍的意义……余华最为非凡卓越的成就在于他对故事的掌控能力，叙述视角变化的巧妙方式，对回忆的准确拿捏以及寓悲伤于幽默之中、喜剧之中又见悲剧色彩的精妙绝伦的写作方式。——法国《世界报》2003年5月23日。余华通过《在细雨中呼喊》重新拾掇了那些碎碎叨叨的回忆……作者运用其清新的文笔，使其笔下的人物跃然纸上，营造出一种既荒诞可笑又令人心碎的特殊意境，这种意境与人物一道随着作者的描写悄然渗入心底。"
}, {
  thumb: "http://book.img.ireader.com/group6/M00/47/A8/CmRaIVjdNRCEbU_HAAAAAOWk1sE028851802.jpg",
  name: "日光流年",
  author: "阎连科",
  price: "39",
  descriptions: "用三年时间写一部三十多万字的长篇小说，对我实在是一种考验。我原不是那种要十年磨一剑的人，几天、几十天做不完一件事情，焦躁与不安就会涌动上来，人变得浮躁不堪，仿佛头被人摁进了水里，连呼吸都急促起来。写小说委实说不是一件上好的事情，下一人生如可选择，我怕不会再去选择这种职业。到了四十岁的时候，方才明白，职业对生命而言，是真的没有什么高下。人不过是生命的一段延续过程，尊贵卑贱，在生命面前，其实都是无所谓的。"
}, {
    thumb: "https://img3.doubanio.com/lpic/s29418322.jpg",
  name: "芳华",
  author: "严歌苓",
  price: "68",
  descriptions: "根据严歌苓同名小说改编，讲述了上世纪七十到八十年代充满理想和激情的军队文工团，一群正值芳华的青春少年，经历着成长中的爱情萌发与充斥变数的人生命运。乐于助人、质朴善良的刘峰（黄轩 饰），和从农村来，屡遭文工团女兵歧视与排斥的何小萍（苗苗 饰），“意外”离开了浪漫安逸的文工团，卷入了残酷的战争，在战场上继续绽放着血染的芳华。他们感受着集体生活的痛与暖、故人的分别与重逢，还有时代变革之下，每个人的渺小脆弱和无力招架。而昔日的文工团战友萧穗子（钟楚曦 饰）、林丁丁（杨采钰 饰）、郝淑雯（李晓峰 饰）、陈灿（王天辰 饰）等人，在大时代的背景之下，每个人的命运大相径庭，拥有着出人意料的人生归宿……从来不需要想起，永远也不会忘记。"
}, {
  thumb: "http://bookbk.img.ireader.com/group6/M00/1B/FB/CmQUN1X1RMWEGlwUAAAAAO4WjJg229558687.jpg",
  name: "儒林外史",
  author: "吴敬梓",
  price: "66",
  descriptions: "《儒林外史》，长篇小说，清代吴敬梓作。56回。成书于1749年（乾隆十四年）或稍前，先以抄本传世，初刻于1803年（嘉庆八年）。以写实主义描绘各类人士对于“功名富贵”的不同表现，一方面真实的揭示人性被腐蚀的过程和原因，从而对当时吏治的腐败、科举的弊端礼教的虚伪等进行了深刻的批判和嘲讽；一方面热情地歌颂了少数人物以坚持自我的方式所作的对于人性的守护，从而寄寓了作者的理想。白话的运用已趋纯熟自如，人物性格的刻画也颇为深入细腻，尤其是采用高超的讽刺手法，使该书成为中国古典讽刺文学的佳作。该书代表着中国古代讽刺小说的高峰，它开创了以小说直接评价现实生活的范例。"
}, {
  thumb: "http://book.img.ireader.com/group6/M00/A7/83/CmQUNlmuRx6EZPJPAAAAAAPvtU8728211852.jpg",
  name: "悟空传",
  author: "今何在",
  price: "21",
  descriptions: "故事以传统名著《西游记》为蓝本，用现代人的审美视角重新演绎了主要人物的命运。曾经大闹天宫的孙悟空，戴上金箍踏上西游之路以后，却前尘尽忘，挥棒指向曾经并肩作战的兄弟；一心完成取经任务他被诬陷是杀了唐僧的罪魁祸首。这一切背后究竟有什么样的惊天阴谋？曾经英俊潇洒的天蓬元帅，投胎成了猪八戒，如今只能每天晚上对着月亮叹气。他和阿月曾经真心相爱过，又如何才能以这样的面貌再次相见？看起来只会碎碎念的唐僧，其实才是真正看穿了一切的那个人。"
}, {
  thumb: "http://book.img.ireader.com/group6/M00/42/98/CmRaIVjdD-eERmKLAAAAABtu_rA893342291.jpg",
  name: "大秦帝国",
  author: "孙皓晖",
  price: "62",
  descriptions: "全书共分为六部黑色裂变、国命纵横、金戈铁马、阳谋春秋、铁血文明、帝国烽烟。这部鸿篇巨著还原了巨大的历史落差与戏剧性的帝国命运，再现了一个国家一步步实现自己梦想的悲壮历程。书中每一行每一页都充满着智慧方略、阳谋政治的风骨，奋发惕励、强势生存的精神，充满着来自中国原生文明时代的英雄风骨与本色灵魂。"
}, {
  thumb: "http://bookbk.img.ireader.com/group6/M00/38/B4/CmQUNlX_uwCEEBp8AAAAADifpzI592604792.jpg",
  name: "摆渡人",
  author: "克莱儿·麦克福尔",
  price: "16",
  descriptions: "《摆渡人》畅销欧美33个国家的心灵治愈小说，令千万读者灵魂震颤的人性救赎之作。一个史诗般动人的温情故事，回归人性，引人深思。《摆渡人》荣获苏格兰图书大奖、布兰福博斯奖、格兰扁图书奖、考文垂灵感图书奖候补提名，入围英国文学社图书大奖，英国《卫报》等多家重量级报刊媒体震撼推荐。如果命运是一条孤独的河流，谁会是你灵魂的摆渡人？如果我真的存在，也是因为你需要我。作者从少年人的角度洞悉人性的温情，通过男女主人公的所见所感，细腻道出所有人对亲情、友情和爱情终极幸福的向往。巧妙、惊人的情节交错，让这部小说别具一格，值得瞩目。"
}];

var listMore = [
  {
    thumb: "http://bookbk.img.ireader.com/group6/M00/62/54/CmQUNlZo87WEfeMqAAAAAPyi74k763716383.jpg",
    name: "时间简史（插图本）",
    author: "史蒂芬霍金",
    price: "58",
    descriptions: "《时间简史》讲述关于宇宙本性的最前沿知识，从1988年出版以后，无论在微观还是宏观宇宙世界的观测技术方面都有了非凡的进展。这些观测证实了霍金教授在第一版中的许多理论预言，其中包括宇宙背景探险者卫星（COBE）的最近发现，它在时间上回溯探测到离宇宙创生的30万年之内，并显露了他所计算的在时空结构中的涟漪。尽管霍金教授的著述极为清晰而机智，有些读者仍然觉得难以掌握复杂的概念。为了使读者加深理解，本版还增加了240多幅彩色插图，包括卫星图像和照片。详细的插图说明使读者能体验到星系际太空的广漠、黑洞的奇妙性质以及物质和反物质碰撞的粒子物理的微观世界。《时间简史（插图本）》也成为了最受欢迎和追捧的版本。"
  }, {
    thumb: "http://bookbk.img.ireader.com/group6/M00/85/1C/CmQUN1k1LACEAipvAAAAAKnET3E121894514.jpg",
    name: "精准表达",
    author: "陈立之	",
    price: "39",
    descriptions: "精准的表达显示一个人学识的广博、语言的隽永、举止的优雅和应变的灵活，它往往是一个人综合素质的体现。拥有精准高超的表达技能是每个人渴望的目标。本书将告诉你如何掌握这些技巧，让你一步步实现目标，从此冷静自信地站在所有人面前，流利自如、随心所欲地表达自己的思想，在生活与工作的舞台上优雅地左右逢源，在社交场、情场、职场、商场等人生各种场合挥洒口才，展现风采，大显身手。精准的表达，精彩的人生。掌握精准表达的诀窍，跨出改变命运的关键一步！"
  }, {
    thumb: "http://bookbk.img.ireader.com/group6/M00/4D/9F/CmQUNlYwx-KEZUWPAAAAAJnJQVQ882481812.jpg",
    name: "鬼吹灯之圣泉寻踪",
    author: "天下霸唱",
    price: "53",
    descriptions: "从国内和日本赶来的胡八一和王胖子再遇见了Shirley杨以后，被卷入了一场寻印事故中。经过调查，目标直指印加人传说中的青春泉宝藏。在追踪的过程中，最为奇怪的有二，一是南美土著竟然会认识王胖子身上的“摸金符”；二是Shirley杨竟然在他们遇险时，落井下石。终于他们追踪到了传说中印加人的圣地青春泉，幕后黑手竟然是……最后的真相到底是什么？"
  },
];

Page({
  data: {
    inputVal: "",
    hot: ["小说", "励志文学", "余华", "王小波", "陈忠实", "历史", "古代言情", "悬疑灵异", "科幻"],
    past: [],
    loading: false,
    books: [],
    hasMore: true,
    dropDown: false,

  },

  onLoad: function () {
    var that = this;
    wx.getStorage({
      key: 'history',
      success: function (res) {
        that.setData({
          past: res.data
        })
      },
    })
  },
  navigateTo:function(e){
    console.log(e)
    let str = JSON.stringify(this.data.books[e.currentTarget.id])
    console.log(str)
    wx.navigateTo({
      url: '../../item/item?item=' + str,
    })
  },

  clearInput: function () {
    this.setData({
      inputVal: "",
      loading: false,
      books: [],
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  keyword: function (e) {
    var that = this;
    this.setData({
      inputVal: e.target.id,
      loading: true
    });
    this.storage(this.data.inputVal);
  },
  goSearch: function (e) {
    this.setData({
      loading: true
    })
    this.storage(e.detail.value);
  },
  storage: function (value) {
    var that = this;
    wx.getStorage({
      key: 'history',
      success: function (res) {
        history = res.data;
        if(history.indexOf(value) != -1)return
        history.push(value);
        wx.setStorage({
          key: 'history',
          data: history,
        })
        console.log(history)
      },
      fail: function (res) {
        history.push(value);
        wx.setStorage({
          key: 'history',
          data: history,
        })
      },
      complete: function (res) {
        that.setData({
          past: history,
        })
        setTimeout(function () {
          that.setData({
            loading: false,
            books: list,
          })
        }, 1000)
      }
    })
  },

  delete: function (e) {
    var that = this;
    wx.removeStorage({
      key: 'history',
      success: function (res) {
        history = [];
        that.setData({
          past: []
        })
      },
    })
  },
  loadMore: function () {
    if (!this.data.hasMore) return
    var that = this;
    this.setData({
      dropDown: true
    });

    setTimeout(function () {
      if (listMore.length) {
        that.setData({
          books: list.concat(listMore),
          dropDown: false,
        })
        listMore = [];
      } else {
        that.setData({ hasMore: false, dropDown: false })
      }
    }, 1000)
  }
});