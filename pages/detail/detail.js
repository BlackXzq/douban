
import { network } from '../../utils/network.js'
// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{},
    tags:{},
    comments:{},
    totalComments: 0 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options.type + " : " + options.id);
    that.setData(options);

    network.getDetail({
      type: options.type,
      id: options.id,
      success: function(detail) {
        var genres = detail.genres.join(' / ');
        detail.genres = genres;
        that.setData({
          detail
        });
      }
    });

    network.getTags({
      type: options.type,
      id: options.id,
      success: function (tags) {
        that.setData({
          tags
        });
      }
    });

    network.getComments({
      type: options.type,
      id: options.id,
      success: function (comment) {
        that.setData({
          totalComments: comment.total,
          comments: comment.interests
        });
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
    wx.pageScrollTo({
      scrollTop: 0,
    });
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