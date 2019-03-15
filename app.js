//app.js


App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    books: [{
      thumb: "http://book.img.ireader.com/group6/M00/47/A8/CmRaIVjdNRCEbU_HAAAAAOWk1sE028851802.jpg?v=wN7FMkpc",
      name: "日光流年",
      author: "阎连科",
      price: "39",
      descriptions: "用三年时间写一部三十多万字的长篇小说，对我实在是一种考验。我原不是那种要十年磨一剑的人，几天、几十天做不完一件事情，焦躁与不安就会涌动上来，人变得浮躁不堪，仿佛头被人摁进了水里，连呼吸都急促起来。写小说委实说不是一件上好的事情，下一人生如可选择，我怕不会再去选择这种职业。到了四十岁的时候，方才明白，职业对生命而言，是真的没有什么高下。人不过是生命的一段延续过程，尊贵卑贱，在生命面前，其实都是无所谓的。"
    }, {
      thumb: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1605882900,3410874382&fm=58&bpow=896&bpoh=1254",
      name: "芳华",
      author: "严歌苓",
      price: "68",
      descriptions: "根据严歌苓同名小说改编，讲述了上世纪七十到八十年代充满理想和激情的军队文工团，一群正值芳华的青春少年，经历着成长中的爱情萌发与充斥变数的人生命运。乐于助人、质朴善良的刘峰（黄轩 饰），和从农村来，屡遭文工团女兵歧视与排斥的何小萍（苗苗 饰），“意外”离开了浪漫安逸的文工团，卷入了残酷的战争，在战场上继续绽放着血染的芳华。他们感受着集体生活的痛与暖、故人的分别与重逢，还有时代变革之下，每个人的渺小脆弱和无力招架。而昔日的文工团战友萧穗子（钟楚曦 饰）、林丁丁（杨采钰 饰）、郝淑雯（李晓峰 饰）、陈灿（王天辰 饰）等人，在大时代的背景之下，每个人的命运大相径庭，拥有着出人意料的人生归宿……从来不需要想起，永远也不会忘记。"
    }, {
      thumb: "http://bookbk.img.ireader.com/group6/M00/1B/FB/CmQUN1X1RMWEGlwUAAAAAO4WjJg229558687.jpg?v=rrpc07Z1",
      name: "儒林外史",
      author: "吴敬梓",
      price: "66",
      descriptions: "《儒林外史》，长篇小说，清代吴敬梓作。56回。成书于1749年（乾隆十四年）或稍前，先以抄本传世，初刻于1803年（嘉庆八年）。以写实主义描绘各类人士对于“功名富贵”的不同表现，一方面真实的揭示人性被腐蚀的过程和原因，从而对当时吏治的腐败、科举的弊端礼教的虚伪等进行了深刻的批判和嘲讽；一方面热情地歌颂了少数人物以坚持自我的方式所作的对于人性的守护，从而寄寓了作者的理想。白话的运用已趋纯熟自如，人物性格的刻画也颇为深入细腻，尤其是采用高超的讽刺手法，使该书成为中国古典讽刺文学的佳作。该书代表着中国古代讽刺小说的高峰，它开创了以小说直接评价现实生活的范例。"
    }, {
      thumb: "http://book.img.ireader.com/group6/M00/A7/83/CmQUNlmuRx6EZPJPAAAAAAPvtU8728211852.jpg?v=29lzrkvb&t=CmQUNlmuVuQ.",
      name: "悟空传",
      author: "今何在",
      price: "21",
      descriptions: "故事以传统名著《西游记》为蓝本，用现代人的审美视角重新演绎了主要人物的命运。曾经大闹天宫的孙悟空，戴上金箍踏上西游之路以后，却前尘尽忘，挥棒指向曾经并肩作战的兄弟；一心完成取经任务他被诬陷是杀了唐僧的罪魁祸首。这一切背后究竟有什么样的惊天阴谋？曾经英俊潇洒的天蓬元帅，投胎成了猪八戒，如今只能每天晚上对着月亮叹气。他和阿月曾经真心相爱过，又如何才能以这样的面貌再次相见？看起来只会碎碎念的唐僧，其实才是真正看穿了一切的那个人。"
    }, {
      thumb: "http://book.img.ireader.com/group6/M00/42/98/CmRaIVjdD-eERmKLAAAAABtu_rA893342291.jpg?v=cHCJfMx-",
      name: "大秦帝国",
      author: "孙皓晖",
      price: "62",
      descriptions: "全书共分为六部黑色裂变、国命纵横、金戈铁马、阳谋春秋、铁血文明、帝国烽烟。这部鸿篇巨著还原了巨大的历史落差与戏剧性的帝国命运，再现了一个国家一步步实现自己梦想的悲壮历程。书中每一行每一页都充满着智慧方略、阳谋政治的风骨，奋发惕励、强势生存的精神，充满着来自中国原生文明时代的英雄风骨与本色灵魂。"
    }, {
      thumb: "http://bookbk.img.ireader.com/group6/M00/38/B4/CmQUNlX_uwCEEBp8AAAAADifpzI592604792.jpg?v=i6diQa7x",
      name: "摆渡人",
      author: "克莱儿·麦克福尔",
      price: "16",
      descriptions: "《摆渡人》畅销欧美33个国家的心灵治愈小说，令千万读者灵魂震颤的人性救赎之作。一个史诗般动人的温情故事，回归人性，引人深思。《摆渡人》荣获苏格兰图书大奖、布兰福博斯奖、格兰扁图书奖、考文垂灵感图书奖候补提名，入围英国文学社图书大奖，英国《卫报》等多家重量级报刊媒体震撼推荐。如果命运是一条孤独的河流，谁会是你灵魂的摆渡人？如果我真的存在，也是因为你需要我。作者从少年人的角度洞悉人性的温情，通过男女主人公的所见所感，细腻道出所有人对亲情、友情和爱情终极幸福的向往。巧妙、惊人的情节交错，让这部小说别具一格，值得瞩目。"
    }],
    category: [{
        name: "全部",
        img: "https://easyreadfs.nosdn.127.net/mBi0ZaXR5k4KsgFnFzbW6Q==/8796093023796746442?imageView&quality=90&thumbnail=114y160"
      },{
      name: "小说",
      img: "https://easyreadfs.nosdn.127.net/GmX25BEDaAhDsvROWEA38g==/8796093023812262242?imageView&quality=90&thumbnail=114y160"
    },
    {
      name: "语言/文学",
      img: "https://easyreadfs.nosdn.127.net/AWgMcxbut894OZi_LXHL6Q==/8796093023800755404?imageView&quality=90&thumbnail=114y160"
    },
    {
      name: "科技",
      img: "https://easyreadfs.nosdn.127.net/X77I8AvYIRlutE9vCNfqRw==/8796093023780715822?imageView&quality=90&thumbnail=114y160"
    },
    {
      name: "政治/法律",
      img: "https://easyreadfs.nosdn.127.net/j13qLhb8RiNFw4W_8-H8SQ==/8796093023797191305?imageView&quality=90&thumbnail=114y160"
    },
    {
      name: "军事",
      img: "https://easyreadfs.nosdn.127.net/3QYbfBqhJrgKwHzRfwDyAA==/8796093023775572752?imageView&quality=90&thumbnail=114y160"
    },
    {
      name: "经济",
      img: "https://easyreadfs.nosdn.127.net/LTkDk7QtWNBLPBhylYR1-g==/8796093023613690655?imageView&quality=90&thumbnail=114y160"
    },
    {
      name: "心理学",
      img: "https://easyreadfs.nosdn.127.net/Xq9LUk4kb0kq1lRVwvDSRw==/8796093023652775656?imageView&quality=90&thumbnail=114y160"
    },
    {
      name: "社会科学",
      img: "https://easyreadfs.nosdn.127.net/OG8j7XsAF8QGI-PIAzI0PA==/8796093022633326254?imageView&quality=90&thumbnail=114y160"
    },
    {
      name: "历史/传记",
      img: "https://easyreadfs.nosdn.127.net/TjVsqnqG2jxk3GSDgJAIdg==/8796093023805046047?imageView&quality=90&thumbnail=114y160"
    },
    {
      name: "收藏/鉴赏",
      img: "https://easyreadfs.nosdn.127.net/Zvn2lclMucsNGGEyngtTCA==/8796093022757391877?imageView&quality=90&thumbnail=114y160"
    },
    {
      name: "家庭教育",
      img: "https://easyreadfs.nosdn.127.net/eOXynqPHww03vx4yFTt5rA==/7806532557211094660?imageView&quality=90&thumbnail=114y160"
    },
    {
      name: "动漫/幽默",
      img: "https://easyreadfs.nosdn.127.net/Y4lwgG2AVloJaCJXNZdCmA==/8796093023594237105?imageView&quality=90&thumbnail=114y160"
    },
    {
      name: "工具书",
      img: "https://easyreadfs.nosdn.127.net/CeVID8KFTcRRqg-B8Z3TBw==/8796093023794126320?imageView&quality=90&thumbnail=114y160"
    },]
  }
})