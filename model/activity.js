/**
 * @作者 QianZW
 * @创建时间 2020/10/17 2:24 下午
 */
import {Http} from "../utils/http";

class Activity {
  static locationD = 'a-2'

  static async getHomeLocationD() {
    return await Http.request({
      url: `/activity/name/${Activity.locationD}`
    })
  }

}

export {
  Activity
}
