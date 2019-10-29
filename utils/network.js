import { globalUrls } from 'global-urls.js'
import {sortType} from 'util.js'

const network = {
  //获取电影列表
  getMoiveList: function (params) {
    params.type = sortType.movie;
    this.getItemList(params)
  },
  //获取电视剧列表
  getTvList: function (params) {
    params.type = sortType.tv;
    this.getItemList(params)
  },
  // 获取综艺列表
  getVarietyList: function (params) {
    params.type = sortType.tvshow;
    this.getItemList(params)
  },
  //获取列表基础请求
  getItemList: function(params) {

    var url = ""
    var param = params.data ? params.data : { count: 100 }

    switch (params.type) {
      case sortType.tv:
        url = globalUrls.tvsUrl;
        break;
      case sortType.tvshow:
        url = globalUrls.varietyUrl;
        break;
      default:
        url = globalUrls.movieUrl;
        break;
    }

    wx.request({
      url: url,
      data: param,
      success: function (res) {
        var items = res.data.subject_collection_items;
        var itemCount = items.length;
        if (itemCount % 3 == 2) {
          items.push(null);
        }
        if (params && params.success) {
          params.success(items);
        }
      }
    })
  },
  //获取详情
  getDetail: function(params) {
    var type = params.type;
    var id = params.id;
    var url = ""
    switch (params.type) {
      case sortType.tv:
        url = globalUrls.tvDetailUrl + id;
        break;
      case sortType.tvshow:
        url = globalUrls.showDetailUrl + id;
        break;
      default:
        url = globalUrls.movieDetailUrl + id;
        break;
    }

    wx.request({
      url: url,
      success: function(res) {
        if(params.success) {
          params.success(res.data);
        }
      }
    })
  },
  //获取标签
  getTags: function (params) {
    var type = params.type;
    var id = params.id;
    var url = ""
    switch (params.type) {
      case sortType.tv:
        url = globalUrls.tvTags(id);
        break;
      case sortType.tvshow:
        url = globalUrls.showTags(id);
        break;
      default:
        url = globalUrls.movieTags(id);
        break;
    }

    wx.request({
      url: url,
      success: function (res) {
        if (params.success) {
          params.success(res.data.tags);
        }
      }
    })
  },
//获取评论
  getComments: function (params) {
    var type = params.type;
    var id = params.id;
    var start = params.start ? params.start : 0;
    var count = params.count ? params.count : 3;
    var url = ""
    console.log(type)
    console.log(id)
    switch (params.type) {
      case sortType.tv:
        url = globalUrls.tvComments(id, start, count);
        break;
      case sortType.tvshow:
        url = globalUrls.tvComments(id, start, count);
        break;
      default:
        url = globalUrls.movieComments(id, start, count);
        break;
    }

    wx.request({
      url: url,
      success: function (res) {
        if (params.success) {
          params.success(res.data);
        }
      }
    })
  },

  getSearchResult: function(params) {
    var type = params.type;
    var q = params.q;
    var url = globalUrls.searchUrl(q, type);
    wx.request({
      url: url,
      success: function(res) {
        if (params.success) {
          params.success(res.data.subjects);
        }
      }
    })
  }
}

export { network }