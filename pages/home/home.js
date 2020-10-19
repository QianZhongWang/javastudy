// pages/home/home.js

import {Theme} from "../../model/Theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {Activity} from "../../model/activity";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    themeA: null,
    themeE: null,

    bannerB: null,
    grid: [],
    activityD: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    await this.initAllData()
  },
  //初始化代码
  async initAllData() {
    const bannerB = await Banner.getHomeLocationB()
    const grid = await Category.getHomeLocationC()
    const activityD = await Activity.getHomeLocationD()

    const theme = new Theme()
    await theme.getThemes()
    const themeA = await theme.getHomeLocationA()
    const themeE = await theme.getHomeLocationE()
    if (themeE.online) {
      const data = await Theme.getHomeLocationESpu()
      if (data) {
        data.spu_list.slice(0, 8)
      }
    }

    this.setData({
      themeA,
      themeE,

      bannerB,
      grid,
      activityD
    })

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
