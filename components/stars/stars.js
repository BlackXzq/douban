// components/stars/stars.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rate: {
      type: Number,
      value: 0
    },
    fontColor: {
      type: String,
      value: "#ccc"
    },
    starSize: {
      type: Number,
      value: 20
    },
    fontSize: {
      type: Number,
      value: 20
    },
    showPoint: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    lights:[],
    halfs:[],
    grays:[],
    rateText: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updataRate: function() {
      var that = this;
      var tempRate = that.properties.rate;
      var intRate = parseInt(tempRate);
      var lightCount = parseInt(intRate / 2);
      var halfCount = intRate % 2;
      var grayCount = 5 - lightCount - halfCount;
      var lightArr = [];
      var halfArr = [];
      var grayArr = [];
      for (var index = 0; index < lightCount; index++) {
        lightArr.push(index);
      }

      for (var index = 0; index < halfCount; index++) {
        halfArr.push(index);
      }

      for (var index = 0; index < grayCount; index++) {
        grayArr.push(index);
      }

      var rateText = tempRate && tempRate > 0 ? tempRate.toFixed(1) : "未评分";

      that.setData({
        lights: lightArr,
        halfs: halfArr,
        grays: grayArr,
        rateText: rateText
      });
    }
  },

  lifetimes: {
    attached: function() {
      this.updataRate()
    }
  },
  observers: {
    'rate': function (rate) {
      // 在 rate被设置时，执行这个函数
      this.updataRate()
    }
  }
})
