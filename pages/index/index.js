// pages/books/books.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:[{
      banner:'https://edu-yuedu.bdimg.com/v1/RD/%E9%85%B7%E5%A8%81720-285-1509951848544.jpg'
    },
    {
      banner: 'http://image.read.duokan.com/mfsv2/download/fdsc3/p01YIDJHTxyL/UGwjct26ZFR0j2.jpg!q90'
    },
    {
  banner:'https://edu-yuedu.bdimg.com/v1/na/%E6%97%A7%E6%97%B6%E5%85%89720x280-1510664014558.jpg'
    },
    {
      banner:'https://edu-yuedu.bdimg.com/v1/RD/%E5%BE%AE%E7%AC%91%E5%90%91%E6%9A%96720-285-1509951313298.jpg'
    }
    ],
    title: [
      {
        name: '全部',
        second: [
        ]
      },
      {
        name: '小说',
        second: [
          {
            category: '侦探/悬疑/推理'
          },
          {
            category: '都市情感'
          },
          {
            category: '社会生活'
          }
        ]
      },
      {
        name: '青春文学',
        second: [
          {
            category: '爱情/情感'
          },
          {
            category: '玄幻/惊悚'
          }
        ]
      }
    ],
    books: [{
      name: "分类",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACl0lEQVRYR8WX/VUVMRDF761AS3hUoFYgVKBUoFQgVqCvArECsQKhAqECoQItQSuI5xeSNZuX/WTPcf55B3Yyc3PnM1ZDQgg7SS8l8Yvc2b5u6Q79L4TwWtKz9P2XpFvb/PbE5V/J8RdJxw3DvyVd2N6PAQkhfJT0TtLTht6NpLMSSAcghIDTbwMHS1sYObUNoE5CCDjkPHbuJV3CnCT0YBJG3qS/OY8dRQAhhOeSvs9wnh1e2j6rAFxJeiXps+3zgdACDr0g6cT2XQYAGmK+RDAQb5HY4wKDzrPhQvfG9olT3H8u8Zx0r21DKwC4Fbfb1aEZYILwEI4jAEDXpxUAZDszCKVfbb+dYydVCPnyHgBk7Yc5Bw9KqA9gbxtbk1Kwvv9fAEj6H5IiAGij9hdLFYIlDGSfpwCgfulQT5YieAQAqgcWdjmJVuXBGgBF0kfGyk5I18q9exYZSwAkpgk1pXtvGwYeOmGqZUJBPc9uSEMAUrMp7dAjcIiPW0DkftEbRgkICQJK2uqoVAAYMjSY3Jjq80xTWjiX7OQAQPkx0RapaggjujeQqrN5oo7qjQKYYmCL760QgJx5Hvv8mFQhmFKHeoZVHGBZ6iTMWTplLH5fCCDbBAj5EsO3ZRnOAp2UyIsXHYC1A2klAxnoQyNKmc4+0NrhtsyB2hYhiPvAVsNoSQiybhxGq+bAI5KwBLrpPrCGgQhgq5VsDYC4krGzb7GUTs6OBsKjrdZyuiZL5hLhqXZcPkxokXO3om4lzx7Taj6XhT+s8d3DBCOpHC9mgODZxeHW04xLTC01OGcf+Pc0K27B6AVEaynhII/T0dU7lTWJ3WKTZeScmx8MozJ4KTGJa+6O9O7eIjEV7PT4yLsEbF21nud/AcsVbOxAP6knAAAAAElFTkSuQmCC"
    },
    {
      name: "新书榜",
      url: "../billboard/billboard",      
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADC0lEQVRYR7WXP0hXURTHv0cQhLB+DjlkpFYI1pJNTZlJW1RmUwYZLS1mDdUQkg4N5dBfaKjIwDFLobEom5q0hpIi81dkQouaBb8QPPGV9x7P57333feiO/7eued87vn/E2Q8qtoLYFhE3mS8ahSXrEpU9TqAbgC9ItKX9X5SPg/ADgDjgaJhACdEZC4vSGYAGlLVIoDawChD0ZIXIi/AAIDjsVczJ9ryeCEvABPxUsLgDRE5kxUiL8AeAC8MxtpEhHnhfVIBVLWQjK+q2gCYjPVZ8sEHgG6tFZGz4bMcABTpExGGyOv4AIRlFylOAaBheqFo8l7mPkAlAGYBRO5VVXrlmuOJcdhOEWHV5OuEqnoIwJPgNpvOgKomyzCpvCgi9UHPILw1L3xCQOOEWI4vALbiKQD0jOs0AWDDIsAyuEnYCWCINQHYATs9MqwlkGG5Rh7xzoEg9uz5dbFLzIO0l4firBre5eDiaTJNUKsHgrGb7HbGhy9+m0X5xqrkN3qL7Tp8gLFTGgFUlZcYZ68zuf8WtjztSsqOADgY+3FURNjAVhwbQDjzUwFK72cweeA2aq60o9C+0ykvIqvs2QCYuV6xnj7/CHOPx1FeU0DD6Ll/B8ji/t+vP6N47H5kdNOdDlTu2+aC4N7wMi6wygMebXb5/tLPEj4092NpoRTpKxxuQs3VI/8fgManOu6hNDGzwlhZZQUax3tcAFXJSWnLAXVp+XpqEAvPJowi2z9dtl2dF5FVeWUDYMNZZ9I0NzSG6QtDVr66wZNYs2uz6fuIiIQtPfpuA+BWE6/h6MLH3f1Y/G5fghvHelC2tsIEYJwHNgD2+gcmLe+2XrS+vnxDAQ2vjKX4RUTiLd3tAX5NrN7RBVf813ftRXV3qwnQuiu6ZoFx72Pnmzp6F0u//qww5CjBhyJinZ5p49gYCg6fHzefgzCMd/XpVlviOY3zBT4LiTUfHKU6z8XFZzlNBQjygYspB1Rz6nQCRrmwcCn1kE33QFyJqhKEtcz8YFZzO3obLKwsXf5F8zIc6v0LlJQsMDCZleoAAAAASUVORK5CYII="
    },
    {
      name: "免费",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACj0lEQVRYR8WXgVEVMRCG969ArECtAK1ArUCpQKkArECoQK1AqECpAOgAOoAOoIJ1vkxyJiGX3L2HkpmbN/Nuk/3/ze6/e7InXmr5d/eXkm7cfcfMPpnZx2h3Z2a/JZ0+Fu45ABdm9rbjBBB7ADWzXTN7XdnemNm1pKsR0E0BcC7RIEK9FSJmZsdEtGW4DYARufw9QN63IjIHALQv1nhYYAuIV5L4ndYDAO5+aGbfFhy4iQlRIL/aANz9s5n9XHHyvZmlRCMRnw327kkiJ0oAsdxgDYDRogRPaibuzsEfOpsBS3k/vAJ3hwXlNFo/JHFF03L3d3Hv94HzQ0kntU3IAXdHaH4NvMMQoDik/Ora723H8ZeaPRumJNzg/kfRar3fr6OQA4DZ+SanrtxTgPjfEQBroQc5gCMz+zpgQyZzQEukzmKOkB9UU68kyYeQtDmAXgNCwYKWu/scUPSed9gAAvs5EJeSuPICAMyaGyTlQOfqfWIVQfQINQF4J/yEFEYwK5Ss2oMNTyrXuVK9lUQrLyLwLxrQHKdmBEZDyMpq65qfSgqy/xRliN+pKRXteEVPWBINmhY5UzeoM0lpxvwbgax8KKWUPGg49TpqszmgoudHicdhmh9JUGxCV2xORBkYpHlN0ynCm6Nyd4gcxP+uJL2ZBRBRMx+Mhs7WVcAQTQiTT2zXKGwQnmwF4apzgMwE5VrWS3KitrmT9DzNA4SHD5CljI+j3m81uKKwCcCSRpQYhCzu9ISl0biXtJMAwJy7GzGaBCQ2HO55ySjXAhXGu1yIuHd0vgXi1syO6mkmgmBP7zOu5fyS701KsfVdQCJSszyhubSGyarEsKXWk8DUIzoEUqMqJupZHVh6kdva/QFapgIwVdXzmQAAAABJRU5ErkJggg=="
    },
    {
      name: "促销",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACNUlEQVRYR8VXi1HCQBTcrUA7UCtQKhAr0A7EDrQCsQLtQKlArECpQOxAKhAreM5m7pjL5XN3iTNkhoFAkt23u+/dQez54J7xMZqAmV0BuAYwBXCYUdAawB3JD107ioCZzQA8Z4DGl6xJTkYRKAR/A6DKbwEcVMBkVfwgBQrBd2DhfYMJZIJ/Oc1P3fuE5NrMXlxehilQAK5gvgI4C8z/BnDsz4sVGAj+6z2PU1hEIBNcGBcubGqxJ1fxPYAGkWwCBeAisBUJ57e3YQFA3r+HKmQRKAT3z69IAJDnarulA68NqSSBTPA47TEJnavyxoTsJZAJHnvuW07fb4LwtY3nDcmqIxqDqAB857mTW8ETCXmuAH72jOg3kspInUAmuGSXr36sZnkekVFQ64tRJrie46eapFUVcye3gtfpeUDghqS6ojp2FpiZKqkWisSxIDlzhJckt+6zFDlKLMk18JiAJDlPobtePwnG6iWAlRu9ffuBBnhMQDf7IIU8tJSqOqXWD5MHknMz0xIbpr+Lfyt4WwhjEmonLSgKnVdHY9UASAVtSB4TqnWCd7VhSGJFcmpm2m5pF6OcwMxE6MeFsFj2kHDrhsTMPAmFSonVuZTQS5Ur+doH9h29lTe6IH5SQMJ7rAGjjMj3viGjR2WBt1oQEolIqOdlhQI5uvKkAv6CFiX+DTypQCGJbNmTIWwrMaHEIPBsBRJKDAYvJuBmgFpSc0CTcR4uLIlwtv486I/JEKCue/ZO4A+jluchYhcpcgAAAABJRU5ErkJggg=="
    },
    {
      name: "畅读榜",
      url: "../billboard/billboard",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACrElEQVRYR6WXgVFVMRBF91YgVqBWoFQgVCBUIHaAFagViBUIFQgVCBUIFagdSAXrHCZ55uUnmzx5M39g/k+yN7v33t0nKx533zOzz2b2vPy++v9K0lnrd3c/NbM3wd5fZvZe0p+8RhWAV2b2Izgg//RCEoctj7vP7t2XdNsEwJfufm1mrwcgLiUdVwBm9t1IOij3rTKQALDg+0QWDiURFNCb93QzsCEL15ION6zfuT17dzIweaMbM4MDkI4HUkLcqHRLxsIS5B8bXLgys3NJl1F53P3IzE4qNTRv381AlQVue5JZ7+75pvzlg3RhNdJCog/qSOvOU1aatw8BpEMIzCGZaHgEcosewJxJukj7Tnu+MQSQDuCG38xsJZ8JlQDkXan51p4mCQsecFskCYj/eSjLcZbrJgDJ2R4TPMcDBBxY3G+ogtQTCD6qNwQlQOT/xGMN9r30gAyi5wMfzezDIOf3qIBD3R3mPxusv5CEPFdPy4qp98+Jun+SBFAUwsFfJ0iy08RaAGYOW25fEHYmCwvobgncHaera0pAGg9EItBtTapkPHCGDwaFIz6pssK+/ZCE7g5R6o3o+cGQZp9eh5S0ynqrBN4Iws2R0g6LW4AGKlrxYBYAcaZATEh41Re2AJgC4e4AfRmUapiBFgfK855GpXD3VgmX/TMcaKkgH3AvKewLg5nyTtLKXbf6wGqwSP1ir2w27o5a3nZKwEi+Gul7TojWaylyJgPHUdI8Vp2tFY/AZK7dPbLxsRMma40OIVhvNoCAeUqqk/BFUp4h/3Gix9YJNs96Eut+45DT3TBlAbL1SrElODZ+sGkeKBoMjIVUka4jMGFwNoYjWZEJQIyGjhrIapruoRwCKLIB8UZvvyy/Y100B4bdcFTc5PW02voVHr7w0jrVsHKcv9OqNDArd0CsAAAAAElFTkSuQmCC"
    },
    {
      name: "更多",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABIUlEQVRYR+2W0VECQRBEuyNQI0AikAyACMQQCMEI1AwIgQzUCIQMMAINASNoq61dHZZFrfIDP2a+rvZme3rfzF4dceTgkesjDSSBJJAEksAeAUnnAAYk1999piWdArgA8Exy+0PuBMCW5KbN+zRQBO8BONlh0SuSq3aTpFsAN2F9QfK6kzcCYE0fymED02g4GnChcSNiE8O4QdKsiLb15iSXdbEc6AWAScVYkZzWhWhABzCawkMQ9vNlJ/eRpM19hCSTfDqgeVYP9a8M9Frw5v79oQWvAE4aCmuSdc6+/gdKz4y3zoGLT3qT2xnCO5IezJ2Q5CG05qC88M2adYcw9M4T61PvTX9UL4ZdYPOLa+g8X0MT2Yn8EiaBJJAEkkASeAelHXwhgI96+wAAAABJRU5ErkJggg=="
    },],
    response:{
      errorcode:'0',
      errormsg:'success',
      data:[{
        title:'新书上架',
        img:'../../../images/coin.png',
        item:[{
          thumb:'http://bookbk.img.ireader.com/group6/M00/0C/47/CmRaIVeoS9mEVHnFAAAAAIfphqM444133190.jpg',
          name:'青瞳：完美典藏版（全四册）',
          descriptions: "一个面容明艳、眼眸清澈的公主，天生拥有运筹帷幄的才能，杀伐果断的决绝，号令千军万马的气势。这样的女子，纵然怀揣一份小儿女的柔软，仍然毫无悬念地戴上了象征最高权力的王冠。然而，当文武百官匍匐脚下高呼“万岁”时，她不止一次地恍惚，自己真的想要这样站在风口浪尖握住日月乾坤吗，可为什么心中那份思念如鸩毒般在每个午夜发作呢？大苑百万苍生的女王，草原他一个人的女人，其实她知道自己最想成为什么……《青瞳》四部曲完美典藏版，大气磅礴，家国爱恨，美人天下，绝美和震撼都将在典藏版中继续酣畅呈现，并极具收藏价值！",
          author:'作者：媚媚猫',
          price:'20.00'
        },{
            thumb: 'http://bookbk.img.ireader.com/group6/M00/95/BE/CmQUNllwdTmEeTyFAAAAAKg5HN8712314063.jpg',
            name: '围城',
            author: '作者：钱锺书',
            price: '18.00'
        },{
            thumb: 'http://bookbk.img.ireader.com/group6/M00/2B/40/CmQUOFcMhEqEEAjkAAAAAK6-S2Y545843650.jpg',
            name: '在细雨中呼喊',
            author: '作者：余华',
            price: '3.99'
        },
        {
          thumb: 'http://bookbk.img.ireader.com/group6/M00/37/7F/CmQUN1X3pbKEKM0VAAAAAAga20U850562575.jpg',
          name: '白鹿原',
          author: '作者：陈忠实',
          price: '7.99'
        },
        {
          thumb: 'https://img3.doubanio.com/lpic/s6384944.jpg',
          name: '百年孤独',
          author: '马尔克斯',
          price: '22.5'
        }, {
          thumb: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4284284957,2456332839&fm=27&gp=0.jpg',
          name: '平凡的世界',
          author: '作者：路遥',
          price: '22.5'
        }, {
          thumb: '../../../images/coin.png',
          name: '失乐园',
          author: '渡边淳一',
          price: '22.5'
        }, {
          thumb: '../../../images/coin.png',
          name: '失乐园',
          author: '渡边淳一',
          price: '22.5'
        }]
      },
      {
        title: '青春文学',
        thumb: 'http://cms-bucket.nosdn.127.net/cc9c3742b023450d82657be48b13b62c20171130175612.jpeg',
        item: [{
          thumb: '../../../images/coin.png',
          name: '失乐园',
          author: '渡边淳一',
          price: '22.5'
        }, {
          thumb: '../../../images/coin.png',
          name: '失乐园',
          author: '渡边淳一',
          price: '22.5'
        }, {
          thumb: '../../../images/coin.png',
          name: '失乐园',
          author: '渡边淳一',
          price: '22.5'
        }]
      },
      {
        title: '热门推荐',
        thumb: '../../../images/coin.png',
        item: [{
          thumb: 'http://bookbk.img.ireader.com/group6/M00/38/B4/CmQUNlX_uwCEEBp8AAAAADifpzI592604792.jpg',
          name: '摆渡人',
          author: '作者：克莱儿·麦克福尔	',
          price: '9.99'
        }, {
            thumb: 'http://bookbk.img.ireader.com/group6/M00/10/6C/CmQUOFaCBXaEQPDGAAAAAHBGjCQ784185047.jpg',
            name: '富爸爸穷爸爸',
            author: '作者：莎伦·莱希特',
          price: '12.5'
        }, {
            thumb: 'http://book.img.ireader.com/group6/M00/A9/CC/CmQUN1m7OduEV1cmAAAAAC43T2Y389629574.jpg',
          name: '黄金时代',
          author: '作者：王小波',
          price: '23.5'
        },{
            thumb: 'http://bookbk.img.ireader.com/group6/M00/19/CC/CmQUNlX1J6KEczJ3AAAAAFxXfpI158510331.jpg',
          name: '人间失格',
          author: '作者：太宰治',
          price: '13.5'
        }, {
            thumb: 'http://bookbk.img.ireader.com/group6/M00/37/30/CmQUN1X28IqEe2oiAAAAAJe2IEs953847983.jpg',
            name: '努力，才配有未来',
          author: '作者：小川叔',
          price: '11.9'
        }, {
            thumb: 'http://bookbk.img.ireader.com/group6/M00/99/26/CmQUNlea2muEZuI9AAAAAEzpcZY211399984.jpg',
          name: '傲慢与偏见',
          author: '作者：简·奥斯丁',
          price: '16.6'
        }]
      }],
      total:'3',
      page:'1',
      limit:'10'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '比邻图书',
    })
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#ffffff',
    })
  },

  navigateTo:function(e){
    let str = JSON.stringify(this.data.response.data[0].item[e.currentTarget.id])
    wx.navigateTo({
      url: '../item/item?item=' + str,
    })
    console.log(str)
  },

  scan:function(e){
    var that = this;
    wx.scanCode({
      success: (res) => {
        console.log(res.result);
        wx.showToast({
          title: res.result,
          icon:'success',
          duration:2000
        })
      }
    })
  },

  goSearch:function(e){
    wx.navigateTo({
      url: '../books/search/search',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})