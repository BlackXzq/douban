// pages/search/search.js
import { network } from '../../utils/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    results: [], 
    historys: []
  },

  searchInputChange: function(e) {
    var that = this;
    console.log(e.detail.value);
    var searchTxt = e.detail.value;
    network.getSearchResult({
      type: that.data.type,
      q:searchTxt,
      success: function(results) {
        console.log(results);
        that.setData({
          results
        })
      }
    });
  },
  //点击历史记录
  searchItemEvent: function(e) {
    var itemID = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?type=' + this.data.type + "&id=" + itemID
    })
  },
//点击搜索列表
  itemTapEvent: function(e) {
    var itemID = e.currentTarget.dataset.id;
    var title = e.currentTarget.dataset.title;
    var type = this.data.type;

    var historys = this.data.historys;

    if(!historys) {
      historys = [];
    } 
    
    historys.push({ id: itemID, title });
    wx.setStorage({
      key: 'Searched',
      data: historys,
      success: function() {
        console.log('保存成功');
      }
    })

    wx.navigateTo({
      url: '../detail/detail?type=' + this.data.type + "&id=" + itemID
    })
  },
  //清除历史记录
  clearHistoryEvent: function(e) {
    console.log("clearHistoryEvent");
    var that = this;
    wx.removeStorage({
      key: 'Searched',
      success: function(res) {
        that.setData({
          historys:[]
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData(options);
    var that = this;
    var historys = wx.getStorage({
      key: 'Searched',
      success: function(res) {
        that.setData({
          historys: res.data
        })
      }
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