const globalUrls = {
  movieUrl: "https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items",
  tvsUrl: "https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items",
  varietyUrl: "https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items",
  movieDetailUrl: "https://m.douban.com/rexxar/api/v2/movie/",
  tvDetailUrl: "https://m.douban.com/rexxar/api/v2/tv/",
  showDetailUrl: "https://m.douban.com/rexxar/api/v2/tv/",
  movieTags: function(id) {
    return this.movieDetailUrl + id + "/tags?count=8";
  },
  tvTags: function (id) {
    return this.tvDetailUrl + id + "/tags?count=8";
  },
  showTags: function (id) {
    return this.tvTags(id);
  },
  movieComments: function(id, start=0, count=3) {
    return this.movieDetailUrl + id + "/interests?count=" + count + "&start=" + start;
  },
  tvComments: function (id, start = 0, count = 3) {
    return this.tvDetailUrl + id + "/interests?count=" + count + "&start=" + start;
  },
  showComments: function (id, start = 0, count = 3) {
    return this.tvComments(id, start, count);
  },
  searchUrl: function(q, type="movie") {
    return "https://m.douban.com/rexxar/api/v2/search?type=" + type + "&q=" + q;
  }
}

export {
  globalUrls
}