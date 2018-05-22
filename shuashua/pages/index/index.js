//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    subjects: [],
    types: [{
      type: 1,
      type_desc: '单选题'
    }, {
      type: 2,
      type_desc: '多选题'
    }, {
      type: 3,
      type_desc: '名词解释'
    }, {
      type: 4,
      type_desc: '简答题'
    }, {
      type: 5,
      type_desc: '论述题'
    }, {
      type: 6,
      type_desc: '辨析题'
    }],
    indexSubject: 0,
    indexType: 0
  },
  onLoad: function () {
    wx.request({
      url: 'https://www.ecofe.me/restapi/flybomb/subject/list',
      method:'POST',
      data:{},
      header: {
        'content-type': 'application/json'
      },
      success: (res)=>{
        console.log(res.data)
        this.setData({
          subjects:res.data.value
        });
      }
    });
  },
  bindSubjectChange: function (value) {
    this.setData({
      indexSubject: value.detail.value
    });
  },
  bindTypeChange: function (value) {
    this.setData({
      indexType: value.detail.value
    });
  }
});
