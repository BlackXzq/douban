
import { network } from '../../utils/network.js'
// pages/comment-list/comment-list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start: 1,
    count: 20,
    preEnable: false,
    nextEnable: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData(options);
    this.requestComments(1)
  },

  requestComments: function(start) {
    wx.showLoading({
      title: '评论列表获取中...',
    })
    var that = this;
    var type = that.data.type;
    var id = that.data.id;
    var count = that.data.count;
    console.log("------");
    console.log(count);
    console.log("------");
    network.getComments({
      type: type,
      id: id,
      start: start,
      count: count,
      success: function (comment) {
        wx.hideLoading()
        that.setData({
          totalComments: comment.total,
          comments: comment.interests,
          start: start
        });

        that.setData({
          preEnable: (start > 1),
          nextEnable: (start*count > comment.total)
        });

        wx.pageScrollTo({
          scrollTop: 0,
        });
      }
    });

  },
  //点击标题回到详情页面
  tapItemDetailClick: function() {
    wx.navigateBack({ })
  },

//  上一页
  tapPreBtnClick: function() {
    console.log("tapPreBtnClick");
    console.log(this.data.start);
    var start = this.data.start;
    if(start > 1) {
      this.requestComments(start-1);
    }
  },
// 下一页
  tapNextBtnClick: function() {
    console.log("tapNextBtnClick");
    console.log(this.data.start);
    var start = this.data.start;
    this.requestComments(start + 1);
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