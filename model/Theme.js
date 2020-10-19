import {Http} from "../utils/http";

class Theme {
  static locationA = 't-1'
  static locationE = 't-2'
  static locationF = 't-3'
  static locationH = 't-4'
  themes = []

  async getThemes() {
    const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}`;
    this.themes = await Http.request({
      url: `/theme/by/names`,
      data: {
        names
      }
    })

  }

  getHomeLocationA() {
    return this.themes.find(t => t.name === Theme.locationA)
  }

  getHomeLocationE() {
    return this.themes.find(t => t.name === Theme.locationE)
  }


  static getHomeLocationESpu() {
    return Theme.getThemeSpuByName(Theme.locationE)
  }
  //不保存状态就用static 不使用static就实例的需要使用new去生成
  static getThemeSpuByName(name) {
    return Http.request({
      url: `/theme/name/${name}/with_spu`
    })
  }
}

export {
  Theme
}
