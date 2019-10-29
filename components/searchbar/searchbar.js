// components/searchbar/searchbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isnavigator: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    searchInputClick: function(e) {
      var value = e.detail.value;
      this.triggerEvent('searchInputChange', {"value": value}, {});
    },
    gotoSearchPage: function(e) {
      this.triggerEvent('gotoSearchPage');
    }
  }
})
