
import {network} from '../../utils/network.js'
import {sortType} from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList:[],
    tvsList:[],
    tvVariety:[],
    moviePath: "../list/list",
    tvPath: "../list/list",
    tvshowPath: "../list/list"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    that.setData({
      moviePath: "../list/list?type=" + sortType.movie,
      tvPath: "../list/list?type=" + sortType.tv,
      tvshowPath: "../list/list?type=" + sortType.tvshow
    });
   
    network.getMoiveList({
      data: {
        count: 7
      },
      success: function(movieList) {
        that.setData({
          movieList
        });
      }
    });

    network.getTvList({
      data: {
        count: 7
      },
      success: function (tvsList) {
        that.setData({
          tvsList
        });
      }
    });

    network.getVarietyList({
      data: {
        count: 7
      },
      success: function (tvVariety) {
        that.setData({
          tvVariety
        });
      }
    });
  },

  gotoSearchPage: function() {
    wx.navigateTo({
      url: '../search/search?type=movie'
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
