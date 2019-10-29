
import { network } from '../../utils/network.js'
import { sortType } from '../../utils/util.js'

// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    console.log(options.type);

    var navTitle = ""
    wx.showLoading({
      title: '正在加载中...',
    });
    switch (options.type) {
      case sortType.tv:
        navTitle = "电视剧";
        network.getTvList({
          success: function (dataList) {
            that.setData({
              dataList
            });
            wx.hideLoading();
          }
        });
        break;
      case sortType.tvshow:
        navTitle = "综艺";
        network.getVarietyList({
          success: function (dataList) {
            that.setData({
              dataList
            });
            wx.hideLoading();
          }
        });
        break;
      default:
        navTitle = "电影";
        network.getMoiveList({
          success: function (dataList) {
            that.setData({
              dataList
            });
            wx.hideLoading();
          }
        });
        break;
    }

    wx.setNavigationBarTitle({
      title: navTitle
    });

    that.setData({
      type: options.type
    });
  },

  gotoSearchPage: function () {
    wx.navigateTo({
      url: '../search/search?type='+this.data.type
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